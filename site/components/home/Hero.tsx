"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t, lang } = useLanguage();
  const roleRef = useRef<HTMLSpanElement>(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  const roles = t.hero.roles as readonly string[];

  useEffect(() => {
    roleIndex.current = 0;
    charIndex.current = 0;
    isDeleting.current = false;
    if (roleRef.current) roleRef.current.textContent = "";
  }, [lang]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = roles[roleIndex.current];
      const el = roleRef.current;
      if (!el) return;

      if (!isDeleting.current) {
        el.textContent = current.slice(0, charIndex.current + 1);
        charIndex.current++;
        if (charIndex.current === current.length) {
          isDeleting.current = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex.current - 1);
        charIndex.current--;
        if (charIndex.current === 0) {
          isDeleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, isDeleting.current ? 40 : 70);
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, [lang, roles]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "72px" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(30,58,95,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Decorative shapes */}
      <div
        className="absolute top-24 right-12 w-72 h-72 rounded-full opacity-5 animate-float"
        style={{ background: "radial-gradient(circle, #1e3a5f 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-24 left-12 w-48 h-48 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)", animationDelay: "2s" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Left content */}
        <div>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
            style={{
              background: "rgba(30,58,95,0.08)",
              border: "1px solid rgba(30,58,95,0.15)",
              color: "#1e3a5f",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse-gold"
              style={{ background: "#c9a84c" }}
            />
            🇹🇷 {lang === "tr" ? "Türkiye" : "Turkey"} &nbsp;·&nbsp; 🇶🇦 {lang === "tr" ? "Katar" : "Qatar"} &nbsp;·&nbsp; 🇲🇰 {lang === "tr" ? "Makedonya" : "Macedonia"}
          </div>

          {/* Heading */}
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
          >
            {t.hero.h1}
            <br />
            <span style={{ color: "#c9a84c" }}>{t.hero.h2}</span>
            <br />
            {t.hero.h3}
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-2 mb-6 h-8">
            <span className="text-base font-medium" style={{ color: "#475569" }}>
              {t.hero.prefix}{" "}
            </span>
            <span
              ref={roleRef}
              className="text-base font-semibold"
              style={{ color: "#1e3a5f", minWidth: "2px" }}
            />
            <span
              className="w-0.5 h-5 inline-block"
              style={{
                background: "#c9a84c",
                animation: "blink 1s step-end infinite",
              }}
            />
          </div>

          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "#64748b", maxWidth: "480px" }}
          >
            {t.hero.desc}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:shadow-xl group"
              style={{
                background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)",
                boxShadow: "0 4px 20px rgba(30,58,95,0.30)",
              }}
            >
              {t.hero.cta1}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg"
              style={{
                border: "2px solid #1e3a5f",
                color: "#1e3a5f",
                background: "transparent",
              }}
            >
              {t.hero.cta2}
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-10">
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
              >
                5+
              </span>
              <span className="text-sm" style={{ color: "#94a3b8" }}>
                {t.hero.years}
              </span>
            </div>
          </div>
        </div>

        {/* Right — visual card stack */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-[380px] h-[440px]">
            {/* Background card */}
            <div
              className="absolute top-8 left-8 w-full h-full rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)",
                opacity: 0.15,
                transform: "rotate(-4deg)",
              }}
            />
            {/* Middle card */}
            <div
              className="absolute top-4 left-4 w-full h-full rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #c9a84c 0%, #e2c47a 100%)",
                opacity: 0.10,
                transform: "rotate(-1.5deg)",
              }}
            />
            {/* Main card */}
            <div
              className="relative w-full h-full rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #1e3a5f 0%, #152d4a 100%)",
                boxShadow: "0 20px 60px rgba(30,58,95,0.30)",
              }}
            >
              {/* Card header */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden shrink-0" style={{ border: "2px solid rgba(201,168,76,0.40)" }}>
                    <Image
                      src="/images/nur-asiltas.jpg"
                      alt="Nur Asıltaş"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "50% 28%" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#ffffff" }}>Nur Asıltaş</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.70)" }}>
                      {t.hero.cardTitle}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {t.hero.cardSub}
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p className="text-xs font-medium mb-3" style={{ color: "rgba(255,255,255,0.50)" }}>
                    {t.hero.solutions}
                  </p>
                  <div className="space-y-2">
                    {[
                      { icon: "🏥", label: "Healthcare Software" },
                      { icon: "🤖", label: "AI Solutions" },
                      { icon: "🔗", label: "System Integrations" },
                      { icon: "📊", label: "Clinical Reporting" },
                      { icon: "💼", label: "Enterprise Applications" },
                      { icon: "🌐", label: "Web Platforms" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className="text-base leading-none">{item.icon}</span>
                        <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.80)" }}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs" style={{ color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>
          {t.hero.scroll}
        </span>
        <ChevronDown size={18} style={{ color: "#94a3b8" }} className="animate-bounce" />
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
