"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const founders = [
  {
    name: "Caique",
    role: "CTO & Co-founder",
    focus: "Tech",
    bio: "Especialista em engenharia de software e arquitetura de sistemas. Lidera o desenvolvimento técnico com foco em performance, escalabilidade e inovação constante.",
    skills: ["Next.js & React", "Arquitetura Cloud", "IA & Machine Learning", "Integrações API"],
    avatar: "C",
    gradient: "from-[#00B4FF] to-[#3A6FF8]",
    bg: "from-[#00B4FF]/15 to-[#3A6FF8]/15",
    border: "border-[#00B4FF]/20",
    socialLinks: [
      { label: "LinkedIn", icon: "in" },
      { label: "GitHub", icon: "gh" },
    ],
  },
  {
    name: "Roger",
    role: "CEO & Co-founder",
    focus: "Comercial",
    bio: "Estrategista de negócios com visão apurada para oportunidades de mercado. Lidera as relações comerciais e garante que cada solução entregue valor real para o cliente.",
    skills: ["Estratégia de Negócios", "Vendas B2B", "Growth Marketing", "Parcerias Estratégicas"],
    avatar: "R",
    gradient: "from-[#3A6FF8] to-[#8B45F7]",
    bg: "from-[#3A6FF8]/15 to-[#8B45F7]/15",
    border: "border-[#8B45F7]/20",
    socialLinks: [
      { label: "LinkedIn", icon: "in" },
    ],
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#0A0E18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-[#8B9AB8] mb-6">
              Quem somos
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              A dupla por trás da{" "}
              <span className="gradient-text">InnovAdapt</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-[#8B9AB8]">
              Tech e estratégia em perfeita harmonia. Trabalhamos como extensão do time do nosso cliente.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`group relative p-8 rounded-2xl border ${founder.border} bg-[#161B27] hover:bg-[#1C2333] transition-all duration-300 hover:scale-[1.02]`}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${founder.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${founder.gradient.includes("00B4FF") ? "#00B4FF" : "#3A6FF8"}, ${founder.gradient.includes("8B45F7") ? "#8B45F7" : "#3A6FF8"})` }}
                  >
                    {founder.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                    <p className="text-sm text-[#8B9AB8]">{founder.role}</p>
                    <span
                      className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${founder.gradient}`}
                    >
                      {founder.focus}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#8B9AB8] leading-relaxed mb-6">{founder.bio}</p>

                {/* Skills */}
                <div className="space-y-2">
                  {founder.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: founder.gradient.includes("00B4FF") ? "#00B4FF" : "#8B45F7" }}
                      />
                      <span className="text-sm text-[#8B9AB8]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { title: "Transparência total", desc: "Comunicação clara em todas as etapas." },
            { title: "Foco em resultado", desc: "Métricas e KPIs definidos antes do início." },
            { title: "Parceria de longo prazo", desc: "Crescemos junto com nossos clientes." },
          ].map((v, i) => (
            <div key={v.title} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center">
              <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${["#00B4FF", "#3A6FF8", "#8B45F7"][i]}20, transparent)` }}>
                <div className="w-3 h-3 rounded-full"
                  style={{ background: ["#00B4FF", "#3A6FF8", "#8B45F7"][i] }} />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">{v.title}</h4>
              <p className="text-xs text-[#8B9AB8]">{v.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
