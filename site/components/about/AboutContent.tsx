"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const skillsPct = [90, 85, 88, 85, 75, 92];

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #f8f9fc 0%, #ffffff 100%)" }}
      >
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-line mb-5" />
              <h1
                className="text-5xl font-bold mb-6"
                style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
              >
                {t.about.greeting} <br />{t.about.name}
              </h1>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "#475569" }}>
                {t.about.p1}
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#64748b" }}>
                {t.about.p2}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["🇹🇷 Türkiye", "🇶🇦 Katar", "🇲🇰 Makedonya"].map((c) => (
                  <span
                    key={c}
                    className="px-4 py-1.5 rounded-full text-sm font-medium"
                    style={{ background: "rgba(30,58,95,0.08)", color: "#1e3a5f", border: "1px solid rgba(30,58,95,0.15)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)" }}
                >
                  {t.about.ctaContact} <ArrowRight size={16} />
                </Link>
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:bg-gray-50"
                  style={{ border: "2px solid #1e3a5f", color: "#1e3a5f" }}
                >
                  {t.about.ctaCV} <Download size={16} />
                </a>
              </div>
            </div>

            {/* Avatar card */}
            <div className="flex justify-center">
              <div
                className="relative w-72 h-80 rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(30,58,95,0.25)" }}
              >
                <Image
                  src="/images/nur-asiltas.jpg"
                  alt="Nur Asıltaş"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 28%" }}
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 100%)" }}
                >
                  <p className="font-semibold text-sm" style={{ color: "#ffffff" }}>Nur Asıltaş</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {t.about.role}
                  </p>
                </div>
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ border: "2px solid rgba(201,168,76,0.30)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills + Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
              >
                {t.about.skills}
              </h2>
              <div className="space-y-5">
                {t.about.skillItems.map((name, i) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium" style={{ color: "#1e3a5f" }}>{name}</span>
                      <span className="text-sm font-semibold" style={{ color: "#c9a84c" }}>{skillsPct[i]}%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: "#f1f5f9" }}>
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${skillsPct[i]}%`, background: "linear-gradient(90deg, #1e3a5f 0%, #c9a84c 100%)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
              >
                {t.about.values}
              </h2>
              <div className="space-y-5">
                {t.about.valueItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-xl"
                    style={{ background: "#f8f9fc", border: "1px solid #e2e8f0" }}
                  >
                    <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: "#c9a84c" }} />
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: "#1e3a5f" }}>{item.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-14 bg-white" style={{ borderTop: "1px solid #f1f5f9" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="gold-line" />
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
            >
              {t.about.education}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* University card */}
            <div
              className="col-span-1 p-7 rounded-2xl flex gap-5 items-start"
              style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)", boxShadow: "0 8px 32px rgba(30,58,95,0.18)" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                style={{ background: "rgba(201,168,76,0.18)", border: "1px solid rgba(201,168,76,0.30)" }}
              >
                🎓
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#c9a84c" }}>
                  {t.about.degree}
                </p>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "Playfair Display, serif", color: "#ffffff" }}>
                  {t.about.university}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>
                  {t.about.department}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "rgba(201,168,76,0.15)", color: "#e2c47a", border: "1px solid rgba(201,168,76,0.25)" }}
                  >
                    🇹🇷 İzmir
                  </span>
                </div>
              </div>
            </div>

            {/* Focus areas */}
            <div
              className="col-span-2 p-7 rounded-2xl"
              style={{ background: "#f8f9fc", border: "1px solid #e2e8f0" }}
            >
              <p className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "#1e3a5f" }}>
                {t.about.focusTitle}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🏥", ...t.about.focusItems[0] },
                  { icon: "🔗", ...t.about.focusItems[1] },
                  { icon: "🤖", ...t.about.focusItems[2] },
                  { icon: "🌐", ...t.about.focusItems[3] },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-3 p-4 rounded-xl"
                    style={{ background: "#ffffff", border: "1px solid #e8eef4" }}
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "#1e3a5f" }}>{item.label}</p>
                      <p className="text-xs leading-snug" style={{ color: "#64748b" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16" style={{ background: "#f8f9fc" }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
          >
            {t.about.timeline}
          </h2>
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{ background: "linear-gradient(to bottom, #1e3a5f, #c9a84c)" }}
            />
            <div className="space-y-8">
              {t.about.timelineItems.map((item, i) => (
                <div key={i} className="relative pl-16">
                  <div
                    className="absolute left-4 top-1.5 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                    style={{
                      background: "white",
                      borderColor: i === t.about.timelineItems.length - 1 ? "#c9a84c" : "#1e3a5f",
                      boxShadow: i === t.about.timelineItems.length - 1 ? "0 0 0 4px rgba(201,168,76,0.20)" : "none",
                    }}
                  />
                  <div
                    className="p-6 rounded-2xl"
                    style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(30,58,95,0.04)" }}
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                      style={{ background: "#1e3a5f", color: "white" }}
                    >
                      {item.year}
                    </span>
                    <h3
                      className="font-bold text-base mb-2"
                      style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
