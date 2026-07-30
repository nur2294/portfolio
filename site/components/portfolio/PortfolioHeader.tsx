"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function PortfolioHeader() {
  const { t } = useLanguage();
  return (
    <section
      className="pt-36 pb-16 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f8f9fc 0%, #ffffff 100%)" }}
    >
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <span className="gold-line mx-auto mb-5" />
        <h1
          className="text-5xl font-bold mb-4"
          style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
        >
          {t.portfolio.title}
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#64748b" }}>
          {t.portfolio.desc}
        </p>
      </div>
    </section>
  );
}
