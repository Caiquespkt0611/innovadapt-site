"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    tag: "E-commerce",
    title: "Plataforma de Vendas B2B",
    description:
      "Desenvolvimento de portal de pedidos com CRM integrado, aumentando as vendas em 340% no primeiro trimestre.",
    metrics: [
      { label: "Aumento em vendas", value: "+340%" },
      { label: "Tempo de pedido", value: "-70%" },
    ],
    tech: ["Next.js", "CRM IA", "WhatsApp API"],
    gradient: "from-[#00B4FF] to-[#3A6FF8]",
    bg: "from-[#00B4FF]/10 to-[#3A6FF8]/10",
  },
  {
    tag: "Saúde",
    title: "Sistema de Agendamento com IA",
    description:
      "Automação completa do agendamento de consultas via WhatsApp com confirmações inteligentes e redução de no-shows.",
    metrics: [
      { label: "Redução no-show", value: "-60%" },
      { label: "Agendamentos/dia", value: "+5x" },
    ],
    tech: ["WhatsApp Bot", "IA Preditiva", "Automação"],
    gradient: "from-[#3A6FF8] to-[#8B45F7]",
    bg: "from-[#3A6FF8]/10 to-[#8B45F7]/10",
  },
  {
    tag: "Imobiliária",
    title: "CRM com IA para Corretor",
    description:
      "CRM personalizado com scoring de leads e campanhas automáticas de follow-up por WhatsApp e e-mail.",
    metrics: [
      { label: "Conversão de leads", value: "+180%" },
      { label: "Tempo de resposta", value: "-85%" },
    ],
    tech: ["CRM IA", "Lead Scoring", "n8n"],
    gradient: "from-[#8B45F7] to-[#00B4FF]",
    bg: "from-[#8B45F7]/10 to-[#00B4FF]/10",
  },
];

function CaseCard({ project, index }: { project: typeof cases[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-[#161B27] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
    >
      {/* Header gradient band */}
      <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6">
        {/* Tag */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${project.bg} border border-white/10 text-white/80`}>
          {project.tag}
        </span>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-[#8B9AB8] leading-relaxed mb-6">{project.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label} className={`p-3 rounded-xl bg-gradient-to-br ${project.bg} border border-white/5`}>
              <div className={`text-xl font-extrabold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {m.value}
              </div>
              <div className="text-xs text-[#8B9AB8] mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/[0.06] text-xs text-[#8B9AB8] font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Cases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cases" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-[#8B9AB8] mb-6">
              Resultados reais
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Cases de <span className="gradient-text">sucesso</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-[#8B9AB8]">
              Projetos que transformaram operações e geraram crescimento mensurável para nossos clientes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <CaseCard key={c.title} project={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
