import type { Metadata } from "next";
import Marca from "@/components/Marca";
import Link from "next/link";
import Footer from "@/components/Footer";
import { contato } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | InnovAdapt",
  description:
    "Como a InnovAdapt trata dados pessoais no site e nos sistemas que opera para seus clientes, em conformidade com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

const ATUALIZADA_EM = "10 de setembro de 2026";

const encarregado = {
  nome: "Roger Sampaio",
  email: "roger.sampaio@innovadapt.com.br",
};

/**
 * Política de privacidade. Duas posições, ditas com todas as letras:
 * no site, a InnovAdapt é controladora; nos sistemas que opera para os
 * clientes (CRM, portal), é operadora e trata os dados sob instrução deles.
 */
export default function Privacidade() {
  return (
    <>
      <header className="border-b border-[#e1e7f1] bg-white">
        <div className="wrap flex items-center justify-between py-5">
          <Link href="/" className="flex items-center" aria-label="InnovAdapt, início">
            <Marca className="text-[1.0625rem]" />
          </Link>
          <Link href="/" className="text-sm text-[#3d4b66] transition-colors hover:text-[#0b1630]">
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="secao">
        <article className="wrap max-w-3xl">
          <p className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#6b7894]">
            Atualizada em {ATUALIZADA_EM}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1630] md:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#3d4b66]">
            Esta política explica como a {contato.razaoSocial} (InnovAdapt), CNPJ{" "}
            <span className="mono">{contato.cnpj}</span>, trata dados pessoais, nos
            termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018, LGPD).
            Ela cobre este site e os sistemas que a InnovAdapt desenvolve e opera
            para seus clientes.
          </p>

          <div className="mt-12 space-y-12 text-[0.9375rem] leading-relaxed text-[#3d4b66] [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#0b1630] [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[#0b1630] [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:text-[#2647f0] [&_a]:underline-offset-4 hover:[&_a]:underline">
            <section>
              <h2>1. Os dois papéis da InnovAdapt</h2>
              <p>
                <strong className="text-[#0b1630]">Neste site</strong>, a InnovAdapt é a
                controladora: decide quais dados coleta e para quê.
              </p>
              <p>
                <strong className="text-[#0b1630]">Nos sistemas que opera para clientes</strong>{" "}
                (CRM com agente de inteligência artificial, portal de operações e
                similares), a InnovAdapt é operadora. O cliente, em geral uma
                concessionária ou loja, é o controlador dos dados dos seus próprios
                clientes. A InnovAdapt trata esses dados apenas sob instrução do
                controlador, nos limites do contrato, e não os usa para fins
                próprios.
              </p>
            </section>

            <section>
              <h2>2. Encarregado pelo tratamento de dados</h2>
              <p>
                O encarregado (DPO) da InnovAdapt é{" "}
                <strong className="text-[#0b1630]">{encarregado.nome}</strong>. Pedidos,
                dúvidas e reclamações sobre dados pessoais podem ser enviados para{" "}
                <a href={`mailto:${encarregado.email}`}>{encarregado.email}</a>. Respondemos
                em até 15 dias.
              </p>
            </section>

            <section>
              <h2>3. Dados tratados neste site</h2>
              <p>
                O site não usa cookies de rastreamento nem ferramentas de analytics.
                Só coletamos o que você nos envia pelo formulário ou pelo botão de
                contato: nome, e-mail, telefone, empresa e a mensagem. Usamos esses
                dados para responder ao seu contato e, se houver interesse, conduzir
                uma proposta comercial. Base legal: execução de procedimentos
                preliminares a contrato e legítimo interesse.
              </p>
            </section>

            <section>
              <h2>4. Dados tratados nos sistemas dos clientes</h2>
              <p>
                Como operadora, a InnovAdapt trata, sob instrução de cada cliente, os
                dados necessários ao funcionamento do sistema contratado:
              </p>
              <ul>
                <li>
                  identificação e contato dos clientes finais do controlador: nome,
                  telefone, e-mail, cidade;
                </li>
                <li>
                  conversas mantidas pelos canais integrados ao sistema, como WhatsApp, Instagram Direct e Messenger,
                  e o histórico de atendimento;
                </li>
                <li>
                  dados relacionados ao veículo e ao atendimento: modelo de interesse,
                  placa ou chassi, datas de revisão, agendamentos, propostas;
                </li>
                <li>
                  dados dos usuários do sistema (colaboradores do cliente): nome,
                  e-mail, telefone, perfil de acesso e registro das ações realizadas;
                </li>
                <li>
                  dados recebidos de plataformas de anúncios e classificados que o
                  cliente integrar ao sistema, como nome, telefone e o anúncio de
                  interesse.
                </li>
              </ul>
              <p>
                A finalidade é a definida pelo controlador: atendimento comercial,
                pós-venda, agendamento e gestão do relacionamento com os seus
                clientes. A base legal é a que o controlador indicar, em regra a
                execução de contrato ou de procedimentos preliminares e o legítimo
                interesse, com respeito à opção do titular de não receber mais
                mensagens.
              </p>
              <h3>Agente de inteligência artificial</h3>
              <p>
                Parte do atendimento pode ser feita por um agente de inteligência
                artificial que responde em nome do cliente. As mensagens necessárias
                para gerar a resposta são enviadas ao provedor do modelo de linguagem
                no momento do atendimento. Os modelos não são treinados com os dados
                dos clientes. O titular pode, a qualquer momento, pedir para falar com
                uma pessoa.
              </p>
              <h3>Não recebemos mais mensagens</h3>
              <p>
                Quem responder pedindo para não receber mais mensagens é incluído em
                uma lista de bloqueio do sistema, e o envio automático para aquele
                número é interrompido imediatamente.
              </p>
            </section>

            <section>
              <h2>5. Com quem os dados são compartilhados</h2>
              <p>
                A InnovAdapt não vende dados pessoais. Para operar os sistemas, usa
                fornecedores de infraestrutura e serviços, que atuam como
                suboperadores e só recebem o necessário para a sua função:
              </p>
              <ul>
                <li>hospedagem da aplicação e do banco de dados (Railway e Vercel);</li>
                <li>
                  provedor do modelo de linguagem usado pelo agente de inteligência
                  artificial (Anthropic);
                </li>
                <li>
                  canais de comunicação integrados, como o WhatsApp, o Instagram e o Messenger (Meta), que
                  possuem termos próprios;
                </li>
                <li>serviço de e-mail transacional (Hostinger);</li>
                <li>
                  plataformas de anúncios e classificados que o cliente decidir
                  integrar, que enviam os leads ao sistema por meio das suas próprias
                  interfaces oficiais.
                </li>
              </ul>
              <p>
                Parte desses fornecedores mantém servidores fora do Brasil. A
                transferência internacional ocorre com base nas cláusulas contratuais
                desses fornecedores e nas garantias previstas na LGPD.
              </p>
            </section>

            <section>
              <h2>6. Segurança</h2>
              <p>
                Os sistemas da InnovAdapt nascem com isolamento de dados entre
                clientes, aplicado no próprio banco de dados; comunicação
                criptografada em trânsito; controle de acesso por perfil, com o
                mínimo necessário para cada função; registro das ações dos usuários;
                e revisão de segurança antes de cada entrada em produção. Nenhum
                sistema é infalível: em caso de incidente com risco aos titulares, o
                controlador e, quando cabível, a Autoridade Nacional de Proteção de
                Dados são comunicados.
              </p>
            </section>

            <section>
              <h2>7. Por quanto tempo os dados ficam guardados</h2>
              <p>
                Dados do formulário deste site: até 12 meses após o último contato,
                salvo se virarem uma relação contratual. Dados tratados nos sistemas
                dos clientes: pelo prazo definido pelo controlador e pelo contrato, e
                até 30 dias após o seu término, quando são devolvidos ou apagados
                conforme a instrução do cliente, ressalvadas obrigações legais de
                guarda.
              </p>
            </section>

            <section>
              <h2>8. Seus direitos</h2>
              <p>Nos termos do art. 18 da LGPD, você pode pedir:</p>
              <ul>
                <li>confirmação de que tratamos seus dados e acesso a eles;</li>
                <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>
                  anonimização, bloqueio ou eliminação de dados desnecessários ou
                  tratados em desconformidade;
                </li>
                <li>portabilidade, informação sobre compartilhamento e revogação do consentimento;</li>
                <li>oposição a tratamento feito com base em legítimo interesse.</li>
              </ul>
              <p>
                Para dados tratados neste site, escreva ao encarregado. Para dados
                tratados nos sistemas de um cliente da InnovAdapt, o pedido deve ser
                dirigido ao próprio cliente, que é o controlador; se nos chegar
                diretamente, encaminhamos ao controlador e o apoiamos no atendimento.
              </p>
              <p>
                Para pedir a exclusão de dados recebidos pelo WhatsApp, pelo Instagram
                ou pelo Facebook, veja as{" "}
                <Link href="/exclusao-de-dados">instruções de exclusão de dados</Link>.
              </p>
            </section>

            <section>
              <h2>9. Alterações</h2>
              <p>
                Esta política pode ser atualizada. A data no topo indica a versão em
                vigor. Mudanças relevantes são comunicadas aos clientes por e-mail.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
