import { contato, linkWhatsapp, MSG_PADRAO } from "@/lib/site";
import FormularioContato from "./FormularioContato";
import IconeWhatsapp from "./IconeWhatsapp";

const PASSOS = [
  "Diagnóstico sem custo e sem compromisso",
  "Escopo e preço com origem, a partir do custo base",
  "Você fala com o dono, não com vendedor",
];

export default function Contato() {
  return (
    <section id="contato" className="campo-azul relative overflow-hidden py-20 md:py-32">
      <div className="wrap relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="display text-[clamp(2.75rem,6vw,5.75rem)]">
            Comece pelo diagnóstico, não pela proposta
          </h2>
          <p className="mt-6 max-w-xl text-[1.125rem] leading-relaxed text-white/85">
            A primeira conversa é sobre a sua operação: onde o cliente se perde,
            qual planilha decide o mês e o que hoje só uma pessoa sabe fazer. A
            proposta vem depois, com a conta aberta.
          </p>
          <ul className="mt-8 space-y-3">
            {PASSOS.map((t) => (
              <li key={t} className="flex items-center gap-3 text-[1rem]">
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-white/20">
                  <svg width="13" height="13" viewBox="0 0 18 18" fill="none" aria-hidden>
                    <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {contato.whatsapp && (
              <a href={linkWhatsapp(MSG_PADRAO)} target="_blank" rel="noopener" className="btn btn-branco self-start">
                <IconeWhatsapp /> Falar no WhatsApp
              </a>
            )}
            <a href={`mailto:${contato.email}`} className="text-[0.9375rem] font-medium text-white/85 underline-offset-4 hover:underline">
              {contato.email}
            </a>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-white p-6 text-[var(--tinta)] md:p-9">
          <FormularioContato />
        </div>
      </div>
    </section>
  );
}
