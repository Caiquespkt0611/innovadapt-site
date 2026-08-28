"use client";

import { useState } from "react";
import { faq } from "@/lib/site";

export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="faq" className="secao fio-topo bg-[#071022]">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="sobrancelha">Perguntas <i>· 07</i></p>
            <h2 className="titulo-secao mt-6">
              As objeções, respondidas antes da{" "}
              reunião
            </h2>
          </div>

          <div className="divide-y divide-[rgba(120,170,255,0.14)] border-y border-[rgba(120,170,255,0.15)]">
            {faq.map((item, i) => {
              const ativo = aberto === i;
              return (
                <div key={item.p}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setAberto(ativo ? null : i)}
                      aria-expanded={ativo}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    >
                      <span
                        className={`text-base font-semibold transition-colors ${
                          ativo ? "text-[#22b8f0]" : "text-white"
                        }`}
                      >
                        {item.p}
                      </span>
                      <span
                        className={`mt-1 flex h-5 w-5 flex-none items-center justify-center transition-transform duration-300 ${
                          ativo ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M7 1v12M1 7h12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            className={ativo ? "text-[#22b8f0]" : "text-[#5d708f]"}
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: ativo ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-[#93a6c4]">
                        {item.r}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
