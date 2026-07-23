import Link from "next/link";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Sağlık Yazılımı & Healthcare IT",
  description:
    "Klinik yazılım geliştirme, healthcare IT, hasta yönetim sistemleri ve sağlık teknolojileri üzerine teknik makaleler ve rehberler.",
  keywords: [
    "healthcare IT blog",
    "klinik yazılım makaleleri",
    "sağlık teknolojileri",
    "hasta takip sistemi",
    "LIS entegrasyonu",
    "diyaliz yazılımı",
  ],
};

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => p.id !== featured?.id);

  return (
    <>
      {/* Page hero */}
      <section
        className="pt-36 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #f8f9fc 0%, #ffffff 100%)" }}
      >
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="gold-line mx-auto mb-5" />
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
          >
            Blog
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#64748b" }}>
            Healthcare IT, klinik yazılım ve dijital dönüşüm üzerine içerikler.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: "#f8f9fc" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="block mb-14 group"
            >
              <article
                className="rounded-3xl overflow-hidden grid md:grid-cols-2 transition-all duration-300 hover:-translate-y-1.5"
                style={{ boxShadow: "0 8px 40px rgba(30,58,95,0.12)", background: "white" }}
              >
                <div
                  className="h-64 md:h-auto relative"
                  style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)" }}
                >
                  <div className="absolute top-6 left-6">
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(201,168,76,0.25)",
                        border: "1px solid rgba(201,168,76,0.40)",
                        color: "#e2c47a",
                      }}
                    >
                      Öne Çıkan
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{ color: "#c9a84c" }}
                  >
                    {featured.category}
                  </span>
                  <h2
                    className="text-2xl font-bold mb-4 group-hover:underline decoration-gold underline-offset-4"
                    style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-xs" style={{ color: "#94a3b8" }}>
                        <Clock size={11} />
                        {featured.readingTime}
                      </span>
                      <span className="text-xs" style={{ color: "#94a3b8" }}>
                        {formatDate(featured.publishedAt)}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all" style={{ color: "#1e3a5f" }}>
                      Oku <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Rest posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{ border: "1px solid #e2e8f0", boxShadow: "0 2px 16px rgba(30,58,95,0.06)" }}
              >
                <div
                  className="h-44"
                  style={{ background: "linear-gradient(135deg, #152d4a 0%, #1e3a5f 100%)" }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold" style={{ color: "#c9a84c" }}>
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "#94a3b8" }}>
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-base leading-snug mb-3 group-hover:underline decoration-gold underline-offset-4"
                    style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
                  >
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs"
                        style={{ background: "#f1f5f9", color: "#1e3a5f" }}
                      >
                        <Tag size={9} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
