import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-sm mb-4">Conteúdo</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/artigos" className="hover:text-gray-900 dark:hover:text-gray-100">
                  Artigos
                </Link>
              </li>
              <li>
                <Link href="/artigos?category=saude-emocional" className="hover:text-gray-900 dark:hover:text-gray-100">
                  Saúde Emocional
                </Link>
              </li>
              <li>
                <Link href="/artigos?category=cuidados-praticos" className="hover:text-gray-900 dark:hover:text-gray-100">
                  Cuidados Práticos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Comunidade</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/comunidade" className="hover:text-gray-900 dark:hover:text-gray-100">
                  Forum
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/privacidade" className="hover:text-gray-900 dark:hover:text-gray-100">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-gray-900 dark:hover:text-gray-100">
                  Termos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Sobre</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Portal de informação e acolhimento para filhos cuidadores.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Filho Cuidador. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este conteúdo é informativo. Consulte sempre um profissional de saúde.
          </p>
        </div>
      </div>
    </footer>
  );
}
