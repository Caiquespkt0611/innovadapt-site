import { metodo } from "@/lib/site";

/** Os quatro passos numa linha só, ligados por um traço de luz. No celular, um embaixo do outro. */
export default function Metodo() {
  return (
    <section id="metodo" aria-labelledby="titulo-metodo" className="bg-[var(--ceu)] py-20 md:py-32">
      <div className="wrap">
        <div className="revela grid gap-5 md:grid-cols-2 md:items-end md:gap-16">
          <h2 id="titulo-metodo" className="h-secao">
            Quatro passos, e nenhum deles é &ldquo;confia&rdquo;
          </h2>
          <p className="p-secao">
            Todo projeto passa pelos mesmos quatro. São eles que separam um
            orçamento com origem de um número redondo, e um go-live tranquilo de um
            domingo de pânico.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-5 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          <span
            aria-hidden
            className="linha-metodo absolute left-8 right-8 top-[2.15rem] hidden h-[2px] bg-gradient-to-r from-[#0365FE] via-[#8B3AE2] to-[#04CDFB] opacity-40 xl:block"
          />
          {metodo.map((m, i) => (
            <li key={m.titulo} className="cartao-luz revela relative flex flex-col p-6 md:p-7" style={{ "--i": i } as React.CSSProperties}>
              <span className="relative grid h-11 w-11 place-items-center rounded-full bg-[var(--azul)] text-[1rem] font-bold text-white shadow-[0_10px_24px_-10px_rgba(3,101,254,0.8)]">
                {i + 1}
              </span>
              <h3 className="mt-5 text-[1.25rem] font-bold leading-tight tracking-[-0.02em] text-[var(--tinta)]">{m.titulo}</h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-[var(--tinta-2)]">{m.texto}</p>
              <p className="mt-6 text-[0.9375rem] font-semibold text-[var(--azul)]">{m.marcador}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
