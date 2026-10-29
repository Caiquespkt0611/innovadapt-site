import { integracoes } from "@/lib/site";

/** O que a operação já usa, correndo devagar logo abaixo do topo. Pausa no mouse. */
export default function Esteira() {
  const dobrada = [...integracoes, ...integracoes];
  return (
    <section aria-labelledby="titulo-integracoes" className="border-y border-[#edf1f7] bg-white py-7 md:py-9">
      <div className="wrap flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
        <h2 id="titulo-integracoes" className="flex-none text-[0.9375rem] font-semibold text-[var(--tinta)]">
          Conversa com o que você já usa
        </h2>
        <div className="esteira-caixa min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="esteira gap-10 md:gap-14">
            {dobrada.map((i, n) => (
              <li key={`${i.nome}-${n}`} aria-hidden={n >= integracoes.length} className="flex flex-none items-baseline gap-2 whitespace-nowrap">
                <span className="text-[1.0625rem] font-semibold text-[#5f6b80]">{i.nome}</span>
                <span className="text-[0.875rem] text-[#8592a8]">{i.tipo}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
