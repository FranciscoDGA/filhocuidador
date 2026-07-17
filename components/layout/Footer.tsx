import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100/50 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Logo + Tagline */}
        <div className="mb-16 pb-12 border-b border-blue-100/50">
          <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-2">
            Filho Cuidador
          </h3>
          <p className="text-text-light text-sm font-medium">
            Você não está sozinho nessa jornada
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-display font-bold text-text-dark text-sm mb-6">
              Conteúdo
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/artigos" className="text-text-light hover:text-brand-primary font-medium transition">
                  Artigos
                </Link>
              </li>
              <li>
                <Link href="/saude-emocional" className="text-text-light hover:text-brand-primary font-medium transition">
                  Saúde Emocional
                </Link>
              </li>
              <li>
                <Link href="/cuidados-praticos" className="text-text-light hover:text-brand-primary font-medium transition">
                  Cuidados Práticos
                </Link>
              </li>
              <li>
                <Link href="/orientacao-juridica" className="text-text-light hover:text-brand-primary font-medium transition">
                  Jurídico
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-dark text-sm mb-6">
              Empresa
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/sobre" className="text-text-light hover:text-brand-primary font-medium transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-text-light hover:text-brand-primary font-medium transition">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-text-light hover:text-brand-primary font-medium transition">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-dark text-sm mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacidade" className="text-text-light hover:text-brand-primary font-medium transition">
                  LGPD
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-text-light hover:text-brand-primary font-medium transition">
                  Termos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text-dark text-sm mb-6">
              Emergência
            </h4>
            <ul className="space-y-3 text-sm text-text-light font-medium">
              <li>SAMU: <span className="font-bold">192</span></li>
              <li>CVV: <span className="font-bold">188</span></li>
              <li>Suicida: <span className="font-bold">0800 006 1766</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-100/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <p className="text-xs text-text-light font-medium">
              © 2024 Filho Cuidador. Todos os direitos reservados.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-xs text-amber-900 font-medium">
              <strong>⚠️ Disclaimer:</strong> Conteúdo informativo. Consulte um profissional de saúde para questões médicas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
