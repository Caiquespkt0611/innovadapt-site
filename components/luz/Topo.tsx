import Link from "next/link";
import FundoLuz from "./FundoLuz";
import PainelAoVivo from "../telas/PainelAoVivo";
import ConversaMel from "../telas/ConversaMel";
import IconeWhatsapp from "../IconeWhatsapp";
import Inclina from "./Inclina";
import { MSG_PADRAO, linkWhatsapp } from "@/lib/site";

/**
 * O topo escolhido em 29/10/2026: a frase do LinkedIn em duas linhas, o
 * painel do CRM subindo em perspectiva e a Mel conversando na frente.
 * O título cabe em duas linhas em toda largura: 8,3vw foi medido no
 * celular de 390 px (a linha mais longa ocupa 346 de 350 px).
 */
// Cada palavra entra separada (--p é a ordem), a 2ª linha em degradê vivo.
function Linha({ texto, inicio, degrade = false }: { texto: string; inicio: number; degrade?: boolean }) {
  return (
    <span className="block whitespace-nowrap pb-[0.08em]">
      {texto.split(" ").map((w, i) => (
        <span key={i}>
          {i > 0 && " "}
          <span className={`palavra ${degrade ? "degrade degrade-vivo" : ""}`} style={{ "--p": inicio + i } as React.CSSProperties}>
            {w}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Topo() {
  return (
    <section id="topo" className="relative overflow-hidden bg-[var(--ceu)] pb-20 pt-28 md:pb-28 md:pt-40">
      <FundoLuz />
      <div className="relative z-10 px-5 text-center">
        <h1 className="mx-auto text-[min(8.3vw,7rem)] font-bold leading-[0.95] tracking-[-0.05em] text-[var(--tinta)]">
          <span className="sr-only">Tecnologia e IA que se adaptam ao seu negócio.</span>
          <span aria-hidden>
            <Linha texto="Tecnologia e IA que se" inicio={0} />
            <Linha texto="adaptam ao seu negócio." inicio={5} degrade />
          </span>
        </h1>
        <p style={{ "--d": "0.75s" } as React.CSSProperties} className="sobe-depois p-secao mx-auto mt-6 max-w-[40rem] md:mt-8 md:!text-[1.3125rem]">
          Sistemas sob medida para a sua operação, do atendimento ao fechamento
          do mês. Feitos por quem escreve o código e colocados no ar em fases.
        </p>
        <div style={{ "--d": "0.9s" } as React.CSSProperties} className="sobe-depois mt-8 flex flex-col justify-center gap-3 sm:flex-row md:mt-10">
          <Link href="/#contato" className="btn btn-azul">
            Agendar demonstração
          </Link>
          <a href={linkWhatsapp(MSG_PADRAO)} target="_blank" rel="noopener" className="btn btn-borda">
            <span className="text-[#12b886]"><IconeWhatsapp /></span> Falar no WhatsApp
          </a>
        </div>

        <div className="cena-3d relative mx-auto mt-14 max-w-[1120px] md:mt-20">
          <div className="cena-giro">
            <Inclina>
              <PainelAoVivo className="rounded-[18px] shadow-[0_80px_140px_-40px_rgba(3,101,254,0.45)]" />
            </Inclina>
          </div>
          <div className="cena-flutua absolute -bottom-12 -left-3 hidden w-[230px] sm:block lg:-left-16">
            <ConversaMel animada className="!w-[230px]" />
          </div>
          <div className="cena-flutua-2 cartao-luz absolute -right-3 top-[42%] hidden px-5 py-4 text-left md:block lg:-right-12">
            <p className="text-[0.8125rem] text-[var(--tinta-2)]">Lead respondido em</p>
            <p className="text-[1.75rem] font-bold leading-tight tracking-[-0.03em] text-[var(--tinta)]">38 s</p>
          </div>
        </div>
      </div>
    </section>
  );
}
