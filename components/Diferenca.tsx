import { comparativo } from "@/lib/site";

/**
 * A tese contra a plataforma de BI de prateleira. A coluna deles fica apagada,
 * a nossa em tinta cheia: a diferença se lê sem precisar de selo nem cor.
 * A última linha é o nome da empresa, e por isso fecha em azul.
 */
export default function Diferenca() {
  const linhas = comparativo.linhas.slice(0, -1);
  const fecho = comparativo.linhas[comparativo.linhas.length - 1];

  return (
    <section id="diferenca" className="secao">
      <div className="wrap">
        <h2 className="display text-[clamp(2.75rem,7vw,6.5rem)]">
          <span className="block text-[#b3bacb]">Painel mostra o que aconteceu.</span>
          <span className="block text-[var(--tinta)]">Sistema faz acontecer.</span>
        </h2>
        <p className="apoio mt-8">
          Plataforma de BI de prateleira entrega relatório. A gente entrega o
          sistema que atende, calcula e cobra, e o relatório vem junto.
        </p>

        <div className="mt-14 md:mt-20">
          <div className="hidden grid-cols-[1fr_1.2fr_1.2fr] gap-8 pb-4 text-[0.9375rem] font-semibold md:grid">
            <span className="text-[var(--tinta-3)]">Critério</span>
            <span className="text-[var(--tinta-3)]">{comparativo.colunas[0]}</span>
            <span className="text-[var(--azul)]">{comparativo.colunas[1]}</span>
          </div>
          <ul className="border-t border-[var(--linha)]">
            {linhas.map((l) => (
              <li
                key={l.criterio}
                className="grid gap-2 border-b border-[var(--linha)] py-6 md:grid-cols-[1fr_1.2fr_1.2fr] md:gap-8 md:py-7"
              >
                <span className="text-[0.9375rem] font-semibold text-[var(--tinta-2)]">{l.criterio}</span>
                <span className="text-[1rem] text-[#8a93a8]">
                  <span className="md:hidden">Prateleira: </span>
                  {l.deles}
                </span>
                <span className="text-[1.0625rem] font-semibold text-[var(--tinta)]">{l.nosso}</span>
              </li>
            ))}
          </ul>
          <div className="campo-azul mt-6 grid gap-3 rounded-2xl px-6 py-7 md:grid-cols-[1fr_1.2fr_1.2fr] md:items-center md:gap-8 md:px-8">
            <span className="text-[0.9375rem] font-semibold text-white/75">{fecho.criterio}</span>
            <span className="text-[1rem] text-white/60 line-through decoration-white/40">{fecho.deles}</span>
            <span className="subtitulo text-[1.5rem] md:text-[1.75rem]">{fecho.nosso}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
