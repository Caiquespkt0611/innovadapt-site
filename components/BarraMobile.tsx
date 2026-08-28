"use client";

import { useEffect, useState } from "react";
import { contato } from "@/lib/site";

/**
 * Barra de ação fixa no rodapé, só no celular. Aparece depois do hero e some
 * quando o formulário entra na tela — para não cobrir o campo que a pessoa
 * está preenchendo.
 */
export default function BarraMobile() {
  const [mostra, setMostra] = useState(false);

  useEffect(() => {
    const alvo = document.querySelector("#contato");

    const avaliar = () => {
      const passouDoHero = window.scrollY > window.innerHeight * 0.85;
      const formNaTela = alvo
        ? alvo.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      setMostra(passouDoHero && !formNaTela);
    };

    let agendado = false;
    const aoRolar = () => {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(() => {
        agendado = false;
        avaliar();
      });
    };

    avaliar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar, { passive: true });
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };
  }, []);

  return (
    <div
      aria-hidden={!mostra}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-[#05070d]/92 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
        mostra ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.8125rem] font-semibold text-white">
            Diagnóstico sem custo
          </p>
          <p className="truncate text-[0.6875rem] text-[#5f6c85]">
            Fale com quem escreve o código
          </p>
        </div>
        <a
          href="#contato"
          tabIndex={mostra ? 0 : -1}
          className="btn btn-primario flex-none !px-5 !py-2.5 !text-sm"
        >
          Agendar
        </a>
        <a
          href={`mailto:${contato.email}`}
          tabIndex={mostra ? 0 : -1}
          aria-label="Enviar e-mail"
          className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-white/[0.14] text-white transition-colors hover:border-white/30 hover:bg-white/5"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect
              x="2.5"
              y="5"
              width="19"
              height="14"
              rx="2.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M3 7l9 6 9-6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
