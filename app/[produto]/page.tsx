import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BarraMobile from "@/components/BarraMobile";
import Integracoes from "@/components/Integracoes";
import FormularioContato from "@/components/FormularioContato";
import IconeWhatsapp from "@/components/IconeWhatsapp";
import { TELAS } from "@/components/Plataforma";
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
        {/* topo: o produto e a tela dele */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="wrap">
            <nav aria-label="Você está em" className="text-[0.875rem] text-[#6b7894]">
              <Link href="/" className="hover:text-[#0b1630]">Início</Link>
              <span className="mx-2">/</span>
              <span className="font-medium text-[#0b1630]">{p.curto}</span>
            </nav>

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
              <div className="min-w-0">
                <h1 className="text-[clamp(2.25rem,4.8vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.035em] text-[#0b1630] [text-wrap:balance]">
                  {p.titulo}
                </h1>
                <p className="apoio mt-6">{p.resumo}</p>
                <p className="mt-6 inline-flex flex-wrap gap-1 rounded-2xl bg-[#eaf0ff] px-4 py-2 text-[0.9375rem] text-[#0b1630]">
                  <span className="font-semibold text-[#2647f0]">Para quem:</span> {p.paraQuem}
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="#contato" className="btn btn-azul">Agendar demonstração</a>
                  <a href={linkWhatsapp(MSG_PADRAO)} target="_blank" rel="noopener" className="btn btn-borda">
                    <IconeWhatsapp /> Falar no WhatsApp
                  </a>
                </div>
              </div>
              <div className="entrada-produto min-w-0 rounded-[2rem] bg-[#eaf0ff] p-4 sm:p-8">{TELAS[p.id]}</div>
            </div>
          </div>
        </section>

        <Integracoes />

        {/* o que o produto faz, item por item */}
        <section className="secao">
          <div className="wrap">
            <h2 className="titulo max-w-3xl">O que roda hoje, em produção</h2>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.itens.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-[#e1e7f1] p-6">
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" className="mt-0.5 flex-none text-[#2647f0]" aria-hidden>
                    <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[1rem] leading-relaxed text-[#0b1630]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* a prova: projeto entregue com data, ou o método */}
        <section className="secao bg-[#f3f6fb]">
          <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
            {projeto ? (
              <>
                <div>
                  <p className="text-[0.875rem] font-semibold text-[#2647f0]">Projeto entregue</p>
                  <h2 className="titulo mt-3">{projeto.projeto}</h2>
                  <p className="mt-2 text-[0.9375rem] text-[#6b7894]">{projeto.setor}</p>
                  <p className="apoio mt-6">{projeto.entrega}</p>
                  <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
                    {projeto.numeros.map((n) => (
                      <div key={n.label} className="rounded-2xl bg-white px-5 py-4">
                        <p className="text-3xl font-bold tracking-[-0.03em] text-[#0b1630]">{n.valor}</p>
                        <p className="mt-1 text-[0.8125rem] text-[#3d4b66]">{n.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <ol className="self-center border-l-2 border-[#dbe4f6]">
                  {projeto.marcos.map((m) => (
                    <li key={m.data + m.texto} className="relative pb-6 pl-7 last:pb-0">
                      <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-[#f3f6fb] bg-[#2647f0]" aria-hidden />
                      <span className="mono text-[0.875rem] font-bold text-[#2647f0]">{m.data}</span>
                      <p className="mt-0.5 text-[1rem] leading-snug text-[#0b1630]">{m.texto}</p>
                    </li>
                  ))}
                </ol>
              </>
            ) : (
              <>
                <div>
                  <p className="text-[0.875rem] font-semibold text-[#2647f0]">Como começa</p>
                  <h2 className="titulo mt-3">{metodo[0].titulo}</h2>
                  <p className="apoio mt-6">{metodo[0].texto}</p>
                  <p className="mt-6 font-semibold text-[#2647f0]">{metodo[0].marcador}</p>
                </div>
                <ol className="self-center space-y-4">
                  {metodo.map((m) => (
                    <li key={m.numero} className="flex gap-4 rounded-2xl bg-white p-5">
                      <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-[#eaf0ff] font-bold text-[#2647f0]">
                        {Number(m.numero)}
                      </span>
                      <span>
                        <span className="block font-semibold text-[#0b1630]">{m.titulo}</span>
                        <span className="block text-[0.875rem] text-[#3d4b66]">{m.marcador}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>
        </section>

        {/* o pedido de demonstração, já com o produto escolhido */}
        <section id="contato" className="faixa-marca py-20 md:py-28">
          <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em] [text-wrap:balance]">
                Veja o {p.curto} na sua operação
              </h2>
              <p className="mt-5 max-w-xl text-[1.125rem] leading-relaxed text-white/85">
                A primeira conversa é sobre o seu processo, não sobre a proposta.
                Você fala com o dono, e o diagnóstico não custa nada.
              </p>
              <p className="mt-10 text-[0.875rem] font-semibold text-white/70">Outros produtos</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {outros.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/${o.slug}`} className="inline-block rounded-full border border-white/40 px-4 py-2 text-[0.9375rem] font-medium hover:border-white">
                      {o.curto}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 text-[#0b1630] shadow-[0_40px_80px_-30px_rgba(10,20,90,0.6)] md:p-8">
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
