import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o Filho Cuidador. Dúvidas, sugestões ou colaborações — estamos aqui para ouvir você.",
  openGraph: {
    title: "Contato | Filho Cuidador",
    description: "Entre em contato com o Filho Cuidador.",
  },
};

export default function ContatoPage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">
            Início
          </Link>
          <span>/</span>
          <span className="text-brand-primary">Contato</span>
        </div>

        {/* Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Entre em Contato
          </h1>

          <p className="text-base text-brand-secondary leading-relaxed mb-10">
            Tem dúvidas, sugestões ou gostaria de colaborar com o Filho Cuidador? Adoraríamos ouvir você.
          </p>

          {/* Contact Form */}
          <div className="bg-white border border-border-base p-6 lg:p-8 mb-10">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[11px] font-medium text-brand-primary mb-2 tracking-wide uppercase">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-bg-base border border-border-base text-brand-primary placeholder:text-brand-secondary/30 text-sm focus:outline-none focus:border-brand-primary/40 transition-colors"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-medium text-brand-primary mb-2 tracking-wide uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-bg-base border border-border-base text-brand-primary placeholder:text-brand-secondary/30 text-sm focus:outline-none focus:border-brand-primary/40 transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[11px] font-medium text-brand-primary mb-2 tracking-wide uppercase">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-bg-base border border-border-base text-brand-primary placeholder:text-brand-secondary/30 text-sm focus:outline-none focus:border-brand-primary/40 transition-colors"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-medium text-brand-primary mb-2 tracking-wide uppercase">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-base border border-border-base text-brand-primary placeholder:text-brand-secondary/30 text-sm focus:outline-none focus:border-brand-primary/40 transition-colors resize-none"
                  placeholder="Sua mensagem aqui..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-brand-primary text-white text-sm font-medium tracking-wide hover:bg-brand-primary/90 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Direct Contact */}
          <div className="bg-brand-primary/[0.03] border border-border-base p-6">
            <h2 className="text-sm font-display font-medium text-brand-primary mb-3">
              Contato Direto
            </h2>
            <p className="text-xs text-brand-secondary/60 mb-3">
              Prefere enviar um email direto?
            </p>
            <p className="text-sm">
              <a href="mailto:contato@filhocuidador.com.br" className="text-brand-primary hover:text-brand-accent transition underline underline-offset-2">
                contato@filhocuidador.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
