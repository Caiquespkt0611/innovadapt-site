import { socios } from "@/lib/site";

export default function Socios() {
  return (
    <section id="socios" className="secao bg-[#f3f6fb]">
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="titulo">Um dono. Nenhuma camada entre você e quem decide.</h2>
          <p className="apoio mt-5">
            Não existe nível 1, fila de chamado nem gerente de conta repassando
            recado. Quando você aponta um erro numa terça, quem lê é quem consegue
            corrigir.
          </p>
        </div>
        <div className="space-y-5">
          {socios.map((s) => (
            <div key={s.nome} className="rounded-3xl border border-[#e1e7f1] bg-white p-7 md:p-9">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-full bg-gradient-to-br from-[#2647f0] to-[#8b45e6] text-xl font-bold text-white">
                  {s.nome.charAt(0)}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#0b1630]">{s.nome}</h3>
                  <p className="text-[0.875rem] text-[#6b7894]">{s.papel}</p>
                </div>
              </div>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-[#3d4b66]">{s.texto}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full bg-[#eaf0ff] px-3 py-1 text-[0.8125rem] font-medium text-[#2647f0]">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
