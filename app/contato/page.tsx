import { Metadata } from "next";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Contato | Filho Cuidador",
  description: "Entre em contato conosco com dúvidas, sugestões ou problemas.",
};

export default function ContatoPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Tem uma pergunta? Quer sugerir um artigo? Encontrou um erro? Estamos aqui para ouvir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-gray-100"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-mail *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-gray-100"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Assunto *</label>
                <select
                  required
                  className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-gray-100"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="sugestao">Sugestão de Artigo</option>
                  <option value="erro">Reportar Erro</option>
                  <option value="pergunta">Pergunta</option>
                  <option value="colaboracao">Colaboração</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem *</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-gray-100"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded bg-blue-600 dark:bg-blue-500 text-white font-bold hover:opacity-90 transition"
              >
                Enviar Mensagem
              </button>
            </form>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              Responderemos em até 48 horas.
            </p>
          </section>

          {/* Informações de contato */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Outras Formas de Contato</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-2">📧 E-mail</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <a
                    href="mailto:esesdec@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    esesdec@gmail.com
                  </a>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Para dúvidas, sugestões ou questões de privacidade (LGPD)
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">🆘 Crise Emocional?</h3>
                <p className="text-gray-700 dark:text-gray-300 font-bold">
                  CVV: <span className="text-2xl">188</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Ligação gratuita, 24 horas, todos os dias. Psicólogos e voluntários treinados.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">🚑 Emergência Médica?</h3>
                <p className="text-gray-700 dark:text-gray-300 font-bold">
                  SAMU: <span className="text-2xl">192</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Para situações que exigem atendimento urgente.
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-lg mb-2">ℹ️ Newsletter</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Inscreva-se em nossa newsletter para receber conteúdo novo toda semana.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Quanto tempo leva para responder?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Respondemos dentro de 24-48 horas úteis. Durante fins de semana, pode levar um pouco mais.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Vocês fazem consultas pessoais?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Não. Somos um recurso educacional apenas. Para orientação personalizada, consulte um profissional
                (psicólogo, advogado, médico).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Posso usar seus artigos no meu blog/site?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nosso conteúdo é protegido por direitos autorais. Você pode compartilhar links e pequenos trechos
                com atribuição, mas não copiar integralmente. Entre em contato para parcerias.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Vocês aceitam colaboradores?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Sim! Se você é profissional (psicólogo, advogado, médico) ou cuidador com expertise, adoraríamos
                colaborar. Envie uma mensagem descrevendo sua proposta.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Como faço para receber conteúdo por e-mail?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Inscreva-se em nossa newsletter na página inicial. Enviaremos conteúdo novo toda semana, sem spam.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Encontrei um erro em um artigo. Como informo?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Use o formulário acima com "Reportar Erro" como assunto. Descreva o erro e a localização exata.
                Corrigiremos assim que possível.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-20 p-6 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-yellow-900 dark:text-yellow-100">
            <strong>⚠️ Importante:</strong> Se você está em crise emocional imediata ou tendo pensamentos de autolesão,
            por favor, não use este formulário. Ligue para o <strong>CVV: 188</strong> ou procure ajuda profissional imediatamente.
          </p>
        </section>
      </div>
    </Layout>
  );
}
