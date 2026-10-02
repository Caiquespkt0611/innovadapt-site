import type { Metadata } from "next";
import Marca from "@/components/Marca";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Exclusão de dados | InnovAdapt",
  description:
    "Como pedir a exclusão dos dados recebidos pelo CRM da InnovAdapt pelo WhatsApp, Instagram ou Facebook.",
  alternates: { canonical: "/exclusao-de-dados" },
};

const ATUALIZADA_EM = "27 de setembro de 2026";

const encarregado = {
  nome: "Roger Sampaio",
  email: "roger.sampaio@innovadapt.com.br",
};

export default function ExclusaoDeDados() {
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
            Exclusão de dados
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#3d4b66]">
            Como pedir a exclusão dos dados que o CRM da InnovAdapt recebeu pelo
            WhatsApp, pelo Instagram ou pelo Facebook. O tratamento segue a nossa{" "}
            <Link href="/privacidade" className="text-[#2647f0]">Política de Privacidade</Link>.
          </p>

          <div className="mt-12 space-y-12 text-[0.9375rem] leading-relaxed text-[#3d4b66] [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#0b1630] [&_p]:mt-4 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_a]:text-[#2647f0] [&_a]:underline-offset-4 hover:[&_a]:underline">
            <section>
              <h2>1. Se você é cliente de uma loja que usa o CRM</h2>
              <p>
                Mande um e-mail para{" "}
                <a href={`mailto:${encarregado.email}`}>{encarregado.email}</a> com o
                assunto &quot;Exclusão de dados&quot;, dizendo o seu nome, o telefone ou o
                usuário do Instagram com que falou com a loja e o nome da loja.
              </p>
              <p>
                Confirmamos o pedido com a loja, que é a controladora dos dados, e
                apagamos as conversas e o cadastro em até 15 dias. Você recebe a
                confirmação no mesmo e-mail.
              </p>
            </section>

            <section>
              <h2>2. Se você é uma loja e conectou o Instagram ou o Facebook</h2>
              <ol>
                <li>
                  No CRM, abra Configurações e clique em Desconectar Instagram. O token
                  de acesso é apagado na hora.
                </li>
                <li>
                  No Instagram, abra Configurações, Aplicativos e sites, e remova o
                  InnovAdapt CRM. No Facebook, o caminho é Configurações, Integrações
                  comerciais.
                </li>
                <li>
                  Para apagar também as conversas e os contatos guardados, escreva ao
                  encarregado pelo e-mail acima. A exclusão é feita em até 15 dias.
                </li>
              </ol>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
