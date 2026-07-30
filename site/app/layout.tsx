import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://nurasiltas.vercel.app"),
  title: {
    default: "Nur Asıltaş | Healthcare Software & IT Specialist",
    template: "%s | Nur Asıltaş",
  },
  description:
    "Software engineer specialising in healthcare solutions. Clinical management systems, patient tracking software, dialysis management, healthcare IT consulting. Active projects in Turkey, Qatar and Macedonia.",
  keywords: [
    "sağlık yazılımı",
    "healthcare IT",
    "klinik yönetim sistemi",
    "hasta takip sistemi",
    "healthcare software",
    "dialysis management software",
    "clinical software engineer",
    "patient management system",
    "health information system",
    "LIS integration",
    "Nur Asıltaş",
  ],
  authors: [{ name: "Nur Asıltaş" }],
  creator: "Nur Asıltaş",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://nurasiltas.vercel.app",
    siteName: "Nur Asıltaş — Healthcare Software Specialist",
    title: "Nur Asıltaş | Healthcare Software & IT Specialist",
    description:
      "Clinical management systems, patient tracking software and healthcare IT solutions. 5+ years experience, active projects in Turkey and globally.",
    images: [{ url: "/images/nur-asiltas.jpg", width: 1200, height: 630, alt: "Nur Asıltaş — Healthcare Software Specialist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nur Asıltaş | Healthcare Software & IT Specialist",
    description:
      "Clinical management systems, patient tracking software and healthcare IT solutions. 5+ years experience.",
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
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nur Asıltaş",
              url: "https://nurasiltas.vercel.app",
              image: "https://nurasiltas.vercel.app/images/nur-asiltas.jpg",
              jobTitle: "Software Engineer",
              description: "Software engineer specialising in healthcare IT. Clinical management systems, patient tracking and healthcare IT.",
              knowsAbout: ["Healthcare IT", "Clinical Software", "Patient Management System", "LIS Integration", "PHP", "JavaScript", "React", "Next.js"],
              alumniOf: { "@type": "CollegeOrUniversity", name: "Yaşar University", address: { "@type": "PostalAddress", addressLocality: "İzmir", addressCountry: "TR" } },
              address: { "@type": "PostalAddress", addressLocality: "İzmir", addressCountry: "TR" },
              sameAs: [],
            }),
          }}
        />
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
