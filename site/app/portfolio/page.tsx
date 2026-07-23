import type { Metadata } from "next";
import PortfolioClient from "@/components/portfolio/PortfolioClient";

export const metadata: Metadata = {
  title: "Portföy | Klinik Yazılım & Healthcare IT Projeleri",
  description:
    "Nur Asıltaş'ın geliştirdiği sağlık yazılımı projeleri. Diyaliz yönetim sistemi, hasta takip yazılımı, LIS entegrasyonu, klinik yönetim platformu. Türkiye, Katar ve Makedonya'da aktif projeler.",
  keywords: [
    "klinik yazılım portföy",
    "sağlık yazılımı projeleri",
    "diyaliz yönetim sistemi",
    "hasta takip yazılımı",
    "healthcare IT projeleri",
    "LIS entegrasyonu",
    "klinik yönetim platformu",
  ],
  openGraph: {
    title: "Portföy | Klinik Yazılım & Healthcare IT Projeleri",
    description: "Diyaliz yönetimi, hasta takip sistemi, LIS entegrasyonu ve klinik yönetim platformu projeleri.",
    url: "https://nurasiltas.vercel.app/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
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
            Portföy
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#64748b" }}>
            Sağlık sektöründe hayata geçirdiğim klinik yazılım projeleri ve case study&apos;ler.
          </p>
        </div>
      </section>
      <PortfolioClient />
    </>
  );
}
