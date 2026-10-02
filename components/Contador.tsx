"use client";

import { useEffect, useRef } from "react";

/**
 * Número que sobe até o valor uma única vez, quando entra na tela.
 *
 * O HTML do servidor já sai com o valor final, uma vez só: busca, leitor de
 * tela e quem prefere menos movimento leem o número certo sem depender do JS.
 */
export default function Contador({ valor, duracao = 1200 }: { valor: string; duracao?: number }) {
  const alvo = Number(valor);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !Number.isFinite(alvo)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let quadro = 0;
    // O zero só aparece quando a contagem começa: se o observer não disparar,
    // fica o valor certo, nunca um 0 parado. Escreve direto no nó, sem render.
    const subir = () => {
      el.textContent = "0";
      const inicio = performance.now();
      const passo = (agora: number) => {
        const t = Math.min(1, (agora - inicio) / duracao);
        const suave = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(alvo * suave));
        if (t < 1) quadro = requestAnimationFrame(passo);
      };
      quadro = requestAnimationFrame(passo);
    };

    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        obs.disconnect();
        subir();
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(quadro);
    };
  }, [alvo, duracao]);

  return (
    <span ref={ref}>{valor}</span>
  );
}
