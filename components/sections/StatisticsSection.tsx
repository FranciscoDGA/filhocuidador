interface StatisticsSectionProps {
  publishedCount: number;
  categoryCount: number;
}

export default function StatisticsSection({
  publishedCount,
  categoryCount,
}: StatisticsSectionProps) {
  const highlights = [
    {
      value: `${publishedCount}`,
      label: "Guias publicados no acervo",
      detail: "Textos verificados disponíveis gratuitamente em leitura aberta.",
    },
    {
      value: `${categoryCount}`,
      label: "Pilares temáticos",
      detail: "Saúde emocional, cuidados práticos, doenças, família e direitos.",
    },
    {
      value: "192 / 188",
      label: "Canais públicos de apoio",
      detail: "Atalho visível para SAMU (urgência) e CVV (apoio emocional).",
    },
    {
      value: "100%",
      label: "Caráter informativo",
      detail: "Orientações práticas sem substituir atendimento clínico ou jurídico.",
    },
  ];

  return (
    <section
      aria-labelledby="escopo-portal-heading"
      className="py-14 sm:py-16 border-t border-border-subtle bg-surface-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
            Compromisso editorial
          </p>
          <h2
            id="escopo-portal-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-ink-strong"
          >
            Informação clara, sem promessas irreais
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border-subtle bg-surface-card p-6"
            >
              <p className="font-serif text-3xl font-bold text-ink-strong mb-2">
                {item.value}
              </p>
              <h3 className="text-sm font-bold text-ink-strong mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
