"use client";

import { useState } from "react";
import Link from "next/link";
import IconeWhatsapp from "./IconeWhatsapp";
import PainelOperacao from "./telas/PainelOperacao";
import ConversaMel from "./telas/ConversaMel";
import TelaFiscal from "./telas/TelaFiscal";
import TelaDre from "./telas/TelaDre";
import TelaRede from "./telas/TelaRede";
import { MSG_PADRAO, linkWhatsapp } from "@/lib/site";

const GARANTIAS = ["Diagnóstico sem custo", "Você fala com o dono", "No ar em fases, não em PDF"];

/**
 * O topo faz o que o nome da empresa promete: a pessoa diz qual é o negócio
 * dela e o palco troca para o sistema que serve aquele negócio. É o único
 * ponto ousado da página, o resto fica quieto em volta dele.
 * Cada tela é de um sistema em produção, com dados ilustrativos.
 */
const NEGOCIOS = [
  {
    id: "concessionaria",
    rotulo: "Concessionária",
    sistema: "CRM com agente de IA no WhatsApp",
    frase:
      "O lead do portal chega fora do horário e é respondido na hora. A IA conversa, entende o que a pessoa quer e passa para o vendedor certo.",
    slug: "crm-com-ia",
    curto: "o CRM com IA",
  },
  {
    id: "distribuidora",
    rotulo: "Distribuidora",
    sistema: "Portal de operações e fiscal",
    frase:
      "Pedido, compra, estoque e imposto no mesmo lugar. Alíquota nova entra pelo cadastro, sem esperar programador.",
    slug: "portal-fiscal",
    curto: "o portal fiscal",
  },
  {
    id: "grupo",
    rotulo: "Grupo que fecha o mês em planilha",
    sistema: "Rentabilidade e DRE gerencial",
    frase:
      "A planilha que decide o mês vira sistema, conferido linha a linha contra a origem. O desvio já chega com a ação e o valor em reais.",
    slug: "dre-gerencial",
    curto: "o DRE gerencial",
  },
  {
    id: "rede",
    rotulo: "Rede com várias casas",
    sistema: "Consolidação e BI de rede",
    frase:
      "Cada casa manda o dado do seu jeito, em banco ou planilha. Sai um número só, o mesmo para todo mundo na reunião.",
    slug: "consolidacao-de-rede",
    curto: "a consolidação",
  },
] as const;

function Tela({ id }: { id: (typeof NEGOCIOS)[number]["id"] }) {
  if (id === "concessionaria")
    return (
      <div className="relative">
        <div className="lg:mr-[11.5rem]">
          <PainelOperacao />
        </div>
        <div className="absolute -bottom-10 right-0 hidden lg:block">
          <ConversaMel />
        </div>
      </div>
    );
  if (id === "distribuidora") return <TelaFiscal />;
  if (id === "grupo") return <TelaDre />;
  return <TelaRede />;
}

export default function Hero() {
  const [ativo, setAtivo] = useState<(typeof NEGOCIOS)[number]["id"]>("concessionaria");
  const negocio = NEGOCIOS.find((n) => n.id === ativo)!;

  return (
    <section id="topo" className="relative pt-28 md:pt-36">
      <div className="wrap">
        <h1 className="display text-[clamp(3.25rem,10vw,9rem)] text-[var(--tinta)]">
          Tecnologia que se adapta ao seu negócio.
        </h1>

        <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <p className="apoio !text-[1.1875rem]">
            Sistemas sob medida com inteligência artificial, construídos por quem
            escreve o código e colocados no ar em fases. Você começa por onde
            dói mais.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/#contato" className="btn btn-azul">
              Agendar demonstração
            </Link>
            <a href={linkWhatsapp(MSG_PADRAO)} target="_blank" rel="noopener" className="btn btn-borda">
              <IconeWhatsapp /> Falar no WhatsApp
            </a>
          </div>
        </div>

        <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] text-[var(--tinta-2)]">
          {GARANTIAS.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none" className="flex-none text-[var(--sinal)]" aria-hidden>
                <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* o palco */}
      <div className="wrap mt-14 md:mt-20">
        <div className="entrada-produto campo-azul overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem]">
          <div className="border-b border-white/15 px-5 pt-6 pb-5 md:px-10 md:pt-9">
            <h2 id="seletor-titulo" className="subtitulo text-[1.375rem] md:text-[1.75rem]">
              Qual é o seu negócio?
            </h2>
            <div
              role="tablist"
              aria-labelledby="seletor-titulo"
              className="-mx-5 mt-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0"
            >
              {NEGOCIOS.map((n) => {
                const sel = n.id === ativo;
                return (
                  <button
                    key={n.id}
                    type="button"
                    role="tab"
                    id={`aba-${n.id}`}
                    aria-selected={sel}
                    aria-controls="palco-sistema"
                    onClick={() => setAtivo(n.id)}
                    className={`flex-none rounded-full px-5 py-3 text-[0.9375rem] font-semibold transition-[background-color,color] duration-150 ease-out ${
                      sel ? "bg-white text-[var(--azul-fundo)]" : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {n.rotulo}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="palco-sistema"
            role="tabpanel"
            aria-labelledby={`aba-${ativo}`}
            className="grid gap-10 px-5 py-8 md:px-10 md:py-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-center lg:gap-14"
          >
            <div key={`t-${ativo}`} className="troca min-w-0">
              <p className="text-[0.9375rem] font-medium text-[var(--azul-claro)]">O sistema para isso</p>
              <h3 className="subtitulo mt-2 text-[clamp(1.75rem,3vw,2.75rem)]">{negocio.sistema}</h3>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/85">{negocio.frase}</p>
              <Link
                href={`/${negocio.slug}`}
                className="mt-7 inline-flex items-center gap-2 border-b-2 border-white/40 pb-1 text-[1rem] font-semibold transition-colors duration-150 hover:border-white"
              >
                Ver {negocio.curto} por dentro
              </Link>
            </div>

            <div key={`s-${ativo}`} className="troca min-w-0 lg:pb-10">
              <Tela id={ativo} />
            </div>
          </div>
        </div>
        <p className="mt-4 text-[0.8125rem] text-[var(--tinta-3)]">
          Telas dos sistemas em produção, com dados ilustrativos.
        </p>
      </div>
    </section>
  );
}
