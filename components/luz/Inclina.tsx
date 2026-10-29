"use client";

import { useEffect, useRef } from "react";

/**
 * O painel do topo inclina de leve seguindo o mouse (só com mouse, só no
 * computador e só para quem não pediu menos movimento).
 */
export default function Inclina({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const pode = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!pode.matches) return;
    let q = 0;
    const mover = (e: PointerEvent) => {
      cancelAnimationFrame(q);
      q = requestAnimationFrame(() => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        el.style.transform = `rotateY(${nx * 6}deg) rotateX(${-ny * 4}deg)`;
      });
    };
    const sair = () => {
      el.style.transform = "";
    };
    window.addEventListener("pointermove", mover, { passive: true });
    document.addEventListener("pointerleave", sair);
    return () => {
      cancelAnimationFrame(q);
      window.removeEventListener("pointermove", mover);
      document.removeEventListener("pointerleave", sair);
    };
  }, []);

  return (
    <div ref={ref} className="transition-transform duration-700 ease-out [transform-style:preserve-3d]">
      {children}
    </div>
  );
}
