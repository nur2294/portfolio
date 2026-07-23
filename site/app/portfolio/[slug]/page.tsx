import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #1e3a5f 0%, #0f172a 100%)" }}
      >
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="relative max-w-4xl mx-auto px-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            <ArrowLeft size={15} />
            Portföye Dön
          </Link>

          <div className="flex flex-wrap gap-3 mb-6">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(201,168,76,0.20)",
                border: "1px solid rgba(201,168,76,0.40)",
                color: "#e2c47a",
              }}
            >
              {project.category}
            </span>
            {project.featured && (
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.80)" }}
              >
                Öne Çıkan Proje
              </span>
            )}
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.70)", maxWidth: "600px" }}>
            {project.longDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-6">
            {project.client && (
              <div className="flex items-center gap-2">
                <Building2 size={14} style={{ color: "#c9a84c" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {project.client}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar size={14} style={{ color: "#c9a84c" }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="md:col-span-2 space-y-10">
              {project.challenge && (
                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
                  >
                    Problem
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
                  >
                    Çözüm
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
                    {project.solution}
                  </p>
                </div>
              )}

              {project.result && (
                <div
                  className="p-8 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)" }}
                >
                  <h2
                    className="text-2xl font-bold text-white mb-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Sonuçlar
                  </h2>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} style={{ color: "#c9a84c", flexShrink: 0, marginTop: "2px" }} />
                    <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                      {project.result}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech stack */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "#f8f9fc", border: "1px solid #e2e8f0" }}
              >
                <h3
                  className="font-bold text-base mb-4"
                  style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
                >
                  Teknolojiler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold"
                      style={{ background: "#1e3a5f", color: "white" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "#f8f9fc", border: "1px solid #e2e8f0" }}
              >
                <h3
                  className="font-bold text-base mb-4"
                  style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
                >
                  Etiketler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        background: "rgba(201,168,76,0.10)",
                        border: "1px solid rgba(201,168,76,0.25)",
                        color: "#a8882e",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="block w-full text-center py-4 rounded-2xl font-semibold text-sm text-white transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #c9a84c 0%, #e2c47a 100%)",
                  color: "#1e3a5f",
                }}
              >
                Benzer Proje Talep Et
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
