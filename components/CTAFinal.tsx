"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTAFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,180,255,0.12) 0%, rgba(58,111,248,0.15) 40%, rgba(139,69,247,0.12) 100%)",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(0,180,255,0.2)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(139,69,247,0.2)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-[#8B9AB8] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
              Prontos para começar
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
              Pronto para transformar{" "}
              <span className="gradient-text">seu negócio?</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#8B9AB8] leading-relaxed mb-10 max-w-2xl mx-auto">
              Agende uma conversa sem compromisso. Vamos entender sua necessidade e mostrar
              como a InnovAdapt pode ser a virada que o seu negócio precisa.
            </p>

            {/* Action cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#25D366]/20">
                    <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">WhatsApp</span>
                </div>
                <p className="text-xs text-[#8B9AB8]">Resposta em até 2 horas</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#3A6FF8]/20">
                    <svg className="w-4 h-4 text-[#3A6FF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">E-mail</span>
                </div>
                <p className="text-xs text-[#8B9AB8]">contato@innovadapt.com.br</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contato@innovadapt.com.br"
                className="group relative px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ background: "linear-gradient(135deg, #00B4FF, #3A6FF8, #8B45F7)" }}
              >
                Entrar em Contato
              </a>
              <a
                href="mailto:contato@innovadapt.com.br"
                className="px-8 py-4 text-base font-semibold text-white rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105"
              >
                Ver Portfólio Completo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
