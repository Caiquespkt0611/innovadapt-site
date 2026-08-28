import Revelar from "./Revelar";
import { socios } from "@/lib/site";

export default function Socios() {
  return (
    <section id="socios" className="secao border-t border-white/[0.06]">
      <div className="wrap">
        <Revelar>
          <p className="sobrancelha">Quem atende</p>
          <h2 className="titulo-secao mt-6 max-w-4xl">
            Dois sócios. Nenhuma camada
            <br />
            entre você e o código.
          </h2>
          <p className="lead mt-6">
            Não existe nível 1, fila de chamado nem gerente de conta repassando
            recado. Quando você aponta um erro numa terça, quem lê é quem
            consegue corrigir.
          </p>
        </Revelar>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {socios.map((s, i) => (
            <Revelar key={s.nome} delay={i * 80} className="h-full">
              <div className="cartao h-full p-7 md:p-9">
                <div className="flex items-center gap-4">
                  <span className="mono flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-[#00b4ff]/25 bg-[#00b4ff]/10 text-lg font-bold text-[#00b4ff]">
                    {s.nome.charAt(0)}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{s.nome}</h3>
                    <p className="text-[0.8125rem] text-[#5f6c85]">{s.papel}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-[#98a4bb]">{s.texto}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="mono rounded border border-white/[0.09] px-2.5 py-1 text-[0.6875rem] text-[#7d8ba4]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
