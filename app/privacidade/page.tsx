import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade e LGPD | Filho Cuidador",
  description: "Conheça nossa política de privacidade e como tratamos seus dados pessoais de acordo com a LGPD (Lei Geral de Proteção de Dados).",
  alternates: {
    canonical: "https://filhocuidador.com.br/privacidade",
  },
  openGraph: {
    title: "Política de Privacidade e LGPD | Filho Cuidador",
    description: "Conheça nossa política de privacidade e como tratamos seus dados pessoais.",
    url: "https://filhocuidador.com.br/privacidade",
    siteName: "Filho Cuidador",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PrivacidadePage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Privacidade (LGPD)</span>
        </div>

        <div className="prose prose-sm max-w-none">
          <h1 className="text-3xl sm:text-4xl font-display font-medium text-brand-primary mb-8 leading-tight">
            Política de Privacidade e LGPD
          </h1>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            1. Coleta de Dados
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            O Filho Cuidador coleta informações apenas quando você voluntariamente nos fornece, como ao se inscrever em nossa newsletter ou preencher um formulário de contato.
          </p>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Os dados coletados podem incluir:
          </p>

          <ul className="list-disc list-inside text-sm text-brand-secondary space-y-2 mb-6">
            <li>Nome e email (para inscrição na newsletter)</li>
            <li>Mensagens e informações fornecidas através do formulário de contato</li>
            <li>Dados de navegação (através de cookies e analytics)</li>
          </ul>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            2. Uso dos Dados
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Usamos seus dados para:
          </p>

          <ul className="list-disc list-inside text-sm text-brand-secondary space-y-2 mb-6">
            <li>Enviar conteúdo da newsletter (se inscrito)</li>
            <li>Responder a dúvidas e mensagens</li>
            <li>Melhorar nosso site e conteúdo</li>
            <li>Cumprir obrigações legais</li>
          </ul>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            3. Compartilhamento de Dados
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Não compartilhamos seus dados pessoais com terceiros sem seu consentimento, exceto quando exigido por lei.
          </p>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            4. Seus Direitos (LGPD)
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
          </p>

          <ul className="list-disc list-inside text-sm text-brand-secondary space-y-2 mb-6">
            <li><strong>Acessar:</strong> Saber quais dados temos sobre você</li>
            <li><strong>Corrigir:</strong> Solicitar correção de dados incorretos</li>
            <li><strong>Deletar:</strong> Solicitar a exclusão de seus dados</li>
            <li><strong>Portabilidade:</strong> Receber seus dados em formato transferível</li>
            <li><strong>Objeto:</strong> Se opor ao processamento de seus dados</li>
          </ul>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Para exercer qualquer desses direitos, entre em contato conosco em <a href="mailto:esesdec@gmail.com" className="text-brand-primary hover:text-brand-accent transition">esesdec@gmail.com</a>.
          </p>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            5. Segurança
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Implementamos medidas de segurança para proteger seus dados contra acesso não autorizado. No entanto, nenhum método de transmissão pela internet é 100% seguro.
          </p>

          <h2 className="font-display text-xl font-medium text-brand-primary mt-8 mb-4">
            6. Alterações nesta Política
          </h2>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            Podemos atualizar esta política de privacidade a qualquer momento. Alterações significativas serão notificadas através do nosso site.
          </p>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6">
            <strong>Última atualização:</strong> 18 de julho de 2026
          </p>
        </div>
      </div>
    </main>
  );
}
