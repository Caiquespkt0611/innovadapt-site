import { engenharia } from "@/lib/site";

/**
 * A engenharia como ficha técnica: a pilha à esquerda, os princípios que
 * pesam na fatura à direita.
 */
export default function Engenharia() {
  return (
    <section id="engenharia" className="secao">
      <div className="wrap">
        <h2 className="titulo max-w-4xl">As decisões de engenharia que aparecem na sua fatura</h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <dl className="h-fit rounded-[1.75rem] bg-[var(--tinta)] p-7 text-white md:p-9">
            {engenharia.stack.map((s, i) => (
              <div key={s.camada} className={`grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6 ${i ? "border-t border-white/10" : ""}`}>
                <dt className="text-[0.875rem] font-semibold text-[var(--azul-claro)]">{s.camada}</dt>
                <dd className="text-[0.9375rem] text-white/90">{s.valor}</dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {engenharia.principios.map((p) => (
              <div key={p.titulo}>
                <h3 className="subtitulo text-[1.375rem]">{p.titulo}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--tinta-2)]">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
