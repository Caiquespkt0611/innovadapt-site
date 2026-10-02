"use client";

import { useEffect, useRef } from "react";

/**
 * Número que sobe até o valor uma única vez, quando entra na tela.
 *
 * O HTML do servidor já sai com o valor final: busca, leitor de tela e quem
 * prefere menos movimento leem o número certo sem depender do JS.
 */
export default function Contador({ valor, duracao = 1200 }: { valor: string; duracao?: number }) {
  const alvo = Number(valor);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !Number.isFinite(alvo)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let quadro = 0;
    const subir = () => {
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
      { threshold: 0.6 },
    );
    // escreve direto no nó: são 60 quadros por segundo, não vale render do React
    el.textContent = "0";
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(quadro);
    };
  }, [alvo, duracao]);

  return (
    <span>
      <span className="sr-only">{valor}</span>
      <span ref={ref} aria-hidden>
        {valor}
      </span>
    </span>
  );
}
