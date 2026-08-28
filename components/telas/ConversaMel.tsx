const CONVERSA = [
  { de: "lead", texto: "oi, vi a Fazer 250 no site. ainda tem?", hora: "14:02" },
  {
    de: "mel",
    texto:
      "Oi! Tem sim 😊 Temos a Fazer 250 ABS 2026 em três cores. Você já anda de moto ou seria a primeira?",
    hora: "14:02",
  },
  { de: "lead", texto: "ja ando, quero trocar a minha. qto fica financiado?", hora: "14:04" },
  {
    de: "mel",
    texto:
      "Dá pra fazer com a sua na troca. Antes de simular, me diz seu nome e o modelo e ano da sua atual?",
    hora: "14:04",
  },
  { de: "lead", texto: "Rodrigo, tenho uma Fazer 150 2021", hora: "14:06" },
];

export default function ConversaMel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-[216px] overflow-hidden rounded-[1.75rem] border border-[rgba(120,170,255,0.24)] bg-[#080f1d] p-1.5 shadow-[0_36px_80px_-24px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.375rem] bg-[#0b1424]">
        {/* topo do app */}
        <div className="flex items-center gap-2 border-b border-[rgba(120,170,255,0.13)] bg-[rgba(120,170,255,0.05)] px-3 py-2.5">
          <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#2f6bff] to-[#8b3fd9] text-[0.5625rem] font-bold text-white">
            M
          </span>
          <div className="min-w-0">
            <p className="truncate text-[0.6875rem] font-semibold leading-tight text-white">
              Mel
            </p>
            <p className="mono flex items-center gap-1 text-[0.5rem] leading-tight text-[#2ee6a8]">
              <span className="pulso h-1 w-1 rounded-full bg-[#2ee6a8]" />
              respondendo
            </p>
          </div>
          <span className="rotulo ml-auto flex-none">WhatsApp</span>
        </div>

        {/* conversa */}
        <div className="space-y-1.5 px-2.5 py-3">
          {CONVERSA.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.de === "mel" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[86%] rounded-xl px-2.5 py-1.5 text-[0.625rem] leading-snug ${
                  m.de === "mel"
                    ? "rounded-br-sm bg-gradient-to-br from-[#2f6bff] to-[#2457d4] text-white"
                    : "rounded-bl-sm bg-white/[0.07] text-[#cfdcf2]"
                }`}
              >
                {m.texto}
                <span
                  className={`mono mt-0.5 block text-right text-[0.5rem] ${
                    m.de === "mel" ? "text-white/60" : "text-[#5d708f]"
                  }`}
                >
                  {m.hora}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* o que o sistema fez sozinho com a conversa */}
        <div className="mx-2.5 mb-2.5 rounded-lg border border-[rgba(46,230,168,0.28)] bg-[rgba(46,230,168,0.08)] px-2.5 py-2">
          <p className="mono text-[0.5rem] uppercase tracking-[0.14em] text-[#2ee6a8]">
            automático
          </p>
          <p className="mt-1 text-[0.5625rem] leading-snug text-[#cfdcf2]">
            Lead <span className="font-semibold text-white">Rodrigo</span> qualificado,
            ficha de troca aberta e passado para{" "}
            <span className="font-semibold text-white">Rafael</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
