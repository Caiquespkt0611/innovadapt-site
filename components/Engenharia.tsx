import Revelar from "./Revelar";
import { engenharia } from "@/lib/site";

export default function Engenharia() {
  return (
    <section id="engenharia" className="secao border-t border-white/[0.06] bg-[#080b13]">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Revelar>
            <p className="sobrancelha">Engenharia</p>
            <h2 className="titulo-secao mt-6">
              As decisões que aparecem
              <br />
              <span className="text-[#98a4bb]">na sua fatura</span>
            </h2>
            <p className="lead mt-6">
              Stack fixo e escolhido, não modinha. O que muda de projeto para
              projeto é a modelagem do seu negócio — a fundação é a mesma, e é
              por isso que ela já foi testada em produção.
            </p>

            <dl className="mt-10 divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {engenharia.stack.map((s) => (
                <div key={s.camada} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                  <dt className="mono w-32 flex-none text-[0.6875rem] uppercase tracking-[0.14em] text-[#5f6c85]">
                    {s.camada}
                  </dt>
                  <dd className="text-sm text-[#e6edfa]">{s.valor}</dd>
                </div>
              ))}
            </dl>
          </Revelar>

          <div className="space-y-4">
            {engenharia.principios.map((p, i) => (
              <Revelar key={p.titulo} delay={i * 70}>
                <div className="cartao p-6 md:p-7">
                  <h3 className="flex items-start gap-3 text-base font-bold text-white">
                    <span className="mt-[0.4rem] h-1.5 w-1.5 flex-none rounded-full bg-[#00b4ff]" />
                    {p.titulo}
                  </h3>
                  <p className="mt-3 pl-[1.125rem] text-sm leading-relaxed text-[#98a4bb]">
                    {p.texto}
                  </p>
                </div>
              </Revelar>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
