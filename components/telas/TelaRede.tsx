import Janela from "./Janela";

const DEALERS = [
  { nome: "Dealer Sul", receita: 92, valor: "R$ 3.418.900", lucro: "R$ 402.100" },
  { nome: "Dealer Centro", receita: 78, valor: "R$ 2.902.400", lucro: "R$ 331.800" },
  { nome: "Dealer Norte", receita: 61, valor: "R$ 2.271.500", lucro: "R$ 214.300" },
  { nome: "Dealer Leste", receita: 44, valor: "R$ 1.638.200", lucro: "R$ 158.900" },
  { nome: "Dealer Oeste", receita: 29, valor: "R$ 1.079.700", lucro: "R$ 96.400" },
];

export default function TelaRede() {
  return (
    <Janela titulo="agregador · consolidação da rede · 5 dealers">
      <div className="space-y-3 p-3 md:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="pilula" style={{ background: "rgba(47,107,255,.16)", color: "#7fb0ff" }}>
            Fonte: banco de dados
          </span>
          <span className="pilula" style={{ background: "rgba(120,170,255,.08)", color: "#93a6c4" }}>
            Fonte: planilha
          </span>
          <span className="mono ml-auto text-[0.5625rem] text-[#5d708f]">
            mesmo cálculo nas duas
          </span>
        </div>

        <div className="bloco p-3">
          <div className="flex items-center justify-between">
            <p className="rotulo">Receita consolidada por dealer</p>
            <span className="mono text-[0.5625rem] text-[#5d708f]">R$ 11,3 mi</span>
          </div>
          <ul className="mt-3 space-y-2.5">
            {DEALERS.map((d) => (
              <li key={d.nome} className="flex items-center gap-2.5">
                <span className="w-[5.5rem] flex-none truncate text-[0.625rem] text-[#93a6c4]">
                  {d.nome}
                </span>
                <span className="h-2 flex-1 overflow-hidden rounded-sm bg-white/[0.06]">
                  <span
                    className="block h-full rounded-sm bg-gradient-to-r from-[#2f6bff] via-[#22b8f0] to-[#22b8f0]"
                    style={{ width: `${d.receita}%` }}
                  />
                </span>
                <span className="mono w-[6.5rem] flex-none text-right text-[0.625rem] text-white">
                  {d.valor}
                </span>
                <span className="mono hidden w-[5.5rem] flex-none text-right text-[0.625rem] text-[#2ee6a8] sm:block">
                  {d.lucro}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ["Peças", "R$ 1.842.300"],
            ["Ticket médio", "R$ 18.740"],
            ["Lucro bruto", "R$ 1.203.500"],
          ].map(([r, v], i) => (
            <div key={r} className="bloco px-2.5 py-2">
              <p className="rotulo truncate">{r}</p>
              <p
                className={`mono mt-1 text-[0.8125rem] font-semibold ${
                  i === 2 ? "text-[#2ee6a8]" : "text-white"
                }`}
              >
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Janela>
  );
}
