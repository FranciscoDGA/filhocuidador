"use client";

import { useEffect, useState } from "react";

export default function Analytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    setConsent(stored);
  }, []);

  // Listen for consent changes
  useEffect(() => {
    function handleStorageChange() {
      const stored = localStorage.getItem("cookie-consent");
      setConsent(stored);
    }
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (consent !== "accepted") return null;

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID;

  return (
    <>
      {/* Google Analytics */}
      {gaId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`,
            }}
          />
        </>
      )}
      {/* Hotjar */}
      {hotjarId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h._hj=h._hj||[]).push(arguments)}; h._hjSettings={hjid:${hotjarId},hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      )}
    </>
  );
}
