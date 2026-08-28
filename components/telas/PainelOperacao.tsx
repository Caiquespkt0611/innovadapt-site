import Janela from "./Janela";
import Kpi from "./Kpi";

const CANAIS = [
  { nome: "WebMotors", valor: 128, cor: "#2f6bff" },
  { nome: "iCarros", valor: 96, cor: "#22b8f0" },
  { nome: "Instagram", valor: 71, cor: "#8b3fd9" },
  { nome: "Indicação", valor: 34, cor: "#2ee6a8" },
  { nome: "Loja", valor: 22, cor: "#ffc247" },
];
const MAIOR = Math.max(...CANAIS.map((c) => c.valor));

const FUNIL = [
  { etapa: "Novo", qtd: 84, largura: "100%" },
  { etapa: "Qualificado", qtd: 52, largura: "68%" },
  { etapa: "Em negociação", qtd: 23, largura: "38%" },
  { etapa: "Fechado", qtd: 11, largura: "20%" },
];

/**
 * `compacto` é a variante do hero, onde um celular encosta no canto direito.
 * Ela tira o funil e joga rótulo e número para a esquerda do gráfico, de modo
 * que a parte coberta pelo celular seja só a ponta das barras. Sem isso, o
 * celular escondia justamente os valores.
 */
export default function PainelOperacao({ compacto = false }: { compacto?: boolean }) {
  return (
    <Janela titulo="innovadapt · painel da operação" aoVivo seloJunto={compacto}>
      <div className="space-y-2.5 p-3 md:space-y-3 md:p-4">
        <div className={`grid gap-2 ${compacto ? "grid-cols-3 lg:pr-[11.5rem]" : "grid-cols-2 md:grid-cols-4"}`}>
          <Kpi rotulo="Leads no mês" valor="351" delta="18,4%" />
          <Kpi rotulo="Em atendimento" valor="47" delta="agora" sentido="neutro" />
          <Kpi rotulo="1ª resposta" valor="38" unidade="s" delta="2min 40s" sentido="baixo" />
          {!compacto && (
            <Kpi rotulo="Conversão" valor="12,4" unidade="%" delta="2,1 p.p." />
          )}
        </div>

        <div className={compacto ? "" : "grid gap-2.5 md:grid-cols-[1.25fr_1fr] md:gap-3"}>
          <div className="bloco p-3">
            <div className="flex items-center justify-between">
              <p className="rotulo">Leads por canal</p>
              <span className="mono text-[0.5625rem] text-[#5d708f]">30 dias</span>
            </div>
            <ul className="mt-3 space-y-2">
              {CANAIS.map((c) => (
                <li key={c.nome} className="flex items-center gap-2.5">
                  <span className="w-[4.5rem] flex-none truncate text-[0.625rem] text-[#93a6c4]">
                    {c.nome}
                  </span>
                  {compacto && (
                    <span className="mono w-6 flex-none text-right text-[0.625rem] font-semibold text-white">
                      {c.valor}
                    </span>
                  )}
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <span
                      className="block h-full rounded-full"
                      style={{
                        width: `${(c.valor / MAIOR) * 100}%`,
                        background: `linear-gradient(90deg, ${c.cor}, ${c.cor}99)`,
                      }}
                    />
                  </span>
                  {!compacto && (
                    <span className="mono w-6 flex-none text-right text-[0.625rem] text-white">
                      {c.valor}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {!compacto && (
            <div className="bloco p-3">
              <p className="rotulo">Funil de leads</p>
              <ul className="mt-3 space-y-2">
                {FUNIL.map((f) => (
                  <li key={f.etapa}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-[0.625rem] text-[#93a6c4]">{f.etapa}</span>
                      <span className="mono text-[0.6875rem] font-semibold text-white">
                        {f.qtd}
                      </span>
                    </div>
                    <span className="mt-1 block h-1 overflow-hidden rounded-full bg-white/[0.06]">
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-[#2f6bff] to-[#22b8f0]"
                        style={{ width: f.largura }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bloco flex items-center gap-3 px-3 py-2.5">
          <span className="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-gradient-to-br from-[#2f6bff] to-[#8b3fd9] text-[0.5625rem] font-bold text-white">
            IA
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.6875rem] font-semibold text-white">
              Mel · agente de vendas
            </p>
            <p className="truncate text-[0.5625rem] text-[#5d708f]">
              128 atendimentos hoje · 9 leads passados para vendedor
            </p>
          </div>
          {!compacto && (
            <span
              className="pilula flex-none"
              style={{ background: "rgba(46,230,168,.12)", color: "#2ee6a8" }}
            >
              ativa
            </span>
          )}
        </div>
      </div>
    </Janela>
  );
}
