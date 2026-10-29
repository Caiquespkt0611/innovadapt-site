"use client";

import { useState } from "react";
import { faq } from "@/lib/site";

/** Sanfona de perguntas: a primeira já abre. Uma aberta por vez. */
export default function Perguntas() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="titulo-faq" className="bg-[var(--ceu)] py-20 md:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="revela">
          <h2 id="titulo-faq" className="h-secao">As objeções, respondidas antes da reunião</h2>
          <p className="p-secao mt-5 max-w-md">
            Ficou alguma de fora? Pergunte direto para quem vai construir o seu
            sistema.
          </p>
        </div>

        <ul className="revela grid gap-3">
          {faq.map((f, i) => {
            const on = aberta === i;
            return (
              <li key={f.p} className={`overflow-hidden rounded-2xl bg-white transition-shadow ${on ? "shadow-[0_18px_40px_-26px_rgba(9,20,38,0.35)]" : ""}`}>
                <button
                  type="button"
                  aria-expanded={on}
                  aria-controls={`resp-${i}`}
                  onClick={() => setAberta(on ? null : i)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[1.0625rem] font-semibold text-[var(--tinta)] md:px-6"
                >
                  {f.p}
                  <span
                    aria-hidden
                    className={`grid h-8 w-8 flex-none place-items-center rounded-full transition-[transform,background] duration-300 ${on ? "rotate-45 bg-[var(--azul)] text-white" : "bg-[var(--ceu)] text-[var(--tinta)]"}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`resp-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <p className="min-h-0 overflow-hidden px-5 text-[1rem] leading-relaxed text-[var(--tinta-2)] md:px-6">
                    <span className="block pb-5">{f.r}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
