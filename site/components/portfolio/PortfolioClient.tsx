"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import { ExternalLink, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import MockupModal from "@/components/ui/MockupModal";

const categories = [
  { value: "all", label: "Tümü" },
  { value: "hasta-takip", label: "Hasta Takip" },
  { value: "klinik-yonetim", label: "Klinik Yönetim" },
  { value: "raporlama", label: "Raporlama" },
  { value: "entegrasyon", label: "Entegrasyon" },
];

const categoryLabels: Record<string, string> = {
  "klinik-yonetim": "Klinik Yönetim",
  "hasta-takip": "Hasta Takip",
  "entegrasyon": "Entegrasyon",
  "raporlama": "Raporlama",
  "diger": "Diğer",
};

function ProjectCard({ project }: { project: Project }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && (project.mockup || project.mockups) && (
        <MockupModal
          src={project.mockup ?? project.mockups![0].src}
          title={project.title}
          mockups={project.mockups}
          onClose={() => setModalOpen(false)}
        />
      )}
    <article
      className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
      style={{ boxShadow: "0 2px 20px rgba(30,58,95,0.08)", border: "1px solid #f1f5f9" }}
    >
      <div className="h-56 relative overflow-hidden">
        {project.mockup ? (
          <>
            <iframe
              src={project.mockup}
              className="absolute inset-0 pointer-events-none"
              style={{
                border: "none",
                transform: "scale(0.42)",
                transformOrigin: "top left",
                width: "238%",
                height: "238%",
              }}
              title={project.title}
              loading="lazy"
            />
            <div
              className="absolute inset-0 cursor-pointer"
              style={{ background: "linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 50%)" }}
              onClick={() => setModalOpen(true)}
            />
            <button
              onClick={() => setModalOpen(true)}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
            >
              <span
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                style={{ background: "rgba(201,168,76,0.90)", color: "#1e3a5f", backdropFilter: "blur(4px)" }}
              >
                <Maximize2 size={15} />
                Önizlemeyi Aç
              </span>
            </button>
          </>
        ) : (
          <div
            className="w-full h-full"
            style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)" }}
          />
        )}
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
            style={{ background: "rgba(201,168,76,0.85)", color: "#1e3a5f" }}
          >
            {categoryLabels[project.category]}
          </span>
          {project.featured && (
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
              style={{ background: "rgba(30,58,95,0.80)", color: "white" }}
            >
              Öne Çıkan
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 z-10 text-2xl font-bold opacity-60 text-white" style={{ fontFamily: "Playfair Display, serif" }}>
          {project.year}
        </div>
      </div>

      <div className="p-6">
        {project.country && project.country.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.country.map((c) => (
              <span
                key={c}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: "rgba(201,168,76,0.10)", color: "#a8882e", border: "1px solid rgba(201,168,76,0.20)" }}
              >
                {c}
              </span>
            ))}
          </div>
        )}
        <h3
          className="font-bold text-lg mb-2 leading-snug"
          style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
          {project.description}
        </p>

        {project.result && (
          <div
            className="p-4 rounded-xl mb-5"
            style={{ background: "#f8f9fc", border: "1px solid #e2e8f0" }}
          >
            <p className="text-xs font-semibold mb-1" style={{ color: "#c9a84c" }}>
              Sonuç
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>
              {project.result}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-medium"
              style={{ background: "#f1f5f9", color: "#1e3a5f" }}
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold group/link"
          style={{ color: "#1e3a5f" }}
        >
          Detayları Gör
          <ExternalLink size={13} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </article>
    </>
  );
}

export default function PortfolioClient() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="py-8 bg-white sticky top-[72px] z-30" style={{ borderBottom: "1px solid #f1f5f9", boxShadow: "0 2px 12px rgba(30,58,95,0.04)" }}>
        <div className="max-w-6xl mx-auto px-6 flex gap-3 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={cn(
                "px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200",
                active === cat.value ? "text-white shadow-md" : "text-gray-600 hover:bg-gray-100"
              )}
              style={active === cat.value ? { background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)" } : { background: "#f8f9fc" }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16" style={{ background: "#f8f9fc" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20" style={{ color: "#94a3b8" }}>
              Bu kategoride henüz proje yok.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
