import { useId } from "react";

/**
 * O selo da InnovAdapt: iA branco sobre o degradê da marca. É o mesmo desenho
 * do favicon (app/icon.svg) e da foto do Instagram (opção C, escolhida em
 * 02/10/2026). Segue o que os concorrentes fazem (Webmotors, RD, HubSpot,
 * Pipedrive): uma cor de fundo e a marca em branco, legível até em 16 px.
 * O símbolo multicolorido sobre o fundo escuro sumia no tamanho pequeno.
 */
export function SeloIA({ className = "" }: { className?: string }) {
  const id = `selo${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 1080 1080" className={className} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#2647F0" />
          <stop offset=".5" stopColor="#1A82FA" />
          <stop offset="1" stopColor="#8B45E6" />
        </linearGradient>
      </defs>
      <rect width="1080" height="1080" rx="240" fill={`url(#${id})`} />
      <g transform="translate(540 540) scale(1.12) translate(-540 -540)">
        <g transform="translate(-49.8,83.0) scale(0.9616)">
          <circle cx="300" cy="291.6" r="63.4" fill="#fff" />
          <path
            d="M300,450 L300,565.4 A96,96 0 0 0 477.7,615.8 L623.3,379.6 A96,96 0 0 1 790.5,386.4 L926.7,653.7"
            fill="none"
            stroke="#fff"
            strokeWidth="122"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

export default function Marca({
  className = "",
  sobreEscuro = false,
}: {
  className?: string;
  sobreEscuro?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <SeloIA className="h-[1.85em] w-[1.85em] shrink-0" />
      <span
        className={`text-[1.15em] font-bold leading-none tracking-[-0.025em] ${
          sobreEscuro ? "text-white" : "text-[#0b1630]"
        }`}
      >
        InnovAdapt
      </span>
    </span>
  );
}
