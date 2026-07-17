import { Metadata } from "next";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Termos de Uso | Filho Cuidador",
  description: "Termos e condições de uso do site Filho Cuidador.",
};

export default function TermosPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Termos de Uso</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar o site Filho Cuidador (filhocuidador.com.br), você concorda em cumprir estes Termos de Uso.
              Se não concordar com qualquer parte, por favor, não use o site.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">2. Licença de Uso</h2>
            <p>
              Concedemos a você uma licença limitada, não exclusiva e revogável para usar este site apenas para fins pessoais e não comerciais.
              Você não pode:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Reproduzir ou copiar conteúdo sem permissão</li>
              <li>Usar o site para fins comerciais ou de lucro</li>
              <li>Disparar ataques, spam ou conteúdo ofensivo</li>
              <li>Hackear ou interferir com segurança do site</li>
              <li>Replicar nosso design ou conteúdo em outros sites</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">3. Conteúdo Informativo</h2>
            <p>
              <strong>AVISO IMPORTANTE:</strong> O conteúdo deste site é INFORMATIVO e EDUCACIONAL apenas.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Não substitui profissionais:</strong> Sempre consulte um médico, psicólogo ou advogado para questões específicas</li>
              <li><strong>Não é diagnóstico:</strong> Não diagnosticamos, tratamos ou curamos doenças</li>
              <li><strong>Não é prescrição:</strong> Não prescrevemos medicamentos ou tratamentos</li>
              <li><strong>Responsabilidade sua:</strong> Você é responsável por suas decisões baseadas neste conteúdo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">4. Precisão do Conteúdo</h2>
            <p>
              Fazemos esforços para manter o conteúdo preciso, mas não garantimos que:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Seja atualizado constantemente</li>
              <li>Seja completo ou sem erros</li>
              <li>Seja adequado para sua situação específica</li>
            </ul>
            <p className="mt-4">
              Se encontrar erros, por favor nos notifique: <strong>esesdec@gmail.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">5. Links para Terceiros</h2>
            <p>
              Este site pode conter links para websites de terceiros. Não somos responsáveis pelo conteúdo, precisão ou práticas
              desses sites externos. Verificar links externos é responsabilidade sua.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">6. Limitação de Responsabilidade</h2>
            <p>
              Até a máxima extensão permitida por lei, não seremos responsáveis por:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Danos diretos, indiretos, incidentais ou consequentes</li>
              <li>Perda de dados ou acesso ao site</li>
              <li>Decisões tomadas baseadas no conteúdo</li>
              <li>Conteúdo de terceiros ou links externos</li>
            </ul>
            <p className="mt-4">
              <strong>Use o site por sua conta e risco.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">7. Modificações ao Site</h2>
            <p>
              Reservamos o direito de modificar, suspender ou descontinuar o site a qualquer momento, com ou sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">8. Comportamento do Usuário</h2>
            <p>
              Você concorda em não usar o site para:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Atividades ilegais ou prejudiciais</li>
              <li>Conteúdo abusivo, racista ou discriminatório</li>
              <li>Spam ou solicitações não autorizadas</li>
              <li>Violação de direitos autorais ou de terceiros</li>
            </ul>
            <p className="mt-4">
              Podemos remover qualquer conteúdo que viole estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">9. Direitos Autorais</h2>
            <p>
              Todo conteúdo (texto, imagens, design) é protegido por direitos autorais. Você pode:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>✅ Ler para fins pessoais</li>
              <li>✅ Compartilhar links para artigos</li>
              <li>❌ Copiar sem atribuição</li>
              <li>❌ Vender ou lucrar com o conteúdo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">10. Lei Aplicável</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida
              nos tribunais competentes do Brasil.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">11. Alterações aos Termos</h2>
            <p>
              Podemos atualizar estes Termos a qualquer momento. Alterações significativas serão notificadas por e-mail
              ou destaque no site. Continuar usando o site significa aceitar os novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">12. Contato</h2>
            <p>
              Para dúvidas sobre estes Termos:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>E-mail:</strong> esesdec@gmail.com</li>
              <li><strong>Responsável Legal:</strong> Equipe Filho Cuidador</li>
            </ul>
          </section>

          <section className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm text-yellow-900 dark:text-yellow-100">
              <strong>⚠️ Aviso:</strong> Se você está em crise emocional ou com pensamentos de autolesão, procure ajuda:
              <br />
              <strong>CVV (Centro de Valorização da Vida):</strong> 188 (ligação gratuita)
            </p>
          </section>

          <section className="mt-6 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Última atualização:</strong> 17 de julho, 2026
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
