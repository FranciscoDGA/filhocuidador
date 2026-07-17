import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Conteúdo</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/artigos" className="hover:text-white transition">Artigos</Link></li>
              <li><Link href="/saude-emocional" className="hover:text-white transition">Saúde Emocional</Link></li>
              <li><Link href="/cuidados-praticos" className="hover:text-white transition">Cuidados Práticos</Link></li>
              <li><Link href="/orientacao-juridica" className="hover:text-white transition">Jurídico</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/sobre" className="hover:text-white transition">Sobre</Link></li>
              <li><Link href="/contato" className="hover:text-white transition">Contato</Link></li>
              <li><Link href="/privacidade" className="hover:text-white transition">Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacidade" className="hover:text-white transition">LGPD</Link></li>
              <li><Link href="/termos" className="hover:text-white transition">Termos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm mb-4">Emergência</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>SAMU: <span className="text-white font-bold">192</span></li>
              <li>CVV: <span className="text-white font-bold">188</span></li>
              <li>Suicida: <span className="text-white font-bold">0800 006 1766</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">Filho Cuidador</span>
            </div>
            <p className="text-xs text-gray-400">
              © 2024 Filho Cuidador. Todos os direitos reservados.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <p className="text-xs text-gray-300">
              <strong>⚠️ Disclaimer:</strong> Conteúdo informativo. Consulte um profissional de saúde para questões médicas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
