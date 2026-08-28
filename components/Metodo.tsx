import Revelar from "./Revelar";
import { metodo } from "@/lib/site";

export default function Metodo() {
  return (
    <section id="metodo" className="secao fio-topo">
      <div className="wrap">
        <Revelar>
          <p className="sobrancelha">Método <i>· 04</i></p>
          <h2 className="titulo-secao mt-6 max-w-4xl">
            Quatro passos, e nenhum deles é &ldquo;confia&rdquo;
          </h2>
          <p className="lead mt-6">
            Todo projeto passa pelos mesmos quatro. São eles que separam um
            orçamento com origem de um número redondo, e um go-live tranquilo de
            um domingo de pânico.
          </p>
        </Revelar>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[rgba(120,170,255,0.15)] bg-white/[0.07] md:grid-cols-2">
          {metodo.map((m, i) => (
            <Revelar key={m.numero} delay={(i % 2) * 70} className="h-full">
              <div className="flex h-full flex-col bg-[#071022] p-7 md:p-9">
                <span className="mono text-5xl font-bold leading-none text-white/[0.09]">
                  {m.numero}
                </span>
                <h3 className="mt-6 text-lg font-bold text-white">{m.titulo}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#93a6c4]">
                  {m.texto}
                </p>
                <p className="mt-6 border-l-2 border-[#22b8f0] pl-4 text-sm font-semibold text-white">
                  {m.marcador}
                </p>
              </div>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
