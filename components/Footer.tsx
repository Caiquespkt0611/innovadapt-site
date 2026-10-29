import Link from "next/link";
import Marca from "./Marca";
import { contato, linkWhatsapp, MSG_PADRAO, navegacao, produtos } from "@/lib/site";

/** Rodapé navy com o brilho da marca, como a capa do LinkedIn. Vale para todas as páginas. */
export default function Footer() {
  const link = "inline-block py-1.5 text-[0.9375rem] text-[#c4d1e8] transition-colors hover:text-white";
  return (
    <footer className="relative overflow-hidden bg-[var(--navy)] text-white">
      <span aria-hidden className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full opacity-30" style={{ background: "radial-gradient(closest-side, #8B3AE2, transparent)" }} />
      <span aria-hidden className="absolute -bottom-48 left-1/4 h-[26rem] w-[26rem] rounded-full opacity-30" style={{ background: "radial-gradient(closest-side, #0365FE, transparent)" }} />
      <div className="wrap relative py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Marca sobreEscuro className="text-[1.125rem]" />
            <p className="mt-5 max-w-sm text-[1.25rem] font-semibold leading-snug tracking-[-0.015em]">
              Tecnologia e IA que se <span className="degrade">adaptam ao seu negócio.</span>
            </p>
          </div>

          <nav aria-label="Soluções">
            <p className="text-[0.875rem] font-semibold text-white">Soluções</p>
            <ul className="mt-3">
              {produtos.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className={link}>{p.curto}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Navegação do rodapé">
            <p className="text-[0.875rem] font-semibold text-white">Empresa</p>
            <ul className="mt-3">
              {[...navegacao, { label: "Perguntas", href: "/#faq" }].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.875rem] font-semibold text-white">Contato</p>
            <ul className="mt-3">
              {contato.whatsapp && (
                <li>
                  <a href={linkWhatsapp(MSG_PADRAO)} target="_blank" rel="noopener" className={link}>
                    WhatsApp <span className="whitespace-nowrap">(11) 98266-7293</span>
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${contato.email}`} className={`${link} [overflow-wrap:anywhere]`}>
                  {contato.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.8125rem] text-[#8ea0bf] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} InnovAdapt · {contato.razaoSocial} · CNPJ {contato.cnpj}
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/privacidade" className="inline-block py-2 transition-colors hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="inline-block py-2 transition-colors hover:text-white">
              Termos de Serviço
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
