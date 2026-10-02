import Contador from "./Contador";
import { provas } from "@/lib/site";

/**
 * A primeira seção clara da página. O Dealer Intelligence alterna azul-marinho
 * e branco, e é esse ritmo que deixa a página longa legível: o escuro fica para
 * produto e tela, o claro para explicar. Os passos dizem o que painel nenhum
 * faz (atender e fechar), e a faixa de números fecha a seção, como a deles.
 */
const ETAPAS = [
  {
    n: "01",
    titulo: "Junta",
    texto: "DMS por API, XML de nota e planilha, com de-para do seu plano de contas.",
  },
  {
    n: "02",
    titulo: "Atende",
    texto: "O agente responde o lead no WhatsApp, qualifica e passa para o vendedor certo.",
  },
  {
    n: "03",
    titulo: "Fecha",
    texto: "O portal fecha o pedido com o imposto certo e o sistema cobra o follow-up.",
  },
  {
    n: "04",
    titulo: "Mede",
    texto: "DRE por departamento, consolidação de rede e o PDCA que nasce do desvio.",
  },
];

export default function Fluxo() {
  return (
    <section className="claro relative py-20 md:py-28">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[#0b1630] [text-wrap:balance]">
            Do dado solto ao pedido fechado, no mesmo sistema
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-[#4a5b78]">
            Painel para no relatório. A plataforma segue até o fim: junta o que
            está espalhado, atende quem chegou, fecha a venda e mostra o que
            sobrou no mês.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ETAPAS.map((e, i) => (
            <li
              key={e.n}
              className={`rounded-2xl border p-6 ${
                i === 1
                  ? "border-transparent bg-[#0b1630] text-white"
                  : "border-[#dbe4f3] bg-white"
              }`}
            >
              <span
                className={`mono text-[0.75rem] font-bold ${i === 1 ? "text-[#7fb0ff]" : "text-[#2f6bff]"}`}
              >
                {e.n}
              </span>
              <h3 className={`mt-3 text-lg font-bold ${i === 1 ? "text-white" : "text-[#0b1630]"}`}>
                {e.titulo}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${i === 1 ? "text-[#b8c6de]" : "text-[#4a5b78]"}`}>
                {e.texto}
              </p>
            </li>
          ))}
        </ol>

        {/* a faixa de números, escura dentro da seção clara */}
        <dl className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl bg-[#0b1630] md:grid-cols-4">
          {provas.map((p, i) => (
            <div
              key={p.label}
              className={`px-6 py-6 md:py-7 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${
                i > 1 ? "border-t border-white/10 md:border-t-0" : ""
              } ${i === 2 ? "md:border-l md:border-white/10" : ""}`}
            >
              <dt className="mono flex items-baseline gap-1.5 text-[1.75rem] font-bold leading-none text-white md:text-[2.25rem]">
                <Contador valor={p.valor} />
                <span className="text-xs font-medium text-[#22b8f0] md:text-sm">{p.unidade}</span>
              </dt>
              <dd className="mt-2.5 text-[0.8125rem] leading-snug text-[#93a6c4]">{p.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
