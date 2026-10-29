"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

// Aviso de cookies (LGPD). Hoje o site só usa cookies essenciais, então basta o "Aceitar".
// Se um dia entrar Pixel ou Analytics, ele só pode ligar com cookiesAceitos() === true.
const CHAVE = "innovadapt:cookies";
const EVENTO = "innovadapt:cookies";
let naMemoria = false;

export function cookiesAceitos() {
  try {
    if (window.localStorage.getItem(CHAVE) === "aceito") return true;
  } catch {
    // navegador sem localStorage: usa a memória
  }
  return naMemoria;
}

function aceitar() {
  naMemoria = true;
  try {
    window.localStorage.setItem(CHAVE, "aceito");
  } catch {
    // fica só na memória
  }
  window.dispatchEvent(new Event(EVENTO));
}

function ouvir(avisar: () => void) {
  window.addEventListener(EVENTO, avisar);
  return () => window.removeEventListener(EVENTO, avisar);
}

export default function AvisoCookies() {
  // No servidor responde "aceito" para o aviso não piscar antes de o navegador ler a escolha.
  const aceito = useSyncExternalStore(ouvir, cookiesAceitos, () => true);
  if (aceito) return null;
  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-50 mx-auto flex max-w-xl flex-col gap-3 rounded-2xl border border-[var(--linha)] bg-white p-4 shadow-[0_18px_50px_-18px_rgba(11,22,48,0.45)] sm:flex-row sm:items-center lg:bottom-6"
    >
      <p className="text-[15px] leading-snug text-[var(--tinta-2)]">
        Usamos cookies para o site funcionar e melhorar sua experiência.{" "}
        <Link href="/privacidade" className="font-semibold text-[var(--azul)] underline underline-offset-2">
          Política de privacidade
        </Link>
      </p>
      <button type="button" onClick={aceitar} className="btn btn-azul flex-none justify-center">
        Aceitar
      </button>
    </div>
  );
}
