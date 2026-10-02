import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

/**
 * Recebe o formulário do site e entrega o lead no CRM da InnovAdapt, na unidade
 * "Site InnovAdapt" do tenant innovadapt, pela entrada pública de leads
 * (POST /entrada/leads, origem "site").
 *
 * A chave da unidade NÃO mora no repositório: ele é público. Vem da variável
 * de ambiente ou do arquivo ~/.site-innovadapt.json no servidor da Hostinger,
 * gravado por scripts/ligar-formulario-crm.sh. Sem chave, a rota responde 503
 * e o formulário oferece o WhatsApp, em vez de fingir que recebeu.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Config = { crmUrl: string; token: string };

function lerConfig(): Config | null {
  if (process.env.CRM_ENTRADA_TOKEN) {
    return {
      crmUrl: process.env.CRM_URL || "https://api.crm.innovadapt.com.br",
      token: process.env.CRM_ENTRADA_TOKEN,
    };
  }
  // Na Hostinger o processo roda pelo Passenger e a "home" que o Node enxerga
  // não é a do usuário. A pasta do app fica em /home/<usuário>/domains/..., então
  // a home real sai do próprio caminho de instalação.
  const homes = new Set<string>();
  const doCaminho = process.cwd().split("/domains/")[0];
  if (doCaminho && doCaminho !== process.cwd()) homes.add(doCaminho);
  if (process.env.HOME) homes.add(process.env.HOME);
  homes.add(homedir());
  for (const home of homes) {
    try {
      const bruto = JSON.parse(readFileSync(join(home, ".site-innovadapt.json"), "utf8"));
      if (typeof bruto.token === "string" && bruto.token) {
        return { crmUrl: bruto.crmUrl || "https://api.crm.innovadapt.com.br", token: bruto.token };
      }
    } catch {
      // sem arquivo nesta pasta: tenta a próxima
    }
  }
  return null;
}

// Freio simples contra robô: 5 envios por IP a cada 10 minutos. Vive na memória
// do processo, o que basta para um formulário de site.
const JANELA = 10 * 60 * 1000;
const envios = new Map<string, number[]>();
function passou(ip: string) {
  const agora = Date.now();
  const recentes = (envios.get(ip) ?? []).filter((t) => agora - t < JANELA);
  if (recentes.length >= 5) return false;
  recentes.push(agora);
  envios.set(ip, recentes);
  if (envios.size > 5000) envios.clear();
  return true;
}

const texto = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let corpo: Record<string, unknown>;
  try {
    corpo = await req.json();
  } catch {
    return Response.json({ erro: "Envio inválido." }, { status: 400 });
  }

  // Campo escondido: gente não preenche, robô preenche. Responde ok e descarta.
  if (texto(corpo.site, 200)) return Response.json({ ok: true });

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "sem-ip";
  if (!passou(ip)) {
    return Response.json(
      { erro: "Muitos envios seguidos. Fale com a gente pelo WhatsApp." },
      { status: 429 },
    );
  }

  const nome = texto(corpo.nome, 120);
  const telefone = texto(corpo.telefone, 40);
  if (!nome) return Response.json({ erro: "Informe o seu nome." }, { status: 400 });
  if (telefone.replace(/\D/g, "").length < 10) {
    return Response.json({ erro: "Informe um telefone com DDD." }, { status: 400 });
  }

  const config = lerConfig();
  if (!config) {
    return Response.json(
      { erro: "O formulário está fora do ar agora. Fale com a gente pelo WhatsApp." },
      { status: 503 },
    );
  }

  // O CRM guarda até 400 caracteres de observação: o que qualifica vem primeiro.
  const observacao = [
    texto(corpo.empresa, 80) && `Empresa: ${texto(corpo.empresa, 80)}`,
    texto(corpo.lojas, 40) && `Lojas: ${texto(corpo.lojas, 40)}`,
    texto(corpo.assunto, 60) && `Interesse: ${texto(corpo.assunto, 60)}`,
    `Página: ${texto(corpo.pagina, 60) || "/"}`,
    texto(corpo.mensagem, 400),
  ]
    .filter(Boolean)
    .join(" · ")
    .slice(0, 400);

  try {
    const r = await fetch(`${config.crmUrl}/entrada/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Entrada-Token": config.token },
      body: JSON.stringify({
        nome,
        telefone,
        email: texto(corpo.email, 160) || undefined,
        origem: "site",
        observacao,
        abrirConversa: false,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!r.ok) {
      console.error("contato: CRM respondeu", r.status, await r.text().catch(() => ""));
      return Response.json(
        { erro: "Não conseguimos registrar agora. Fale com a gente pelo WhatsApp." },
        { status: 502 },
      );
    }
  } catch (e) {
    console.error("contato: CRM fora do ar", e);
    return Response.json(
      { erro: "Não conseguimos registrar agora. Fale com a gente pelo WhatsApp." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
