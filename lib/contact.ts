export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // honeypot
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<"name" | "email" | "subject" | "message" | "form", string>>;
}

export const CONTACT_SUBJECT_OPTIONS = [
  "Dúvida sobre conteúdo publicado",
  "Sugestão de tema ou guia",
  "Correção ou atualização de informação",
  "Outros assuntos",
] as const;

export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  const errors: ContactValidationResult["errors"] = {};

  if (input.website && input.website.trim().length > 0) {
    errors.form = "Envio bloqueado pela verificação anti-spam.";
    return { valid: false, errors };
  }

  const name = input.name.trim();
  const email = input.email.trim();
  const subject = input.subject.trim();
  const message = input.message.trim();

  if (name.length < 2) {
    errors.name = "Informe seu nome ou como prefere ser chamado (mínimo de 2 caracteres).";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Informe um endereço de e-mail válido.";
  }

  if (subject.length < 3) {
    errors.subject = "Escolha ou informe um assunto para a mensagem.";
  }

  if (message.length < 15) {
    errors.message =
      "Escreva uma mensagem com pelo menos 15 caracteres (evite dados médicos sensíveis ou documentos).";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildContactMailtoUrl(
  recipientEmail: string,
  input: ContactFormInput
): string {
  const subject = `[Filho Cuidador] ${input.subject.trim()}`;
  const body = [
    `Nome: ${input.name.trim()}`,
    `E-mail para retorno: ${input.email.trim()}`,
    "",
    input.message.trim(),
  ].join("\n");

  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
