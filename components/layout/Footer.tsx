"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top CTA Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-6 leading-tight">
            Vamos caminhar juntos
          </h2>
          <p className="text-base sm:text-lg text-white/50 font-body mb-10 leading-relaxed">
            Junte-se a mais de 4.000 cuidadoras que recebem nosso apoio emocional semanal.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email"
              className="w-full sm:flex-1 px-5 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/50 transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-white text-brand-primary text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
            >
              Inscrever-se
            </button>
          </form>
          {submitted && (
            <p className="text-sm mt-4 text-white/70">
              Obrigado! Verifique seu email para confirmar.
            </p>
          )}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16 border-t border-white/10 pt-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <span className="font-display font-semibold text-lg text-white">
                Filho Cuidador
              </span>
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Informação, acolhimento e orientação prática para atravessar essa fase com mais segurança e amor.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-medium text-white/30 mb-5 tracking-widest uppercase">Conteúdo</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/saude-emocional" className="hover:text-white transition-colors">Saúde Emocional</Link></li>
              <li><Link href="/cuidados-praticos" className="hover:text-white transition-colors">Cuidados Práticos</Link></li>
              <li><Link href="/entendendo-doenca" className="hover:text-white transition-colors">A Doença</Link></li>
              <li><Link href="/juridico" className="hover:text-white transition-colors">Jurídico</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium text-white/30 mb-5 tracking-widest uppercase">Empresa</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre nós</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              <li><Link href="/imprensa" className="hover:text-white transition-colors">Imprensa</Link></li>
              <li><Link href="/apoio" className="hover:text-white transition-colors">Apoie o projeto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium text-white/30 mb-5 tracking-widest uppercase">Legal</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link href="/termos" className="hover:text-white transition-colors">Termos</Link></li>
              <li><Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 Filho Cuidador. Todos os direitos reservados.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">
              Twitter
            </a>
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">
              Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
