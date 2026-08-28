/**
 * Trilhas de circuito que saem do canto e se apagam. Tudo em SVG inline: nenhum
 * request extra, e escala em qualquer tela sem virar imagem borrada.
 */
export default function FundoTech({ espelhado = false }: { espelhado?: boolean }) {
  return (
    <div className="circuito" aria-hidden>
      <svg
        className={`absolute inset-0 h-full w-full ${espelhado ? "scale-x-[-1]" : ""}`}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="trilha" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2f6bff" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#22b8f0" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#22b8f0" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="apagar" cx="12%" cy="24%" r="62%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="mascara">
            <rect width="1440" height="900" fill="url(#apagar)" />
          </mask>
        </defs>

        <g mask="url(#mascara)" stroke="url(#trilha)" strokeWidth="1.1" fill="none">
          <path d="M-40 176 H180 L232 124 H430 L482 176 H700" />
          <path d="M-40 268 H116 L168 320 H392 L444 268 H628" />
          <path d="M-40 372 H262 L314 320 H520" />
          <path d="M-40 460 H150 L206 516 H420 L472 460 H660" />
          <path d="M-40 84 H96 L152 28 H360" />
          <path d="M-40 560 H240 L296 616 H500" />
          <path d="M60 -40 V96 L112 148 V300" />
          <path d="M320 -40 V64 L268 116 V240" />
        </g>

        <g mask="url(#mascara)" fill="#22b8f0">
          {[
            [180, 176], [430, 124], [116, 268], [392, 320], [262, 372],
            [150, 460], [420, 516], [96, 84], [240, 560], [112, 148], [268, 116],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" opacity="0.6" />
          ))}
        </g>
      </svg>
    </div>
  );
}
