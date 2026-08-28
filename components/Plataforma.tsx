import Revelar from "./Revelar";
import PainelOperacao from "./telas/PainelOperacao";
import TelaFiscal from "./telas/TelaFiscal";
import TelaDre from "./telas/TelaDre";
import TelaRede from "./telas/TelaRede";
import { capacidades } from "@/lib/site";

const TELAS: Record<string, React.ReactNode> = {
  crm: <PainelOperacao />,
  portal: <TelaFiscal />,
  rentabilidade: <TelaDre />,
  rede: <TelaRede />,
};

const COM_TELA = ["crm", "portal", "rentabilidade", "rede"];

export default function Plataforma() {
  const comTela = capacidades.filter((c) => COM_TELA.includes(c.id));
  const semTela = capacidades.filter((c) => !COM_TELA.includes(c.id));

  return (
    <section id="plataforma" className="secao fio-topo overflow-hidden">
      <div className="grade" aria-hidden />
      <div className="wrap relative">
        <Revelar>
          <p className="sobrancelha">
            Plataforma <i>· 02</i>
          </p>
          <h2 className="titulo-secao mt-6 max-w-4xl">
            As telas que já estão rodando em cliente
          </h2>
          <p className="lead mt-6">
            Não é catálogo de módulo para você escolher. É o que foi construído,
            está em produção e pode ser recombinado sobre o seu processo, porque
            o núcleo é multi-tenant desde o primeiro cliente.
          </p>
        </Revelar>

        <div className="mt-16 space-y-20 md:space-y-28">
          {comTela.map((c, i) => (
            <Revelar key={c.id}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="min-w-0">
                  <span className="mono text-[0.6875rem] font-bold tracking-[0.2em] text-[#22b8f0]">
                    PRODUTO {c.numero}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-[1.75rem]">
                    {c.titulo}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-[#93a6c4]">
                    {c.resumo}
                  </p>

                  <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {c.itens.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-[0.8125rem] leading-snug text-[#93a6c4]"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="mt-[0.15rem] flex-none text-[#2f6bff]"
                          aria-hidden
                        >
                          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
                          <path
                            d="M4.8 8.2l2.1 2.1 4.3-4.4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative min-w-0">
                  <div
                    className="brilho -inset-6 opacity-40"
                    style={{ background: "rgba(47,107,255,0.35)" }}
                    aria-hidden
                  />
                  <div className="relative">{TELAS[c.id]}</div>
                </div>
              </div>
            </Revelar>
          ))}
        </div>

        {/* as duas frentes que não são tela, e sim como a coisa é construída */}
        <div className="mt-20 grid gap-4 md:mt-28 md:grid-cols-2">
          {semTela.map((c, i) => (
            <Revelar key={c.id} delay={i * 70} className="h-full">
              <div className="cartao h-full p-6 md:p-8">
                <span className="mono text-[0.6875rem] font-bold tracking-[0.2em] text-[#22b8f0]">
                  PRODUTO {c.numero}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{c.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#93a6c4]">{c.resumo}</p>
                <ul className="mt-6 space-y-2.5 border-t border-[rgba(120,170,255,0.13)] pt-5">
                  {c.itens.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[0.8125rem] leading-snug text-[#7f90ad]"
                    >
                      <span className="mt-[0.6rem] h-px w-2.5 flex-none bg-[#2f6bff]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Revelar>
          ))}
        </div>

        <p className="mono mt-10 text-[0.6875rem] text-[#5d708f]">
          Telas dos sistemas em produção, com dados ilustrativos.
        </p>
      </div>
    </section>
  );
}
