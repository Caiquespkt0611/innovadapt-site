import { integracoes } from "@/lib/site";

/**
 * A régua do que o sistema já conversa, logo abaixo do topo, onde a Syonet põe
 * a dela. Só entra o que roda hoje em produção.
 */
export default function Integracoes() {
  return (
    <section aria-labelledby="integra-titulo" className="border-y border-[#e1e7f1] bg-[#f3f6fb] py-10">
      <div className="wrap flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
        <h2 id="integra-titulo" className="flex-none text-[0.9375rem] font-semibold text-[#3d4b66] lg:w-56">
          Conversa com o que você já usa
        </h2>
        <ul className="flex flex-wrap gap-2.5">
          {integracoes.map((i) => (
            <li
              key={i.nome}
              title={i.tipo}
              className="rounded-full border border-[#dde4f0] bg-white px-4 py-2 text-[0.875rem] font-semibold text-[#0b1630]"
            >
              {i.nome}
              <span className="ml-2 font-normal text-[#6b7894]">{i.tipo}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
