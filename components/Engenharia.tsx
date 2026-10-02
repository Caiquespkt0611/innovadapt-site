import { engenharia } from "@/lib/site";

export default function Engenharia() {
  return (
    <section id="engenharia" className="secao">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 className="titulo">As decisões de engenharia que aparecem na sua fatura</h2>
          <p className="apoio">
            A base é fixa e já foi testada em produção. O que muda de projeto para
            projeto é a modelagem do seu negócio, e é por isso que o segundo
            sistema custa uma fração do primeiro.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {engenharia.principios.map((p) => (
            <div key={p.titulo} className="rounded-3xl border border-[#e1e7f1] p-7 md:p-8">
              <h3 className="text-lg font-bold tracking-[-0.015em] text-[#0b1630]">{p.titulo}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#3d4b66]">{p.texto}</p>
            </div>
          ))}
        </div>

        <dl className="mt-10 grid gap-x-10 gap-y-4 rounded-3xl bg-[#f3f6fb] p-7 sm:grid-cols-2 md:p-9 lg:grid-cols-3">
          {engenharia.stack.map((s) => (
            <div key={s.camada}>
              <dt className="text-[0.8125rem] font-semibold text-[#6b7894]">{s.camada}</dt>
              <dd className="mt-0.5 text-[0.9375rem] text-[#0b1630]">{s.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
