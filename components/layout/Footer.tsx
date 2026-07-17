import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Filho Cuidador</h3>
            <p className="text-sm">Portal de orientação e acolhimento para filhos que cuidam de pais idosos.</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Conteúdo</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/artigos" className="hover:text-white">Artigos</Link></li>
              <li><Link href="/guias" className="hover:text-white">Guias Práticos</Link></li>
              <li><Link href="/doencas" className="hover:text-white">Doenças</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/comunidade" className="hover:text-white">Comunidade</Link></li>
              <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
              <li><Link href="/privacidade" className="hover:text-white">Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Acompanhe</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 Filho Cuidador. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-400">
            Este conteúdo é informativo. Consulte sempre um profissional de saúde.
          </p>
        </div>
      </div>
    </footer>
  );
}
