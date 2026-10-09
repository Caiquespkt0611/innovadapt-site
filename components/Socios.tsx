import { socios } from "@/lib/site";

/**
 * Quem atende é quem decide. Frase grande, a pessoa ao lado, sem cartão.
 */
export default function Socios() {
  return (
    <section id="socios" className="secao border-t border-[var(--linha)]">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-end lg:gap-20">
        <div>
          <h2 className="display text-[clamp(2.5rem,6vw,5.5rem)]">Um dono. Nenhuma camada entre você e quem decide.</h2>
          <p className="apoio mt-8">
            Não existe nível 1, fila de chamado nem gerente de conta repassando
            recado. Quando você aponta um erro numa terça, quem lê é quem consegue
            corrigir.
          </p>
        </div>
        <div className="space-y-8">
          {socios.map((s) => (
            <div key={s.nome}>
              <div className="flex items-center gap-4">
                <span className="subtitulo grid h-16 w-16 flex-none place-items-center rounded-full bg-[var(--azul)] text-[1.75rem] text-white" aria-hidden>
                  {s.nome.charAt(0)}
                </span>
                <div>
                  <h3 className="subtitulo text-[1.5rem]">{s.nome}</h3>
                  <p className="text-[0.9375rem] text-[var(--tinta-3)]">{s.papel}</p>
                </div>
              </div>
              <p className="mt-5 text-[1rem] leading-relaxed text-[var(--tinta-2)]">{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
