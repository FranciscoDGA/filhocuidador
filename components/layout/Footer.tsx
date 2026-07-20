"use client";

import Link from "next/link";
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Newsletter CTA */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/30 mb-4 block">
            Newsletter
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium mb-5 leading-tight">
            Receba semanalmente
          </h2>
          <p className="text-sm sm:text-base text-white/40 font-body mb-8 leading-relaxed">
            Dicas práticas, orientação jurídica e acolhimento emocional direto no seu email. Sem spam, sem floreios.
          </p>
          <NewsletterForm />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16 border-t border-white/10 pt-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#d4ccc4'}} />
                      <stop offset="100%" style={{stopColor:'#fafaf8'}} />
                    </linearGradient>
                  </defs>
                  <path d="M50 15 C25 15 15 35 15 55 C15 75 30 90 50 90 C70 90 85 75 85 55 C85 35 75 15 50 15 Z" fill="url(#logoGradFooter)" opacity="0.9"/>
                  <path d="M30 55 L50 30 L70 55 Z" fill="white" opacity="0.95"/>
                  <rect x="35" y="50" width="30" height="25" fill="white" opacity="0.95"/>
                  <rect x="44" y="55" width="12" height="10" fill="#d4ccc4" opacity="0.8"/>
                  <circle cx="42" cy="48" r="4" fill="#3d3225"/>
                  <circle cx="50" cy="45" r="5" fill="#3d3225"/>
                  <circle cx="58" cy="48" r="4" fill="#3d3225"/>
                  <ellipse cx="75" cy="35" rx="8" ry="4" transform="rotate(-30 75 35)" fill="url(#logoGradFooter)" opacity="0.7"/>
                  <ellipse cx="80" cy="28" rx="6" ry="3" transform="rotate(-45 80 28)" fill="url(#logoGradFooter)" opacity="0.5"/>
                </svg>
              </div>
              <span className="font-display font-bold text-base text-white">
                Filhos <span className="text-brand-accent">Cuidadores</span>
              </span>
            </div>
            <p className="text-xs text-white/35 max-w-xs leading-relaxed">
              O único portal brasileiro que fala com quem cuida. Informação, acolhimento e orientação prática para filhos que cuidam de pais com demência.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-medium text-white/25 mb-4 tracking-widest uppercase">Clusters</h4>
            <ul className="space-y-2.5 text-xs text-white/45">
              <li><Link href="/categorias/entendendo-a-doenca" className="hover:text-white transition-colors">Entendendo a Doença</Link></li>
              <li><Link href="/categorias/cuidados-praticos" className="hover:text-white transition-colors">Cuidados Práticos</Link></li>
              <li><Link href="/categorias/saude-emocional" className="hover:text-white transition-colors">Saúde do Cuidador</Link></li>
              <li><Link href="/categorias/juridico" className="hover:text-white transition-colors">Questões Jurídicas</Link></li>
              <li><Link href="/categorias/familia" className="hover:text-white transition-colors">Família e Conflitos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium text-white/25 mb-4 tracking-widest uppercase">Portal</h4>
            <ul className="space-y-2.5 text-xs text-white/45">
              <li><Link href="/artigos" className="hover:text-white transition-colors">Todos os Artigos</Link></li>
              <li><Link href="/diarios" className="hover:text-white transition-colors">Diários de Cuidadores</Link></li>
              <li><Link href="/pergunte-ao-especialista" className="hover:text-white transition-colors">Pergunte ao Especialista</Link></li>
              <li><Link href="/kits" className="hover:text-white transition-colors">Kits de Emergência</Link></li>
              <li><Link href="/ferramentas" className="hover:text-white transition-colors">Ferramentas</Link></li>
              <li><Link href="/videos" className="hover:text-white transition-colors">Vídeos</Link></li>
              <li><Link href="/depoimentos" className="hover:text-white transition-colors">Depoimentos</Link></li>
              <li><Link href="/comunidade" className="hover:text-white transition-colors">Comunidade</Link></li>
              <li><Link href="/produtos" className="hover:text-white transition-colors">Produtos e Serviços</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium text-white/25 mb-4 tracking-widest uppercase">Legal</h4>
            <ul className="space-y-2.5 text-xs text-white/45">
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre o Projeto</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              <li><Link href="/trabalhe-conosco" className="hover:text-white transition-colors">Trabalhe Conosco</Link></li>
              <li><Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-[10px] text-white/25 leading-relaxed max-w-3xl">
            <strong className="text-white/40">Aviso:</strong> Os Filhos Cuidadores é um portal informativo. Todo conteúdo é baseado em fontes confiáveis e revisão profissional, mas não substitui consulta médica, jurídica ou psicológica. Sempre busque um profissional qualificado para orientação específica.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/25">
            © 2026 Filhos Cuidadores. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/25 hover:text-white transition-colors text-[10px]">
              Twitter
            </a>
            <a href="#" className="text-white/25 hover:text-white transition-colors text-[10px]">
              Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
