import Link from "next/link";
import Marca from "./Marca";
import { contato, linkWhatsapp, MSG_PADRAO, navegacao, produtos } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#0b1630] text-white">
      <div className="wrap py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Marca sobreEscuro className="text-[1.125rem]" />
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-white/70">
              Tecnologia que se adapta ao seu negócio. Sistemas sob medida com
              inteligência artificial, feitos por quem escreve o código.
            </p>
          </div>

          <nav aria-label="Produtos">
            <p className="text-[0.8125rem] font-semibold text-white/50">Produtos</p>
            <ul className="mt-4 space-y-2.5">
              {produtos.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="text-[0.9375rem] text-white/80 transition-colors hover:text-white">
                    {p.curto}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Navegação do rodapé">
            <p className="text-[0.8125rem] font-semibold text-white/50">Empresa</p>
            <ul className="mt-4 space-y-2.5">
              {[...navegacao, { label: "Perguntas", href: "/#faq" }].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[0.9375rem] text-white/80 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.8125rem] font-semibold text-white/50">Contato</p>
            <ul className="mt-4 space-y-2.5">
              {contato.whatsapp && (
                <li>
                  <a href={linkWhatsapp(MSG_PADRAO)} target="_blank" rel="noopener" className="text-[0.9375rem] text-white/80 transition-colors hover:text-white">
                    WhatsApp (11) 98266-7293
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${contato.email}`} className="break-all text-[0.9375rem] text-white/80 transition-colors hover:text-white">
                  {contato.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.8125rem] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} InnovAdapt · {contato.razaoSocial} · CNPJ{" "}
            <span className="mono">{contato.cnpj}</span>
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/privacidade" className="transition-colors hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="transition-colors hover:text-white">
              Termos de Serviço
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
