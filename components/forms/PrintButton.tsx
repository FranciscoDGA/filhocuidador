"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-6 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors shrink-0 print:hidden"
    >
      Imprimir / Salvar PDF
    </button>
  );
}
