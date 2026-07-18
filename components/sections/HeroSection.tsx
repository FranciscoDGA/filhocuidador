"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative overflow-hidden bg-bg-base">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-[85vh]">
          
          {/* Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.p 
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-8"
              >
                Portal de Acolhimento
              </motion.p>
              
              <motion.h1 
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-brand-primary leading-[1.1] mb-8 tracking-tight"
              >
                Cuidar de quem<br />
                você ama é um ato<br />
                de <span className="italic font-light">amor.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-xl text-brand-secondary font-body mb-12 max-w-lg leading-relaxed font-light"
              >
                Informação, acolhimento e orientação prática para atravessar essa fase com mais leveza.
              </motion.p>
              
              <motion.div variants={fadeUp} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#acolhimento" 
                  className="group inline-flex items-center justify-center px-10 py-4 text-[13px] font-medium tracking-wide uppercase text-white bg-brand-primary hover:bg-brand-primary/90 transition-all duration-300"
                >
                  Começar a Explorar
                </Link>
                <Link 
                  href="/sobre" 
                  className="group inline-flex items-center justify-center px-10 py-4 text-[13px] font-medium tracking-wide uppercase text-brand-primary border border-brand-primary/20 hover:bg-brand-primary/5 transition-all duration-300"
                >
                  Sobre o Projeto
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-full lg:w-[45%] relative z-10"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop"
                alt="Filha adulta apoiando mãe idosa com carinho em casa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
