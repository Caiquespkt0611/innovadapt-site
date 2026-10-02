import { metodo } from "@/lib/site";

export default function Metodo() {
  return (
    <section id="metodo" className="secao">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 className="titulo">Quatro passos, e nenhum deles é &ldquo;confia&rdquo;</h2>
          <p className="apoio">
            Todo projeto passa pelos mesmos quatro. São eles que separam um
            orçamento com origem de um número redondo, e um go-live tranquilo de
            um domingo de pânico.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 md:grid-cols-2">
          {metodo.map((m) => (
            <li key={m.numero} className="flex flex-col rounded-3xl border border-[#e1e7f1] p-7 md:p-9">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#eaf0ff] text-[0.9375rem] font-bold text-[#2647f0]">
                {Number(m.numero)}
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-[#0b1630]">{m.titulo}</h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-[#3d4b66]">{m.texto}</p>
              <p className="mt-6 text-[0.9375rem] font-semibold text-[#2647f0]">{m.marcador}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
