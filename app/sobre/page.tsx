import { Metadata } from "next";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Sobre | Filho Cuidador",
  description: "Conheça a missão do Filho Cuidador e por que criamos este espaço.",
};

export default function SobrePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre o Filho Cuidador</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Quietly Caring é um espaço criado para filhos e filhas que cuidam de pais idosos.
            Sabemos que essa jornada é solitária, exaustiva e muitas vezes invisível.
            Por isso, estamos aqui.
          </p>
        </section>

        {/* Missão */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Nossa Missão</h2>
          <div className="space-y-4">
            <p>
              Fornecer informações confiáveis, prácticas e acolhedoras para filhos e filhas que cuidam de pais idosos
              com doenças neurodegenerativas.
            </p>
            <p>
              Validar os sentimentos de culpa, exaustão e frustração que são normais nesta jornada.
            </p>
            <p>
              Oferecer orientação sobre saúde emocional, aspectos legais/financeiros e cuidados práticos—tudo em um só lugar.
            </p>
            <p>
              Conectar cuidadores com recursos, comunidades e profissionais que podem ajudar.
            </p>
          </div>
        </section>

        {/* Por que criamos */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Por Que Criamos Isso</h2>
          <div className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800 space-y-4">
            <p>
              Cuidar de um pai idoso é uma das experiências mais desafiadoras e solitárias da vida adulta.
              Você está simultaneamente:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Gerenciando saúde, medicamentos e médicos</li>
              <li>Resolvendo problemas legais e financeiros</li>
              <li>Lidar com mudanças emocionais e cognitivas do seu pai</li>
              <li>Equilibrando trabalho, família e vida pessoal</li>
              <li>Sentindo culpa por estar cansado (mas não o culpa de estar cansado)</li>
            </ul>
            <p>
              E tudo isso com <strong>muito pouca informação centralizada</strong> e <strong>ainda menos validação emocional</strong>.
            </p>
            <p>
              Criamos o Filho Cuidador porque você merece um lugar onde suas dores são entendidas,
              suas perguntas são respondidas, e sua jornada é honrada.
            </p>
          </div>
        </section>

        {/* Público */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Quem Somos (Você)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950 dark:to-red-950 rounded-lg border border-pink-200 dark:border-pink-800">
              <h3 className="text-2xl font-bold mb-4">Filhas Cuidadoras (70%)</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Idade: 35-55 anos</li>
                <li>✓ Mudança de vida: deixar carreira, reduzir horas de trabalho</li>
                <li>✓ Dores principais: Burnout emocional, culpa, depressão, isolamento</li>
                <li>✓ O que você precisa: Validação, dicas de autocuidado, ajuda emocional</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold mb-4">Filhos Cuidadores (30%)</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Idade: 45-65 anos</li>
                <li>✓ Foco: Organizar cuidados e aspectos práticos</li>
                <li>✓ Dores principais: Legal/financeiro, prevenção de acidentes, saúde</li>
                <li>✓ O que você precisa: Passo-a-passo, checklist, documentos modelo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* O que oferecemos */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">O Que Você Encontra Aqui</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">📚 Artigos Práticos</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Guias passo-a-passo, modelos de documentos, checklist, e informações sobre leis, benefícios e cuidados.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">💚 Validação Emocional</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Conteúdo que normaliza seus sentimentos e te ajuda a entender que você não está sozinho.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">⚖️ Informação Confiável</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Baseado em legislação, pesquisas científicas e recomendações de profissionais.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">🤝 Comunidade</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Newsletter, grupos de apoio e recursos para conectar com outros cuidadores.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Nossos Valores</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-3xl">💙</span>
              <div>
                <h3 className="font-bold text-lg">Compaixão Acima de Tudo</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Entendemos o peso emocional. Nunca julgamos seus sentimentos de cansaço, culpa ou frustração.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">✅</span>
              <div>
                <h3 className="font-bold text-lg">Precisão e Confiabilidade</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Toda informação é verificada, citada e atualizada. Apoiamos profissionais, não substituímos.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">🎯</span>
              <div>
                <h3 className="font-bold text-lg">Prático e Acionável</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Não queremos só falar. Cada artigo tem dicas que você pode aplicar hoje.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-3xl">🇧🇷</span>
              <div>
                <h3 className="font-bold text-lg">Contexto Brasileiro</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Falamos sobre leis, benefícios, sistema de saúde e realidades do Brasil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Aviso importante */}
        <section className="mb-16 p-6 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h3 className="text-2xl font-bold mb-4">⚠️ Aviso Importante</h3>
          <p>
            <strong>Somos um recurso educacional, não um substituto para profissionais.</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Para saúde mental: consulte um psicólogo ou psiquiatra</li>
            <li>Para saúde física: consulte seu médico ou especialista</li>
            <li>Para questões legais: consulte um advogado</li>
            <li>Para emergências: ligue para 192 (SAMU) ou vá ao pronto-socorro</li>
          </ul>
          <p className="mt-4">
            <strong>Em crise emocional?</strong> Ligue para o <strong>CVV: 188</strong> (ligação gratuita, 24/7)
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Comece Agora</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore nossos artigos sobre saúde emocional, cuidados práticos, aspectos legais e muito mais.
            Você não está sozinho nessa jornada.
          </p>
          <a
            href="/artigos"
            className="inline-block px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-lg hover:opacity-90 transition"
          >
            Ver Todos os Artigos →
          </a>
        </section>

        {/* Footer */}
        <section className="mt-20 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg text-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Filho Cuidador</strong> — Quietly Caring
            <br />
            Um espaço para filhos que cuidam.
          </p>
        </section>
      </div>
    </Layout>
  );
}
