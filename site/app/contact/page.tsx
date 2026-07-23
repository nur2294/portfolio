import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "İletişim | Proje Teklifi & Danışmanlık",
  description:
    "Sağlık yazılımı, klinik yönetim sistemi veya healthcare IT danışmanlığı için iletişime geçin. Proje teklifi, sistem entegrasyonu ve yazılım geliştirme hizmetleri.",
  keywords: [
    "sağlık yazılımı iletişim",
    "klinik yazılım danışmanlık",
    "healthcare IT proje teklifi",
    "yazılım geliştirme teklif",
  ],
  openGraph: {
    title: "İletişim | Proje Teklifi & Danışmanlık",
    description: "Klinik yazılım ve healthcare IT projeleri için iletişime geçin.",
    url: "https://nurasiltas.vercel.app/contact",
  },
};

export default function ContactPage() {
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
            İletişime Geçin
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#64748b" }}>
            Proje teklifi, danışmanlık görüşmesi veya işbirliği için mesaj bırakın.
          </p>
        </div>
      </section>
      <ContactClient />
    </>
  );
}
