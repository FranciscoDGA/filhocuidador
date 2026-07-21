"use client";

import { useState } from "react";

export default function SpecialistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const atendimentos: string[] = [];
    form.querySelectorAll('input[name="atendimento"]:checked').forEach((cb) => {
      atendimentos.push((cb as HTMLInputElement).value);
    });

    const data = {
      name: formData.get("nome") as string,
      email: formData.get("email") as string,
      specialty: formData.get("especialidade") as string,
      registration: formData.get("registro") as string,
      whatsapp: formData.get("whatsapp") as string,
      city: formData.get("cidade") as string,
      linkedin: (formData.get("linkedin") as string) || "",
      atendimento: atendimentos.join(", "),
      message: (formData.get("mensagem") as string) || "",
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "especialista", data }),
      });

      const json = await res.json();

      if (json.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(json.error || "Erro ao enviar. Tente novamente.");
      }
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-[5px] p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-lg font-display font-medium text-green-800 mb-2">
          Candidatura enviada com sucesso!
        </h3>
        <p className="text-sm text-green-700">
          Analisaremos seu perfil em até 48 horas. Entraremos em contato pelo
          e-mail informado.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium text-brand-primary mb-2">
            Nome completo *
          </label>
          <input
            type="text"
            name="nome"
            required
            placeholder="Dr(a). Maria Silva"
            className="w-full px-4 py-3 bg-white border border-border-base text-sm text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-primary/50 rounded-[5px]"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-brand-primary mb-2">
            E-mail *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="maria@exemplo.com"
            className="w-full px-4 py-3 bg-white border border-border-base text-sm text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-primary/50 rounded-[5px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium text-brand-primary mb-2">
            Especialidade *
          </label>
          <select
            name="especialidade"
            required
            className="w-full px-4 py-3 bg-white border border-border-base text-sm text-brand-primary focus:outline-none focus:border-brand-primary/50 rounded-[5px]"
          >
            <option value="">Selecione...</option>
            <option value="geriatra">Geriatra / Neurologista</option>
            <option value="advogado">Advogado (Direito do Idoso)</option>
            <option value="psicologo">Psicólogo</option>
            <option value="assistente-social">Assistente Social</option>
            <option value="fisioterapeuta">Fisioterapeuta</option>
            <option value="nutricionista">Nutricionista</option>
            <option value="enfermeiro">Enfermeiro</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-brand-primary mb-2">
            Registro profissional (CRM, OAB, CRP...) *
          </label>
          <input
            type="text"
            name="registro"
            required
            placeholder="CRM 12345 / SP"
            className="w-full px-4 py-3 bg-white border border-border-base text-sm text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-primary/50 rounded-[5px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium text-brand-primary mb-2">
            WhatsApp *
          </label>
          <input
            type="tel"
            name="whatsapp"
            required
            placeholder="(11) 99999-9999"
            className="w-full px-4 py-3 bg-white border border-border-base text-sm text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-primary/50 rounded-[5px]"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-brand-primary mb-2">
            Cidade/Estado *
          </label>
          <input
            type="text"
            name="cidade"
            required
            placeholder="São Paulo / SP"
            className="w-full px-4 py-3 bg-white border border-border-base text-sm text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-primary/50 rounded-[5px]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-brand-primary mb-2">
          LinkedIn ou site profissional
        </label>
        <input
          type="url"
          name="linkedin"
          placeholder="https://linkedin.com/in/mariasilva"
          className="w-full px-4 py-3 bg-white border border-border-base text-sm text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-primary/50 rounded-[5px]"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-brand-primary mb-2">
          Formas de atendimento
        </label>
        <div className="grid grid-cols-2 gap-3">
          {["WhatsApp", "E-mail", "Telegram", "Videochamada", "Presencial", "Telefone"].map(
            (option) => (
              <label
                key={option}
                className="flex items-center gap-2 text-xs text-brand-secondary/60"
              >
                <input
                  type="checkbox"
                  name="atendimento"
                  value={option}
                  className="w-4 h-4 text-brand-primary border-border-base rounded"
                />
                {option}
              </label>
            )
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-brand-primary mb-2">
          Mensagem (opcional)
        </label>
        <textarea
          name="mensagem"
          rows={4}
          placeholder="Conte um pouco sobre sua experiência com idosos..."
          className="w-full px-4 py-3 bg-white border border-border-base text-sm text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-primary/50 resize-none rounded-[5px]"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-[5px] p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors rounded-[5px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
      </button>
    </form>
  );
}
