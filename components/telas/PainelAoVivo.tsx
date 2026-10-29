"use client";

import { useEffect, useRef, useState } from "react";
import { SeloIA } from "../Marca";

// Dados que fecham entre si: 351 leads no mês, somados por dia e por canal.
const DIAS = [8, 11, 10, 12, 11, 7, 6, 12, 13, 12, 14, 13, 9, 8, 13, 13, 15, 14, 12, 8, 7, 14, 14, 16, 15, 13, 9, 8, 17, 17];
const IA = DIAS.map((d, i) => Math.max(0, d - (i % 4 === 0 ? 2 : 1)));
const CANAIS: [string, number][] = [
  ["WebMotors", 128],
  ["iCarros", 96],
  ["Instagram", 71],
  ["Indicação", 34],
  ["Loja", 22],
];
const KPIS = [
  { r: "Leads no mês", v: "351", u: "", d: "▲ 18,4% no mês", s: [9, 10, 8, 12, 11, 13, 12, 14] },
  { r: "Primeira resposta", v: "38", u: "s", d: "▼ era 2 min 40 s", s: [160, 120, 90, 70, 55, 45, 40, 38] },
  { r: "Conversão em venda", v: "12,3", u: "%", d: "▲ 2,1 p.p.", s: [9.6, 10, 10.4, 10.2, 11, 11.5, 12, 12.3] },
  { r: "Vendas fechadas", v: "43", u: "", d: "▲ 9 a mais", s: [26, 30, 29, 33, 35, 38, 40, 43] },
];
const FEED = [
  ["14:06", <><strong>Rodrigo</strong> qualificado, moto na troca, passado ao <strong>Rafael</strong></>],
  ["13:52", <><strong>Ana</strong> agendou test ride para sábado, 10h</>],
  ["13:40", <><strong>Carlos</strong> pediu simulação em 48x, proposta enviada</>],
  ["13:31", <>Follow-up cobrado da <strong>Júlia</strong>, 2 dias sem resposta</>],
] as const;

