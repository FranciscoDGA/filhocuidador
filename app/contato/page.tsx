import type { Metadata } from "next";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "@/components/ui/Icons";
import ContactForm from "@/components/contact/ContactForm";
import { EMERGENCY_CONTACTS, SITE_INFO } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contato | ${SITE_INFO.name}`,
  description:
    "Canais disponíveis para sugerir temas, apontar correções em guias publicados e acessar contatos públicos de emergência.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: `Contato | ${SITE_INFO.name}`,
    description:
      "Fale com o Filho Cuidador por e-mail e consulte os canais públicos de urgência.",
    url: "/contato",
    type: "website",
  },
};

export default function ContatoPage() {
  return (
    <main id="conteudo-principal" className="min-h-screen bg-surface-page py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">
            Fale com o portal
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-strong mb-4">
            Contato
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Sugestões de novos temas, correções em textos publicados e dúvidas sobre o
            funcionamento do portal são bem-vindas.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <section className="rounded-xl border border-border-subtle bg-surface-card p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <MailIcon className="w-5 h-5 text-ink-strong" aria-hidden="true" />
              <h2 className="font-serif text-xl font-bold text-ink-strong">
                E-mail divulgado no projeto
              </h2>
            </div>
            <p className="text-sm text-ink-muted mb-3">
              Para sugestões editoriais ou notificações sobre conteúdo publicado:
            </p>
            <a
              href={`mailto:${SITE_INFO.contactEmail}`}
              className="text-sm sm:text-base font-bold text-ink-strong underline underline-offset-4 break-all"
            >
              {SITE_INFO.contactEmail}
            </a>
            <p className="text-xs text-ink-muted mt-2">
              Observação: endereço herdado da configuração do projeto; caso esteja sem
              retorno imediato, um serviço de atendimento dedicado ainda depende de
              ativação pelo responsável.
            </p>
          </section>

          <section className="rounded-xl border border-border-subtle bg-surface-subtle p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <PhoneIcon className="w-5 h-5 text-ink-strong" aria-hidden="true" />
              <h2 className="font-serif text-xl font-bold text-ink-strong">
                Emergência e apoio imediato
              </h2>
            </div>
            <ul className="space-y-3 text-sm">
              {EMERGENCY_CONTACTS.map((contact) => (
                <li key={contact.id}>
                  <a
                    href={contact.href}
                    className="font-bold text-ink-strong underline underline-offset-4"
                  >
                    {contact.label}: {contact.phone}
                  </a>
                  <p className="text-xs text-ink-muted mt-0.5">{contact.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section
          aria-labelledby="formulario-contato-heading"
          className="rounded-xl border border-border-subtle bg-surface-card p-6 sm:p-8"
        >
          <h2
            id="formulario-contato-heading"
            className="font-serif text-2xl font-bold text-ink-strong mb-5"
          >
            Preparar mensagem
          </h2>
          <ContactForm recipientEmail={SITE_INFO.contactEmail} />
        </section>

        <p className="mt-6 text-xs text-ink-muted">
          Consulte também nossa{" "}
          <Link href="/privacidade" className="underline text-ink-strong">
            Política de Privacidade
          </Link>{" "}
          e os{" "}
          <Link href="/termos" className="underline text-ink-strong">
            Termos de Uso
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
