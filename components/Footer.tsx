import Image from "next/image";
import { contato, navegacao } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="fio-topo relative bg-[#0a0c15]">
      <div className="wrap py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-transparent.png"
              alt="InnovAdapt"
              width={180}
              height={111}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#7c8394]">
              Software sob medida para o varejo automotivo. CRM com agente de IA,
              portal de operações, rentabilidade e consolidação de rede, feitos
              por quem escreve o código.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#656c7d]">
              Navegar
            </p>
            <ul className="mt-4 space-y-2.5">
              {[...navegacao, { label: "Perguntas", href: "#faq" }].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[#9aa1b2] transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#656c7d]">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${contato.email}`}
                  className="text-sm text-[#9aa1b2] transition-colors hover:text-white"
                >
                  {contato.email}
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-sm text-[#9aa1b2] transition-colors hover:text-white"
                >
                  Agendar diagnóstico
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-7 text-xs text-[#656c7d] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} InnovAdapt · {contato.razaoSocial} · CNPJ{" "}
            <span className="mono">{contato.cnpj}</span>
          </p>
          <p>Feito com Next.js, e publicado com um comando só.</p>
        </div>
      </div>
    </footer>
  );
}
