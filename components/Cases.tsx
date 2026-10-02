import { cases, depoimentos } from "@/lib/site";

export default function Cases() {
  return (
    <section id="projetos" className="secao bg-[#f3f6fb]">
      <div className="wrap">
        <div className="max-w-3xl">
          <h2 className="titulo">Projetos entregues, com data</h2>
          <p className="apoio mt-5">
            Sem nome de cliente, que só entra com autorização. O que fica é o que
            foi construído, quando entrou no ar e o que mudou na operação.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cases.map((c) => (
            <article key={c.projeto} className="flex flex-col rounded-3xl border border-[#e1e7f1] bg-white p-7 md:p-10">
              <p className="text-[0.875rem] font-semibold text-[#2647f0]">{c.prazo}</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.025em] text-[#0b1630]">{c.projeto}</h3>
              <p className="mt-1.5 text-[0.875rem] text-[#6b7894]">{c.setor}</p>

              <p className="mt-6 text-[0.9375rem] leading-relaxed text-[#3d4b66]">
                <span className="font-semibold text-[#0b1630]">Antes: </span>
                {c.problema}
              </p>

              <ol className="mt-7 border-l-2 border-[#dbe4f6]">
                {c.marcos.map((m) => (
                  <li key={m.data + m.texto} className="relative pb-5 pl-6 last:pb-0">
                    <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-white bg-[#2647f0]" aria-hidden />
                    <span className="mono text-[0.8125rem] font-bold text-[#2647f0]">{m.data}</span>
                    <p className="mt-0.5 text-[0.9375rem] leading-snug text-[#0b1630]">{m.texto}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-auto grid grid-cols-2 gap-4 pt-8">
                {c.numeros.map((n) => (
                  <div key={n.label} className="rounded-2xl bg-[#eaf0ff] px-5 py-4">
                    <p className="text-3xl font-bold tracking-[-0.03em] text-[#0b1630]">{n.valor}</p>
                    <p className="mt-1 text-[0.8125rem] leading-snug text-[#3d4b66]">{n.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* prova de terceiro, no lugar do logo que não podemos mostrar */}
        {depoimentos.length > 0 && (
          <div className={`mt-6 grid gap-6 ${depoimentos.length > 1 ? "lg:grid-cols-2" : ""}`}>
            {depoimentos.map((d) => (
              <figure key={d.frase} className="rounded-3xl bg-[#0b1630] p-8 text-white md:p-12">
                <blockquote className="text-xl leading-relaxed md:text-2xl">&ldquo;{d.frase}&rdquo;</blockquote>
                <figcaption className="mt-6 text-[0.9375rem]">
                  <span className="font-semibold">{d.quem}</span>
                  <span className="block text-white/70">{d.operacao}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
