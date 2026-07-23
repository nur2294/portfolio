import { Monitor, GitBranch, BarChart3, Globe, Lightbulb, FlaskConical, Languages, Code2, Rocket } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Monitor,
  GitBranch,
  BarChart3,
  Globe,
  Lightbulb,
  FlaskConical,
  Languages,
  Code2,
  Rocket,
};

const accentColors = [
  "#1e3a5f",
  "#1e3a5f",
  "#c9a84c",
  "#1e3a5f",
  "#1e3a5f",
  "#c9a84c",
  "#1e3a5f",
  "#c9a84c",
];

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="gold-line mx-auto mb-4" />
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
          >
            Sunduğum Hizmetler
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#64748b" }}>
            Healthcare IT sistemlerinden kurumsal web uygulamalarına, çok dilli platformlardan dönüşüm odaklı landing page'lere — ihtiyacınıza özel yazılım çözümleri.
          </p>
        </div>

        {/* Grid — 3 col */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const accent = accentColors[i] ?? "#1e3a5f";
            return (
              <div
                key={service.id}
                className="group relative p-7 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
                style={{
                  background: "white",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 16px rgba(30,58,95,0.06)",
                }}
              >
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      accent === "#c9a84c"
                        ? "linear-gradient(135deg, #a8882e 0%, #c9a84c 100%)"
                        : "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                    style={{
                      background:
                        accent === "#c9a84c"
                          ? "rgba(201,168,76,0.12)"
                          : "rgba(30,58,95,0.08)",
                    }}
                  >
                    {Icon && (
                      <Icon
                        size={22}
                        className="transition-colors duration-300 group-hover:text-white"
                        style={{ color: accent }}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-base mb-3 transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5 transition-colors duration-300 group-hover:text-white/80"
                    style={{ color: "#64748b" }}
                  >
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="w-full h-px mb-4 transition-colors duration-300 group-hover:opacity-20"
                    style={{ background: "#e2e8f0" }}
                  />

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs transition-colors duration-300 group-hover:text-white/75"
                        style={{ color: "#64748b" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 transition-colors duration-300"
                          style={{ background: accent === "#c9a84c" ? "#c9a84c" : "#c9a84c" }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
