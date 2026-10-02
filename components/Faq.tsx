"use client";

import { useState } from "react";
import { faq } from "@/lib/site";

export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="faq" className="secao bg-[#f3f6fb]">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <h2 className="titulo">As objeções, respondidas antes da reunião</h2>

        <div className="space-y-3">
          {faq.map((item, i) => {
            const ativo = aberto === i;
            return (
              <div key={item.p} className="rounded-2xl border border-[#e1e7f1] bg-white">
                <h3>
                  <button
                    type="button"
                    onClick={() => setAberto(ativo ? null : i)}
                    aria-expanded={ativo}
                    className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-[1.0625rem] font-semibold text-[#0b1630]">{item.p}</span>
                    <span
                      className={`mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full transition-[transform,background] duration-300 ${
                        ativo ? "rotate-45 bg-[#2647f0] text-white" : "bg-[#eaf0ff] text-[#2647f0]"
                      }`}
                      aria-hidden
                    >
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: ativo ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pr-16 text-[0.9375rem] leading-relaxed text-[#3d4b66]">{item.r}</p>
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
