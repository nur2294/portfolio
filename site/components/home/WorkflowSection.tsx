import { UserPlus, FileText, Cpu, Activity, FlaskConical, FileCheck } from "lucide-react";
import { workflowSteps } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  UserPlus,
  FileText,
  Cpu,
  Activity,
  FlaskConical,
  FileCheck,
};

export default function WorkflowSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 60%, #152d4a 100%)" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.30)",
              color: "#e2c47a",
            }}
          >
            Clinical Workflow Storytelling
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "#ffffff", fontFamily: "Playfair Display, serif" }}
          >
            Dijital Sağlık Platformu İş Akışı
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.60)" }}>
            Hasta kabulünden raporlamaya kadar klinik platformun tüm süreçleri yazılımla nasıl yönetilir — uçtan uca.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            const isLast = i === workflowSteps.length - 1;
            return (
              <div
                key={step.id}
                className="relative p-7 rounded-2xl group transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: isLast
                    ? "rgba(201,168,76,0.12)"
                    : "rgba(255,255,255,0.05)",
                  border: isLast
                    ? "1px solid rgba(201,168,76,0.35)"
                    : "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: isLast
                        ? "rgba(201,168,76,0.25)"
                        : "rgba(255,255,255,0.10)",
                      color: isLast ? "#e2c47a" : "rgba(255,255,255,0.50)",
                      border: isLast
                        ? "1px solid rgba(201,168,76,0.40)"
                        : "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    {String(step.id).padStart(2, "0")}
                  </div>
                  <div
                    className="h-px flex-1"
                    style={{
                      background: isLast
                        ? "rgba(201,168,76,0.25)"
                        : "rgba(255,255,255,0.08)",
                    }}
                  />
                  {Icon && (
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: isLast
                          ? "rgba(201,168,76,0.20)"
                          : "rgba(255,255,255,0.08)",
                      }}
                    >
                      <Icon
                        size={16}
                        style={{ color: isLast ? "#e2c47a" : "rgba(255,255,255,0.65)" }}
                      />
                    </div>
                  )}
                </div>

                <h3
                  className="font-bold text-base mb-3"
                  style={{ color: isLast ? "#e2c47a" : "white" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: isLast ? "rgba(226,196,122,0.80)" : "rgba(255,255,255,0.60)" }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            Designed for high-volume dialysis centers with real-time treatment monitoring and LIS interoperability.
          </p>
        </div>
      </div>
    </section>
  );
}
