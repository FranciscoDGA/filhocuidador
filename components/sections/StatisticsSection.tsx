const statistics = [
  {
    id: 1,
    number: "11,5 milhões",
    description: "de cuidadores informais no Brasil",
  },
  {
    id: 2,
    number: "70%",
    description: "relatam sinais de esgotamento emocional",
  },
  {
    id: 3,
    number: "Você",
    description: "não está sozinho nessa",
  },
];

export default function StatisticsSection() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-dark via-brand-primary to-brand-secondary"></div>
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {statistics.map((stat, idx) => (
            <div key={stat.id} className="text-center group">
              <div className="mb-8 p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                <p className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
              </div>
              <p className="font-body text-lg text-white/90 font-semibold leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
