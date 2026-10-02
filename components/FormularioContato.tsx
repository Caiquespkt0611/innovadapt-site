"use client";

import { useState } from "react";
import { MSG_PADRAO, contato, linkWhatsapp } from "@/lib/site";
import Link from "next/link";
import IconeWhatsapp from "./IconeWhatsapp";

const LOJAS = ["1 loja", "2 a 5 lojas", "6 a 10 lojas", "Mais de 10 lojas"];

export const ASSUNTOS = [
  "CRM com agente de IA",
  "Portal de operações e fiscal",
  "Rentabilidade e DRE gerencial",
  "Consolidação e BI de rede",
  "Software sob medida",
  "Ainda não sei, quero um diagnóstico",
];

type Estado = "editando" | "enviando" | "recebido" | "erro";

/**
 * O formulário grava: vai para /api/contato, que entrega o lead no CRM da
 * InnovAdapt. Se o envio falhar, diz o que houve e oferece o WhatsApp do
 * comercial com a mensagem já escrita, para o contato não se perder.
 */
export default function FormularioContato({ assuntoInicial = ASSUNTOS[0] }: { assuntoInicial?: string }) {
  const [estado, setEstado] = useState<Estado>("editando");
  const [erro, setErro] = useState("");
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    lojas: "",
    assunto: assuntoInicial,
    mensagem: "",
    site: "",
  });

  const resumo = [
    MSG_PADRAO,
    "",
    `Nome: ${form.nome}`,
    form.empresa && `Empresa: ${form.empresa}`,
    form.lojas && `Lojas: ${form.lojas}`,
    `Interesse: ${form.assunto}`,
    form.mensagem,
  ]
    .filter(Boolean)
    .join("\n");

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("enviando");
    setErro("");
    try {
      const r = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, pagina: window.location.pathname }),
      });
      const dados = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(dados.erro || "Não conseguimos registrar agora.");
      setEstado("recebido");
    } catch (falha) {
      setErro(falha instanceof Error ? falha.message : "Não conseguimos registrar agora.");
      setEstado("erro");
    }
  };

  const campo =
    "w-full rounded-lg border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[#5d708f] outline-none transition-colors focus:border-[#22b8f0]/60 focus:bg-white/[0.05]";

  if (estado === "recebido") {
    return (
      <div role="status" className="flex h-full flex-col justify-center rounded-xl border border-[#2ee6a8]/30 bg-[#2ee6a8]/[0.06] p-7">
        <p className="text-lg font-semibold text-white">Recebemos, {form.nome.split(" ")[0]}.</p>
        <p className="mt-2 text-sm leading-relaxed text-[#93a6c4]">
          O Roger vai falar com você no telefone que você deixou. Se preferir
          adiantar a conversa, chame agora no WhatsApp.
        </p>
        {contato.whatsapp && (
          <a
            href={linkWhatsapp(resumo)}
            target="_blank"
            rel="noopener"
            className="btn btn-secundario mt-6 self-start"
          >
            <IconeWhatsapp /> Falar no WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="space-y-3.5">
      {/* armadilha para robô: escondida de gente e de leitor de tela */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="site">Não preencha</label>
        <input
          id="site"
          tabIndex={-1}
          autoComplete="off"
          value={form.site}
          onChange={(e) => setForm({ ...form, site: e.target.value })}
        />
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="sr-only">Nome</label>
          <input
            id="nome"
            required
            autoComplete="name"
            className={campo}
            placeholder="Seu nome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="empresa" className="sr-only">Empresa</label>
          <input
            id="empresa"
            autoComplete="organization"
            className={campo}
            placeholder="Empresa ou grupo"
            value={form.empresa}
            onChange={(e) => setForm({ ...form, empresa: e.target.value })}
          />
        </div>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="telefone" className="sr-only">WhatsApp com DDD</label>
          <input
            id="telefone"
            required
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={campo}
            placeholder="WhatsApp com DDD"
            value={form.telefone}
            onChange={(e) => setForm({ ...form, telefone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lojas" className="sr-only">Quantas lojas</label>
          <select
            id="lojas"
            className={`${campo} appearance-none`}
            value={form.lojas}
            onChange={(e) => setForm({ ...form, lojas: e.target.value })}
          >
            <option value="" className="bg-[#0b1424]">Quantas lojas?</option>
            {LOJAS.map((l) => (
              <option key={l} value={l} className="bg-[#0b1424]">{l}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="assunto" className="sr-only">Interesse</label>
        <select
          id="assunto"
          className={`${campo} appearance-none`}
          value={form.assunto}
          onChange={(e) => setForm({ ...form, assunto: e.target.value })}
        >
          {ASSUNTOS.map((a) => (
            <option key={a} value={a} className="bg-[#0b1424]">{a}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className="sr-only">Mensagem</label>
        <textarea
          id="mensagem"
          rows={4}
          className={`${campo} resize-none`}
          placeholder="Conte em duas linhas onde dói hoje (opcional)."
          value={form.mensagem}
          onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
        />
      </div>

      {estado === "erro" && (
        <div role="alert" className="rounded-lg border border-[#ff5f6d]/30 bg-[#ff5f6d]/[0.07] px-4 py-3 text-sm text-[#ffd0d4]">
          {erro}
          {contato.whatsapp && (
            <a href={linkWhatsapp(resumo)} target="_blank" rel="noopener" className="ml-1 font-semibold text-white underline">
              Abrir o WhatsApp com a mensagem pronta
            </a>
          )}
        </div>
      )}

      <button type="submit" disabled={estado === "enviando"} className="btn btn-primario w-full disabled:opacity-60">
        {estado === "enviando" ? "Enviando..." : "Pedir diagnóstico"}
      </button>

      <p className="text-center text-xs leading-relaxed text-[#5d708f]">
        Seus dados vão só para o nosso comercial, para retornar o contato. Veja a{" "}
        <Link href="/privacidade" className="underline hover:text-[#93a6c4]">política de privacidade</Link>.
      </p>
    </form>
  );
}
