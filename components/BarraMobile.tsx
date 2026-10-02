"use client";

import { useEffect, useState } from "react";
import { contato, linkWhatsapp, MSG_PADRAO } from "@/lib/site";
import Link from "next/link";
import IconeWhatsapp from "./IconeWhatsapp";

/**
 * Barra de ação fixa no rodapé, só no celular. Aparece depois do hero e some
 * quando o formulário entra na tela, para não cobrir o campo que a pessoa
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
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#e1e7f1] bg-white/95 shadow-[0_-10px_30px_-20px_rgba(11,22,48,0.35)] backdrop-blur-2xl transition-transform duration-300 lg:hidden ${
        mostra ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.875rem] font-semibold text-[#0b1630]">
            Diagnóstico sem custo
          </p>
          <p className="truncate text-[0.75rem] text-[#6b7894]">
            Fale com quem escreve o código
          </p>
        </div>
        <Link
          href="/#contato"
          tabIndex={mostra ? 0 : -1}
          className="btn btn-azul flex-none"
        >
          Agendar
        </Link>
        <a
          href={contato.whatsapp ? linkWhatsapp(MSG_PADRAO) : `mailto:${contato.email}`}
          target={contato.whatsapp ? "_blank" : undefined}
          rel="noopener"
          tabIndex={mostra ? 0 : -1}
          aria-label={contato.whatsapp ? "Falar no WhatsApp" : "Enviar e-mail"}
          className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-[#d6deeb] text-[#12b886] transition-colors hover:border-[#9fb3d6]"
        >
          <IconeWhatsapp tamanho={20} />
        </a>
      </div>
    </div>
  );
}
