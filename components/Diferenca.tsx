import Revelar from "./Revelar";
import { comparativo } from "@/lib/site";

export default function Diferenca() {
  return (
    <section id="diferenca" className="secao claro">
      <div className="wrap">
        <Revelar>
          <p className="sobrancelha">A diferença</p>
          <h2 className="titulo-secao mt-6 max-w-4xl">
            O setor está cheio de painel.
            <br />
            <span className="text-[#4a5b78]">
              Está faltando sistema que age.
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
          <div className="mt-14 hidden overflow-hidden rounded-2xl border border-[#dbe4f3] md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#eef3fb]">
                  <th className="w-[24%] px-6 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b7a94]">
                    Critério
                  </th>
                  <th className="w-[38%] border-l border-[#dbe4f3] px-6 py-5 text-sm font-semibold text-[#4a5b78]">
                    {comparativo.colunas[0]}
                  </th>
                  <th className="w-[38%] border-l border-[#2f6bff]/25 bg-[#2f6bff]/[0.06] px-7 py-5 text-sm font-medium text-[#0b1630]">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2f6bff]" />
                      {comparativo.colunas[1]}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparativo.linhas.map((linha) => (
                  <tr key={linha.criterio} className="border-t border-[#dbe4f3]">
                    <td className="px-6 py-5 align-top text-sm font-medium text-[#0b1630]">
                      {linha.criterio}
                    </td>
                    <td className="border-l border-[#dbe4f3] px-6 py-5 align-top text-sm leading-relaxed text-[#6b7a94]">
                      {linha.deles}
                    </td>
                    <td className="border-l border-[#2f6bff]/25 bg-[#2f6bff]/[0.06] px-7 py-5 align-top text-sm leading-relaxed text-[#0b1630]">
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
                <p className="text-sm font-semibold text-[#0b1630]">{linha.criterio}</p>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-[#6b7a94]">
                  <span className="mono mr-2 text-[0.6875rem] uppercase tracking-wider">
                    prateleira
                  </span>
                  {linha.deles}
                </p>
                <p className="mt-2 border-l-2 border-[#2f6bff] pl-3 text-[0.8125rem] leading-relaxed text-[#26375a]">
                  <span className="mono mr-2 text-[0.6875rem] uppercase tracking-wider text-[#2f6bff]">
                    innovadapt
                  </span>
                  {linha.nosso}
                </p>
              </div>
            </Revelar>
          ))}
        </div>

        <Revelar delay={120}>
          <p className="mt-10 text-sm text-[#6b7a94]">
            O nome da empresa é a tese:{" "}
            <span className="text-[#0b1630]">inovar e adaptar</span>. Se o software
            exige que a sua operação mude para caber nele, você comprou o
            problema junto.
          </p>
        </Revelar>
      </div>
    </section>
  );
}
