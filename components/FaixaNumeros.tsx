import Contador from "./Contador";
import { provas } from "@/lib/site";

/**
 * Os números da casa, grandes, sobre névoa. Cada um sai do CEREBRO.
 */
export default function FaixaNumeros() {
  return (
    <section aria-labelledby="numeros-titulo" className="bg-[var(--nevoa)] py-20 md:py-28">
      <div className="wrap">
        <h2 id="numeros-titulo" className="titulo max-w-3xl">
          Software no ar, medido em horas e não em meses
        </h2>
        <dl className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {provas.map((p) => (
            <div key={p.label} className="border-t-2 border-[var(--tinta)] pt-5">
              <dt className="sr-only">{p.label}</dt>
              <dd>
                <span className="display algarismo block text-[clamp(5rem,9vw,8.5rem)] text-[var(--azul)]">
                  <Contador valor={p.valor} />
                </span>
                <span className="mt-3 block text-[1.0625rem] font-semibold text-[var(--tinta)]">{p.unidade}</span>
                <span className="mt-1 block text-[0.9375rem] leading-snug text-[var(--tinta-2)]">{p.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
