import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Logo + Tagline */}
        <div className="mb-16 pb-12 border-b border-gray-200">
          <h3 className="font-display text-xl font-semibold text-text-dark mb-2">
            Filho Cuidador
          </h3>
          <p className="text-text-dark/60 text-sm">
            Você não está sozinho nessa jornada
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-display font-semibold text-text-dark text-sm mb-6">
              Conteúdo
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/artigos" className="text-text-dark/70 hover:text-text-dark transition">
                  Artigos
                </Link>
              </li>
              <li>
                <Link href="/saude-emocional" className="text-text-dark/70 hover:text-text-dark transition">
                  Saúde Emocional
                </Link>
              </li>
              <li>
                <Link href="/cuidados-praticos" className="text-text-dark/70 hover:text-text-dark transition">
                  Cuidados Práticos
                </Link>
              </li>
              <li>
                <Link href="/orientacao-juridica" className="text-text-dark/70 hover:text-text-dark transition">
                  Jurídico
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-dark text-sm mb-6">
              Empresa
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/sobre" className="text-text-dark/70 hover:text-text-dark transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-text-dark/70 hover:text-text-dark transition">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-text-dark/70 hover:text-text-dark transition">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-dark text-sm mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacidade" className="text-text-dark/70 hover:text-text-dark transition">
                  LGPD
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-text-dark/70 hover:text-text-dark transition">
                  Termos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-dark text-sm mb-6">
              Emergência
            </h4>
            <ul className="space-y-3 text-sm text-text-dark/70">
              <li>SAMU: <strong>192</strong></li>
              <li>CVV: <strong>188</strong></li>
              <li>Suicida: <strong>0800 006 1766</strong></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-dark/60">
              © 2024 Filho Cuidador. Todos os direitos reservados.
            </p>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-xs text-amber-900">
              <strong>⚠️ Disclaimer:</strong> Conteúdo informativo. Consulte um profissional de saúde para questões médicas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
