import Link from "next/link";
import type { ArticleSummary } from "@/lib/articles";
import type { CategoryDefinition } from "@/lib/categories";
import { EMERGENCY_CONTACTS } from "@/lib/site";

interface SidebarProps {
  categories: Array<CategoryDefinition & { count: number }>;
  essentialArticles: ArticleSummary[];
}

export default function Sidebar({
  categories,
  essentialArticles,
}: SidebarProps) {
  return (
    <aside aria-label="Barra lateral de navegação rápida" className="space-y-8">
      <section className="rounded-xl border border-border-subtle bg-surface-card p-6">
        <h2 className="font-serif text-xl font-bold text-ink-strong pb-3 border-b border-border-subtle mb-4">
          Pilares de Apoio
        </h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/${cat.slug}`}
                className="flex items-center justify-between gap-3 min-h-[44px] px-3 py-2 rounded-lg hover:bg-surface-subtle transition-colors text-sm"
              >
                <span className="font-medium text-ink-strong">{cat.title}</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-surface-subtle text-ink-muted">
                  {cat.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-3 border-t border-border-subtle">
          <Link
            href="/categorias"
            className="text-xs font-semibold text-ink-strong hover:underline underline-offset-4"
          >
            Explorar todas as categorias →
          </Link>
        </div>
      </section>

      {essentialArticles.length > 0 && (
        <section className="rounded-xl border border-border-subtle bg-surface-card p-6">
          <h2 className="font-serif text-xl font-bold text-ink-strong pb-3 border-b border-border-subtle mb-4">
            Leituras Essenciais
          </h2>
          <ol className="space-y-4">
            {essentialArticles.map((article, idx) => (
              <li key={article.slug} className="flex gap-3 items-start">
                <span
                  aria-hidden="true"
                  className="text-xs font-bold text-ink-muted bg-surface-subtle w-6 h-6 rounded-full inline-flex items-center justify-center shrink-0 mt-0.5"
                >
                  {idx + 1}
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                    {article.categoryTitle}
                  </span>
                  <Link
                    href={`/artigos/${article.slug}`}
                    className="text-sm font-semibold text-ink-strong hover:underline underline-offset-2 leading-snug"
                  >
                    {article.title}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="rounded-xl border border-border-subtle bg-surface-subtle p-6">
        <h2 className="font-serif text-xl font-bold text-ink-strong mb-2">
          Precisa de ajuda agora?
        </h2>
        <p className="text-xs text-ink-muted leading-relaxed mb-4">
          Em situações de urgência médica ou sobrecarga emocional aguda, acione os
          canais públicos gratuitos do Brasil:
        </p>
        <ul className="space-y-2.5 text-sm">
          {EMERGENCY_CONTACTS.map((contact) => (
            <li key={contact.id}>
              <a
                href={contact.href}
                className="flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded-lg bg-surface-card border border-border-subtle hover:border-border-strong font-semibold text-ink-strong"
              >
                <span>{contact.label}</span>
                <span className="font-bold">{contact.phone}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
