import PainelOperacao from "./telas/PainelOperacao";
import ConversaMel from "./telas/ConversaMel";
import FundoTech from "./FundoTech";
import Link from "next/link";
import IconeWhatsapp from "./IconeWhatsapp";
import { MSG_PADRAO, linkWhatsapp, produtos } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16"
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
            <p className="sobrancelha">Dados e IA para o varejo automotivo</p>

            <h1 className="mt-6 max-w-[13ch] text-[clamp(2.15rem,4.8vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-white">
              A plataforma que executa a operação
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
              </a>
              <a href={linkWhatsapp(MSG_PADRAO)} target="_blank" rel="noopener" className="btn btn-secundario">
                <IconeWhatsapp /> Falar no WhatsApp
              </a>
            </div>

            {/* o que tira o risco de pedir a conversa, logo abaixo do botão */}
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.8125rem] text-[#93a6c4]">
              {["Diagnóstico sem custo", "Você fala com o dono", "Primeira fase no ar, não em PDF"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" className="flex-none text-[#2ee6a8]" aria-hidden>
                      <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* produto */}
          <div className="entrada-produto relative min-w-0">
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

        {/* trilha dos produtos: cada um leva à sua página, como a do Dealer,
            mas com o que o produto faz em vez de só o nome */}
        <nav aria-label="Produtos" className="mt-16 md:mt-20">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {produtos.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="group flex h-full items-start justify-between gap-3 rounded-xl border border-[rgba(120,170,255,0.16)] bg-[rgba(10,19,36,0.7)] px-4 py-4 backdrop-blur transition-colors hover:border-[rgba(120,170,255,0.4)] hover:bg-[rgba(16,28,48,0.9)]"
                >
                  <span>
                    <span className="block text-[0.9375rem] font-semibold text-white">{p.curto}</span>
                    <span className="mt-1 block text-[0.8125rem] leading-snug text-[#7f90ad]">{p.paraQuem}</span>
                  </span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-1 flex-none text-[#5d708f] transition-colors group-hover:text-[#22b8f0]">
                    <path d="M6 3.5l4.5 4.5L6 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
