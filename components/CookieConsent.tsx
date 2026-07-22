"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
    // Reload to activate GA/Hotjar
    window.location.reload();
  }

  function handleDecline() {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-[1400px] mx-auto bg-brand-primary text-white p-4 md:p-6 rounded-[5px] shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-grow">
            <h3 className="text-sm font-display font-medium mb-1">
              Este site usa cookies
            </h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar o conteúdo. Ao continuar navegando, você concorda com o uso de cookies.{" "}
              <a href="/privacidade" className="underline hover:text-white">
                Politica de Privacidade
              </a>
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-[11px] font-medium tracking-wide uppercase border border-white/30 hover:bg-white/10 transition-colors rounded-[5px]"
            >
              Recusar
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-[11px] font-medium tracking-wide uppercase bg-white text-brand-primary hover:bg-white/90 transition-colors rounded-[5px]"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
