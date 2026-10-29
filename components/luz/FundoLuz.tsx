/**
 * Brilhos de cor que se mexem devagar e linhas de luz curvas, como a capa
 * do LinkedIn em versão clara. Fica atrás do conteúdo, sem pegar clique.
 * `intensidade` baixa serve para seções do meio da página.
 */
export default function FundoLuz({ intensidade = 1 }: { intensidade?: number }) {
  const o = (v: number) => v * intensidade;
  return (
    <div className="luz-fundo" aria-hidden>
      <span className="luz-orbe h-[340px] w-[340px] md:h-[620px] md:w-[620px]" style={{ background: "radial-gradient(closest-side, #0365FE, transparent)", left: "-120px", top: "-160px", opacity: o(0.36) }} />
      <span className="luz-orbe h-[320px] w-[320px] md:h-[560px] md:w-[560px]" style={{ background: "radial-gradient(closest-side, #8B3AE2, transparent)", right: "-120px", top: "40px", opacity: o(0.3), animationDelay: "-5s" }} />
      <span className="luz-orbe h-[300px] w-[300px] md:h-[520px] md:w-[520px]" style={{ background: "radial-gradient(closest-side, #04CDFB, transparent)", left: "35%", top: "420px", opacity: o(0.32), animationDelay: "-9s" }} />
      <svg className="luz-linhas" viewBox="0 0 1440 1250" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="luz-traco" x1="0" x2="1">
            <stop offset="0" stopColor="#04CDFB" stopOpacity="0" />
            <stop offset=".5" stopColor="#1A82FA" stopOpacity={0.55 * intensidade} />
            <stop offset="1" stopColor="#8B3AE2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path stroke="url(#luz-traco)" d="M-40 180 C 380 60, 820 420, 1480 220" />
        <path stroke="url(#luz-traco)" d="M-40 640 C 420 520, 900 820, 1480 560" />
        <path stroke="url(#luz-traco)" d="M-40 980 C 500 860, 1000 1100, 1480 900" />
      </svg>
      <span className="luz-ponto" style={{ left: "12%", top: "300px", background: "#1A82FA" }} />
      <span className="luz-ponto" style={{ left: "86%", top: "180px", background: "#8B3AE2", animationDelay: "-2s" }} />
      <span className="luz-ponto" style={{ left: "74%", top: "620px", background: "#04CDFB", animationDelay: "-4s" }} />
      <span className="luz-ponto" style={{ left: "22%", top: "760px", background: "#1A82FA", animationDelay: "-5s" }} />
    </div>
  );
}
