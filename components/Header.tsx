"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Marca from "./Marca";
import { navegacao, produtos } from "@/lib/site";

export default function Header() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8);
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
      className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 ${
        rolou ? "border-b border-[#e1e7f1] shadow-[0_6px_24px_-18px_rgba(11,22,48,0.4)]" : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-[4.5rem]">
        <Link href="/" className="flex items-center" aria-label="InnovAdapt, início">
          <Marca className="text-[1.0625rem] md:text-[1.125rem]" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {/* Produtos abre no hover e no foco do teclado */}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.9375rem] font-medium text-[#3d4b66] transition-colors hover:bg-[#f3f6fb] hover:text-[#0b1630] group-focus-within:text-[#0b1630]"
            >
              Produtos
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180">
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full w-[24rem] pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="rounded-2xl border border-[#e1e7f1] bg-white p-2 shadow-[0_24px_60px_-24px_rgba(11,22,48,0.35)]">
                {produtos.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/${p.slug}`} className="block rounded-xl px-4 py-3 transition-colors hover:bg-[#f3f6fb]">
                      <span className="block text-[0.9375rem] font-semibold text-[#0b1630]">{p.titulo}</span>
                      <span className="mt-0.5 block text-[0.8125rem] leading-snug text-[#6b7894]">{p.paraQuem}</span>
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
              className="rounded-full px-4 py-2 text-[0.9375rem] font-medium text-[#3d4b66] transition-colors hover:bg-[#f3f6fb] hover:text-[#0b1630]"
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e1e7f1] text-[#0b1630] lg:hidden"
        >
          <span className="flex w-5 flex-col gap-[5px]">
            <span className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${aberto ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`h-[1.5px] w-full bg-current transition-opacity duration-200 ${aberto ? "opacity-0" : ""}`} />
            <span className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${aberto ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {aberto && (
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[#e1e7f1] bg-white lg:hidden">
          <nav className="wrap flex flex-col gap-1 py-6">
            <p className="px-3 pb-1 text-[0.8125rem] font-medium text-[#6b7894]">Produtos</p>
            {produtos.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                onClick={() => setAberto(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-[#0b1630] hover:bg-[#f3f6fb]"
              >
                {p.titulo}
              </Link>
            ))}
            <div className="my-3 h-px bg-[#e1e7f1]" />
            {navegacao.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setAberto(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-[#3d4b66] hover:bg-[#f3f6fb]"
              >
                {item.label}
              </a>
            ))}
            <Link href="/#contato" onClick={() => setAberto(false)} className="btn btn-azul mt-4">
              Agendar demonstração
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
