"use client";

import { useState } from "react";
import Link from "next/link";

export type Solucao = {
  id: string;
  slug: string;
  curto: string;
  titulo: string;
  paraQuem: string;
  resumo: string;
  itens: string[];
  tela: React.ReactNode;
};

/**
 * Lista de soluções à esquerda, a tela do sistema à direita. No celular a
 * lista vira uma fileira de botões que rola de lado, e a tela vem embaixo.
 */
export default function Vitrine({ solucoes }: { solucoes: Solucao[] }) {
  const [ativa, setAtiva] = useState(0);
  const s = solucoes[ativa];

  return (
    <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
      <div role="tablist" aria-label="Soluções" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
        {solucoes.map((x, i) => {
          const on = i === ativa;
          return (
            <button
              key={x.id}
              type="button"
              role="tab"
              id={`aba-${x.id}`}
              aria-selected={on}
              aria-controls="vitrine-tela"
              onClick={() => setAtiva(i)}
              className={`flex-none rounded-2xl text-left transition-[background,box-shadow,border-color] duration-200 lg:w-full ${
                on
                  ? "border border-[#d6e2f7] bg-white px-4 py-3 shadow-[0_18px_40px_-26px_rgba(3,101,254,0.55)] lg:p-6"
                  : "border border-transparent px-4 py-3 hover:bg-white/70 lg:px-6 lg:py-5"
              }`}
            >
              <span className={`block whitespace-nowrap text-[1rem] font-semibold lg:whitespace-normal lg:text-[1.25rem] lg:tracking-[-0.015em] ${on ? "text-[var(--azul)] lg:text-[var(--tinta)]" : "text-[var(--tinta-2)] lg:text-[var(--tinta)]"}`}>
                <span className="lg:hidden">{x.curto}</span>
                <span className="hidden lg:inline">{x.titulo}</span>
              </span>
              <span className="mt-1 hidden text-[0.9375rem] text-[var(--tinta-2)] lg:block">{x.paraQuem}</span>
              {on && (
                <span className="hidden lg:block">
                  <span className="mt-4 block text-[1rem] leading-relaxed text-[var(--tinta)]">{x.resumo}</span>
                  <span className="mt-4 grid gap-2">
                    {x.itens.slice(0, 3).map((t) => (
                      <span key={t} className="flex gap-2.5 text-[0.9375rem] leading-snug text-[var(--tinta-2)]">
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="mt-0.5 flex-none text-[var(--azul)]" aria-hidden>
                          <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {t}
                      </span>
                    ))}
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div id="vitrine-tela" role="tabpanel" aria-labelledby={`aba-${s.id}`} className="min-w-0">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#e8f0ff] via-[#f1ecfd] to-[#e3f8fd] p-4 sm:p-8 lg:p-10">
          <div key={s.id} className="troca-vitrine">{s.tela}</div>
        </div>
        {/* no celular o texto da solução vem embaixo da tela */}
        <div key={`txt-${s.id}`} className="troca-vitrine mt-5 lg:hidden">
          <p className="text-[0.9375rem] text-[var(--tinta-2)]">{s.paraQuem}</p>
          <p className="mt-2 text-[1.0625rem] leading-relaxed text-[var(--tinta)]">{s.resumo}</p>
        </div>
        <Link
          href={`/${s.slug}`}
          className="group mt-5 inline-flex items-center gap-2 text-[1rem] font-semibold text-[var(--azul)]"
        >
          Conhecer {s.curto}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
            <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
