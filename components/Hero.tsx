import { provas } from "@/lib/site";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="brilho-topo" aria-hidden />
      <div className="malha" aria-hidden />

      <div className="wrap relative">
        <p className="sobrancelha">Software para o varejo automotivo</p>

        <h1 className="mt-7 max-w-5xl text-[clamp(2rem,7.4vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white">
          Sua operação não precisa
          <br />
          de mais um <span className="texto-gradiente">dashboard</span>.
        </h1>

        <p className="lead mt-7 text-lg md:text-xl">
          Painel mostra o que já aconteceu. Nós construímos o sistema que faz
          acontecer: o agente de IA que atende o lead no WhatsApp, o portal que
          fecha o pedido com o imposto certo e o DRE que fecha o mês por
          departamento. <span className="destaque">Sob medida, e falando direto com quem escreve o código.</span>
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contato" className="btn btn-primario">
            Agendar diagnóstico
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#cases" className="btn btn-secundario">
            Ver o que já está no ar
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06] md:mt-20 md:grid-cols-4">
          {provas.map((p) => (
            <div key={p.label} className="bg-[#080b13] px-5 py-6 md:px-6 md:py-8">
              <dt className="mono flex items-baseline gap-1.5 text-3xl font-bold text-white md:text-4xl">
                {p.valor}
                <span className="text-sm font-medium text-[#00b4ff] md:text-base">
                  {p.unidade}
                </span>
              </dt>
              <dd className="mt-2 text-[0.8125rem] leading-snug text-[#98a4bb]">
                {p.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
