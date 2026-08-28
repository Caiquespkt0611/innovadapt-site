import Janela from "./Janela";

const LINHAS = [
  { pn: "7VS-F531M", desc: "Carenagem lateral", ncm: "8714.10.00", aliq: "18,0%", regra: "exceção NCM", cor: "#ffc247" },
  { pn: "1WD-E5400", desc: "Kit embreagem", ncm: "8714.10.00", aliq: "18,0%", regra: "fornecedor", cor: "#22b8f0" },
  { pn: "B74-F8125", desc: "Painel digital", ncm: "9029.20.10", aliq: "12,0%", regra: "exceção NCM", cor: "#ffc247" },
  { pn: "2PP-E7210", desc: "Filtro de óleo", ncm: "8421.23.00", aliq: "18,0%", regra: "fornecedor", cor: "#22b8f0" },
];

export default function TelaFiscal() {
  return (
    <Janela titulo="sector one · pedido 4127 · apuração">
      <div className="space-y-3 p-3 md:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="pilula" style={{ background: "rgba(47,107,255,.16)", color: "#7fb0ff" }}>
            Pedido corporativo
          </span>
          <span className="pilula" style={{ background: "rgba(46,230,168,.12)", color: "#2ee6a8" }}>
            Regra master aplicada
          </span>
          <span className="mono ml-auto text-[0.5625rem] text-[#5d708f]">
            CBS e IBS por cadastro
          </span>
        </div>

        <div className="bloco overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full min-w-[23rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-[rgba(120,170,255,0.13)] bg-white/[0.03]">
                {["Part number", "Descrição", "NCM", "Alíquota", "Origem da regra"].map((h) => (
                  <th key={h} className="rotulo px-2.5 py-2 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LINHAS.map((l) => (
                <tr key={l.pn} className="border-b border-white/[0.05] last:border-0">
                  <td className="mono px-2.5 py-2 text-[0.625rem] text-white">{l.pn}</td>
                  <td className="px-2.5 py-2 text-[0.625rem] text-[#93a6c4]">{l.desc}</td>
                  <td className="mono px-2.5 py-2 text-[0.625rem] text-[#93a6c4]">{l.ncm}</td>
                  <td className="mono px-2.5 py-2 text-[0.625rem] font-semibold text-white">
                    {l.aliq}
                  </td>
                  <td className="px-2.5 py-2">
                    <span
                      className="pilula"
                      style={{ background: `${l.cor}1f`, color: l.cor }}
                    >
                      {l.regra}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {[
            ["Receita", "R$ 184.320"],
            ["Royalties", "R$ 9.216"],
            ["Comissão", "R$ 5.529"],
            ["Lucro bruto", "R$ 169.575"],
          ].map(([r, v], i) => (
            <div key={r} className="bloco px-2.5 py-2">
              <p className="rotulo truncate">{r}</p>
              <p
                className={`mono mt-1 text-[0.8125rem] font-semibold ${
                  i === 3 ? "text-[#2ee6a8]" : "text-white"
                }`}
              >
                {v}
              </p>
            </div>
          ))}
        </div>
        <p className="mono text-[0.5625rem] leading-relaxed text-[#5d708f]">
          Lucro bruto = receita − royalties − comissão de vendas
        </p>
      </div>
    </Janela>
  );
}
