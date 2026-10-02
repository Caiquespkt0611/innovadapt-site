import { integracoes } from "@/lib/site";

/**
 * A régua do que o sistema já conversa. A Syonet abre a prova com uma régua
 * de portais e DMS; aqui entra só o que roda hoje em produção. Mercado Livre e
 * OLX só entram depois de ligados.
 */
export default function Integracoes() {
  return (
    <section className="fio-topo relative py-14 md:py-16">
      <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:items-center lg:gap-14">
        <div>
          <h2 className="text-xl font-bold tracking-[-0.02em] text-white md:text-2xl">
            Conversa com o que a loja já usa
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#93a6c4]">
            Ninguém troca de DMS nem de portal para usar a plataforma. Ela puxa de
            onde o dado já está.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[rgba(120,170,255,0.14)] bg-[rgba(120,170,255,0.14)] sm:grid-cols-4">
          {integracoes.map((i) => (
            <li key={i.nome} className="bg-[#071022] px-4 py-4">
              <p className="text-[0.9375rem] font-semibold text-white">{i.nome}</p>
              <p className="mono mt-1 text-[0.75rem] text-[#5d708f]">{i.tipo}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
