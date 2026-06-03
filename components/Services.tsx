"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Desenvolvimento Web",
    description:
      "Sites, landing pages e plataformas digitais de alta performance com design moderno e conversão maximizada.",
    features: ["Next.js & React", "UX/UI profissional", "Performance 90+ Lighthouse"],
    gradient: "from-[#00B4FF]/20 to-[#3A6FF8]/20",
    border: "border-[#00B4FF]/20",
    iconColor: "#00B4FF",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "CRM com IA",
    description:
      "Gestão de relacionamento com clientes potencializada por inteligência artificial para aumentar vendas e fidelização.",
    features: ["Funil de vendas inteligente", "Lead scoring automático", "Análise preditiva"],
    gradient: "from-[#3A6FF8]/20 to-[#8B45F7]/20",
    border: "border-[#3A6FF8]/20",
    iconColor: "#3A6FF8",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Automações",
    description:
      "Elimine tarefas repetitivas com fluxos automatizados que economizam tempo, reduzem erros e escalam o seu negócio.",
    features: ["n8n & Make integrado", "Notificações automáticas", "Relatórios agendados"],
    gradient: "from-[#8B45F7]/20 to-[#00B4FF]/20",
    border: "border-[#8B45F7]/20",
    iconColor: "#8B45F7",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Integrações WhatsApp",
    description:
      "Conecte seu negócio ao WhatsApp Business com chatbots, atendimento automatizado e campanhas de marketing.",
    features: ["WhatsApp Business API", "Chatbot com IA", "Campanhas segmentadas"],
    gradient: "from-[#00B4FF]/20 to-[#8B45F7]/20",
    border: "border-[#00B4FF]/20",
    iconColor: "#25D366",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative p-6 rounded-2xl border bg-[#161B27] hover:bg-[#1C2333] ${service.border} transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-default`}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative z-10">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ color: service.iconColor, background: `${service.iconColor}15` }}
        >
          {service.icon}
        </div>

        <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
        <p className="text-sm text-[#8B9AB8] leading-relaxed mb-4">{service.description}</p>

        <ul className="space-y-1.5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-[#8B9AB8]">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: service.iconColor }}
              />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #3A6FF8, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-[#8B9AB8] mb-6">
              O que entregamos
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Soluções completas para{" "}
              <span className="gradient-text">escalar seu negócio</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-[#8B9AB8]">
              Combinamos tecnologia de ponta com estratégia de negócios para entregar
              resultados reais e mensuráveis.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
