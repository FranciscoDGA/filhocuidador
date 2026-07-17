export default function HeroSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cuidar de quem você ama é também cuidar de si
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Um espaço para filhos que cuidam. Informação prática, acolhimento emocional e orientação confiável para quem atravessa essa jornada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-brand-primary text-white font-bold rounded hover:bg-blue-700 transition">
                Explorar Conteúdo
              </button>
              <button className="px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded hover:bg-gray-200 transition">
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
