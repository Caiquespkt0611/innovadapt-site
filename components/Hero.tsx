import Link from "next/link";
import IconeWhatsapp from "./IconeWhatsapp";
import PalcoConversa from "./PalcoConversa";
import { MSG_PADRAO, linkWhatsapp } from "@/lib/site";

const GARANTIAS = ["Diagnóstico sem custo", "Você fala com o dono", "No ar em fases, não em PDF"];

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <div className="min-w-0 lg:pt-10">
          <h1 className="text-[clamp(2.5rem,5.6vw,4.75rem)] font-bold leading-[0.98] tracking-[-0.035em] text-[#0b1630] [text-wrap:balance]">
            Tecnologia que se adapta ao seu negócio.
          </h1>
          <p className="apoio mt-7 !text-[1.1875rem]">
            Sistemas sob medida com inteligência artificial: atendimento no
            WhatsApp, portal de operações e fiscal, DRE gerencial, consolidação de
            rede e o que mais a sua operação pedir. Construídos por quem escreve o
            código, no ar em fases.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contato" className="btn btn-azul">
              Agendar demonstração
            </Link>
            <a href={linkWhatsapp(MSG_PADRAO)} target="_blank" rel="noopener" className="btn btn-borda">
              <IconeWhatsapp /> Falar no WhatsApp
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.875rem] text-[#3d4b66]">
            {GARANTIAS.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none" className="flex-none text-[#12b886]" aria-hidden>
                  <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="entrada-produto min-w-0">
          <PalcoConversa />
        </div>
      </div>
    </section>
  );
}
