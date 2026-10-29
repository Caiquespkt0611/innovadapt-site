import { cases } from "@/lib/site";

/**
 * Dois projetos entregues, sem nome de cliente (regra do site). Cada um
 * com a linha do tempo de datas e os dois números que provam a entrega.
 */
export default function Projetos() {
  return (
    <section id="projetos" aria-labelledby="titulo-projetos" className="bg-white py-20 md:py-32">
      <div className="wrap">
        <div className="revela max-w-3xl">
          <h2 id="titulo-projetos" className="h-secao">Projetos entregues, com data</h2>
          <p className="p-secao mt-5 max-w-2xl">
            Sem nome de cliente, que só entra com autorização. O que fica é o que
            foi construído, quando entrou no ar e o que mudou na operação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-2">
          {cases.map((c, i) => (
            <article key={c.projeto} className="cartao-luz revela flex flex-col p-6 md:p-9" style={{ "--i": i } as React.CSSProperties}>
              <p className="text-[0.9375rem] font-semibold text-[var(--azul)]">{c.prazo}</p>
              <h3 className="mt-2 text-[clamp(1.5rem,2.2vw,1.875rem)] font-bold leading-[1.15] tracking-[-0.025em] text-[var(--tinta)]">
                {c.projeto}
              </h3>
              <p className="mt-1.5 text-[0.9375rem] text-[var(--tinta-2)]">{c.setor}</p>

              <p className="mt-6 text-[1rem] leading-relaxed text-[var(--tinta-2)]">
                <span className="font-semibold text-[var(--tinta)]">Antes: </span>
                {c.problema}
              </p>

              <ol className="relative mt-7 grid gap-4 border-l-2 border-[#dfe7f5] pl-6">
                {c.marcos.map((m) => (
                  <li key={m.data + m.texto} className="relative">
                    <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[var(--azul)] ring-4 ring-white" aria-hidden />
                    <span className="text-[0.9375rem] font-bold tabular-nums text-[var(--azul)]">{m.data}</span>
                    <p className="mt-0.5 text-[1rem] leading-snug text-[var(--tinta)]">{m.texto}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-auto grid grid-cols-2 gap-4 pt-8">
                {c.numeros.map((n) => (
                  <div key={n.label} className="rounded-2xl bg-[var(--ceu)] px-5 py-4">
                    <p className="degrade text-[2.25rem] font-bold leading-none tracking-[-0.04em]">{n.valor}</p>
                    <p className="mt-2 text-[0.875rem] leading-snug text-[var(--tinta-2)]">{n.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[0.875rem] text-[var(--tinta-2)]">
                <span className="font-semibold text-[var(--tinta)]">Feito com </span>
                {c.stack.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
