"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Marca from "./Marca";
import { navegacao, produtos } from "@/lib/site";

export default function Header() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 16);
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou
          ? "border-b border-[rgba(120,170,255,0.14)] bg-[#050a18]/90 backdrop-blur-2xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center" aria-label="InnovAdapt, início">
          <Marca className="text-[1.0625rem] md:text-[1.1875rem]" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {/* Produtos: abre no hover e no foco do teclado, como o menu do Dealer */}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-[#93a6c4] transition-colors hover:bg-white/5 hover:text-white group-focus-within:text-white"
            >
              Produtos
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180">
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full w-[22rem] pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="rounded-xl border border-[rgba(120,170,255,0.18)] bg-[#0a1324] p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]">
                {produtos.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/${p.slug}`} className="block rounded-lg px-3.5 py-3 transition-colors hover:bg-white/[0.05]">
                      <span className="block text-sm font-semibold text-white">{p.titulo}</span>
                      <span className="mt-0.5 block text-xs leading-snug text-[#7f90ad]">{p.paraQuem}</span>
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
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#93a6c4] transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/#contato" className="btn btn-primario !px-5 !py-2.5 !text-[0.8125rem]">
            Agendar demonstração
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
        >
          <span className="flex w-5 flex-col gap-[5px]">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                aberto ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-200 ${
                aberto ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                aberto ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {aberto && (
        <div className="border-t border-[rgba(120,170,255,0.14)] bg-[#050a18]/98 backdrop-blur-2xl lg:hidden">
          <nav className="wrap flex flex-col gap-1 py-5">
            <p className="px-3 pb-1 text-xs font-medium text-[#5d708f]">Produtos</p>
            {produtos.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                onClick={() => setAberto(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-white transition-colors hover:bg-white/5"
              >
                {p.titulo}
              </Link>
            ))}
            <div className="my-2 h-px bg-[rgba(120,170,255,0.14)]" />
            {navegacao.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setAberto(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[#93a6c4] transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/#contato"
              onClick={() => setAberto(false)}
              className="btn btn-primario mt-3"
            >
              Agendar demonstração
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
