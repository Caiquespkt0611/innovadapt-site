import Janela from "./Janela";

const DEPTOS = [
  { nome: "Veículos novos", real: "R$ 4.812.400", mc: "6,1%", meta: 78, desvio: "-1,4 p.p.", ruim: true },
  { nome: "Veículos usados", real: "R$ 1.938.700", mc: "11,3%", meta: 104, desvio: "+0,8 p.p.", ruim: false },
  { nome: "Peças", real: "R$ 962.150", mc: "27,4%", meta: 96, desvio: "-0,3 p.p.", ruim: true },
  { nome: "Serviços", real: "R$ 604.900", mc: "41,2%", meta: 112, desvio: "+2,6 p.p.", ruim: false },
  { nome: "F&I", real: "R$ 318.220", mc: "63,8%", meta: 88, desvio: "-4,1 p.p.", ruim: true },
];

export default function TelaDre() {
  return (
    <Janela titulo="rentabilidade · fechamento mai/2026 · matriz + 2 filiais">
      <div className="space-y-3 p-3 md:p-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Taxa de absorção", "78,4%", "#ffc247"],
            ["Margem consolidada", "12,9%", "#2ee6a8"],
            ["Desvio vs planejado", "-R$ 214k", "#ff5f6d"],
          ].map(([r, v, c]) => (
            <div key={r} className="bloco px-2.5 py-2">
              <p className="rotulo truncate">{r}</p>
              <p className="mono mt-1 text-[0.875rem] font-semibold" style={{ color: c }}>
                {v}
              </p>
            </div>
          ))}
        </div>

        <div className="bloco overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full min-w-[23rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-[rgba(120,170,255,0.13)] bg-white/[0.03]">
                {["Departamento", "Realizado", "MC %", "vs plano", "Desvio"].map((h) => (
                  <th key={h} className="rotulo px-2.5 py-2 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DEPTOS.map((d) => (
                <tr key={d.nome} className="border-b border-white/[0.05] last:border-0">
                  <td className="px-2.5 py-2 text-[0.625rem] text-white">{d.nome}</td>
                  <td className="mono px-2.5 py-2 text-[0.625rem] text-[#93a6c4]">{d.real}</td>
                  <td className="mono px-2.5 py-2 text-[0.625rem] font-semibold text-white">
                    {d.mc}
                  </td>
                  <td className="px-2.5 py-2">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1 w-12 overflow-hidden rounded-full bg-white/[0.07]">
                        <span
                          className="block h-full rounded-full"
                          style={{
                            width: `${Math.min(d.meta, 100)}%`,
                            background: d.ruim ? "#ff5f6d" : "#2ee6a8",
                          }}
                        />
                      </span>
                      <span className="mono text-[0.5625rem] text-[#93a6c4]">{d.meta}%</span>
                    </span>
                  </td>
                  <td
                    className="mono px-2.5 py-2 text-[0.625rem] font-medium"
                    style={{ color: d.ruim ? "#ff5f6d" : "#2ee6a8" }}
                  >
                    {d.desvio}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        <div className="bloco border-l-2 border-l-[#ffc247] px-3 py-2.5">
          <p className="rotulo" style={{ color: "#ffc247" }}>
            PDCA gerado pelo desvio
          </p>
          <p className="mt-1.5 text-[0.625rem] leading-snug text-[#cfdcf2]">
            F&amp;I 4,1 p.p. abaixo do plano.{" "}
            <span className="text-white">Impacto estimado: R$ 68.400 no trimestre.</span>{" "}
            Ação sugerida: revisar penetração de seguro na matriz.
          </p>
        </div>
      </div>
    </Janela>
  );
}
