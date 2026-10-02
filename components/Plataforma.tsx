import Link from "next/link";
import PainelOperacao from "./telas/PainelOperacao";
import TelaFiscal from "./telas/TelaFiscal";
import TelaDre from "./telas/TelaDre";
import TelaRede from "./telas/TelaRede";
import { capacidades, produtos } from "@/lib/site";

export const TELAS: Record<string, React.ReactNode> = {
  crm: <PainelOperacao />,
  portal: <TelaFiscal />,
  rentabilidade: <TelaDre />,
  rede: <TelaRede />,
};

/**
 * Um bloco por produto, alternando o lado da tela. A tela é escura, como
 * captura de software, sobre um palco azul-claro: é o contraste que a página
 * branca precisa para o produto saltar.
 */
export default function Plataforma() {
  const extras = capacidades.filter((c) => !("slug" in c));

  return (
    <section id="plataforma" className="secao">
      <div className="wrap">
        <div className="max-w-3xl">
          <h2 className="titulo">O que já está rodando em produção</h2>
          <p className="apoio mt-5">
            Cada sistema resolve uma ponta da operação e todos conversam entre si.
            Você começa por onde dói mais, e o que não existe ainda a gente
            constrói sobre a mesma base.
          </p>
        </div>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {produtos.map((p, i) => (
            <article
              key={p.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="min-w-0">
                <p className="text-[0.875rem] font-semibold text-[#2647f0]">{p.curto}</p>
                <h3 className="mt-3 text-[clamp(1.625rem,2.8vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.025em] text-[#0b1630]">
                  {p.titulo}
                </h3>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-[#3d4b66]">{p.resumo}</p>

                <ul className="mt-7 space-y-3">
                  {p.itens.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-[#0b1630]">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-px flex-none text-[#2647f0]" aria-hidden>
                        <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-4 border-t border-[#e1e7f1] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[0.875rem] text-[#6b7894]">
                    <span className="font-semibold text-[#0b1630]">Para quem:</span> {p.paraQuem}
                  </p>
                  <Link href={`/${p.slug}`} className="btn btn-borda flex-none self-start">
                    Conhecer o {p.curto}
                  </Link>
                </div>
              </div>

              <div className="min-w-0 rounded-[2rem] bg-[#eaf0ff] p-4 sm:p-8">{TELAS[p.id]}</div>
            </article>
          ))}
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-2">
          {extras.map((c) => (
            <div key={c.id} className="rounded-3xl border border-[#e1e7f1] bg-[#f3f6fb] p-7 md:p-9">
              <h3 className="text-xl font-bold tracking-[-0.02em] text-[#0b1630]">{c.titulo}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#3d4b66]">{c.resumo}</p>
              <ul className="mt-5 space-y-2">
                {c.itens.slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.875rem] text-[#3d4b66]">
                    <span className="mt-2 h-1 w-3 flex-none rounded-full bg-[#2647f0]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[0.8125rem] text-[#6b7894]">Telas dos sistemas em produção, com dados ilustrativos.</p>
      </div>
    </section>
  );
}
