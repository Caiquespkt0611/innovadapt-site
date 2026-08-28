import PainelOperacao from "./telas/PainelOperacao";
import ConversaMel from "./telas/ConversaMel";
import FundoTech from "./FundoTech";
import { provas } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
      style={{
        background:
          "radial-gradient(120% 90% at 78% 8%, rgba(47,107,255,0.20), transparent 58%), radial-gradient(90% 70% at 8% 4%, rgba(34,184,240,0.13), transparent 60%), linear-gradient(180deg, #061024 0%, #050a18 72%)",
      }}
    >
      <FundoTech />
      <div className="grade" aria-hidden />
      <div className="pontos" aria-hidden />

      <div className="wrap relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
          {/* texto */}
          <div className="min-w-0">
            <p className="sobrancelha">
              Varejo automotivo <i>· dados e IA</i>
            </p>

            <h1 className="mt-6 max-w-[13ch] text-[clamp(2.15rem,4.8vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-white">
              A plataforma que <span className="texto-gradiente">executa</span> a
              operação
            </h1>
            <p className="mt-4 text-[1.0625rem] font-medium text-[#7fb0ff]">
              Dashboard mostra o que aconteceu. O nosso sistema faz acontecer.
            </p>

            <p className="lead mt-6">
              CRM com agente de IA atendendo no WhatsApp, portal de operações com
              a regra fiscal certa, DRE por departamento e consolidação de rede.
              Tudo conectado na mesma base, e{" "}
              <span className="destaque">construído sob medida para a sua operação</span>.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contato" className="btn btn-primario">
                Agendar demonstração
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#plataforma" className="btn btn-secundario">
                Ver as telas
              </a>
            </div>
          </div>

          {/* produto */}
          <div className="relative min-w-0">
            <div
              className="brilho -right-10 -top-16 h-64 w-64 opacity-60"
              style={{ background: "rgba(47,107,255,0.5)" }}
              aria-hidden
            />
            <div className="relative lg:pb-4">
              <PainelOperacao compacto />
            </div>
            <ConversaMel className="-mt-20 ml-auto sm:-mt-24 lg:absolute lg:-bottom-14 lg:-right-9 lg:mt-0" />
          </div>
        </div>

        {/* provas */}
        <dl className="mt-20 grid grid-cols-2 border-t border-[rgba(120,170,255,0.14)] md:mt-24 md:grid-cols-4">
          {provas.map((p, i) => (
            <div
              key={p.label}
              className={`border-b border-[rgba(120,170,255,0.14)] py-6 pr-5 md:border-b-0 md:py-8 ${
                i % 2 === 1 ? "border-l border-[rgba(120,170,255,0.14)] pl-5" : ""
              } ${i > 0 ? "md:border-l md:border-[rgba(120,170,255,0.14)] md:pl-7" : ""}`}
            >
              <dt className="mono flex items-baseline gap-1.5 text-[1.75rem] font-bold leading-none tracking-tight text-white md:text-[2.25rem]">
                {p.valor}
                <span className="text-xs font-medium text-[#22b8f0] md:text-sm">
                  {p.unidade}
                </span>
              </dt>
              <dd className="mt-2.5 text-[0.8125rem] leading-snug text-[#5d708f]">
                {p.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
