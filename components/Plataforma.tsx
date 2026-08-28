import Revelar from "./Revelar";
import { capacidades } from "@/lib/site";

export default function Plataforma() {
  return (
    <section id="plataforma" className="secao border-t border-white/[0.06]">
      <div className="wrap">
        <Revelar>
          <p className="sobrancelha">Plataforma</p>
          <h2 className="titulo-secao mt-6 max-w-4xl">
            Seis frentes que já rodam em cliente
          </h2>
          <p className="lead mt-6">
            Não é catálogo de módulo para você escolher. É o que já foi
            construído, está em produção e pode ser recombinado sobre o seu
            processo — porque o núcleo é multi-tenant desde o primeiro cliente.
          </p>
        </Revelar>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capacidades.map((c, i) => (
            <Revelar key={c.id} delay={(i % 3) * 70} className="h-full">
              <article className="cartao group flex h-full flex-col p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="mono text-xs font-bold tracking-widest text-[#00b4ff]">
                    {c.numero}
                  </span>
                  <span className="h-px flex-1 bg-white/[0.07] ml-4" />
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-white">
                  {c.titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#98a4bb]">
                  {c.resumo}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5">
                  {c.itens.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-[#7d8ba4]">
                      <span className="mt-[0.5rem] h-1 w-1 flex-none rounded-full bg-[#00b4ff]/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
