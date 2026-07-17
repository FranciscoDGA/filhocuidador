export default function HeroSection() {
  return (
    <section className="w-full py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Hero Content */}
        <div className="mb-20">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-text-dark mb-8 leading-tight">
            Cuidar de quem você ama
            <span className="block font-semibold">é também cuidar de si</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-text-dark/70 mb-12 leading-relaxed max-w-2xl">
            Um espaço para filhos que cuidam. Informação prática, acolhimento emocional e orientação confiável para quem atravessa essa jornada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3.5 bg-text-dark text-white rounded-full font-semibold text-sm hover:bg-text-dark/90 transition duration-300">
              Explorar Conteúdo
            </button>
            <button className="px-7 py-3.5 bg-gray-100 text-text-dark rounded-full font-semibold text-sm hover:bg-gray-200 transition duration-300">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Image Placeholder - Minimalista */}
        <div className="mt-20">
          <div className="aspect-video bg-gradient-to-br from-text-dark/5 via-text-dark/3 to-transparent rounded-2xl flex items-center justify-center border border-gray-200">
            <svg className="w-24 h-24 text-text-dark/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
