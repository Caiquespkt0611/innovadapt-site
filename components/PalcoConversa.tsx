import { CONVERSA } from "./telas/ConversaMel";
import TelaDre from "./telas/TelaDre";

/**
 * O palco do topo mostra várias frentes ao mesmo tempo, porque a InnovAdapt não
 * é só CRM: o DRE gerencial ao fundo, o atendimento da IA na frente e os
 * cartões do portal fiscal e da rede. Cada peça é de um sistema em produção.
 */
export default function PalcoConversa({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-[#eaf0ff] p-4 sm:p-8 sm:pb-44 ${className}`}>
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(139,69,230,0.35), transparent)" }}
        aria-hidden
      />

      {/* ao fundo: o DRE gerencial */}
      <div className="relative">
        <TelaDre />
      </div>

      {/* na frente: o atendimento da IA, em celular claro */}
      <div className="relative mt-4 w-full rounded-[1.75rem] sm:absolute sm:mt-0 sm:w-[15.5rem] bg-white p-3.5 text-[0.8125rem] shadow-[0_40px_80px_-30px_rgba(20,40,120,0.55)] sm:bottom-6 sm:left-8">
        <div className="flex items-center gap-2 border-b border-[#eef1f6] px-1 pb-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#2647f0] to-[#8b45e6] text-xs font-bold text-white">
            M
          </span>
          <span>
            <span className="block text-[0.8125rem] font-semibold text-[#0b1630]">Atendimento com IA</span>
            <span className="flex items-center gap-1.5 text-[0.6875rem] text-[#12b886]">
              <span className="pulso h-1.5 w-1.5 rounded-full bg-[#12b886]" />
              respondendo agora
            </span>
          </span>
        </div>
        <ul className="mt-2.5 space-y-1.5">
          {CONVERSA.slice(0, 3).map((m, i) => (
            <li
              key={i}
              className={`max-w-[88%] rounded-2xl px-3 py-2 leading-snug ${
                m.de === "mel" ? "ml-auto bg-[#2647f0] text-white" : "bg-[#f1f4f9] text-[#0b1630]"
              }`}
            >
              {m.texto}
            </li>
          ))}
        </ul>
      </div>

      {/* cartões de outras frentes */}
      <div className="relative mt-3 rounded-2xl border-l-4 border-[#2647f0] sm:absolute sm:mt-0 sm:w-56 bg-white px-4 py-3 shadow-[0_24px_50px_-24px_rgba(20,40,120,0.45)] sm:bottom-[8.75rem] sm:right-8">
        <p className="text-xs font-semibold text-[#2647f0]">Portal fiscal</p>
        <p className="mt-1 text-[0.8125rem] leading-snug text-[#0b1630]">CBS e IBS entram pelo cadastro, sem mexer no código.</p>
      </div>
      <div className="relative mt-3 rounded-2xl border-l-4 border-[#12b886] sm:absolute sm:mt-0 sm:w-56 bg-white px-4 py-3 shadow-[0_24px_50px_-24px_rgba(20,40,120,0.45)] sm:bottom-6 sm:right-8">
        <p className="text-xs font-semibold text-[#12b886]">Rede consolidada</p>
        <p className="mt-1 text-[0.8125rem] leading-snug text-[#0b1630]">Planilha de cada casa e banco de dados no mesmo cálculo.</p>
      </div>
    </div>
  );
}
