import { cases } from "@/lib/site";

/**
 * Projetos entregues, com data. A linha do tempo é sequência de verdade, por
 * isso é a única régua com marcos da página.
 */
export default function Cases() {
  return (
    <section id="projetos" className="secao bg-[var(--nevoa)]">
      <div className="wrap">
        <h2 className="titulo max-w-3xl">Projetos entregues, com data</h2>
        <p className="apoio mt-6">
          Sem nome de cliente: entra o que foi construído, não quem pagou. A
          prova está na data de cada marco.
        </p>

        <div className="mt-16 space-y-8 md:mt-20">
          {cases.map((c) => (
            <article key={c.codigo} className="rounded-[1.75rem] bg-white p-6 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
                <div className="min-w-0">
                  <p className="text-[0.9375rem] font-medium text-[var(--tinta-3)]">{c.setor}</p>
                  <h3 className="subtitulo mt-3 text-[clamp(1.75rem,3.4vw,3rem)]">{c.projeto}</h3>
                  <p className="mt-3 text-[1.0625rem] font-semibold text-[var(--azul)]">{c.prazo}</p>
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-[0.9375rem] font-semibold">O problema</h4>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--tinta-2)]">{c.problema}</p>
                    </div>
                    <div>
                      <h4 className="text-[0.9375rem] font-semibold">O que foi entregue</h4>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--tinta-2)]">{c.entrega}</p>
                    </div>
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="grid grid-cols-2 gap-6">
                    {c.numeros.map((n) => (
                      <div key={n.label}>
                        <span className="display algarismo block text-[clamp(3.5rem,6vw,5.5rem)] text-[var(--tinta)]">{n.valor}</span>
                        <span className="mt-2 block text-[0.9375rem] leading-snug text-[var(--tinta-2)]">{n.label}</span>
                      </div>
                    ))}
                  </div>
                  <ol className="relative mt-10 space-y-5 border-l-2 border-[var(--azul)] pl-6">
                    {c.marcos.map((m) => (
                      <li key={m.data + m.texto} className="relative">
                        <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--azul)] bg-white" aria-hidden />
                        <span className="block text-[0.875rem] font-bold text-[var(--azul)]">{m.data}</span>
                        <span className="block text-[0.9375rem] leading-snug text-[var(--tinta)]">{m.texto}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-8 text-[0.875rem] text-[var(--tinta-3)]">Construído com {c.stack.join(", ")}.</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
