import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { EMERGENCY_CONTACTS, SITE_INFO } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="text-white font-serif font-bold text-lg mb-3">
              {SITE_INFO.name}
            </p>
            <p className="text-sm leading-relaxed text-slate-300 mb-3">
              {SITE_INFO.tagline}.
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              {SITE_INFO.editorialNotice}
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Navegação
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors py-1 inline-block">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/artigos"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  Artigos
                </Link>
              </li>
              <li>
                <Link
                  href="/categorias"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  Categorias
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Categorias
            </h2>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/${category.slug}`}
                    className="hover:text-white transition-colors py-1 inline-block"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Emergência e Apoio
            </h2>
            <ul className="space-y-3 text-sm">
              {EMERGENCY_CONTACTS.map((contact) => (
                <li key={contact.id} className="leading-snug">
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-white">{contact.label}:</span>
                    <a
                      href={contact.href}
                      className="text-white font-bold underline underline-offset-4 hover:text-slate-200"
                    >
                      {contact.phone}
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{contact.description}</p>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-400 mt-4">
              Fonte:{" "}
              <a
                href={SITE_INFO.emergencySourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Ministério da Saúde (gov.br)
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {SITE_INFO.name}. Conteúdo informativo de utilidade pública.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link href="/contato" className="hover:text-white transition-colors">
              Fale com o portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
