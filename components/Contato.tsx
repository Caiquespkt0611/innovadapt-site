"use client";

import { useState } from "react";
import { contato, linkWhatsapp } from "@/lib/site";

const ASSUNTOS = [
  "CRM com agente de IA",
  "Portal de operações e fiscal",
  "Rentabilidade e DRE gerencial",
  "Consolidação e BI de rede",
  "Software sob medida",
  "Ainda não sei, quero um diagnóstico",
];

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    assunto: ASSUNTOS[0],
    mensagem: "",
  });

  const corpo = [
    `Nome: ${form.nome}`,
    `Empresa: ${form.empresa}`,
    `Telefone: ${form.telefone}`,
    `Assunto: ${form.assunto}`,
    "",
    form.mensagem,
  ].join("\n");

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (contato.whatsapp) {
      window.open(linkWhatsapp(corpo), "_blank", "noopener");
      return;
    }
    window.location.href = `mailto:${contato.email}?subject=${encodeURIComponent(
      `Diagnóstico InnovAdapt: ${form.empresa || form.nome || "novo contato"}`,
    )}&body=${encodeURIComponent(corpo)}`;
  };

  const campo =
    "w-full rounded-lg border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[#5d708f] outline-none transition-colors focus:border-[#22b8f0]/60 focus:bg-white/[0.05]";

  return (
    <section id="contato" className="secao fio-topo">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-[#0b1424]">
          <div className="brilho !top-[-24rem] opacity-80" aria-hidden />

          <div className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:p-16">
            <div>
              <p className="sobrancelha">Contato <i>· 08</i></p>
              <h2 className="titulo-secao mt-6">
                Comece pelo diagnóstico,
                <br />
                não pela proposta
              </h2>
              <p className="lead mt-6">
                A primeira conversa é sobre a sua operação: onde o lead se perde,
                qual planilha decide o mês e o que hoje só uma pessoa sabe fazer.
                A proposta vem depois, e vem com a conta aberta.
              </p>

              <ul className="mt-9 space-y-4">
                {[
                  "Diagnóstico sem custo e sem compromisso",
                  "Escopo e preço com origem, a partir do custo base",
                  "Você fala com o dono, não com vendedor",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[#e9eefa]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="mt-px flex-none text-[#22b8f0]"
                      aria-hidden
                    >
                      <path
                        d="M3.5 9.5l3.5 3.5 7.5-8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-[rgba(120,170,255,0.15)] pt-6">
                <p className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#5d708f]">
                  Ou direto
                </p>
                <a
                  href={`mailto:${contato.email}`}
                  className="mt-2 inline-block text-base font-semibold text-white transition-colors hover:text-[#22b8f0]"
                >
                  {contato.email}
                </a>
              </div>
            </div>

            <form onSubmit={enviar} className="space-y-3.5">
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="sr-only">
                    Nome
                  </label>
                  <input
                    id="nome"
                    required
                    className={campo}
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="sr-only">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    required
                    className={campo}
                    placeholder="Empresa"
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telefone" className="sr-only">
                  Telefone
                </label>
                <input
                  id="telefone"
                  className={campo}
                  placeholder="Telefone ou WhatsApp"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="assunto" className="sr-only">
                  Assunto
                </label>
                <select
                  id="assunto"
                  className={`${campo} appearance-none`}
                  value={form.assunto}
                  onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                >
                  {ASSUNTOS.map((a) => (
                    <option key={a} value={a} className="bg-[#0b1424]">
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="sr-only">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  className={`${campo} resize-none`}
                  placeholder="Conte em duas linhas onde dói hoje."
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primario w-full">
                Enviar e agendar
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <p className="text-center text-xs leading-relaxed text-[#5d708f]">
                Abre o seu app de e-mail com a mensagem pronta. Nenhum dado é
                armazenado neste site.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
