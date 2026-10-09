"use client";

import { useState } from "react";
import { faq } from "@/lib/site";

export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="faq" className="secao bg-[var(--nevoa)]">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <h2 className="titulo lg:sticky lg:top-28 lg:self-start">As objeções, respondidas antes da reunião</h2>

        <div className="border-t border-[var(--tinta)]">
          {faq.map((item, i) => {
            const ativo = aberto === i;
            return (
              <div key={item.p} className="border-b border-[var(--linha)]">
                <h3>
                  <button
                    type="button"
                    onClick={() => setAberto(ativo ? null : i)}
                    aria-expanded={ativo}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="subtitulo text-[1.25rem] md:text-[1.5rem]">{item.p}</span>
                    <span
                      className={`mt-1 grid h-8 w-8 flex-none place-items-center rounded-full transition-[transform,background-color,color] duration-200 ease-out ${
                        ativo ? "rotate-45 bg-[var(--azul)] text-white" : "bg-white text-[var(--azul)]"
                      }`}
                      aria-hidden
                    >
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: ativo ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 pr-12 text-[1rem] leading-relaxed text-[var(--tinta-2)]">{item.r}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
