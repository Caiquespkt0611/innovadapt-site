/**
 * Cromo de janela em volta de qualquer tela de produto. É o que faz o bloco ser
 * lido como software rodando, e não como ilustração de marketing.
 */
export default function Janela({
  titulo,
  children,
  className = "",
  aoVivo = false,
  seloJunto = false,
}: {
  titulo: string;
  children: React.ReactNode;
  className?: string;
  aoVivo?: boolean;
  seloJunto?: boolean;
}) {
  return (
    <div className={`janela ${className}`}>
      <div className="janela-barra">
        <span className="ponto-janela bg-[#ff5f57]" />
        <span className="ponto-janela bg-[#febc2e]" />
        <span className="ponto-janela bg-[#28c840]" />
        <span className="mono ml-2 min-w-0 flex-1 truncate text-[0.625rem] tracking-wide text-[#5d708f]">
          {titulo}
        </span>
        {aoVivo && (
          <span
            className={`mono flex flex-none items-center gap-1.5 text-[0.5625rem] uppercase tracking-[0.14em] text-[#2ee6a8] ${seloJunto ? "ml-1" : "ml-auto"}`}
          >
            <span className="pulso h-1.5 w-1.5 rounded-full bg-[#2ee6a8]" />
            no ar
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
