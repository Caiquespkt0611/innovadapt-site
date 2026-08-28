import Revelar from "./Revelar";
import { cases } from "@/lib/site";

export default function Cases() {
  return (
    <section id="cases" className="secao border-t border-white/[0.06] bg-[#080b13]">
      <div className="wrap">
        <Revelar>
          <p className="sobrancelha">Cases</p>
          <h2 className="titulo-secao mt-6 max-w-4xl">
            Clientes reais, entregas datadas
          </h2>
          <p className="lead mt-6">
            Sem porcentagem inventada de marketing. O que está abaixo é o que foi
            construído, para quem, e em que data entrou no ar.
          </p>
        </Revelar>

        <div className="mt-14 space-y-5">
          {cases.map((c, i) => (
            <Revelar key={c.codigo} delay={i * 70}>
              <article className="cartao overflow-hidden">
                <div className="grid lg:grid-cols-[1.35fr_1fr]">
                  {/* lado esquerdo — narrativa */}
                  <div className="p-6 md:p-9">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="mono rounded border border-[#00b4ff]/30 bg-[#00b4ff]/10 px-2 py-1 text-[0.625rem] font-bold tracking-widest text-[#00b4ff]">
                        {c.codigo}
                      </span>
                      <span className="text-xs text-[#5f6c85]">{c.setor}</span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-white md:text-[1.75rem]">
                      {c.cliente}
                    </h3>
                    <p className="mt-1.5 text-base font-medium text-[#00b4ff]">
                      {c.titulo}
                    </p>

                    <div className="mt-7 space-y-5">
                      <div>
                        <p className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#5f6c85]">
                          O problema
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-[#98a4bb]">
                          {c.problema}
                        </p>
                      </div>
                      <div>
                        <p className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#5f6c85]">
                          O que foi entregue
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-[#98a4bb]">
                          {c.entrega}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-7 flex flex-wrap gap-2">
                      {c.stack.map((t) => (
                        <li
                          key={t}
                          className="mono rounded border border-white/[0.09] px-2.5 py-1 text-[0.6875rem] text-[#7d8ba4]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* lado direito — linha do tempo e números */}
                  <div className="border-t border-white/[0.06] bg-white/[0.02] p-6 md:p-9 lg:border-l lg:border-t-0">
                    <p className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#5f6c85]">
                      Linha do tempo
                    </p>
                    <ol className="mt-5 space-y-0">
                      {c.marcos.map((m, idx) => (
                        <li key={m.data} className="relative flex gap-4 pb-5 last:pb-0">
                          <div className="flex flex-col items-center">
                            <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-[#00b4ff]" />
                            {idx < c.marcos.length - 1 && (
                              <span className="mt-1 w-px flex-1 bg-white/[0.1]" />
                            )}
                          </div>
                          <div className="-mt-0.5 pb-1">
                            <span className="mono text-xs font-bold text-white">
                              {m.data}
                            </span>
                            <p className="mt-1 text-[0.8125rem] leading-snug text-[#7d8ba4]">
                              {m.texto}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>

                    <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.07]">
                      {c.numeros.map((n) => (
                        <div key={n.label} className="bg-[#0b0f1a] px-4 py-4">
                          <p className="mono text-xl font-bold text-white">{n.valor}</p>
                          <p className="mt-1 text-[0.6875rem] leading-tight text-[#5f6c85]">
                            {n.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
