"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Marca from "./Marca";
import { navegacao, produtos } from "@/lib/site";

/**
 * Menu em pílula flutuante, como no topo escolhido (29/10/2026). Fica
 * transparente sobre o topo e ganha fundo branco ao rolar.
 */
export default function Header() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={`mx-auto flex h-14 max-w-[1320px] items-center justify-between rounded-full border pl-4 pr-2 transition-[background,border-color,box-shadow] duration-300 md:h-16 md:pl-6 ${
          rolou || aberto
            ? "border-[#e3e9f3] bg-white/90 shadow-[0_12px_30px_-18px_rgba(9,20,38,0.35)] backdrop-blur-xl"
            : "border-white/60 bg-white/60 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex items-center" aria-label="InnovAdapt, início">
          <Marca className="text-[1rem] md:text-[1.0625rem]" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.9375rem] font-medium text-[var(--tinta-2)] transition-colors hover:text-[var(--tinta)] group-focus-within:text-[var(--tinta)]"
            >
              Soluções
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180">
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="cartao-luz p-2">
                {produtos.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/${p.slug}`} className="block rounded-2xl px-4 py-3 transition-colors hover:bg-[var(--ceu)]">
                      <span className="block text-[0.9375rem] font-semibold text-[var(--tinta)]">{p.titulo}</span>
                      <span className="mt-0.5 block text-[0.8125rem] leading-snug text-[var(--tinta-2)]">{p.paraQuem}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.9375rem] font-medium text-[var(--tinta-2)] transition-colors hover:text-[var(--tinta)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/#contato" className="btn btn-azul">
            Agendar demonstração
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--tinta)] text-white lg:hidden"
        >
          <span className="flex w-[18px] flex-col gap-[5px]">
            <span className={`h-[2px] w-full rounded bg-current transition-transform duration-300 ${aberto ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-full rounded bg-current transition-opacity duration-200 ${aberto ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-full rounded bg-current transition-transform duration-300 ${aberto ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {aberto && (
        <nav className="cartao-luz mx-auto mt-2 max-h-[calc(100dvh-5.5rem)] max-w-[1320px] overflow-y-auto p-3 lg:hidden">
          <p className="px-3 pb-1 pt-2 text-[0.8125rem] font-semibold text-[var(--tinta-2)]">Soluções</p>
          {produtos.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              onClick={() => setAberto(false)}
              className="block rounded-2xl px-3 py-3 text-[1.0625rem] font-semibold text-[var(--tinta)] active:bg-[var(--ceu)]"
            >
              {p.titulo}
            </Link>
          ))}
          <div className="my-2 h-px bg-[#e6ecf5]" />
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setAberto(false)}
              className="block rounded-2xl px-3 py-3 text-base font-medium text-[var(--tinta-2)] active:bg-[var(--ceu)]"
            >
              {item.label}
            </a>
          ))}
          <Link href="/#contato" onClick={() => setAberto(false)} className="btn btn-azul mt-3 w-full">
            Agendar demonstração
          </Link>
        </nav>
      )}
    </header>
  );
}
