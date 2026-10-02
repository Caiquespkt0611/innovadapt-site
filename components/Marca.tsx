import { useId } from "react";

/**
 * O símbolo iA da InnovAdapt, desenhado em vetor. Sai do mesmo traçado do
 * favicon (app/icon.svg) e da foto do Instagram, então fica nítido em qualquer
 * tamanho. O PNG antigo trazia o slogan junto e, na altura do cabeçalho, virava
 * uma mancha ilegível.
 */
export function SimboloIA({ className = "" }: { className?: string }) {
  const p = useId().replace(/:/g, "");
  return (
    <svg viewBox="24 -79 710 710" className={className} aria-hidden>
      <defs>
 <linearGradient id={`${p}gPonto`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1AA6FC"/><stop offset="1" stopColor="#0776FC"/></linearGradient>
 <linearGradient id={`${p}gHaste`} gradientUnits="userSpaceOnUse" x1="0" y1="182" x2="0" y2="410"><stop offset="0" stopColor="#0A78FF"/><stop offset=".55" stopColor="#0A5DF4"/><stop offset="1" stopColor="#1A2C96"/></linearGradient>
 <linearGradient id={`${p}gFita`} gradientUnits="userSpaceOnUse" x1="90" y1="520" x2="560" y2="60"><stop offset="0" stopColor="#2C5AF6"/><stop offset=".45" stopColor="#1A86FA"/><stop offset="1" stopColor="#05D8F9"/></linearGradient>
 <linearGradient id={`${p}gPerna`} gradientUnits="userSpaceOnUse" x1="484" y1="87" x2="700" y2="474"><stop offset="0" stopColor="#1B279C"/><stop offset=".4" stopColor="#3A42D8"/><stop offset="1" stopColor="#9641E3"/></linearGradient>
 <clipPath id={`${p}dobra`}><path d="M-100,362 L38,362 Q100,390 158,399 L158,-100 L1300,-100 L1300,1300 L-100,1300 Z"/></clipPath>
</defs>
<g>
 <circle cx="97" cy="87" r="60" fill={`url(#${p}gPonto)`}/>
 <path d="M38,242 A60,60 0 0 1 158,242 L158,402 Q100,393 38,366 Z" fill={`url(#${p}gHaste)`}/>
 <path d="M98,330 L98,400 C98,485 212.0,462.8 244.5,410.0 L418.6,127.6 A58,58 0 0 1 519.7,131.7 L523.9,146.9" fill="none" stroke={`url(#${p}gFita)`} strokeWidth="120" strokeLinecap="round" strokeLinejoin="round" clipPath={`url(#${p}dobra)`}/>
 <line x1="523.9" y1="146.9" x2="660.1" y2="414.2" stroke={`url(#${p}gPerna)`} strokeWidth="120" strokeLinecap="round"/>
</g>
    </svg>
  );
}

export default function Marca({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <SimboloIA className="h-[1.9em] w-[1.9em] shrink-0" />
      <span className="text-[1.15em] font-bold leading-none tracking-[-0.03em] text-white">
        Innov
        <span className="bg-gradient-to-r from-[#2f6bff] via-[#4b5cf0] to-[#9641e3] bg-clip-text text-transparent">
          Adapt
        </span>
      </span>
    </span>
  );
}
