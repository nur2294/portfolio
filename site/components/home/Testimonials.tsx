import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background: "#f8f9fc" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="gold-line mx-auto mb-4" />
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
          >
            Müşterilerim Ne Diyor?
          </h2>
          <p className="text-base" style={{ color: "#64748b" }}>
            Birlikte çalıştığım klinik profesyonellerden geri bildirimler.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="relative p-8 rounded-2xl overflow-hidden"
              style={
                i === 1
                  ? {
                      background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)",
                      boxShadow: "0 8px 40px rgba(30,58,95,0.25)",
                    }
                  : {
                      background: "white",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 2px 16px rgba(30,58,95,0.06)",
                    }
              }
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="mb-5 opacity-20"
                style={{ color: i === 1 ? "#c9a84c" : "#1e3a5f" }}
                fill={i === 1 ? "#c9a84c" : "#1e3a5f"}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill="#c9a84c"
                    style={{ color: "#c9a84c" }}
                  />
                ))}
              </div>

              <p
                className="text-sm leading-relaxed mb-6 italic"
                style={{ color: i === 1 ? "rgba(255,255,255,0.85)" : "#475569" }}
              >
                &quot;{t.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background:
                      i === 1 ? "rgba(201,168,76,0.25)" : "rgba(30,58,95,0.10)",
                    color: i === 1 ? "#e2c47a" : "#1e3a5f",
                    border:
                      i === 1
                        ? "1px solid rgba(201,168,76,0.30)"
                        : "1px solid rgba(30,58,95,0.15)",
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: i === 1 ? "white" : "#1e3a5f" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: i === 1 ? "rgba(255,255,255,0.55)" : "#94a3b8" }}
                  >
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
