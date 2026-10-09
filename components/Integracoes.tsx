import { integracoes } from "@/lib/site";

/**
 * O que o sistema já conversa, escrito como frase e não como régua de pílulas.
 * Só entra o que roda hoje em produção.
 */
export default function Integracoes() {
  return (
    <section aria-labelledby="integra-titulo" className="py-16 md:py-24">
      <div className="wrap">
        <h2 id="integra-titulo" className="text-[1rem] font-medium text-[var(--tinta-3)]">
          Conversa com o que a sua empresa já usa
        </h2>
        <p className="subtitulo mt-5 max-w-5xl text-[clamp(1.5rem,3.2vw,2.625rem)] !leading-[1.2] text-[var(--tinta-3)]">
          {integracoes.map((i, n) => (
            <span key={i.nome}>
              <span className="whitespace-nowrap text-[var(--tinta)]" title={i.tipo}>
                {i.nome}
              </span>
              {n < integracoes.length - 2 ? ", " : n === integracoes.length - 2 ? " e " : "."}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
