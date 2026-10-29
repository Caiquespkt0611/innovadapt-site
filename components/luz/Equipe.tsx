import { engenharia, socios } from "@/lib/site";

/** Quem atende (o dono) e como é construído (a pilha e os princípios). */
export default function Equipe() {
  const roger = socios[0];
  return (
    <section id="engenharia" aria-labelledby="titulo-engenharia" className="bg-white py-20 md:py-32">
      <div className="wrap grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8">
        <div className="revela relative overflow-hidden rounded-[28px] bg-[var(--navy)] p-7 text-white md:p-10">
          <span aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0365FE] opacity-40 blur-[80px]" />
          <span aria-hidden className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#8B3AE2] opacity-35 blur-[80px]" />
          <div className="relative">
            <h2 className="text-[clamp(1.875rem,3.2vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.035em]">
              Um dono. Nenhuma camada entre você e quem decide.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-[#c4d1e8]">
              Não existe nível 1, fila de chamado nem gerente de conta repassando
              recado. Quando você aponta um erro numa terça, quem lê é quem consegue
              corrigir.
            </p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white/[0.07] p-4">
              <span className="grid h-14 w-14 flex-none place-items-center rounded-full bg-gradient-to-br from-[#0365FE] to-[#8B3AE2] text-xl font-bold">
                {roger.nome.split(" ").map((n) => n[0]).join("")}
              </span>
              <div>
                <h3 className="text-[1.125rem] font-bold">{roger.nome}</h3>
                <p className="text-[0.9375rem] text-[#a9b8d3]">{roger.papel}</p>
              </div>
            </div>
            <p className="mt-4 text-[1rem] leading-relaxed text-[#c4d1e8]">{roger.texto}</p>
          </div>
        </div>

        <div className="revela">
          <h2 id="titulo-engenharia" className="h-secao">As decisões de engenharia que aparecem na sua fatura</h2>
          <p className="p-secao mt-5">
            A base é fixa e já foi testada em produção. O que muda de projeto para
            projeto é a modelagem do seu negócio, e é por isso que o segundo
            sistema custa uma fração do primeiro.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {engenharia.principios.map((p) => (
              <div key={p.titulo} className="cartao-luz p-5 md:p-6">
                <h3 className="text-[1.0625rem] font-bold leading-snug text-[var(--tinta)]">{p.titulo}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--tinta-2)]">{p.texto}</p>
              </div>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {engenharia.stack.map((s) => (
              <li key={s.camada} className="rounded-full bg-[var(--ceu)] px-4 py-2 text-[0.875rem] text-[var(--tinta-2)]">
                <span className="font-semibold text-[var(--tinta)]">{s.camada}:</span> {s.valor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
