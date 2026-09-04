import Revelar from "./Revelar";
import { socios } from "@/lib/site";

export default function Socios() {
  return (
    <section id="socios" className="secao fio-topo">
      <div className="wrap">
        <Revelar>
          <p className="sobrancelha">Quem atende <i>· 06</i></p>
          <h2 className="titulo-secao mt-6 max-w-4xl">
            Um dono. Nenhuma camada
            <br />
            entre você e quem decide.
          </h2>
          <p className="lead mt-6">
            Não existe nível 1, fila de chamado nem gerente de conta repassando
            recado. Quando você aponta um erro numa terça, quem lê é quem
            consegue corrigir.
          </p>
        </Revelar>

        <div className="mt-14 grid max-w-2xl gap-4">
          {socios.map((s, i) => (
            <Revelar key={s.nome} delay={i * 80} className="h-full">
              <div className="cartao h-full p-7 md:p-9">
                <div className="flex items-center gap-4">
                  <span className="mono flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-[#22b8f0]/25 bg-[#22b8f0]/10 text-lg font-bold text-[#22b8f0]">
                    {s.nome.charAt(0)}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{s.nome}</h3>
                    <p className="text-[0.8125rem] text-[#5d708f]">{s.papel}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-[#93a6c4]">{s.texto}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="mono rounded border border-white/[0.09] px-2.5 py-1 text-[0.6875rem] text-[#7f90ad]"
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
