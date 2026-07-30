"use client";

import { countries } from "@/lib/data";
import { countriesEn } from "@/lib/data-en";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GlobalPresence() {
  const { lang, t } = useLanguage();
  const data = lang === "en" ? countriesEn : countries;

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <span className="gold-line mb-5" />
            <h2
              className="text-4xl font-bold mb-5"
              style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
            >
              {t.global.title1}
              <br />
              <span style={{ color: "#c9a84c" }}>{t.global.title2}</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#64748b" }}>
              {t.global.desc}
            </p>

            {/* Country cards */}
            <div className="space-y-4">
              {data.map((c) => (
                <div
                  key={c.code}
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:-translate-x-1"
                  style={{
                    background: "#f8f9fc",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 2px 12px rgba(30,58,95,0.04)",
                  }}
                >
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#1e3a5f" }}>
                      {c.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div className="relative">
            <div
              className="rounded-3xl p-10 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1e3a5f 0%, #152d4a 100%)",
                boxShadow: "0 20px 60px rgba(30,58,95,0.25)",
                minHeight: "380px",
              }}
            >
              {/* Decorative grid lines */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Center content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center py-8">
                <p
                  className="text-6xl font-bold mb-3"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    background: "linear-gradient(135deg, #c9a84c 0%, #e2c47a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  3
                </p>
                <p className="font-semibold text-lg mb-8" style={{ color: "#ffffff" }}>
                  {t.global.countryLabel}
                </p>

                {/* Country pins */}
                <div className="flex flex-col gap-4 w-full">
                  {[
                    { flag: "🇹🇷", name: lang === "en" ? "Turkey" : "Türkiye", primary: true },
                    { flag: "🇶🇦", name: lang === "en" ? "Qatar" : "Katar", primary: false },
                    { flag: "🇲🇰", name: lang === "en" ? "North Macedonia" : "Makedonya", primary: false },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center px-5 py-3 rounded-xl"
                      style={{
                        background: item.primary
                          ? "rgba(201,168,76,0.15)"
                          : "rgba(255,255,255,0.06)",
                        border: `1px solid ${item.primary ? "rgba(201,168,76,0.30)" : "rgba(255,255,255,0.10)"}`,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.flag}</span>
                        <span
                          className="font-semibold text-sm"
                          style={{ color: item.primary ? "#e2c47a" : "white" }}
                        >
                          {item.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom stat */}
                <div
                  className="mt-6 pt-6 w-full text-center"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {t.global.countries}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
