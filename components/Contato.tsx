import { contato, linkWhatsapp, MSG_PADRAO } from "@/lib/site";
import FormularioContato from "./FormularioContato";
import IconeWhatsapp from "./IconeWhatsapp";

export default function Contato() {
  return (
    <section id="contato" className="secao fio-topo">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-[#0b1424]">
          <div className="brilho !top-[-24rem] opacity-80" aria-hidden />

          <div className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:p-16">
            <div>
              <p className="sobrancelha">Contato</p>
              <h2 className="titulo-secao mt-6">
                Comece pelo diagnóstico,
                <br />
                não pela proposta
              </h2>
              <p className="lead mt-6">
                A primeira conversa é sobre a sua operação: onde o lead se perde,
                qual planilha decide o mês e o que hoje só uma pessoa sabe fazer.
                A proposta vem depois, e vem com a conta aberta.
              </p>

              <ul className="mt-9 space-y-4">
                {[
                  "Diagnóstico sem custo e sem compromisso",
                  "Escopo e preço com origem, a partir do custo base",
                  "Você fala com o dono, não com vendedor",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[#e9eefa]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="mt-px flex-none text-[#22b8f0]"
                      aria-hidden
                    >
                      <path
                        d="M3.5 9.5l3.5 3.5 7.5-8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 border-t border-[rgba(120,170,255,0.15)] pt-6 sm:flex-row sm:items-center sm:gap-5">
                {contato.whatsapp && (
                  <a
                    href={linkWhatsapp(MSG_PADRAO)}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-secundario self-start"
                  >
                    <IconeWhatsapp /> Falar no WhatsApp
                  </a>
                )}
                <a
                  href={`mailto:${contato.email}`}
                  className="text-sm font-medium text-[#93a6c4] transition-colors hover:text-white"
                >
                  {contato.email}
                </a>
              </div>
            </div>

            <div className="relative">
              <FormularioContato />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
