import { contato, linkWhatsapp, MSG_PADRAO } from "@/lib/site";
import FormularioContato, { ASSUNTOS } from "../FormularioContato";
import IconeWhatsapp from "../IconeWhatsapp";

const PASSOS = [
  "Diagnóstico sem custo e sem compromisso",
  "Escopo e preço com origem, a partir do custo base",
  "Você fala com o dono, não com vendedor",
];

/** O fechamento: um bloco navy com os brilhos da marca e o formulário em cartão branco. */
export default function Contato() {
  return (
    <section id="contato" aria-labelledby="titulo-contato" className="bg-white px-3 py-16 md:px-6 md:py-24">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[32px] bg-[var(--navy)] px-5 py-14 text-white md:px-12 md:py-20">
        <span aria-hidden className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#0365FE] opacity-45 blur-[100px]" />
        <span aria-hidden className="absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-[#8B3AE2] opacity-40 blur-[110px]" />
        <span aria-hidden className="absolute right-1/3 top-10 h-60 w-60 rounded-full bg-[#04CDFB] opacity-20 blur-[90px]" />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="revela">
            <h2 id="titulo-contato" className="text-[clamp(2.25rem,4.6vw,4rem)] font-bold leading-[1] tracking-[-0.045em]">
              Comece pelo diagnóstico, <span className="degrade degrade-vivo">não pela proposta.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[1.125rem] leading-relaxed text-[#c4d1e8]">
              A primeira conversa é sobre a sua operação: onde o cliente se perde,
              qual planilha decide o mês e o que hoje só uma pessoa sabe fazer. A
              proposta vem depois, com a conta aberta.
            </p>
            <ul className="mt-8 grid gap-3">
              {PASSOS.map((t) => (
                <li key={t} className="flex items-center gap-3 text-[1rem]">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-white/15">
                    <svg width="13" height="13" viewBox="0 0 18 18" fill="none" aria-hidden>
                      <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={linkWhatsapp(MSG_PADRAO)} target="_blank" rel="noopener" className="btn self-start bg-white text-[var(--tinta)] hover:bg-[#e8f0ff]">
                <span className="text-[#12b886]"><IconeWhatsapp /></span> Falar no WhatsApp
              </a>
              <a href={`mailto:${contato.email}`} className="text-[0.9375rem] font-medium text-[#c4d1e8] [overflow-wrap:anywhere] hover:text-white">
                {contato.email}
              </a>
            </div>
          </div>

          <div style={{ "--i": 2 } as React.CSSProperties} className="revela rounded-[24px] bg-white p-5 text-[var(--tinta)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] md:p-8">
            <h3 className="mb-5 text-[1.25rem] font-bold tracking-[-0.02em]">Pedir o diagnóstico</h3>
            <FormularioContato assuntoInicial={ASSUNTOS[ASSUNTOS.length - 1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
