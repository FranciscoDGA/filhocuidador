import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text-base text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-display font-bold text-white tracking-tight leading-none">
                Filho Cuidador
              </span>
            </Link>
            <p className="text-sm font-medium text-brand-secondary tracking-wide mb-6">
              Você não está sozinho nessa
            </p>
          </div>

          {/* Links Categorias */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white/90">Conteúdo</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/categorias/saude-emocional" className="hover:text-white transition">Saúde Emocional</Link></li>
              <li><Link href="/categorias/cuidados-praticos" className="hover:text-white transition">Cuidados Práticos</Link></li>
              <li><Link href="/categorias/orientacao-juridica" className="hover:text-white transition">Orientação Jurídica</Link></li>
              <li><Link href="/categorias/entendendo-a-doenca" className="hover:text-white transition">Entendendo a Doença</Link></li>
              <li><Link href="/categorias/familia-e-conflitos" className="hover:text-white transition">Família e Conflitos</Link></li>
            </ul>
          </div>

          {/* Links Institucionais */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white/90">O Portal</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/sobre" className="hover:text-white transition">Sobre nós</Link></li>
              <li><Link href="/contato" className="hover:text-white transition">Contato</Link></li>
              <li><Link href="/privacidade" className="hover:text-white transition">Política de Privacidade</Link></li>
              <li><Link href="/termos" className="hover:text-white transition">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* Emergência */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white/90">Apoio de Emergência</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>SAMU: <span className="text-white font-bold">192</span></li>
              <li>Centro de Valorização da Vida (CVV): <span className="text-white font-bold">188</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} filhocuidador.com.br. Todos os direitos reservados.</p>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 max-w-xl text-center md:text-left">
            <strong className="text-white/70 block mb-1">Aviso Importante:</strong>
            Este site tem caráter estritamente informativo e de acolhimento. O conteúdo aqui publicado não substitui orientações, diagnósticos ou tratamentos médicos. Consulte sempre um profissional de saúde qualificado.
          </div>
        </div>
      </div>
    </footer>
  );
}
