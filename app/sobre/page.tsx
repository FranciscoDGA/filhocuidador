import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="bg-cream min-h-screen py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-text-dark/70">
          <Link href="/" className="hover:text-brand-primary transition">
            Início
          </Link>
          <span>/</span>
          <span className="text-text-dark font-medium">Sobre</span>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-text-dark mb-8 leading-tight">
            Sobre o Filho Cuidador
          </h1>

          <p className="text-lg text-text-dark/80 leading-relaxed mb-6">
            O <strong>Filho Cuidador</strong> é um portal dedicado a filhos adultos que cuidam de pais idosos com doenças neurodegenerativas e crônicas. Somos um espaço de informação, acolhimento e orientação prática para quem vive essa realidade.
          </p>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            Nossa Missão
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Reconhecemos que cuidar de um pai idoso é um privilégio, mas também é exaustivo. Muitas vezes, você se sente sozinho nessa jornada—sem saber por onde começar, sem alguém que entenda de verdade o que você está passando.
          </p>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Nossa missão é oferecer:
          </p>

          <ul className="list-disc list-inside text-text-dark/80 space-y-2 mb-6">
            <li><strong>Informação confiável:</strong> Sobre doenças, cuidados, direitos e benefícios</li>
            <li><strong>Acolhimento emocional:</strong> Validando sua experiência e reconhecendo seus sentimentos</li>
            <li><strong>Orientação prática:</strong> Dicas do dia a dia que realmente funcionam</li>
            <li><strong>Comunidade:</strong> Saber que você não está sozinho nissa</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            Quem Somos
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            A equipe Filho Cuidador é composta por profissionais de saúde, psicólogos, assistentes sociais e cuidadores com experiência prática. Cada artigo é escrito com cuidado, rigor e compaixão.
          </p>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            Política de Conteúdo
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Todos os nossos artigos são baseados em:
          </p>

          <ul className="list-disc list-inside text-text-dark/80 space-y-2 mb-6">
            <li>Pesquisa científica e evidência</li>
            <li>Diretrizes de órgãos públicos (INSS, Ministério da Saúde)</li>
            <li>Experiência prática de cuidadores</li>
            <li>Consulta com profissionais especializados</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
            <p className="text-sm text-yellow-900">
              <strong>⚠️ Aviso Importante:</strong> Nenhum conteúdo deste portal substitui a consulta com um profissional de saúde. Se você ou seu pai precisam de atendimento médico, busque um profissional qualificado.
            </p>
          </div>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            Contato
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Tem dúvidas ou sugestões? Gostaríamos de ouvir você.
          </p>

          <p>
            <strong>Email:</strong> <a href="mailto:esesdec@gmail.com" className="text-brand-primary hover:text-brand-accent transition">esesdec@gmail.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
