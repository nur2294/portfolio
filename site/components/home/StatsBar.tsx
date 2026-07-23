const techStack = [
  { name: "PHP", icon: "🐘" },
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "🔷" },
  { name: "React / Next.js", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MySQL", icon: "🗄️" },
  { name: "MSSQL", icon: "🗃️" },
  { name: "REST API", icon: "🔗" },
  { name: "LLM & Yapay Zeka", icon: "🤖" },
  { name: "HL7 FHIR", icon: "🏥" },
  { name: "SOAP / XML", icon: "📡" },
];

export default function StatsBar() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #152d4a 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Teknoloji Stack&apos;i
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <span className="text-base leading-none">{tech.icon}</span>
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.80)" }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
