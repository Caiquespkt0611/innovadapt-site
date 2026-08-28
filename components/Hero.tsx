import { provas } from "@/lib/site";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28">
      <div className="aurora" aria-hidden />
      <div className="malha" aria-hidden />

      <div className="wrap relative">
        <p className="sobrancelha">
          <b>Varejo automotivo</b>
          <span className="text-[#656c7d]">Software sob medida</span>
        </p>

        <h1 className="mt-8 max-w-[16ch] text-[clamp(2.35rem,7vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
          Sua operação não precisa de mais um{" "}
          <span className="enfase">dashboard</span>.
        </h1>

        <p className="lead mt-8">
          Painel mostra o que já aconteceu. Nós construímos o sistema que faz
          acontecer: o agente de IA que atende o lead no WhatsApp, o portal que
          fecha o pedido com o imposto certo e o DRE que fecha o mês por
          departamento.{" "}
          <span className="destaque">
            Sob medida, e falando direto com quem escreve o código.
          </span>
        </p>

        <div className="mt-11 flex flex-col gap-3 sm:flex-row">
          <a href="#contato" className="btn btn-primario">
            Agendar diagnóstico
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#cases" className="btn btn-secundario">
            Ver o que já está no ar
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 border-t border-white/[0.08] md:mt-24 md:grid-cols-4">
          {provas.map((p, i) => (
            <div
              key={p.label}
              className={`border-b border-white/[0.08] py-7 pr-6 md:border-b-0 md:py-9 ${
                i % 2 === 1 ? "border-l border-white/[0.08] pl-6" : ""
              } ${i > 0 ? "md:border-l md:border-white/[0.08] md:pl-7" : ""}`}
            >
              <dt className="mono flex items-baseline gap-1.5 text-[2rem] font-medium leading-none tracking-tight text-white md:text-[2.5rem]">
                {p.valor}
                <span className="text-xs font-normal text-[#22b8f0] md:text-sm">
                  {p.unidade}
                </span>
              </dt>
              <dd className="mt-3 text-[0.8125rem] leading-snug text-[#656c7d]">
                {p.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
