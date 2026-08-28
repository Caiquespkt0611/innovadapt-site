export default function Kpi({
  rotulo,
  valor,
  unidade,
  delta,
  sentido = "cima",
}: {
  rotulo: string;
  valor: string;
  unidade?: string;
  delta?: string;
  sentido?: "cima" | "baixo" | "neutro";
}) {
  const cor =
    sentido === "cima" ? "#2ee6a8" : sentido === "baixo" ? "#ff5f6d" : "#93a6c4";
  return (
    <div className="bloco px-3 py-2.5">
      <p className="rotulo truncate">{rotulo}</p>
      <p className="mono mt-1.5 flex items-baseline gap-1 text-[1.0625rem] font-semibold leading-none text-white">
        {valor}
        {unidade && (
          <span className="text-[0.625rem] font-normal text-[#5d708f]">{unidade}</span>
        )}
      </p>
      {delta && (
        <p className="mono mt-1.5 text-[0.625rem] font-medium" style={{ color: cor }}>
          {sentido === "cima" ? "▲" : sentido === "baixo" ? "▼" : "•"} {delta}
        </p>
      )}
    </div>
  );
}
