import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo + Tagline */}
        <div className="mb-12 pb-8 border-b border-border-light">
          <h3 className="font-display text-2xl font-bold text-brand-primary mb-2">
            Filho Cuidador
          </h3>
          <p className="text-brand-secondary font-medium">
            Você não está sozinho nessa
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-display font-bold text-text-dark text-sm mb-4">
              Conteúdo
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/artigos" className="text-text-dark/70 hover:text-brand-primary transition">
                  Todos os Artigos
                </Link>
              </li>
              <li>
                <Link href="/saude-emocional" className="text-text-dark/70 hover:text-brand-primary transition">
                  Saúde Emocional
                </Link>
              </li>
              <li>
                <Link href="/cuidados-praticos" className="text-text-dark/70 hover:text-brand-primary transition">
                  Cuidados Práticos
                </Link>
              </li>
              <li>
                <Link href="/orientacao-juridica" className="text-text-dark/70 hover:text-brand-primary transition">
                  Orientação Jurídica
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-dark text-sm mb-4">
              Comunidade
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/sobre" className="text-text-dark/70 hover:text-brand-primary transition">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-text-dark/70 hover:text-brand-primary transition">
                  Entre em Contato
                </Link>
              </li>
              <li>
                <a href="mailto:esesdec@gmail.com" className="text-text-dark/70 hover:text-brand-primary transition">
                  E-mail
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-dark text-sm mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacidade" className="text-text-dark/70 hover:text-brand-primary transition">
                  Privacidade (LGPD)
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-text-dark/70 hover:text-brand-primary transition">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-dark text-sm mb-4">
              Emergência
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-text-dark/70">
                <strong>SAMU:</strong> 192
              </li>
              <li className="text-text-dark/70">
                <strong>CVV:</strong> 188
              </li>
              <li className="text-text-dark/70">
                <strong>Suicida:</strong> 0800 006 1766
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border-light pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-xs text-text-dark/60">
              © 2024 Filho Cuidador. Todos os direitos reservados.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-xs text-yellow-900">
              <strong>⚠️ Aviso Importante:</strong> Este conteúdo é informativo. Consulte sempre um profissional de saúde para questões médicas ou psicológicas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
