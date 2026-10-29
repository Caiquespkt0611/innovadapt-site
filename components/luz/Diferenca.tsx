import { comparativo, provas } from "@/lib/site";
import Contador from "../Contador";
import FundoLuz from "./FundoLuz";

/**
 * A tese contra o painel de prateleira, em duas colunas lado a lado: o
 * cinza do que se compra pronto e o cartão da InnovAdapt com borda de luz.
 * Fecha com os quatro números, que são a prova.
 */
export default function Diferenca() {
  return (
    <section id="diferenca" aria-labelledby="titulo-diferenca" className="relative overflow-hidden bg-[var(--ceu)] py-20 md:py-32">
      <FundoLuz intensidade={0.6} />
      <div className="wrap relative z-10">
        <div className="revela mx-auto max-w-3xl text-center">
          <h2 id="titulo-diferenca" className="h-secao">
            Painel mostra o que aconteceu. <span className="degrade">Sistema faz acontecer.</span>
          </h2>
          <p className="p-secao mx-auto mt-5 max-w-2xl">
            Dashboard bonito se compra em qualquer lugar. O gargalo da operação é o
            cliente que ninguém respondeu, o pedido que travou no imposto e o
            fechamento que só o gerente sabe fazer.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
          <div className="revela rounded-[24px] bg-[#eef2f8] p-6 md:p-9">
            <p className="text-[1.125rem] font-semibold text-[var(--tinta-2)]">{comparativo.colunas[0]}</p>
            <dl className="mt-6 grid gap-5">
              {comparativo.linhas.map((l) => (
                <div key={l.criterio}>
                  <dt className="text-[0.875rem] font-semibold text-[#8592a8]">{l.criterio}</dt>
                  <dd className="mt-1 text-[1rem] leading-snug text-[var(--tinta-2)]">{l.deles}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="revela rounded-[24px] bg-gradient-to-br from-[#0365FE] via-[#8B3AE2] to-[#04CDFB] p-[1.5px] shadow-[0_40px_80px_-40px_rgba(3,101,254,0.6)]">
            <div className="h-full rounded-[23px] bg-white p-6 md:p-9">
              <p className="degrade text-[1.125rem] font-bold">{comparativo.colunas[1]}</p>
              <dl className="mt-6 grid gap-5">
                {comparativo.linhas.map((l) => (
                  <div key={l.criterio}>
                    <dt className="text-[0.875rem] font-semibold text-[var(--azul)]">{l.criterio}</dt>
                    <dd className="mt-1 text-[1rem] font-medium leading-snug text-[var(--tinta)]">{l.nosso}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-24 lg:grid-cols-4">
          {provas.map((p) => (
            <div key={p.label} className="revela text-center">
              <dt className="sr-only">{p.label}</dt>
              <dd>
                <span className="degrade block text-[clamp(3rem,6vw,5rem)] font-bold leading-none tracking-[-0.05em]">
                  <Contador valor={p.valor} />
                </span>
                <span className="mt-2 block text-[1rem] font-semibold text-[var(--tinta)]">{p.unidade}</span>
                <span className="mx-auto mt-1 block max-w-[14rem] text-[0.9375rem] leading-snug text-[var(--tinta-2)]">{p.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
