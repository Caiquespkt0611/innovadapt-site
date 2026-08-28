"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Aparece ao entrar na viewport.
 *
 * A visibilidade do conteúdo não pode depender de um único mecanismo: um
 * IntersectionObserver que não dispara deixaria a seção em opacity:0 para
 * sempre. Por isso são três camadas — o observer, uma conferência de geometria
 * no scroll, e o CSS, que só esconde quando existe JS para revelar de volta.
 */
export default function Revelar({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "tr" | "section" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let vivo = true;
    let agendado = false;

    const mostrar = () => {
      if (!vivo) return;
      vivo = false;
      setVisivel(true);
      obs?.disconnect();
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };

    const dentroDaTela = () => {
      const r = el.getBoundingClientRect();
      const alturaTela = window.innerHeight || document.documentElement.clientHeight;
      return r.top < alturaTela - 40 && r.bottom > 0;
    };

    const aoRolar = () => {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(() => {
        agendado = false;
        if (dentroDaTela()) mostrar();
      });
    };

    const obs =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            ([entrada]) => {
              if (entrada.isIntersecting) mostrar();
            },
            { rootMargin: "-40px 0px", threshold: 0.01 },
          )
        : null;

    obs?.observe(el);
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar, { passive: true });
    aoRolar();

    return () => {
      vivo = false;
      obs?.disconnect();
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };
  }, []);

  const Componente = Tag as React.ElementType;

  return (
    <Componente
      ref={ref}
      data-visivel={visivel}
      style={{ transitionDelay: `${delay}ms` }}
      className={`revelar ${className}`}
    >
      {children}
    </Componente>
  );
}
