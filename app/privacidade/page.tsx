import { Metadata } from "next";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Política de Privacidade | Filho Cuidador",
  description: "Nossa política de privacidade e como protegemos seus dados conforme a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Política de Privacidade</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">1. Introdução</h2>
            <p>
              O respeito à sua privacidade é fundamental para nós. Esta Política de Privacidade explica como coletamos,
              usamos, compartilhamos e protegemos seus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">2. Que Dados Coletamos</h2>
            <p>Podemos coletar as seguintes informações:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Dados de E-mail:</strong> Nome e endereço de e-mail (para newsletter)</li>
              <li><strong>Dados de Navegação:</strong> IP, navegador, páginas visitadas (via Google Analytics)</li>
              <li><strong>Cookies:</strong> Para melhorar experiência e análise de uso</li>
              <li><strong>Dados de Formulários:</strong> Informações que você voluntariamente compartilha através de contato</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">3. Base Legal para Tratamento</h2>
            <p>Tratamos seus dados com base em:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Consentimento:</strong> Quando você se inscreve na newsletter</li>
              <li><strong>Interesse Legítimo:</strong> Para melhorar nossos serviços e segurança</li>
              <li><strong>Cumprimento Legal:</strong> Quando exigido por lei</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">4. Como Usamos Seus Dados</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Enviar conteúdo da newsletter que você solicitou</li>
              <li>Melhorar e personalizar sua experiência no site</li>
              <li>Analisar padrões de uso para criar conteúdo melhor</li>
              <li>Responder a suas solicitações de contato</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">5. Compartilhamento de Dados</h2>
            <p>
              Seus dados podem ser compartilhados com terceiros confiáveis apenas quando necessário:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Google Analytics:</strong> Para análise de tráfego (dados anônimos)</li>
              <li><strong>Plataforma de Newsletter:</strong> Para entrega de e-mails</li>
              <li><strong>Vercel (hospedagem):</strong> Para manter o site online</li>
              <li><strong>Autoridades legais:</strong> Quando exigido por lei</li>
            </ul>
            <p className="mt-4">
              Nunca vendemos seus dados pessoais a terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">6. Seus Direitos (LGPD)</h2>
            <p>Você tem direito a:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Acessar:</strong> Seus dados e como estão sendo usados</li>
              <li><strong>Corrigir:</strong> Dados imprecisos ou incompletos</li>
              <li><strong>Deletar:</strong> Solicitar exclusão ("direito ao esquecimento")</li>
              <li><strong>Revogar:</strong> Seu consentimento para newsletter a qualquer momento</li>
              <li><strong>Portabilidade:</strong> Receber dados em formato estruturado</li>
              <li><strong>Opor-se:</strong> Ao tratamento dos dados</li>
            </ul>
            <p className="mt-4">
              Para exercer qualquer direito, contate: <strong>esesdec@gmail.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">7. Segurança</h2>
            <p>
              Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado,
              alteração, divulgação ou destruição. No entanto, nenhuma transmissão de internet é 100% segura.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">8. Retenção de Dados</h2>
            <p>
              Mantemos seus dados pessoais apenas pelo tempo necessário para:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Fornecer o serviço solicitado</li>
              <li>Cumprir obrigações legais</li>
              <li>Resolver disputas</li>
            </ul>
            <p className="mt-4">
              Você pode solicitar a exclusão a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">9. Cookies</h2>
            <p>
              Usamos cookies para melhorar sua experiência. Você pode configurar seu navegador para recusar cookies,
              mas isso pode afetar a funcionalidade do site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">10. Alterações a Esta Política</h2>
            <p>
              Podemos atualizar esta política ocasionalmente. Notificaremos sobre mudanças significativas por e-mail
              ou através de destaque no site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">11. Contato</h2>
            <p>
              Para dúvidas sobre privacidade:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>E-mail:</strong> esesdec@gmail.com</li>
              <li><strong>Responsável LGPD:</strong> Equipe Filho Cuidador</li>
            </ul>
          </section>

          <section className="mt-12 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Última atualização:</strong> 17 de julho, 2026
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
