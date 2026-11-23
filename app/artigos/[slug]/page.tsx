import Link from "next/link";

const mockArticles: { [key: string]: any } = {
  "reconhecendo-burnout-cuidador": {
    title: "Reconhecendo o Burnout do Cuidador",
    excerpt: "Sinais de alerta para quando você está no limite.",
    category: "Saúde Emocional",
    readTime: 8,
    date: "17 de julho, 2024",
    content: `
      <p>Cuidar de um pai idoso é um privilégio, mas também é exaustivo. Há noites em claro, preocupações constantes, decisões difíceis que caem sobre seus ombros.</p>

      <h2>Sinais de Alerta</h2>

      <p>Você pode estar desenvolvendo burnout se:</p>
      <ul>
        <li>Sente cansaço constante mesmo após dormir</li>
        <li>Tem dificuldade de concentração ou memória</li>
        <li>Experimenta mudanças de humor frequentes</li>
        <li>Sente ressentimento em relação ao seu pai idoso</li>
        <li>Negligencia sua própria saúde</li>
        <li>Isola-se de amigos e família</li>
        <li>Sente desesperança ou vazio</li>
      </ul>

      <h2>O Que Fazer</h2>

      <p><strong>1. Reconheça seus limites</strong> - Você não pode fazer tudo sozinho.</p>

      <p><strong>2. Procure suporte</strong> - Converse com amigos, família ou um terapeuta.</p>

      <p><strong>3. Cuide de si mesmo</strong> - Reserve tempo para algo que goste.</p>

      <p><strong>4. Considere ajuda profissional</strong> - Um psicólogo pode oferecer ferramentas importantes.</p>

      <p>Sua exaustão é válida. Sua saúde importa.</p>
    `,
    relatedArticles: [
      { id: 2, slug: "comunicacao-irmaos-nao-ajudam", title: "Quando o Irmão Não Quer Ajudar" },
      { id: 3, slug: "bpc-loas-guia-completo", title: "BPC: Guia Completo 2024" },
    ],
  },
  "bpc-loas-guia-completo": {
    title: "BPC (Benefício de Prestação Continuada) para Idosos: Guia Oficial",
    excerpt: "Como solicitar o BPC, requisitos legais da LOAS, inscrição no CadÚnico e passo a passo no Meu INSS.",
    category: "Jurídico & Direitos",
    readTime: 12,
    date: "Atualizado oficialmente",
    content: `
      <p>O <strong>Benefício de Prestação Continuada (BPC/LOAS)</strong> garante um salário mínimo mensal para idosos com 65 anos ou mais em situação de vulnerabilidade, conforme a Lei nº 8.742/1993.</p>

      <h2>Principais Requisitos Oficiais</h2>
      <ul>
        <li><strong>Idade:</strong> 65 anos ou mais.</li>
        <li><strong>Inscrição no CadÚnico:</strong> Obrigatório estar com dados atualizados no CRAS há menos de 2 anos.</li>
        <li><strong>Renda per capita familiar:</strong> Inferior a 1/4 do salário mínimo vigente (gastos comprovados com saúde e medicamentos de uso contínuo podem ser considerados).</li>
        <li><strong>Não acumulável:</strong> Não pode ser acumulado com aposentadorias ou pensões previdenciárias.</li>
      </ul>

      <h2>Passo a Passo para Solicitação Gratuita</h2>
      <p><strong>1. Atualize o CadÚnico:</strong> Vá ao CRAS do seu município com os documentos de todos os membros da família.</p>
      <p><strong>2. Acesse o portal Meu INSS:</strong> Pelo site gov.br/inss ou aplicativo para celular, selecione "Novo Pedido" e busque por "Benefício Assistencial ao Idoso".</p>
      <p><strong>3. Envie a documentação oficial:</strong> Documentos de identidade, comprovantes de endereço e renda.</p>
      <p><strong>4. Acompanhe a decisão:</strong> O processo pode ser monitorado pelo portal Meu INSS ou pelo telefone 135.</p>
      <p><em>Em caso de negativa indevida, a Defensoria Pública da União (DPU) presta assistência jurídica integral e gratuita.</em></p>
    `,
    relatedArticles: [
      { id: 1, slug: "reconhecendo-burnout-cuidador", title: "Reconhecendo o Burnout" },
      { id: 3, slug: "comunicacao-irmaos-nao-ajudam", title: "Comunicação com Irmãos" },
    ],
  },
  "comunicacao-irmaos-nao-ajudam": {
    title: "Quando o Irmão Não Quer Ajudar: Como Comunicar",
    excerpt: "Estratégias práticas para conversar com irmãos.",
    category: "Família",
    readTime: 10,
    date: "10 de agosto, 2024",
    content: `
      <p>É comum que um filho acabe sendo o cuidador principal enquanto irmãos parecem desaparecer.</p>

      <h2>Antes de Conversar</h2>

      <p>Prepare-se emocionalmente. Não é uma acusação — é um pedido.</p>

      <h2>Como Iniciar a Conversa</h2>

      <p><strong>"Preciso conversar com você sobre papai/mamãe. Tenho me sentido sobrecarregado."</strong></p>

      <p>Seja específico. Em vez de "você não ajuda", diga: "Precisamos de ajuda com visitas médicas."</p>

      <h2>Se Eles Disserem Não</h2>

      <ul>
        <li>Pergunte qual é a barreira</li>
        <li>Ofereça alternativas (dinheiro em vez de tempo)</li>
        <li>Estabeleça limites claros</li>
      </ul>
    `,
    relatedArticles: [
      { id: 1, slug: "reconhecendo-burnout-cuidador", title: "Reconhecendo o Burnout" },
      { id: 2, slug: "bpc-loas-guia-completo", title: "BPC: Guia Completo" },
    ],
  },
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = mockArticles[params.slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="text-center max-w-2xl">
          <h1 className="font-display text-4xl font-light text-text-dark mb-4">
            Artigo não encontrado
          </h1>
          <p className="text-text-dark/70 mb-8">
            Desculpe, não conseguimos encontrar esse artigo.
          </p>
          <Link href="/artigos" className="text-text-dark font-semibold hover:text-text-dark/70 transition">
            Voltar aos artigos →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-12 flex items-center gap-2 text-sm text-text-dark/70">
          <Link href="/" className="hover:text-text-dark transition">Início</Link>
          <span>/</span>
          <Link href="/artigos" className="hover:text-text-dark transition">Artigos</Link>
          <span>/</span>
          <span className="text-text-dark font-medium">{article.title}</span>
        </div>

        {/* Featured Image */}
        <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl mb-16 flex items-center justify-center border border-gray-200">
          <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-gray-100 text-text-dark/70 rounded-full text-xs font-semibold mb-6">
            {article.category}
          </div>

          <h1 className="font-display text-5xl sm:text-6xl font-light text-text-dark mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-text-dark/70 border-b border-gray-200 pb-6">
            <span>{article.readTime} min de leitura</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>

        {/* Health Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <p className="text-sm text-amber-900">
            <strong>⚠️ Aviso Importante:</strong> Conteúdo informativo. Consulte sempre um profissional de saúde.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-sm max-w-none mb-16 text-text-dark/80 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Share Buttons */}
        <div className="border-t border-b border-gray-200 py-8 mb-12">
          <p className="text-sm font-semibold text-text-dark mb-4">Compartilhar:</p>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(article.title + " - https://filhocuidador.com.br")}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition font-semibold text-sm"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://filhocuidador.com.br`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition font-semibold text-sm"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-light text-text-dark mb-8">
              Artigos Relacionados
            </h2>
            <div className="space-y-4">
              {article.relatedArticles.map((related: any) => (
                <Link
                  key={related.id}
                  href={`/artigos/${related.slug}`}
                  className="block p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-100 transition-all duration-300 group"
                >
                  <h3 className="font-display text-lg font-semibold text-text-dark group-hover:text-text-dark/80 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-text-dark/70 mt-2">
                    Leia o artigo →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
