import Link from "next/link";

const mockArticles: { [key: string]: any } = {
  "reconhecendo-burnout-cuidador": {
    title: "Reconhecendo o Burnout do Cuidador",
    excerpt: "Sinais de alerta para quando você está no limite. E sim, sua exaustão é legítima.",
    category: "Saúde Emocional",
    readTime: 8,
    date: "17 de julho, 2024",
    content: `
      <p>Cuidar de um pai idoso é um privilégio, mas também é exaustivo. Há noites em claro, preocupações constantes, decisões difíceis que caem sobre seus ombros. E muitas vezes, você se sente culpado por estar cansado.</p>

      <p>O burnout do cuidador é real. É esgotamento emocional, físico e mental que resulta do cuidado prolongado e intenso. Não é preguiça. Não é fraqueza. É seu corpo e sua mente pedindo ajuda.</p>

      <h2>Sinais de Alerta</h2>

      <p>Você pode estar desenvolvendo burnout se:</p>
      <ul>
        <li>Sente cansaço constante mesmo após dormir</li>
        <li>Tem dificuldade de concentração ou memória</li>
        <li>Experimenta mudanças de humor frequentes</li>
        <li>Sente ressentimento em relação ao seu pai idoso</li>
        <li>Negligencia sua própria saúde (alimentação, exercício, medicina)</li>
        <li>Isola-se de amigos e família</li>
        <li>Sente desesperança ou vazio</li>
      </ul>

      <h2>O Que Fazer</h2>

      <p>Se você reconhece esses sinais, saiba que não está sozinho. Aqui estão alguns passos:</p>

      <p><strong>1. Reconheça seus limites</strong> - Você não pode fazer tudo sozinho. Pedir ajuda não é falha.</p>

      <p><strong>2. Procure suporte</strong> - Converse com amigos, família ou um terapeuta. Considere grupos de apoio para cuidadores.</p>

      <p><strong>3. Cuide de si mesmo</strong> - Mesmo que seja apenas 15 minutos, reserve tempo para algo que goste.</p>

      <p><strong>4. Considere ajuda profissional</strong> - Um psicólogo ou psiquiatra pode oferecer ferramentas importantes para lidar com o esgotamento.</p>

      <p>Sua exaustão é válida. Sua saúde importa. E buscar ajuda é um ato de amor — não apenas para seu pai, mas também para si mesmo.</p>
    `,
    relatedArticles: [
      {
        id: 2,
        slug: "comunicacao-irmaos-nao-ajudam",
        title: "Quando o Irmão Não Quer Ajudar: Como Comunicar",
      },
      {
        id: 3,
        slug: "bpc-loas-guia-completo",
        title: "BPC (Benefício de Prestação Continuada): Guia Completo 2024",
      },
    ],
  },
  "bpc-loas-guia-completo": {
    title: "BPC (Benefício de Prestação Continuada): Guia Completo 2024",
    excerpt: "Como solicitar o BPC, quem tem direito, documentos necessários e passo a passo.",
    category: "Jurídico & Financeiro",
    readTime: 12,
    date: "20 de julho, 2024",
    content: `
      <p>Se seu pai idoso tem dificuldade financeira e uma deficiência ou condição que impede trabalho, o BPC pode ser uma ajuda fundamental. Este guia vai explicar tudo que você precisa saber.</p>

      <h2>O que é BPC?</h2>

      <p>O Benefício de Prestação Continuada (BPC) é um benefício assistencial de um salário mínimo mensal para pessoa idosa com 65 anos ou mais, ou pessoa com deficiência que não tem condições de se manter financeiramente.</p>

      <h2>Quem tem direito?</h2>

      <p>Pessoa idosa: 65 anos ou mais</p>
      <p>Pessoa com deficiência: de qualquer idade</p>
      <p>Renda per capita familiar: não ultrapasse 1/4 do salário mínimo</p>
      <p>Tempo de residência: ser residente no Brasil</p>

      <h2>Documentos Necessários</h2>

      <ul>
        <li>CPF e RG</li>
        <li>Certidão de nascimento</li>
        <li>Comprovante de residência</li>
        <li>Laudo médico (para deficiência)</li>
        <li>Comprovantes de renda familiar</li>
      </ul>

      <h2>Como Solicitar</h2>

      <p><strong>Passo 1:</strong> Marque atendimento no INSS (telefone 135 ou portal gov.br)</p>
      <p><strong>Passo 2:</strong> Reúna todos os documentos listados</p>
      <p><strong>Passo 3:</strong> Compareça ao atendimento</p>
      <p><strong>Passo 4:</strong> Acompanhe a análise pelo portal de atendimentos</p>

      <p>O processo pode levar alguns meses. Seja paciente e, se necessário, procure ajuda de um assistente social ou advogado especializado em direitos sociais.</p>
    `,
    relatedArticles: [
      {
        id: 1,
        slug: "reconhecendo-burnout-cuidador",
        title: "Reconhecendo o Burnout do Cuidador",
      },
      {
        id: 3,
        slug: "comunicacao-irmaos-nao-ajudam",
        title: "Quando o Irmão Não Quer Ajudar: Como Comunicar",
      },
    ],
  },
  "comunicacao-irmaos-nao-ajudam": {
    title: "Quando o Irmão Não Quer Ajudar: Como Comunicar",
    excerpt: "Estratégias práticas para conversar com irmãos que não colaboram no cuidado.",
    category: "Família",
    readTime: 10,
    date: "10 de agosto, 2024",
    content: `
      <p>É comum que um filho acabe sendo o cuidador principal enquanto irmãos parecem desaparecer. A frustração e a raiva são legítimas. Mas talvez uma conversa honesta e bem estruturada possa abrir portas.</p>

      <h2>Antes de Conversar</h2>

      <p>Prepare-se emocionalmente. Não é uma acusação — é um pedido. Seus irmãos podem ter suas próprias razões (medo, negação, dificuldades pessoais) que você desconhece.</p>

      <h2>Como Iniciar a Conversa</h2>

      <p><strong>"Preciso conversar com você sobre papai/mamãe. Tenho me sentido sobrecarregado e gostaria da sua ajuda."</strong></p>

      <p>Seja específico. Em vez de "você não ajuda", diga: "Precisamos de ajuda com visitas médicas. Você consegueria levar papai na próxima consulta?"</p>

      <h2>Se Eles Disserem Não</h2>

      <ul>
        <li>Pergunte qual é a barreira (medo? falta de conhecimento? problemas pessoais?)</li>
        <li>Ofereça alternativas (talvez dinheiro em vez de tempo presencial)</li>
        <li>Estabeleça limites claros sobre o que você pode e não pode fazer</li>
      </ul>

      <h2>Protetor Importante</h2>

      <p>Você não pode carregar isso sozinho. Se seus irmãos realmente não conseguem ajudar, considere:</p>
      <ul>
        <li>Contratar cuidador profissional</li>
        <li>Dividir custos com irmãos</li>
        <li>Procurar assistência social do município</li>
      </ul>

      <p>A culpa e o ressentimento vão consumir sua energia. Às vezes, a melhor solução não vem de uma conversa, mas de mudar sua própria situação.</p>
    `,
    relatedArticles: [
      {
        id: 1,
        slug: "reconhecendo-burnout-cuidador",
        title: "Reconhecendo o Burnout do Cuidador",
      },
      {
        id: 2,
        slug: "bpc-loas-guia-completo",
        title: "BPC (Benefício de Prestação Continuada): Guia Completo 2024",
      },
    ],
  },
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = mockArticles[params.slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="font-display text-4xl font-bold text-text-dark mb-4">
            Artigo não encontrado
          </h1>
          <p className="text-text-dark/70 mb-8">
            Desculpe, não conseguimos encontrar o artigo que você procura.
          </p>
          <Link href="/artigos" className="text-brand-primary font-medium hover:text-brand-accent transition">
            Voltar aos artigos →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-cream min-h-screen pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-text-dark/70">
          <Link href="/" className="hover:text-brand-primary transition">
            Início
          </Link>
          <span>/</span>
          <Link href="/artigos" className="hover:text-brand-primary transition">
            Artigos
          </Link>
          <span>/</span>
          <span className="text-text-dark font-medium">{article.title}</span>
        </div>

        {/* Featured Image */}
        <div className="aspect-video bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 rounded-xl mb-12 flex items-center justify-center border border-border-light overflow-hidden">
          <svg className="w-20 h-20 text-text-dark/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-medium mb-4">
            {article.category}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-text-dark mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-text-dark/70 border-b border-border-light pb-6">
            <span>{article.readTime} min de leitura</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>

        {/* Health Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
          <p className="text-sm text-yellow-900">
            <strong>⚠️ Aviso Importante:</strong> Este conteúdo é informativo. Consulte sempre um profissional de saúde para questões médicas ou psicológicas.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-sm max-w-none mb-12 text-text-dark/80 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Share Buttons */}
        <div className="border-t border-b border-border-light py-8 mb-12">
          <p className="text-sm font-medium text-text-dark mb-4">Compartilhar este artigo:</p>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(article.title + " - " + window.location.href)}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-medium text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.036-5.029 5.23-5.029 8.602 0 3.55 1.992 6.763 5.224 8.402 1.584.901 3.342 1.379 5.149 1.379 1.541 0 3.03-.368 4.406-1.087l.057-.029c3.476-1.746 5.778-5.216 5.778-9.272 0-2.097-.52-4.141-1.522-5.946-.6-1.193-1.422-2.274-2.426-3.156-2.265-2.007-5.199-3.268-8.406-3.268z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition font-medium text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-text-dark mb-6">
              Artigos Relacionados
            </h2>
            <div className="space-y-4">
              {article.relatedArticles.map((related: any) => (
                <Link
                  key={related.id}
                  href={`/artigos/${related.slug}`}
                  className="block p-4 bg-white border border-border-light rounded-lg hover:shadow-lg transition-shadow duration-300 group"
                >
                  <h3 className="font-display text-lg font-bold text-text-dark group-hover:text-brand-primary transition-colors">
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
