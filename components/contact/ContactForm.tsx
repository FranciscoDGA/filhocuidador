"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon, CopyIcon, ExternalLinkIcon, InfoIcon } from "@/components/ui/Icons";
import {
  buildContactMailtoUrl,
  CONTACT_SUBJECT_OPTIONS,
  validateContactForm,
  type ContactValidationResult,
} from "@/lib/contact";

interface ContactFormProps {
  recipientEmail: string;
}

export default function ContactForm({ recipientEmail }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<string>(CONTACT_SUBJECT_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [errors, setErrors] = useState<ContactValidationResult["errors"]>({});
  const [validatedMailtoUrl, setValidatedMailtoUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCopied(false);

    const result = validateContactForm({
      name,
      email,
      subject,
      message,
      website,
    });

    if (!result.valid) {
      setErrors(result.errors);
      setValidatedMailtoUrl(null);
      return;
    }

    setErrors({});
    setValidatedMailtoUrl(
      buildContactMailtoUrl(recipientEmail, {
        name,
        email,
        subject,
        message,
      })
    );
  };

  const handleCopySummary = async () => {
    const formatted = [
      `Para: ${recipientEmail}`,
      `Assunto: [Filho Cuidador] ${subject.trim()}`,
      `Nome: ${name.trim()}`,
      `E-mail: ${email.trim()}`,
      "",
      message.trim(),
    ].join("\n");

    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-6">
      <div
        role="note"
        className="rounded-xl border border-border-subtle bg-surface-subtle p-4 flex items-start gap-3 text-sm text-ink-body"
      >
        <InfoIcon className="w-5 h-5 text-ink-strong shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1">
          <p className="font-semibold text-ink-strong">
            Envio automático em configuração — alternativa transparente por e-mail
          </p>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            Este formulário não envia mensagens por servidor no momento. Ao preencher e
            validar os campos abaixo, geramos o atalho para o seu programa de e-mail
            endereçado a{" "}
            <a
              href={`mailto:${recipientEmail}`}
              className="underline font-semibold text-ink-strong"
            >
              {recipientEmail}
            </a>{" "}
            (endereço já divulgado pelo projeto, sujeito à confirmação de caixa de
            entrada). Não inclua prontuários, exames, CPF ou dados de saúde sensíveis.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {errors.form && (
          <p
            role="alert"
            className="rounded-lg border border-red-300 bg-red-50 dark:bg-red-950/40 dark:border-red-800 px-4 py-3 text-sm text-red-800 dark:text-red-200"
          >
            {errors.form}
          </p>
        )}

        {/* Campo honeypot contra spam */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="contato-website">Não preencha este campo</label>
          <input
            id="contato-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="contato-nome"
            className="block text-sm font-semibold text-ink-strong mb-1.5"
          >
            Seu nome *
          </label>
          <input
            id="contato-nome"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Ana Paula"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "erro-nome" : undefined}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-border-strong bg-surface-page text-sm text-ink-strong placeholder:text-ink-muted"
            required
          />
          {errors.name && (
            <p id="erro-nome" role="alert" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contato-email"
            className="block text-sm font-semibold text-ink-strong mb-1.5"
          >
            Seu e-mail para retorno *
          </label>
          <input
            id="contato-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@exemplo.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "erro-email" : undefined}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-border-strong bg-surface-page text-sm text-ink-strong placeholder:text-ink-muted"
            required
          />
          {errors.email && (
            <p id="erro-email" role="alert" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contato-assunto"
            className="block text-sm font-semibold text-ink-strong mb-1.5"
          >
            Assunto *
          </label>
          <select
            id="contato-assunto"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "erro-assunto" : undefined}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-border-strong bg-surface-page text-sm text-ink-strong"
          >
            {CONTACT_SUBJECT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p id="erro-assunto" role="alert" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contato-mensagem"
            className="block text-sm font-semibold text-ink-strong mb-1.5"
          >
            Mensagem *
          </label>
          <textarea
            id="contato-mensagem"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escreva sua sugestão de tema ou aponte qual guia precisa de atualização. Não informe CPF, exames ou dados médicos privados."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "erro-mensagem" : undefined}
            className="w-full px-4 py-3 rounded-lg border border-border-strong bg-surface-page text-sm text-ink-strong placeholder:text-ink-muted resize-y"
            required
          />
          {errors.message && (
            <p id="erro-mensagem" role="alert" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full min-h-[48px] px-6 py-3 rounded-lg bg-brand-primary text-surface-card text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Preparar mensagem para e-mail
        </button>
      </form>

      {validatedMailtoUrl && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-xl border border-border-strong bg-surface-subtle p-5 space-y-3"
        >
          <p className="text-sm font-bold text-ink-strong">
            Campos validados localmente — pronto para enviar pelo seu e-mail
          </p>
          <p className="text-xs sm:text-sm text-ink-muted">
            Nenhuma mensagem foi enviada automaticamente pelo servidor. Escolha uma das
            opções abaixo para encaminhar a redação:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={validatedMailtoUrl}
              className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-lg bg-brand-primary text-surface-card text-sm font-semibold hover:opacity-90"
            >
              <span>Abrir meu aplicativo de e-mail</span>
              <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-lg border border-border-strong bg-surface-card text-ink-strong text-sm font-semibold hover:bg-surface-page"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-4 h-4" aria-hidden="true" />
                  <span>Texto copiado</span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-4 h-4" aria-hidden="true" />
                  <span>Copiar mensagem</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
