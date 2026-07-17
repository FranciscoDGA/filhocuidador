import Link from "next/link";

export default function ContatoPage() {
  return (
    <main className="bg-cream min-h-screen py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-text-dark/70">
          <Link href="/" className="hover:text-brand-primary transition">
            Início
          </Link>
          <span>/</span>
          <span className="text-text-dark font-medium">Contato</span>
        </div>

        {/* Content */}
        <div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-text-dark mb-6 leading-tight">
            Entre em Contato
          </h1>

          <p className="text-lg text-text-dark/80 leading-relaxed mb-8">
            Tem dúvidas, sugestões ou gostaria de colaborar com o Filho Cuidador? Adoraríamos ouvir você.
          </p>

          {/* Contact Form */}
          <div className="bg-white rounded-lg border border-border-light p-8 mb-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-border-light focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-dark placeholder:text-text-dark/40"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-border-light focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-dark placeholder:text-text-dark/40"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-border-light focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-dark placeholder:text-text-dark/40"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-border-light focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-dark placeholder:text-text-dark/40 resize-none"
                  placeholder="Sua mensagem aqui..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:opacity-90 transition duration-200"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Direct Contact */}
          <div className="bg-brand-primary/5 rounded-lg p-8">
            <h2 className="font-display text-2xl font-bold text-text-dark mb-4">
              Contato Direto
            </h2>
            <p className="text-text-dark/80 mb-4">
              Prefere enviar um email direto?
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:esesdec@gmail.com" className="text-brand-primary hover:text-brand-accent transition">esesdec@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
