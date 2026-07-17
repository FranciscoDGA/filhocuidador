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
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-text-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6">
                {stat.number}
              </p>
              <p className="font-body text-lg text-white/80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
