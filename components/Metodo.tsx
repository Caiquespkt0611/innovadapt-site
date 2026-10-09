import { metodo } from "@/lib/site";

/**
 * Os quatro passos, em ordem. Aqui a numeração é informação: é a sequência
 * em que o projeto acontece.
 */
export default function Metodo() {
  return (
    <section id="metodo" className="secao">
      <div className="wrap">
        <h2 className="titulo max-w-4xl">Quatro passos, e nenhum deles é confiar na sorte</h2>
        <ol className="mt-16 grid gap-x-10 gap-y-14 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {metodo.map((m, i) => (
            <li key={m.titulo} className="min-w-0">
              <span className="display algarismo block text-[5rem] text-[var(--azul)]" aria-hidden>
                {i + 1}
              </span>
              <h3 className="subtitulo mt-4 text-[1.5rem]">{m.titulo}</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-[var(--tinta-2)]">{m.texto}</p>
              <p className="mt-5 border-t border-[var(--linha)] pt-4 text-[1rem] font-semibold text-[var(--tinta)]">{m.marcador}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
