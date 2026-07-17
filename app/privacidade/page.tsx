import Link from "next/link";

export default function PrivacidadePage() {
  return (
    <main className="bg-cream min-h-screen py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-text-dark/70">
          <Link href="/" className="hover:text-brand-primary transition">
            Início
          </Link>
          <span>/</span>
          <span className="text-text-dark font-medium">Privacidade (LGPD)</span>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-text-dark mb-8 leading-tight">
            Política de Privacidade e LGPD
          </h1>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            1. Coleta de Dados
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            O Filho Cuidador coleta informações apenas quando você voluntariamente nos fornece, como ao se inscrever em nossa newsletter ou preencher um formulário de contato.
          </p>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Os dados coletados podem incluir:
          </p>

          <ul className="list-disc list-inside text-text-dark/80 space-y-2 mb-6">
            <li>Nome e email (para inscrição na newsletter)</li>
            <li>Mensagens e informações fornecidas através do formulário de contato</li>
            <li>Dados de navegação (através de cookies e analytics)</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            2. Uso dos Dados
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Usamos seus dados para:
          </p>

          <ul className="list-disc list-inside text-text-dark/80 space-y-2 mb-6">
            <li>Enviar conteúdo da newsletter (se inscrito)</li>
            <li>Responder a dúvidas e mensagens</li>
            <li>Melhorar nosso site e conteúdo</li>
            <li>Cumprir obrigações legais</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            3. Compartilhamento de Dados
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Não compartilhamos seus dados pessoais com terceiros sem seu consentimento, exceto quando exigido por lei.
          </p>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            4. Seus Direitos (LGPD)
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
          </p>

          <ul className="list-disc list-inside text-text-dark/80 space-y-2 mb-6">
            <li><strong>Acessar:</strong> Saber quais dados temos sobre você</li>
            <li><strong>Corrigir:</strong> Solicitar correção de dados incorretos</li>
            <li><strong>Deletar:</strong> Solicitar a exclusão de seus dados</li>
            <li><strong>Portabilidade:</strong> Receber seus dados em formato transferível</li>
            <li><strong>Objeto:</strong> Se opor ao processamento de seus dados</li>
          </ul>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Para exercer qualquer desses direitos, entre em contato conosco em <a href="mailto:esesdec@gmail.com" className="text-brand-primary hover:text-brand-accent transition">esesdec@gmail.com</a>.
          </p>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            5. Segurança
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Implementamos medidas de segurança para proteger seus dados contra acesso não autorizado. No entanto, nenhum método de transmissão pela internet é 100% seguro.
          </p>

          <h2 className="font-display text-2xl font-bold text-text-dark mt-8 mb-4">
            6. Alterações nesta Política
          </h2>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            Podemos atualizar esta política de privacidade a qualquer momento. Alterações significativas serão notificadas através do nosso site.
          </p>

          <p className="text-text-dark/80 leading-relaxed mb-6">
            <strong>Última atualização:</strong> 17 de julho de 2024
          </p>
        </div>
      </div>
    </main>
  );
}
