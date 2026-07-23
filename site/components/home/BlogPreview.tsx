import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function BlogPreview() {
  const featured = blogPosts.filter((p) => p.featured).slice(0, 2);
  const rest = blogPosts.filter((p) => !p.featured).slice(0, 1);
  const posts = [...featured, ...rest].slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="gold-line mb-4" />
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
            >
              Son Yazılar
            </h2>
            <p className="mt-3 text-base" style={{ color: "#64748b", maxWidth: "460px" }}>
              Healthcare IT, klinik yazılım ve dijital dönüşüm üzerine içerikler.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold group whitespace-nowrap"
            style={{ color: "#1e3a5f" }}
          >
            Tüm yazıları gör
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1.5"
              style={{ border: "1px solid #e2e8f0", boxShadow: "0 2px 16px rgba(30,58,95,0.06)" }}
            >
              {/* Cover */}
              <div
                className="h-44 relative"
                style={{
                  background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)",
                }}
              >
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(201,168,76,0.20)",
                    border: "1px solid rgba(201,168,76,0.30)",
                    color: "#e2c47a",
                  }}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "#94a3b8" }}
                  >
                    <Clock size={11} />
                    {post.readingTime}
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

                <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>
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
  );
}
