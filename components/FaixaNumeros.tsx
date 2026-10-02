import Contador from "./Contador";
import { provas } from "@/lib/site";

/** A faixa azul da marca: a prova em número, entre produto e comparação. */
export default function FaixaNumeros() {
  return (
    <section className="faixa-marca relative overflow-hidden py-16 md:py-20">
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.45), transparent)" }}
        aria-hidden
      />
      <div className="wrap relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
        <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em] [text-wrap:balance]">
          Software no ar cedo, medido em horas e não em meses
        </h2>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-8">
          {provas.map((p) => (
            <div key={p.label} className="border-t border-white/30 pt-4">
              <dt className="flex items-baseline gap-1.5 text-[2.5rem] font-bold leading-none tracking-[-0.03em] md:text-[3rem]">
                <Contador valor={p.valor} />
                <span className="text-base font-semibold text-white/80">{p.unidade}</span>
              </dt>
              <dd className="mt-2 text-[0.9375rem] leading-snug text-white/85">{p.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
