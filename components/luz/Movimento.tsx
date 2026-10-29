"use client";

import { useEffect } from "react";

/**
 * Revela as partes da página quando entram na tela. Só esconde o que ainda
 * está abaixo da dobra no momento em que a página abre, então nada pisca e,
 * sem JS ou com menos movimento, tudo já aparece normal.
 */
export default function Movimento() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const alvos = [...document.querySelectorAll<HTMLElement>(".revela, .linha-metodo")].filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.92,
    );
    alvos.forEach((el) => el.setAttribute("data-espera", ""));

    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          e.target.removeAttribute("data-espera");
          obs.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    alvos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
