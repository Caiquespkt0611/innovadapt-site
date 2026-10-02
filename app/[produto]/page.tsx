import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BarraMobile from "@/components/BarraMobile";
import FundoTech from "@/components/FundoTech";
import Integracoes from "@/components/Integracoes";
import FormularioContato from "@/components/FormularioContato";
import IconeWhatsapp from "@/components/IconeWhatsapp";
import PainelOperacao from "@/components/telas/PainelOperacao";
import ConversaMel from "@/components/telas/ConversaMel";
import TelaFiscal from "@/components/telas/TelaFiscal";
import TelaDre from "@/components/telas/TelaDre";
import TelaRede from "@/components/telas/TelaRede";
import { MSG_PADRAO, cases, linkWhatsapp, metodo, produtos } from "@/lib/site";

/**
 * Uma página por produto, como Dealer Intelligence, Syonet e RD têm: é a página
 * que ranqueia na busca pelo nome do problema e a que recebe anúncio. Mesmo
 * molde para os quatro, alternando o escuro (produto e tela) com o claro
 * (explicação). Todo texto sai de lib/site.ts: nada aqui promete o que a home
 * não promete.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return produtos.map((p) => ({ produto: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ produto: string }>;
}): Promise<Metadata> {
  const { produto } = await params;
  const p = produtos.find((x) => x.slug === produto);
  if (!p) return {};
  const titulo = `${p.titulo} para concessionária | InnovAdapt`;
  return {
    title: titulo,
    description: p.resumo,
    alternates: { canonical: `https://innovadapt.com.br/${p.slug}` },
    openGraph: { title: titulo, description: p.resumo, url: `https://innovadapt.com.br/${p.slug}` },
  };
}

const TELAS: Record<string, React.ReactNode> = {
  crm: <PainelOperacao />,
  portal: <TelaFiscal />,
  rentabilidade: <TelaDre />,
  rede: <TelaRede />,
};

export default async function PaginaProduto({
  params,
}: {
  params: Promise<{ produto: string }>;
}) {
  const { produto } = await params;
  const p = produtos.find((x) => x.slug === produto);
  if (!p) notFound();

  const projeto = p.projeto === null ? null : cases[p.projeto];
  const outros = produtos.filter((x) => x.slug !== p.slug);

  return (
    <>
      <Header />
      <main>
        {/* topo escuro: o produto e a tela dele */}
        <section
          className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
          style={{
            background:
              "radial-gradient(120% 90% at 78% 8%, rgba(47,107,255,0.20), transparent 58%), linear-gradient(180deg, #061024 0%, #050a18 80%)",
          }}
        >
          <FundoTech />
          <div className="grade" aria-hidden />
          <div className="wrap relative">
            <nav aria-label="Você está em" className="text-[0.8125rem] text-[#7f90ad]">
              <Link href="/" className="hover:text-white">Início</Link>
              <span className="mx-2 text-[#3d4d69]">/</span>
              <span className="text-[#c9d5ea]">{p.curto}</span>
            </nav>

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
              <div className="min-w-0">
                <h1 className="max-w-[16ch] text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-white">
                  {p.titulo}
                </h1>
                <p className="lead mt-6">{p.resumo}</p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(34,184,240,0.3)] bg-[rgba(34,184,240,0.08)] px-3.5 py-1.5 text-[0.8125rem] text-[#bfe9fb]">
                  <span className="font-semibold text-white">Para quem:</span> {p.paraQuem}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="#contato" className="btn btn-primario">Agendar demonstração</a>
                  <a href={linkWhatsapp(MSG_PADRAO)} target="_blank" rel="noopener" className="btn btn-secundario">
                    <IconeWhatsapp /> Falar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative min-w-0">
                {TELAS[p.id]}
                {p.id === "crm" && (
                  <ConversaMel className="-mt-16 ml-auto sm:-mt-20 lg:absolute lg:-bottom-16 lg:-right-8 lg:mt-0" />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* claro: o que o produto faz, item por item */}
        <section className="claro py-20 md:py-28">
          <div className="wrap">
            <h2 className="max-w-3xl text-[clamp(1.75rem,3.6vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[#0b1630] [text-wrap:balance]">
              O que roda hoje, em produção
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.itens.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-[#dbe4f3] bg-white p-5">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 flex-none text-[#2f6bff]" aria-hidden>
                    <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[0.9375rem] leading-relaxed text-[#26375a]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* escuro: a prova. Projeto entregue com data, ou o método quando o
            produto ainda não tem projeto próprio no site */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="grade" aria-hidden />
          <div className="wrap relative">
            {projeto ? (
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
                <div>
                  <p className="sobrancelha">Projeto entregue</p>
                  <h2 className="titulo-secao mt-6">{projeto.projeto}</h2>
                  <p className="mt-3 text-sm text-[#7f90ad]">{projeto.setor}</p>
                  <p className="lead mt-6">{projeto.entrega}</p>
                  <div className="mt-8 flex flex-wrap gap-8">
                    {projeto.numeros.map((n) => (
                      <div key={n.label}>
                        <p className="mono text-3xl font-bold text-white">{n.valor}</p>
                        <p className="mt-1 text-[0.8125rem] text-[#93a6c4]">{n.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <ol className="space-y-0 border-l border-[rgba(120,170,255,0.2)]">
                  {projeto.marcos.map((m) => (
                    <li key={m.data + m.texto} className="relative pb-7 pl-7 last:pb-0">
                      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#22b8f0]" aria-hidden />
                      <p className="mono text-[0.8125rem] font-bold text-[#7fb0ff]">{m.data}</p>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-[#c9d5ea]">{m.texto}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
                <div>
                  <p className="sobrancelha">Como começa</p>
                  <h2 className="titulo-secao mt-6">{metodo[0].titulo}</h2>
                  <p className="lead mt-6">{metodo[0].texto}</p>
                  <p className="mt-6 font-semibold text-white">{metodo[0].marcador}</p>
                </div>
                <ol className="space-y-0 border-l border-[rgba(120,170,255,0.2)]">
                  {metodo.map((m) => (
                    <li key={m.numero} className="relative pb-7 pl-7 last:pb-0">
                      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#22b8f0]" aria-hidden />
                      <p className="mono text-[0.8125rem] font-bold text-[#7fb0ff]">{m.numero}</p>
                      <p className="mt-1 text-[0.9375rem] font-semibold text-white">{m.titulo}</p>
                      <p className="mt-1 text-sm text-[#93a6c4]">{m.marcador}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </section>

        <Integracoes />

        {/* claro: o pedido de demonstração, já com o produto escolhido */}
        <section id="contato" className="claro py-20 md:py-28">
          <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <h2 className="text-[clamp(1.75rem,3.6vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[#0b1630] [text-wrap:balance]">
                Veja o {p.curto} na sua operação
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-[#4a5b78]">
                A primeira conversa é sobre o seu processo, não sobre a proposta.
                Você fala com o dono, e o diagnóstico não custa nada.
              </p>
              <div className="mt-10">
                <p className="text-sm font-semibold text-[#0b1630]">Outros produtos</p>
                <ul className="mt-3 space-y-2">
                  {outros.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/${o.slug}`} className="text-[0.9375rem] font-medium text-[#2f6bff] hover:underline">
                        {o.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl bg-[#0b1424] p-6 md:p-8">
              <FormularioContato assuntoInicial={p.assunto} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BarraMobile />
    </>
  );
}
