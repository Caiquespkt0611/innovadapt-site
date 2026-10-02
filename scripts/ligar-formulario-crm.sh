#!/usr/bin/env bash
#
# Liga o formulário do site ao CRM da InnovAdapt. Idempotente: rodar de novo
# não cria nada a mais, só regrava a mesma chave.
#
#   1. No CRM (Fly, crm-innovadapt-api): cria a unidade "Site InnovAdapt" no
#      tenant innovadapt, se não existir, com distribuição manual, e gera a
#      chave de entrada de leads dela, se ainda não tiver.
#   2. Na Hostinger: grava a chave em ~/.site-innovadapt.json (permissão 600),
#      fora do repositório, que é público. A rota app/api/contato lê de lá.
#   3. Confere: manda um envio de teste para https://innovadapt.com.br/api/contato
#      com o telefone do Caique e mostra a resposta. O lead de teste aparece no
#      CRM, tenant InnovAdapt, unidade Site, origem "site". Nada é disparado:
#      abrirConversa vai false.
#
# Por que unidade nova e não a Suporte: a Suporte é o canal interno do Caique e
# do Roger com a Central (REPASSE_UNIDADES), não é funil comercial.
set -euo pipefail

APP_CRM="crm-innovadapt-api"
HOSTINGER="-p 65002 u633162582@82.25.67.96"

JS=$(cat <<'NODE'
const { PrismaClient } = require('@prisma/client')
const { randomBytes } = require('crypto')
;(async () => {
  const p = new PrismaClient()
  const t = await p.tenant.findUnique({ where: { slug: 'innovadapt' } })
  if (!t) throw new Error('tenant innovadapt não existe')
  let u = await p.unidade.findUnique({ where: { tenantId_slug: { tenantId: t.id, slug: 'site' } } })
  if (!u) u = await p.unidade.create({ data: { tenantId: t.id, slug: 'site', nome: 'Site InnovAdapt', distribuicaoModo: 'MANUAL' } })
  if (!u.tokenEntrada) {
    let token
    do { token = randomBytes(16).toString('hex') } while (await p.unidade.findFirst({ where: { tokenEntrada: token } }))
    u = await p.unidade.update({ where: { id: u.id }, data: { tokenEntrada: token } })
  }
  console.log('TOKEN=' + u.tokenEntrada)
  await p.$disconnect()
})().catch((e) => { console.error(e); process.exit(1) })
NODE
)
B64=$(printf '%s' "$JS" | base64 | tr -d '\n')

echo "1/3  CRM: unidade Site e chave de entrada"
SAIDA=$(fly ssh console -a "$APP_CRM" -C "sh -c 'cd /app/apps/api && echo $B64 | base64 -d > scripts/ligar-site.cjs && node scripts/ligar-site.cjs; rm -f scripts/ligar-site.cjs'")
TOKEN=$(printf '%s\n' "$SAIDA" | sed -n 's/^TOKEN=\([0-9a-f]\{32\}\).*/\1/p' | tail -1)
[ -n "$TOKEN" ] || { echo "   não veio a chave. Saída do CRM:"; printf '%s\n' "$SAIDA"; exit 1; }
echo "   ok, chave ${TOKEN:0:6}..."

echo "2/3  Hostinger: grava a chave fora do repositório"
ssh $HOSTINGER -o BatchMode=yes "umask 077 && printf '{\"crmUrl\":\"https://api.crm.innovadapt.com.br\",\"token\":\"%s\"}\n' '$TOKEN' > ~/.site-innovadapt.json && ls -l ~/.site-innovadapt.json"

echo "3/3  teste no ar"
curl -s -X POST https://innovadapt.com.br/api/contato \
  -H 'Content-Type: application/json' \
  -d '{"nome":"Teste do site (pode apagar)","telefone":"5511981562536","empresa":"InnovAdapt","lojas":"1 loja","assunto":"Software sob medida","mensagem":"Envio de teste do script ligar-formulario-crm.sh","pagina":"/script"}'
echo
