"use client";

import { motion } from "framer-motion";

const STAGGER = 0.15;
const DELAY = 0.2;

function FadeUp({ delay = 0, children, className }: { delay?: number; children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <FloatingOrb className="w-[600px] h-[600px] -top-40 -left-40 bg-[#00B4FF]/15" delay={0} />
      <FloatingOrb className="w-[500px] h-[500px] top-1/2 -right-32 bg-[#8B45F7]/15" delay={2} />
      <FloatingOrb className="w-[400px] h-[400px] bottom-0 left-1/3 bg-[#3A6FF8]/10" delay={4} />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-28">
        <FadeUp delay={DELAY} className="inline-flex items-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-[#8B9AB8]">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00B4FF" }} />
            Tecnologia de ponta para negócios modernos
          </div>
        </FadeUp>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: DELAY + STAGGER, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
        >
          Tecnologia que{" "}
          <span className="gradient-text">se adapta</span>
          <br />
          ao seu negócio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: DELAY + STAGGER * 2, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-[#8B9AB8] leading-relaxed mb-10"
        >
          Desenvolvemos soluções digitais sob medida: sites, CRM com IA,
          automações inteligentes e integrações WhatsApp para que sua empresa
          cresça sem barreiras.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: DELAY + STAGGER * 3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group relative px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #00B4FF, #3A6FF8, #8B45F7)" }}
          >
            Começar Agora
          </a>
          <a
            href="#servicos"
            onClick={(e) => { e.preventDefault(); document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-4 text-base font-semibold text-white rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105"
          >
            Ver Serviços
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: DELAY + STAGGER * 4, ease: "easeOut" }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: "50+", label: "Projetos" },
            { value: "98%", label: "Satisfação" },
            { value: "3x", label: "ROI Médio" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text">{stat.value}</div>
              <div className="text-sm text-[#8B9AB8] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs text-[#8B9AB8]">Role para baixo</span>
        <motion.div
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 rounded-full bg-[#3A6FF8]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
