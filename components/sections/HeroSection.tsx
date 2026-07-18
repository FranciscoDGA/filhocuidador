"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFAF7]">
      {/* Subtle animated background blobs */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] bg-brand-secondary/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] bg-[#C47B5A]/10 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 pt-32 pb-16 lg:pt-40 lg:pb-24 min-h-[90vh]">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.h1 
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-text-base leading-[1.1] mb-8 tracking-[-0.03em]"
              >
                Cuidar de quem <br className="hidden lg:block"/>você ama é um ato de amor.<br/>
                <span className="text-brand-accent italic font-light">Mas também dói.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl text-text-base/60 font-body mb-12 max-w-2xl leading-relaxed font-light"
              >
                Aqui você encontra informação, acolhimento e orientação prática para atravessar essa fase com mais leveza.
              </motion.p>
              
              <motion.div variants={fadeUp} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                <Link 
                  href="#acolhimento" 
                  className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-text-base rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(45,55,72,0.4)] w-full sm:w-auto"
                >
                  <span className="relative z-10">Quero me sentir menos sozinho</span>
                  <div className="absolute inset-0 bg-[#C47B5A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Content - Glassmorphism style */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-full lg:w-1/2 relative z-10"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden p-2 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop"
                  alt="Filha adulta apoiando mãe idosa com carinho em casa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  priority
                />
                {/* Elegant inner gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent mix-blend-multiply"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
