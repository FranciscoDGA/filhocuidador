import Link from "next/link";

export default function NotFound() {
  return (
    <main id="conteudo-principal" className="min-h-[65vh] bg-surface-page py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">
          Erro 404
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-strong mb-4">
          Página ou artigo não encontrado
        </h1>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-8">
          O endereço que você tentou acessar não existe, mudou de lugar ou corresponde a um
          conteúdo que está temporariamente fora do ar para revisão editorial.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-lg bg-brand-primary text-surface-card font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Voltar para o início
          </Link>
          <Link
            href="/artigos"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-lg border border-border-strong bg-surface-card text-ink-strong font-semibold text-sm hover:bg-surface-subtle transition-colors"
          >
            Ver artigos publicados
          </Link>
          <Link
            href="/categorias"
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-lg border border-border-subtle bg-surface-card text-ink-muted font-medium text-sm hover:text-ink-strong transition-colors"
          >
            Explorar categorias
          </Link>
        </div>
      </div>
    </main>
  );
}
