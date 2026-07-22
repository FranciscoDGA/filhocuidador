"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Specialist {
  id: string;
  name: string;
  email: string;
  specialty: string;
  registration: string;
  whatsapp: string;
  city: string;
  linkedin: string;
  atendimento: string;
  message: string;
  status: string;
  created_at: string;
}

export default function AdminEspecialistasPage() {
  const [specialists, setSpecialists] = useState<Specialist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check auth cookie
    const cookies = document.cookie.split(";").map(c => c.trim());
    const authCookie = cookies.find(c => c.startsWith("admin-auth="));
    
    if (!authCookie || authCookie.split("=")[1] !== "authenticated") {
      router.push("/admin/login");
      return;
    }
    
    setAuthenticated(true);
    fetchSpecialists();
  }, [router]);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  async function fetchSpecialists() {
    try {
      const res = await fetch("/api/admin/specialists");
      const data = await res.json();

      if (data.success) {
        setSpecialists(data.specialists);
      } else {
        setError(data.error || "Erro ao carregar dados");
      }
    } catch {
      setError("Erro de conexão");
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      const res = await fetch("/api/admin/specialists", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      const data = await res.json();

      if (data.success) {
        setSpecialists(specialists.map(s => 
          s.id === id ? { ...s, status } : s
        ));
      }
    } catch {
      alert("Erro ao atualizar status");
    }
  }

  if (!authenticated || loading) {
    return (
      <main className="bg-bg-base min-h-screen py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-brand-secondary">Carregando...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="bg-bg-base min-h-screen py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      </main>
    );
  }

  const pending = specialists.filter(s => s.status === "pending");
  const approved = specialists.filter(s => s.status === "approved");
  const rejected = specialists.filter(s => s.status === "rejected");

  return (
    <main className="bg-bg-base min-h-screen py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-display font-medium text-brand-primary">
            Painel de Especialistas
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-[11px] font-medium tracking-wide uppercase text-brand-secondary/60 border border-border-base hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors rounded-[5px]"
          >
            Sair
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-border-base p-4 rounded-[5px] text-center">
            <div className="text-2xl font-display font-medium text-yellow-600">{pending.length}</div>
            <div className="text-xs text-brand-secondary/60">Pendentes</div>
          </div>
          <div className="bg-white border border-border-base p-4 rounded-[5px] text-center">
            <div className="text-2xl font-display font-medium text-green-600">{approved.length}</div>
            <div className="text-xs text-brand-secondary/60">Aprovados</div>
          </div>
          <div className="bg-white border border-border-base p-4 rounded-[5px] text-center">
            <div className="text-2xl font-display font-medium text-red-600">{rejected.length}</div>
            <div className="text-xs text-brand-secondary/60">Rejeitados</div>
          </div>
        </div>

        {/* Specialists List */}
        {specialists.length === 0 ? (
          <div className="bg-white border border-border-base p-8 rounded-[5px] text-center">
            <p className="text-sm text-brand-secondary/60">Nenhum especialista cadastrado ainda.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {specialists.map((specialist) => (
              <div
                key={specialist.id}
                className="bg-white border border-border-base p-6 rounded-[5px]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-display font-medium text-brand-primary">
                        {specialist.name}
                      </h3>
                      <span className={`text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded ${
                        specialist.status === "approved" ? "bg-green-100 text-green-700" :
                        specialist.status === "rejected" ? "bg-red-100 text-red-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        {specialist.status === "approved" ? "Aprovado" :
                         specialist.status === "rejected" ? "Rejeitado" : "Pendente"}
                      </span>
                    </div>
                    <div className="text-xs text-brand-secondary/60 space-y-1">
                      <p><strong>Email:</strong> {specialist.email}</p>
                      <p><strong>Especialidade:</strong> {specialist.specialty}</p>
                      <p><strong>Registro:</strong> {specialist.registration}</p>
                      <p><strong>WhatsApp:</strong> {specialist.whatsapp}</p>
                      <p><strong>Cidade:</strong> {specialist.city}</p>
                      {specialist.linkedin && <p><strong>LinkedIn:</strong> {specialist.linkedin}</p>}
                      {specialist.atendimento && <p><strong>Atendimento:</strong> {specialist.atendimento}</p>}
                      {specialist.message && <p><strong>Mensagem:</strong> {specialist.message}</p>}
                      <p><strong>Data:</strong> {new Date(specialist.created_at).toLocaleDateString("pt-BR")}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {specialist.status !== "approved" && (
                      <button
                        onClick={() => updateStatus(specialist.id, "approved")}
                        className="px-4 py-2 bg-green-600 text-white text-[11px] font-medium tracking-wide uppercase hover:bg-green-700 transition-colors rounded-[5px]"
                      >
                        Aprovar
                      </button>
                    )}
                    {specialist.status !== "rejected" && (
                      <button
                        onClick={() => updateStatus(specialist.id, "rejected")}
                        className="px-4 py-2 bg-red-600 text-white text-[11px] font-medium tracking-wide uppercase hover:bg-red-700 transition-colors rounded-[5px]"
                      >
                        Rejeitar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
