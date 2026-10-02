import Revelar from "./Revelar";
import { metodo } from "@/lib/site";

export default function Metodo() {
  return (
    <section id="metodo" className="secao claro">
      <div className="wrap">
        <Revelar>
          <p className="sobrancelha">Método</p>
          <h2 className="titulo-secao mt-6 max-w-4xl">
            Quatro passos, e nenhum deles é &ldquo;confia&rdquo;
          </h2>
          <p className="lead mt-6">
            Todo projeto passa pelos mesmos quatro. São eles que separam um
            orçamento com origem de um número redondo, e um go-live tranquilo de
            um domingo de pânico.
          </p>
        </Revelar>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#dbe4f3] bg-[#dbe4f3] md:grid-cols-2">
          {metodo.map((m, i) => (
            <Revelar key={m.numero} delay={(i % 2) * 70} className="h-full">
              <div className="flex h-full flex-col bg-white p-7 md:p-9">
                <span className="mono text-5xl font-bold leading-none text-[#2f6bff]/25">
                  {m.numero}
                </span>
                <h3 className="mt-6 text-lg font-bold text-[#0b1630]">{m.titulo}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4a5b78]">
                  {m.texto}
                </p>
                <p className="mt-6 border-l-2 border-[#2f6bff] pl-4 text-sm font-semibold text-[#0b1630]">
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
