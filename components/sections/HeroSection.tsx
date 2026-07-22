"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeartPulse, Home, Scale, Brain, Users } from "lucide-react";

const clusters = [
  {
    name: "Entendendo a Doença",
    description: "Alzheimer, Parkinson, AVC, demência — o que esperar",
    icon: <Brain className="w-5 h-5" />,
    href: "/categorias/entendendo-a-doenca",
  },
  {
    name: "Cuidados Práticos",
    description: "Alimentação, medicação, segurança, higiene",
    icon: <Home className="w-5 h-5" />,
    href: "/categorias/cuidados-praticos",
  },
  {
    name: "Saúde do Cuidador",
    description: "Burnout, culpa, raiva, como pedir ajuda",
    icon: <HeartPulse className="w-5 h-5" />,
    href: "/categorias/saude-emocional",
  },
  {
    name: "Questões Jurídicas",
    description: "Procuração, interdição, BPC, LOAS, plano de saúde",
    icon: <Scale className="w-5 h-5" />,
    href: "/categorias/juridico",
  },
  {
    name: "Família e Conflitos",
    description: "Irmãos que não ajudam, cuidador solo, divisão de custos",
    icon: <Users className="w-5 h-5" />,
    href: "/categorias/familia",
  },
];

export default function HeroSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative bg-bg-base">
      {/* Hero Principal */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20 pb-16 lg:pt-28 lg:pb-20 min-h-[80vh]">
          
          {/* Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.12 } }
              }}
            >
              <motion.p 
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-6"
              >
                Você não está sozinho nessa
              </motion.p>
              
              <motion.h1 
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-medium text-brand-primary leading-[1.15] mb-6 tracking-tight"
              >
                Cuidar do seu pai<br />
                é difícil. Você não<br />
                precisa saber <span className="italic font-light">tudo sozinho.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-brand-secondary font-body mb-10 max-w-lg leading-relaxed font-light"
              >
                Informação, acolhimento e orientação prática para filhos que cuidam de pais com demência, Alzheimer e outras doenças.
              </motion.p>
              
              <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                <Link 
                  href="/artigos" 
                  className="inline-flex items-center justify-center px-8 py-3.5 text-[13px] font-medium tracking-wide uppercase text-white bg-brand-primary hover:bg-brand-primary/90 transition-all duration-300"
                >
                  Explorar artigos
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full lg:w-[45%] relative z-10"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=50&auto=format&fit=crop"
                alt="Filha adulta apoiando mãe idosa com carinho em casa"
                width={400}
                height={500}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Seção de Clusters */}
      <div className="bg-white border-y border-border-base">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-10">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-3 block">
              Explore por tema
            </span>
            <h2 className="text-xl lg:text-2xl font-display font-medium text-brand-primary">
              Encontre o que precisa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {clusters.map((cluster) => (
              <Link key={cluster.href} href={cluster.href}>
                <div className="group p-5 border border-border-base hover:border-brand-primary/20 transition-all duration-300 h-full">
                  <div className="w-10 h-10 border border-border-base group-hover:border-brand-primary/30 flex items-center justify-center mb-4 text-brand-secondary group-hover:text-brand-primary transition-colors">
                    {cluster.icon}
                  </div>
                  <h3 className="text-sm font-display font-medium text-brand-primary mb-1">
                    {cluster.name}
                  </h3>
                  <p className="text-xs text-brand-secondary/60 leading-relaxed">
                    {cluster.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Emocional */}
      <div className="bg-brand-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium leading-snug mb-6">
            Todo site fala sobre o idoso.<br />
            <span className="text-white/50">Este site fala sobre você.</span>
          </h2>
          <p className="text-base text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
            Você não escolheu ser cuidador. Mas está aqui. E isso diz tudo sobre o tipo de pessoa que você é.
          </p>
          <Link 
            href="/artigos" 
            className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-white border-b border-white/30 hover:border-white/70 pb-1 transition-colors"
          >
            Comece a ler
          </Link>
        </div>
      </div>
    </section>
  );
}
