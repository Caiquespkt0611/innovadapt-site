import Revelar from "./Revelar";
import { comparativo } from "@/lib/site";

export default function Diferenca() {
  return (
    <section id="diferenca" className="secao fio-topo bg-[#0a0c15]">
      <div className="wrap">
        <Revelar>
          <p className="sobrancelha"><b>01</b>A diferença</p>
          <h2 className="titulo-secao mt-6 max-w-4xl">
            O setor está cheio de painel.
            <br />
            <span className="text-[#9aa1b2]">
              Está faltando sistema que <span className="enfase-clara">age</span>.
            </span>
          </h2>
          <p className="lead mt-6">
            Dá para comprar dashboard bonito em qualquer lugar. O gargalo da
            concessionária não é enxergar o problema. É o lead que ninguém
            respondeu, o pedido que travou no imposto e o fechamento que só o
            gerente sabe fazer. Software resolve isso. Relatório, não.
          </p>
        </Revelar>

        {/* Tabela em desktop */}
        <Revelar delay={80}>
          <div className="mt-14 hidden overflow-hidden rounded-2xl border border-white/[0.08] md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-white/[0.03]">
                  <th className="w-[24%] px-6 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#656c7d]">
                    Critério
                  </th>
                  <th className="w-[38%] border-l border-white/[0.06] px-6 py-5 text-sm font-semibold text-[#9aa1b2]">
                    {comparativo.colunas[0]}
                  </th>
                  <th className="w-[38%] border-l border-[#22b8f0]/30 bg-[#22b8f0]/[0.07] px-7 py-5 text-sm font-medium text-white">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#22b8f0]" />
                      {comparativo.colunas[1]}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparativo.linhas.map((linha) => (
                  <tr key={linha.criterio} className="border-t border-white/[0.06]">
                    <td className="px-6 py-5 align-top text-sm font-medium text-white">
                      {linha.criterio}
                    </td>
                    <td className="border-l border-white/[0.06] px-6 py-5 align-top text-sm leading-relaxed text-[#656c7d]">
                      {linha.deles}
                    </td>
                    <td className="border-l border-[#22b8f0]/30 bg-[#22b8f0]/[0.07] px-7 py-5 align-top text-sm leading-relaxed text-white">
                      {linha.nosso}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Revelar>

        {/* Cartões em mobile */}
        <div className="mt-12 space-y-3 md:hidden">
          {comparativo.linhas.map((linha, i) => (
            <Revelar key={linha.criterio} delay={i * 40}>
              <div className="cartao p-5">
                <p className="text-sm font-semibold text-white">{linha.criterio}</p>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-[#656c7d]">
                  <span className="mono mr-2 text-[0.6875rem] uppercase tracking-wider">
                    prateleira
                  </span>
                  {linha.deles}
                </p>
                <p className="mt-2 border-l-2 border-[#22b8f0] pl-3 text-[0.8125rem] leading-relaxed text-[#e9ecf3]">
                  <span className="mono mr-2 text-[0.6875rem] uppercase tracking-wider text-[#22b8f0]">
                    innovadapt
                  </span>
                  {linha.nosso}
                </p>
              </div>
            </Revelar>
          ))}
        </div>

        <Revelar delay={120}>
          <p className="mt-10 text-sm text-[#656c7d]">
            O nome da empresa é a tese:{" "}
            <span className="text-white">inovar e adaptar</span>. Se o software
            exige que a sua operação mude para caber nele, você comprou o
            problema junto.
          </p>
        </Revelar>
      </div>
    </section>
  );
}
