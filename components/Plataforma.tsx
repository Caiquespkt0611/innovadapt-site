import Link from "next/link";
import PainelOperacao from "./telas/PainelOperacao";
import TelaFiscal from "./telas/TelaFiscal";
import TelaDre from "./telas/TelaDre";
import TelaRede from "./telas/TelaRede";
import { capacidades } from "@/lib/site";

// Usado pelas páginas de produto (/crm-com-ia etc.).
export const TELAS: Record<string, React.ReactNode> = {
  crm: <PainelOperacao />,
  portal: <TelaFiscal />,
  rentabilidade: <TelaDre />,
  rede: <TelaRede />,
};

/**
 * O índice do que a casa faz. As telas já apareceram no palco do topo; aqui é
 * a lista inteira, uma linha por frente, com a página própria quando existe.
 */
export default function Plataforma() {
  return (
    <section id="plataforma" className="secao !pt-0">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <h2 className="titulo">Uma base só, seis frentes</h2>
          <p className="apoio">
            Cada sistema resolve uma ponta da operação e todos conversam entre si.
            O que ainda não existe a gente constrói sobre a mesma base, e por isso
            o segundo módulo custa uma fração do primeiro.
          </p>
        </div>

        <ul className="mt-14 border-t border-[var(--tinta)]">
          {capacidades.map((c) => {
            const slug = "slug" in c ? c.slug : null;
            const conteudo = (
              <>
                <span className="subtitulo text-[clamp(1.5rem,2.6vw,2.25rem)] text-[var(--tinta)]">{c.titulo}</span>
                <span className="text-[1rem] leading-relaxed text-[var(--tinta-2)]">{c.resumo}</span>
                <span className="text-[0.9375rem] font-semibold text-[var(--azul)] md:text-right">
                  {slug ? "Ver por dentro" : "Sob consulta"}
                </span>
              </>
            );
            const classe =
              "grid gap-3 border-b border-[var(--linha)] px-1 py-8 md:grid-cols-[1.1fr_1.3fr_auto] md:items-baseline md:gap-10 md:px-4";
            return (
              <li key={c.id}>
                {slug ? (
                  <Link href={`/${slug}`} className={`${classe} transition-colors duration-150 ease-out hover:bg-[var(--nevoa)]`}>
                    {conteudo}
                  </Link>
                ) : (
                  <div className={classe}>{conteudo}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
