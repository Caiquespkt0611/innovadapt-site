import Revelar from "./Revelar";

const ETAPAS = [
  {
    n: "01",
    titulo: "Conecta",
    texto: "DMS por API quando existe, XML de nota, planilha e formulário quando não existe.",
  },
  {
    n: "02",
    titulo: "Estrutura",
    texto: "De-para do seu plano de contas, upsert por identificador e diff do que mudou.",
  },
  {
    n: "03",
    titulo: "Executa",
    texto: "O agente atende, qualifica e distribui. O portal fecha o pedido com o imposto certo.",
  },
  {
    n: "04",
    titulo: "Mede",
    texto: "DRE por departamento, consolidação de rede e o PDCA que nasce do desvio.",
  },
];

export default function Fluxo() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20"
      style={{
        background:
          "linear-gradient(180deg, #061024, #081328 55%, #061024), radial-gradient(70% 120% at 50% 0%, rgba(47,107,255,0.14), transparent 60%)",
      }}
    >
      <div className="fio-topo absolute inset-x-0 top-0 h-px" aria-hidden />
      <div className="pontos !opacity-[0.09]" aria-hidden />

      <div className="wrap relative">
        <div className="grid gap-6 md:grid-cols-4 md:gap-4">
          {ETAPAS.map((e, i) => (
            <Revelar key={e.n} delay={i * 80} className="h-full">
              <div className="relative h-full">
                {/* fio que liga uma etapa na outra, como esteira de dado */}
                {i < ETAPAS.length - 1 && (
                  <span
                    className="absolute right-[-1rem] top-5 hidden h-px w-8 md:block"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(34,184,240,0.6), rgba(34,184,240,0.05))",
                    }}
                    aria-hidden
                  />
                )}
                <div className="flex items-center gap-3">
                  <span className="mono flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-[rgba(120,170,255,0.28)] bg-[rgba(47,107,255,0.12)] text-[0.75rem] font-bold text-[#7fb0ff]">
                    {e.n}
                  </span>
                  <h3 className="text-base font-bold text-white">{e.titulo}</h3>
                </div>
                <p className="mt-3.5 text-[0.8125rem] leading-relaxed text-[#93a6c4]">
                  {e.texto}
                </p>
              </div>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