function Sparkline({ valores }: { valores: number[] }) {
  const mn = Math.min(...valores);
  const mx = Math.max(...valores);
  const pts = valores.map((y, i) => `${(i / (valores.length - 1)) * 84},${30 - ((y - mn) / (mx - mn || 1)) * 26}`).join(" ");
  return (
    <svg viewBox="0 0 84 34" className="pn-spark" aria-hidden>
      <polyline points={pts} fill="none" stroke="var(--pn-bom)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Gráfico de linhas medido no tamanho real da caixa, com mira e dica ao passar o dedo. */
function GraficoDias() {
  const caixa = useRef<HTMLDivElement>(null);
  const [tam, setTam] = useState({ w: 600, h: 260 });
  const [foco, setFoco] = useState<number | null>(null);

  useEffect(() => {
    const el = caixa.current;
    if (!el) return;
    const obs = new ResizeObserver(([e]) => setTam({ w: e.contentRect.width, h: e.contentRect.height }));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const { w: W, h: H } = tam;
  const T = 10, B = 24, L = 24, R = 4, TETO = 18;
  const x = (i: number) => L + (i / (DIAS.length - 1)) * (W - L - R);
  const y = (v: number) => H - B - (v / TETO) * (H - B - T);
  const linha = (a: number[]) => a.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join("");

  const mover = (e: React.PointerEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const i = Math.round(((e.clientX - r.left - L) / (W - L - R)) * (DIAS.length - 1));
    setFoco(Math.max(0, Math.min(DIAS.length - 1, i)));
  };

  return (
    <div ref={caixa} className="pn-grafico">
      <svg width={W} height={H} onPointerMove={mover} onPointerLeave={() => setFoco(null)} role="img" aria-label="Leads por dia em outubro: 351 recebidos, a maioria respondida pela IA em menos de 1 minuto">
        <defs>
          <linearGradient id="pn-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0DA2B8" stopOpacity=".28" />
            <stop offset="1" stopColor="#0DA2B8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 6, 12, 18].map((v) => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="rgba(148,178,230,.10)" />
            <text x={L - 8} y={y(v) + 4} fill="#7487A8" fontSize="11" textAnchor="end">{v}</text>
          </g>
        ))}
        {[0, 7, 14, 21, 29].map((i, k) => (
          <text key={i} x={x(i)} y={H - 6} fill="#7487A8" fontSize="11" textAnchor={k === 0 ? "start" : k === 4 ? "end" : "middle"}>
            {k === 0 ? "1 out" : k === 4 ? "30 out" : i + 1}
          </text>
        ))}
        <path d={`${linha(DIAS)}L${x(DIAS.length - 1)},${y(0)}L${x(0)},${y(0)}Z`} fill="url(#pn-area)" />
        <path d={linha(DIAS)} fill="none" stroke="#0DA2B8" strokeWidth="2" strokeLinejoin="round" />
        <path d={linha(IA)} fill="none" stroke="#A974F0" strokeWidth="2" strokeLinejoin="round" />
        {foco !== null && (
          <>
            <line x1={x(foco)} x2={x(foco)} y1={T} y2={H - B} stroke="rgba(241,245,252,.35)" />
            <circle cx={x(foco)} cy={y(DIAS[foco])} r="4.5" fill="#0DA2B8" stroke="#0E1D36" strokeWidth="2" />
            <circle cx={x(foco)} cy={y(IA[foco])} r="4.5" fill="#A974F0" stroke="#0E1D36" strokeWidth="2" />
          </>
        )}
      </svg>
      {foco !== null && (
        <div className="pn-dica" style={{ left: Math.min(x(foco) + 12, W - 230) }}>
          <b>{foco + 1} de outubro</b>
          {DIAS[foco]} recebidos · {IA[foco]} pela IA em menos de 1 min
        </div>
      )}
    </div>
  );
}

/**
 * O painel da operação do CRM, como ele é de verdade: indicadores com
 * tendência, leads por dia, origem e o que a Mel fez agora. Fluido: se
 * reorganiza pelo espaço da caixa (container query), não pela tela.
 */
export default function PainelAoVivo({ className = "" }: { className?: string }) {
  const maior = CANAIS[0][1];
  return (
    <div data-ui className={`pn ${className}`}>
      <div className="pn-app">
        <aside className="pn-lado" aria-hidden>
          <SeloIA className="pn-logo" />
          {[
            "M4 20V10M10 20V4M16 20v-7M22 20H2",
            "M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z",
            "M3 4h5v16H3zM10 4h5v11h-5zM17 4h4v7h-4z",
            "M9 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2.5 20a6.5 6.5 0 0 1 13 0",
          ].map((d, i) => (
            <span key={d} className={`pn-ico ${i === 0 ? "on" : ""}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={d} />
              </svg>
            </span>
          ))}
        </aside>

        <div className="pn-main">
          <div className="pn-topo">
            <div>
              <p className="pn-h2">Painel da operação</p>
              <p className="pn-sub">Loja matriz e filial · últimos 30 dias</p>
            </div>
            <div className="pn-topo-dir">
              <span className="pn-vivo"><i />Ao vivo</span>
              <span className="pn-seg" aria-hidden>
                <span>7 dias</span>
                <span className="on">30 dias</span>
                <span>90 dias</span>
              </span>
            </div>
          </div>

          <div className="pn-kpis">
            {KPIS.map((k) => (
              <div key={k.r} className="pn-kpi">
                <p className="pn-kpi-r">{k.r}</p>
                <div>
                  <p className="pn-kpi-v">
                    {k.v}
                    {k.u && <em>{k.u}</em>}
                  </p>
                  <p className="pn-kpi-d">{k.d}</p>
                </div>
                <Sparkline valores={k.s} />
              </div>
            ))}
          </div>

          <div className="pn-grade">
            <div className="pn-card pn-serie">
              <div className="pn-card-topo">
                <div>
                  <p className="pn-h3">Leads por dia</p>
                  <p className="pn-sub">Recebidos e respondidos pela IA em menos de 1 minuto</p>
                </div>
                <div className="pn-leg">
                  <span style={{ "--c": "#0DA2B8" } as React.CSSProperties}>Recebidos</span>
                  <span style={{ "--c": "#A974F0" } as React.CSSProperties}>Respondidos pela IA</span>
                </div>
              </div>
              <GraficoDias />
            </div>

            <div className="pn-card">
              <p className="pn-h3">Origem dos leads</p>
              <div className="pn-canais">
                {CANAIS.map(([n, v]) => (
                  <div key={n} className="pn-lin">
                    <span className="pn-t">{n}</span>
                    <span className="pn-barra"><i style={{ width: `${(v / maior) * 100}%` }} /></span>
                    <span className="pn-v">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pn-card">
              <div className="pn-card-topo">
                <p className="pn-h3">O que a Mel fez agora</p>
                <span className="pn-ia"><i />IA ativa</span>
              </div>
              <ul className="pn-feed">
                {FEED.map(([h, t]) => (
                  <li key={h}>
                    <time>{h}</time>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
