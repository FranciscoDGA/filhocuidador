export default function HeroSection() {
  return (
    <section className="w-full py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30"></div>
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-gradient-to-tr from-brand-accent/10 to-brand-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto">
        {/* Hero Content */}
        <div className="mb-20">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-text-dark mb-8 leading-tight">
            Cuidar de quem você ama
            <span className="block bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
              é também cuidar de si
            </span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-text-light mb-12 leading-relaxed max-w-2xl font-medium">
            Um espaço para filhos que cuidam. Informação prática, acolhimento emocional e orientação confiável para quem atravessa essa jornada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-bold text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
              Explorar Conteúdo
            </button>
            <button className="px-8 py-3.5 bg-white text-brand-primary border-2 border-brand-primary rounded-full font-bold text-sm hover:bg-blue-50 transition-all duration-300">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="mt-20">
          <div className="aspect-video bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-accent/20 rounded-3xl flex items-center justify-center border-2 border-brand-primary/20 shadow-2xl overflow-hidden relative group">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
            <svg className="w-24 h-24 text-brand-primary/30 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
