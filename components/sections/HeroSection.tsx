export default function HeroSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark mb-6 leading-tight">
          Cuidar de quem você ama é um ato de amor.
          <span className="block text-brand-accent">Mas também dói.</span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-text-dark/80 mb-8 leading-relaxed max-w-2xl mx-auto">
          Aqui você encontra informação, acolhimento e orientação prática para atravessar essa fase com mais segurança e menos solidão.
        </p>

        <button className="px-8 py-3 bg-brand-primary text-white rounded-lg font-medium hover:opacity-90 transition duration-200 text-base">
          Quero me sentir menos sozinho
        </button>
      </div>

      {/* Imagem placeholder */}
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="aspect-video bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 rounded-xl flex items-center justify-center border border-border-light">
          <div className="text-center text-text-dark/40">
            <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Filha adulta abraçando mãe idosa</p>
          </div>
        </div>
      </div>
    </section>
  );
}
