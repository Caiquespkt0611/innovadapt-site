import { comparativo } from "@/lib/site";

export default function Diferenca() {
  return (
    <section id="diferenca" className="secao">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 className="titulo">O mercado está cheio de painel. Falta sistema que age.</h2>
          <p className="apoio">
            Dashboard bonito se compra em qualquer lugar. O gargalo da
            operação é o cliente que ninguém respondeu, o pedido que travou no
            imposto e o fechamento que só o gerente sabe fazer.
          </p>
        </div>

        {/* tabela no computador */}
        <div className="mt-14 hidden overflow-hidden rounded-3xl border border-[#e1e7f1] md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#f3f6fb]">
                <th className="w-[22%] px-7 py-5 text-[0.8125rem] font-semibold text-[#6b7894]">Critério</th>
                <th className="w-[39%] px-7 py-5 text-[0.9375rem] font-semibold text-[#3d4b66]">{comparativo.colunas[0]}</th>
                <th className="w-[39%] bg-[#2647f0] px-7 py-5 text-[0.9375rem] font-semibold text-white">{comparativo.colunas[1]}</th>
              </tr>
            </thead>
            <tbody>
              {comparativo.linhas.map((linha) => (
                <tr key={linha.criterio} className="border-t border-[#e1e7f1]">
                  <td className="px-7 py-5 align-top text-[0.9375rem] font-semibold text-[#0b1630]">{linha.criterio}</td>
                  <td className="px-7 py-5 align-top text-[0.9375rem] leading-relaxed text-[#6b7894]">{linha.deles}</td>
                  <td className="bg-[#eaf0ff] px-7 py-5 align-top text-[0.9375rem] font-medium leading-relaxed text-[#0b1630]">
                    {linha.nosso}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* cartões no celular */}
        <div className="mt-10 space-y-3 md:hidden">
          {comparativo.linhas.map((linha) => (
            <div key={linha.criterio} className="rounded-2xl border border-[#e1e7f1] p-5">
              <p className="text-[0.9375rem] font-semibold text-[#0b1630]">{linha.criterio}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#6b7894]">
                <span className="font-semibold">Prateleira: </span>
                {linha.deles}
              </p>
              <p className="mt-2 rounded-xl bg-[#eaf0ff] px-3 py-2 text-sm leading-relaxed text-[#0b1630]">
                <span className="font-semibold text-[#2647f0]">InnovAdapt: </span>
                {linha.nosso}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
