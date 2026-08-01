"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { projectsEn } from "@/lib/data-en";
import { getMockupSrc } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FeaturedProjects() {
  const { t, lang } = useLanguage();
  const projectList = lang === "en" ? projectsEn : projects;
  const featured = projectList.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section-padding" style={{ background: "#f8f9fc" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="gold-line mb-4" />
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
            >
              {t.portfolio.featuredHeading}
            </h2>
            <p className="mt-3 text-base" style={{ color: "#64748b", maxWidth: "480px" }}>
              {t.portfolio.featuredDesc}
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group whitespace-nowrap"
            style={{ color: "#1e3a5f" }}
          >
            {t.portfolio.viewAllProjects}
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              style={{ boxShadow: "0 2px 20px rgba(30,58,95,0.08)" }}
            >
              {/* Image area */}
              <div className="h-52 relative overflow-hidden" style={{ background: "#0f172a" }}>
                {project.mockup ? (
                  <>
                    <iframe
                      src={getMockupSrc(project.mockup, lang)}
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        border: "none",
                        width: "238%",
                        height: "238%",
                        transform: "scale(0.42)",
                        transformOrigin: "top left",
                      }}
                      title={project.title}
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(15,23,42,0.65) 0%, transparent 55%)" }}
                    />
                  </>
                ) : (
                  <div
                    className="w-full h-full"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)"
                          : i === 1
                          ? "linear-gradient(135deg, #152d4a 0%, #1e3a5f 100%)"
                          : "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                    }}
                  />
                )}
                <div
                  className="absolute inset-0 flex items-end p-5"
                >
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                    style={{
                      background: "rgba(201,168,76,0.20)",
                      border: "1px solid rgba(201,168,76,0.40)",
                      color: "#e2c47a",
                    }}
                  >
                    {t.portfolio.categories[project.category as keyof typeof t.portfolio.categories] ?? project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    className="font-bold text-lg leading-snug group-hover:text-navy transition-colors"
                    style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium mt-1 shrink-0" style={{ color: "#94a3b8" }}>
                    {project.year}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 3).map((tech) => (
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
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group/link"
                  style={{ color: "#1e3a5f" }}
                >
                  {t.portfolio.readCaseStudy}
                  <ExternalLink
                    size={13}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
