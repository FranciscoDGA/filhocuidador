import Link from "next/link";

export default function NewsletterSection() {
  return (
    <section
      aria-labelledby="fale-portal-heading"
      className="py-14 sm:py-16 border-t border-border-subtle bg-surface-page"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="fale-portal-heading"
          className="font-serif text-3xl sm:text-4xl font-bold text-ink-strong mb-4"
        >
          Sugira um tema ou aponte uma correção
        </h2>
        <p className="text-base text-ink-muted leading-relaxed max-w-2xl mx-auto mb-7">
          Não coletamos e-mails para newsletter no momento enquanto estruturamos um
          canal com confirmação e descadastro verificados. Caso queira enviar uma
          sugestão de guia ou revisão, fale com a redação pela página de contato.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contato"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-lg bg-brand-primary text-surface-card text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Ir para Contato
          </Link>
          <Link
            href="/sobre"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-lg border border-border-strong bg-surface-card text-ink-strong text-sm font-semibold hover:bg-surface-subtle transition-colors"
          >
            Sobre o Filho Cuidador
          </Link>
        </div>
      </div>
    </section>
  );
}
