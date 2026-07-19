"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", data: { email } }),
      });
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-bg-base pt-24 lg:pt-32 pb-12 px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28 border-t border-border-base">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top CTA Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-4 block">
            Newsletter
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-6 leading-tight text-brand-primary">
            Vamos caminhar juntos
          </h2>
          <p className="text-base sm:text-lg text-brand-secondary font-body mb-10 leading-relaxed">
            Junte-se a mais de 4.000 cuidadoras que recebem nosso apoio emocional semanal.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email"
              className="w-full sm:flex-1 px-5 py-3 bg-transparent border border-border-base text-brand-primary placeholder:text-brand-secondary/40 text-sm focus:outline-none focus:border-brand-primary/40 transition-colors"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3 bg-brand-primary text-white text-sm font-medium tracking-wide hover:bg-brand-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Inscrever-se"}
            </button>
          </form>
          {submitted && (
            <p className="text-sm mt-4 text-brand-secondary/60">
              Obrigado! Verifique seu email para confirmar.
            </p>
          )}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16 border-t border-border-base pt-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <span className="font-display font-semibold text-lg text-brand-primary">
                Filho Cuidador
              </span>
            </div>
            <p className="text-sm text-brand-secondary max-w-xs leading-relaxed">
              Informação, acolhimento e orientação prática para atravessar essa fase com mais segurança e amor.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-medium text-brand-secondary/40 mb-5 tracking-widest uppercase">Conteúdo</h4>
            <ul className="space-y-3 text-sm text-brand-secondary/60">
              <li><Link href="/categorias/saude-emocional" className="hover:text-brand-primary transition-colors">Saúde Emocional</Link></li>
              <li><Link href="/categorias/cuidados-praticos" className="hover:text-brand-primary transition-colors">Cuidados Práticos</Link></li>
              <li><Link href="/categorias/entendendo-doenca" className="hover:text-brand-primary transition-colors">A Doença</Link></li>
              <li><Link href="/categorias/juridico" className="hover:text-brand-primary transition-colors">Jurídico</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium text-brand-secondary/40 mb-5 tracking-widest uppercase">Empresa</h4>
            <ul className="space-y-3 text-sm text-brand-secondary/60">
              <li><Link href="/sobre" className="hover:text-brand-primary transition-colors">Sobre nós</Link></li>
              <li><Link href="/contato" className="hover:text-brand-primary transition-colors">Contato</Link></li>
              <li><Link href="/imprensa" className="hover:text-brand-primary transition-colors">Imprensa</Link></li>
              <li><Link href="/apoio" className="hover:text-brand-primary transition-colors">Apoie o projeto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium text-brand-secondary/40 mb-5 tracking-widest uppercase">Legal</h4>
            <ul className="space-y-3 text-sm text-brand-secondary/60">
              <li><Link href="/termos" className="hover:text-brand-primary transition-colors">Termos</Link></li>
              <li><Link href="/privacidade" className="hover:text-brand-primary transition-colors">Privacidade</Link></li>
              <li><Link href="/cookies" className="hover:text-brand-primary transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border-base pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-secondary/40">
            © 2026 Filho Cuidador. Todos os direitos reservados.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-brand-secondary/40 hover:text-brand-primary transition-colors text-xs">
              Twitter
            </a>
            <a href="#" className="text-brand-secondary/40 hover:text-brand-primary transition-colors text-xs">
              Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
