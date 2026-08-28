"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navegacao } from "@/lib/site";

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
          ? "border-b border-white/[0.07] bg-[#05070d]/94 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-20">
        <a href="#topo" className="flex items-center" aria-label="InnovAdapt — início">
          <Image
            src="/logo-transparent.png"
            alt="InnovAdapt"
            width={180}
            height={111}
            priority
            className="h-9 w-auto object-contain md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#98a4bb] transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contato" className="btn btn-primario !px-5 !py-2.5 !text-sm">
            Agendar diagnóstico
          </a>
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
        <div className="border-t border-white/[0.07] bg-[#05070d]/98 backdrop-blur-xl lg:hidden">
          <nav className="wrap flex flex-col gap-1 py-5">
            {navegacao.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setAberto(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[#98a4bb] transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setAberto(false)}
              className="btn btn-primario mt-3"
            >
              Agendar diagnóstico
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
