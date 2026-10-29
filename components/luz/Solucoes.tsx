import Vitrine, { type Solucao } from "./Vitrine";
import ConversaMel from "../telas/ConversaMel";
import TelaFiscal from "../telas/TelaFiscal";
import TelaDre from "../telas/TelaDre";
import TelaRede from "../telas/TelaRede";
import { capacidades, produtos } from "@/lib/site";

// O CRM já aparece inteiro no topo; aqui ele entra pela conversa da Mel.
const TELAS: Record<string, React.ReactNode> = {
  crm: (
    <div className="flex justify-center py-2">
      <ConversaMel animada className="!w-[260px] sm:!w-[290px]" />
    </div>
  ),
  portal: <TelaFiscal />,
  rentabilidade: <TelaDre />,
  rede: <TelaRede />,
};

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
      {itens.map((t) => (
        <li key={t} className="flex gap-2.5 text-[0.9375rem] leading-snug text-[var(--tinta-2)]">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="mt-0.5 flex-none text-[var(--azul)]" aria-hidden>
            <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Solucoes() {
  const solucoes: Solucao[] = produtos.map((p) => ({
    id: p.id,
    slug: p.slug,
    curto: p.curto,
    titulo: p.titulo,
    paraQuem: p.paraQuem,
    resumo: p.resumo,
    itens: p.itens,
    tela: TELAS[p.id],
  }));
  const extras = capacidades.filter((c) => !("slug" in c));

  return (
    <section id="solucoes" aria-labelledby="titulo-solucoes" className="bg-white py-20 md:py-32">
      <div className="wrap">
        <div className="revela max-w-3xl">
          <h2 id="titulo-solucoes" className="h-secao">
            Uma solução para cada ponta da operação
          </h2>
          <p className="p-secao mt-5 max-w-2xl">
            Atendimento, vendas, fiscal, financeiro e rede, todos na mesma base e
            conversando entre si. Você começa por onde dói mais, e o que ainda não
            existe a gente constrói.
          </p>
        </div>

        <Vitrine solucoes={solucoes} />

        <div className="mt-6 grid gap-6 md:mt-10 md:grid-cols-2">
          {extras.map((c, i) => (
            <div key={c.id} className="cartao-luz revela p-6 md:p-8" style={{ "--i": i } as React.CSSProperties}>
              <h3 className="text-[1.375rem] font-bold tracking-[-0.02em] text-[var(--tinta)]">{c.titulo}</h3>
              <p className="mt-3 text-[1rem] leading-relaxed text-[var(--tinta-2)]">{c.resumo}</p>
              <Lista itens={c.itens.slice(0, 4)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
