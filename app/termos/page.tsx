import type { Metadata } from "next";
import Marca from "@/components/Marca";
import Link from "next/link";
import Footer from "@/components/Footer";
import { contato } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Serviço | InnovAdapt",
  description:
    "Condições de uso dos sistemas que a InnovAdapt desenvolve e opera para seus clientes, incluindo os canais de mensagem integrados.",
  alternates: { canonical: "/termos" },
};

const ATUALIZADA_EM = "17 de setembro de 2026";

/**
 * Termos de serviço. Existe por dois motivos: contrato precisa de uma face
 * pública, e a análise de aplicativo da Meta exige um endereço de termos que
 * NÃO seja o mesmo da política de privacidade (até 17/09/2026 os dois campos
 * do app apontavam para /privacidade, o que costuma voltar como ajuste).
 */
export default function Termos() {
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
            Atualizados em {ATUALIZADA_EM}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1630] md:text-4xl">
            Termos de Serviço
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#3d4b66]">
            Estes termos regem o uso dos sistemas desenvolvidos e operados pela{" "}
            {contato.razaoSocial} (InnovAdapt), CNPJ{" "}
            <span className="mono">{contato.cnpj}</span>, entre eles o CRM com agente
            de inteligência artificial e o portal de operações. Como tratamos dados
            pessoais é assunto da{" "}
            <Link href="/privacidade" className="text-[#2647f0] underline-offset-4 hover:underline">
              Política de Privacidade
            </Link>
            , que é um documento separado e complementar a este.
          </p>

          <div className="mt-12 space-y-12 text-[0.9375rem] leading-relaxed text-[#3d4b66] [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#0b1630] [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[#0b1630] [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:text-[#2647f0] [&_a]:underline-offset-4 hover:[&_a]:underline">
            <section>
              <h2>1. Quem contrata e quem usa</h2>
              <p>
                Os sistemas da InnovAdapt são contratados por empresas, em geral
                concessionárias e lojas, e usados pelos colaboradores que essa empresa
                autorizar. Quem contrata é chamado aqui de{" "}
                <strong className="text-[#0b1630]">cliente</strong>; quem entra com login
                é chamado de <strong className="text-[#0b1630]">usuário</strong>.
              </p>
              <p>
                Não oferecemos cadastro aberto ao público: cada acesso nasce de um
                contrato e é criado pelo administrador do cliente. O uso do sistema
                significa concordar com estes termos.
              </p>
            </section>

            <section>
              <h2>2. O que o serviço faz</h2>
              <p>
                A InnovAdapt licencia o uso de software em nuvem, com operação,
                suporte e evolução contratados. Conforme o que cada cliente contratar,
                o sistema pode:
              </p>
              <ul>
                <li>
                  reunir numa caixa de entrada única as mensagens que chegam pelos
                  canais que o cliente conectar, como WhatsApp e Instagram Direct;
                </li>
                <li>
                  responder automaticamente, por meio de um agente de inteligência
                  artificial que fala em nome do cliente, e transferir a conversa
                  para uma pessoa quando for o caso;
                </li>
                <li>
                  registrar leads, distribuir atendimentos entre vendedores, organizar
                  o funil, agendar serviços e emitir relatórios de desempenho;
                </li>
                <li>
                  importar dados que o próprio cliente fornecer, como carteira de
                  clientes e relatórios do seu sistema de gestão.
                </li>
              </ul>
            </section>

            <section>
              <h2>3. Canais de mensagem e plataformas de terceiros</h2>
              <p>
                Para funcionar, o sistema se conecta a plataformas de terceiros que o
                cliente já usa. Essa conexão é sempre autorizada pelo cliente, com as
                credenciais das contas dele, e pode ser revogada por ele a qualquer
                momento.
              </p>
              <h3>Meta (WhatsApp, Instagram e Facebook)</h3>
              <p>
                Quando o cliente conecta uma conta profissional do Instagram, uma
                Página do Facebook ou um número de WhatsApp, o sistema passa a receber
                as mensagens enviadas àquela conta e a responder por ela, dentro da
                mesma conversa. Valem, além destes termos, as políticas da própria
                Meta, e em especial:
              </p>
              <ul>
                <li>
                  só recebemos e enviamos mensagens de quem escreveu primeiro para o
                  cliente. O sistema não dispara mensagem não solicitada para quem
                  nunca conversou com a empresa;
                </li>
                <li>
                  a resposta respeita a janela de tempo definida pela plataforma;
                  passada essa janela, o sistema informa o atendente em vez de tentar
                  enviar;
                </li>
                <li>
                  quem pede para não receber mais mensagens entra numa lista de
                  bloqueio e o envio automático para aquele contato é interrompido;
                </li>
                <li>
                  os dados obtidos por essas integrações são usados apenas para
                  prestar o atendimento dentro do sistema do cliente. Não são
                  vendidos, não são usados para publicidade e não são compartilhados
                  com terceiros fora do que a Política de Privacidade descreve.
                </li>
              </ul>
              <p>
                A InnovAdapt não é afiliada à Meta. A disponibilidade dessas
                integrações depende das plataformas, e mudanças feitas por elas podem
                afetar o funcionamento sem que isso seja falha do sistema.
              </p>
              <h3>Inteligência artificial</h3>
              <p>
                As respostas do agente são geradas por modelo de linguagem de
                terceiro, a partir das instruções e do conteúdo que o cliente
                configura. O cliente é responsável pelo que instrui o agente a
                afirmar, em especial sobre preço, disponibilidade e condições
                comerciais. A InnovAdapt não garante que toda resposta gerada seja
                exata, e o sistema oferece a qualquer momento a passagem do
                atendimento para uma pessoa.
              </p>
            </section>

            <section>
              <h2>4. Uso aceitável</h2>
              <p>Ao usar o sistema, o cliente e seus usuários se comprometem a não:</p>
              <ul>
                <li>
                  enviar mensagem em massa não solicitada, corrente, spam ou qualquer
                  comunicação que viole as regras dos canais conectados;
                </li>
                <li>
                  usar o sistema para conteúdo ilegal, enganoso, discriminatório ou
                  que viole direitos de terceiros;
                </li>
                <li>
                  compartilhar login, burlar os perfis de acesso ou tentar acessar
                  dados de outro cliente;
                </li>
                <li>
                  extrair dados em massa, fazer engenharia reversa, copiar ou
                  redistribuir o software;
                </li>
                <li>
                  carregar dados pessoais sem base legal para tratá-los, ou usar o
                  sistema fora do que a legislação de proteção de dados permite.
                </li>
              </ul>
              <p>
                Descumprimento pode levar à suspensão imediata do acesso, sem prejuízo
                das obrigações contratuais.
              </p>
            </section>

            <section>
              <h2>5. Contas, senhas e responsabilidade do cliente</h2>
              <p>
                Cada usuário responde pelo que faz com o seu login. O administrador do
                cliente é quem cria, altera e remove acessos, e deve retirar o acesso
                de quem sai da empresa. As ações relevantes ficam registradas no
                sistema. Se houver suspeita de acesso indevido, o cliente deve nos
                avisar imediatamente.
              </p>
            </section>

            <section>
              <h2>6. Propriedade</h2>
              <p>
                O software, o código, a arquitetura, as telas e a documentação são e
                continuam sendo da InnovAdapt. O contrato concede licença de uso
                durante a sua vigência, e não transfere propriedade.
              </p>
              <p>
                Os dados do cliente e dos clientes dele continuam sendo do cliente. A
                InnovAdapt os trata como operadora, sob instrução, e os devolve ou
                elimina ao fim do contrato, conforme a Política de Privacidade.
              </p>
            </section>

            <section>
              <h2>7. Disponibilidade, suporte e mudanças</h2>
              <p>
                Trabalhamos para manter o serviço no ar de forma contínua, com paradas
                planejadas comunicadas com antecedência. Podem ocorrer indisponibilidades
                por falha de fornecedores de infraestrutura ou das plataformas
                integradas. Níveis de serviço, prazos de atendimento e canais de
                suporte são os definidos no contrato de cada cliente.
              </p>
              <p>
                O sistema evolui: funcionalidades podem ser acrescentadas, alteradas ou
                descontinuadas. Mudança que afete de forma relevante o uso é comunicada
                ao cliente com antecedência razoável.
              </p>
            </section>

            <section>
              <h2>8. Valores e vigência</h2>
              <p>
                Preço, forma de pagamento, prazo, reajuste e condições de rescisão são
                os do contrato assinado com cada cliente. Estes termos não substituem o
                contrato: onde houver conflito, prevalece o contrato.
              </p>
            </section>

            <section>
              <h2>9. Limitação de responsabilidade</h2>
              <p>
                A InnovAdapt responde pelos danos diretos comprovadamente causados por
                falha sua, nos limites previstos no contrato. Não responde por lucros
                cessantes, por decisões comerciais tomadas pelo cliente com base em
                informação do sistema, nem por indisponibilidade ou mudança de regra
                das plataformas de terceiros integradas.
              </p>
            </section>

            <section>
              <h2>10. Encerramento</h2>
              <p>
                Encerrado o contrato, os acessos são desativados e os dados do cliente
                são devolvidos ou eliminados conforme a instrução dele e os prazos da
                Política de Privacidade. O cliente pode, a qualquer momento, desconectar
                as contas das plataformas integradas, e o sistema deixa de receber e
                enviar mensagens por elas.
              </p>
            </section>

            <section>
              <h2>11. Alterações destes termos</h2>
              <p>
                Estes termos podem ser atualizados. A data no topo indica a versão em
                vigor, e mudanças relevantes são comunicadas aos clientes por e-mail.
              </p>
            </section>

            <section>
              <h2>12. Lei aplicável e contato</h2>
              <p>
                Aplica-se a lei brasileira, e fica eleito o foro da comarca de
                Guarulhos, São Paulo, para as questões que não forem resolvidas
                administrativamente.
              </p>
              <p>
                Dúvidas sobre estes termos:{" "}
                <a href={`mailto:${contato.email}`}>{contato.email}</a>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
