import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nurasiltas.vercel.app"),
  title: {
    default: "Nur Asıltaş | Sağlık Yazılımı & Healthcare IT Uzmanı",
    template: "%s | Nur Asıltaş",
  },
  description:
    "Sağlık sektörüne özel yazılım çözümleri geliştiren uzman. Klinik yönetim sistemi, hasta takip yazılımı, diyaliz yönetimi, healthcare IT danışmanlığı. Türkiye, Katar ve Makedonya'da aktif projeler.",
  keywords: [
    "sağlık yazılımı",
    "healthcare IT",
    "klinik yönetim sistemi",
    "hasta takip sistemi",
    "klinik yazılım geliştirme",
    "sağlık teknolojileri",
    "healthcare software",
    "diyaliz yönetim yazılımı",
    "klinik yazılım mühendisi",
    "hasta yönetim sistemi",
    "sağlık bilişimi",
    "health information system",
    "LIS entegrasyonu",
    "laboratuvar entegrasyon sistemi",
    "web uygulama geliştirme",
    "kurumsal yazılım",
    "Nur Asıltaş",
  ],
  authors: [{ name: "Nur Asıltaş" }],
  creator: "Nur Asıltaş",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://nurasiltas.vercel.app",
    siteName: "Nur Asıltaş — Sağlık Yazılımı Uzmanı",
    title: "Nur Asıltaş | Sağlık Yazılımı & Healthcare IT Uzmanı",
    description:
      "Klinik yönetim sistemi, hasta takip yazılımı ve healthcare IT çözümleri. 5+ yıl deneyim, Türkiye ve global klinik merkezlerde aktif projeler.",
    images: [{ url: "/images/nur-asiltas.jpg", width: 1200, height: 630, alt: "Nur Asıltaş — Sağlık Yazılımı Uzmanı" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nur Asıltaş | Sağlık Yazılımı & Healthcare IT Uzmanı",
    description:
      "Klinik yönetim sistemi, hasta takip yazılımı ve healthcare IT çözümleri. 5+ yıl deneyim.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nur Asıltaş",
              url: "https://nurasiltas.vercel.app",
              image: "https://nurasiltas.vercel.app/images/nur-asiltas.jpg",
              jobTitle: "Yazılım Mühendisi",
              description: "Sağlık sektörüne özel yazılım çözümleri geliştiren uzman. Klinik yönetim sistemi, hasta takip yazılımı ve healthcare IT.",
              knowsAbout: ["Healthcare IT", "Klinik Yazılım", "Hasta Yönetim Sistemi", "LIS Entegrasyonu", "PHP", "JavaScript", "React", "Next.js"],
              alumniOf: { "@type": "CollegeOrUniversity", name: "Yaşar Üniversitesi", address: { "@type": "PostalAddress", addressLocality: "İzmir", addressCountry: "TR" } },
              address: { "@type": "PostalAddress", addressLocality: "İzmir", addressCountry: "TR" },
              sameAs: [],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
