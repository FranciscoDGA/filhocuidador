import Link from "next/link";

export default function FeaturedArticleSection() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Article - Large */}
          <div className="md:col-span-2">
            <Link href="/artigos/reconhecendo-burnout-cuidador">
              <div className="group cursor-pointer">
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-brand-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <p className="text-xs font-bold text-brand-primary mb-2">SAÚDE EMOCIONAL</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-primary transition">
                    Reconhecendo o Burnout do Cuidador
                  </h2>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    Sinais de alerta para quando você está no limite. E sim, sua exaustão é legítima. Entenda os sinais, cuide-se e não sofra sozinho.
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span>Por Neil</span>
                    <span>•</span>
                    <span>17 de julho, 2024</span>
                    <span>•</span>
                    <span>8 min de leitura</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar - Featured Articles */}
          <div>
            <div className="border-l-2 border-brand-primary pl-6">
              <h3 className="text-sm font-bold text-gray-900 mb-6">DESTAQUE</h3>

              <div className="space-y-8">
                {/* Article 1 */}
                <Link href="/artigos/bpc-loas-guia-completo">
                  <div className="group cursor-pointer">
                    <p className="text-xs font-bold text-brand-secondary mb-1">JURÍDICO</p>
                    <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-brand-primary transition line-clamp-2">
                      BPC - Guia Completo 2024
                    </h4>
                    <p className="text-xs text-gray-600">20 de julho, 2024</p>
                  </div>
                </Link>

                {/* Article 2 */}
                <Link href="/artigos/comunicacao-irmaos-nao-ajudam">
                  <div className="group cursor-pointer">
                    <p className="text-xs font-bold text-brand-accent mb-1">FAMÍLIA</p>
                    <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-brand-primary transition line-clamp-2">
                      Quando o Irmão Não Quer Ajudar
                    </h4>
                    <p className="text-xs text-gray-600">10 de agosto, 2024</p>
                  </div>
                </Link>

                {/* Article 3 */}
                <Link href="/artigos">
                  <div className="group cursor-pointer">
                    <p className="text-xs font-bold text-brand-primary mb-1">CUIDADOS PRÁTICOS</p>
                    <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-brand-primary transition line-clamp-2">
                      Técnicas de Alívio do Estresse
                    </h4>
                    <p className="text-xs text-gray-600">5 de agosto, 2024</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
