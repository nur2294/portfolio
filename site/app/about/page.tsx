import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımda | Sağlık Yazılımı Uzmanı",
  description:
    "Nur Asıltaş — 5+ yıl deneyimli sağlık yazılımı mühendisi. Klinik yönetim sistemleri, hasta takip yazılımı, healthcare IT danışmanlığı. Yaşar Üniversitesi Bilgisayar Mühendisliği mezunu.",
  keywords: [
    "Nur Asıltaş",
    "sağlık yazılımı mühendisi",
    "healthcare IT uzmanı",
    "klinik yazılım geliştirici",
    "hasta takip sistemi geliştirici",
  ],
};

const timeline = [
  {
    year: "2020",
    title: "Yazılım Kariyerine Başlangıç",
    description: "Sağlık sektörüne yönelik web tabanlı uygulamalar geliştirmeye başladım.",
  },
  {
    year: "2021",
    title: "İlk Klinik Yazılım Projesi",
    description: "Diyaliz merkezleri için hasta kayıt ve tedavi takip modülünü geliştirdim.",
  },
  {
    year: "2022",
    title: "Fresenius Medical Care İşbirliği",
    description: "NephroGlobal platformunun aktif geliştirme sürecine dahil oldum.",
  },
  {
    year: "2023",
    title: "Platform Genişlemesi",
    description: "30+ diyaliz merkezi için yazılım altyapısını ölçeklendirdim.",
  },
  {
    year: "2024",
    title: "Yeni Modüller",
    description: "Yetkinlik değerlendirme, yabancı hasta yönetimi ve raporlama modülleri.",
  },
  {
    year: "2025 →",
    title: "HL7 FHIR & Entegrasyon",
    description: "Uluslararası sağlık veri standartları ile sistem entegrasyon çalışmaları.",
  },
];

const skills = [
  { name: "PHP / Laravel", pct: 90 },
  { name: "JavaScript / TypeScript", pct: 85 },
  { name: "MySQL / Veritabanı Tasarımı", pct: 88 },
  { name: "REST API Geliştirme", pct: 85 },
  { name: "Healthcare IT / HL7 FHIR", pct: 75 },
  { name: "Klinik İş Süreçleri", pct: 92 },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #f8f9fc 0%, #ffffff 100%)" }}
      >
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gold-line mb-5" />
              <h1
                className="text-5xl font-bold mb-6"
                style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
              >
                Merhaba, <br />Ben Nur Asıltaş
              </h1>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "#475569" }}>
                Sağlık teknolojileri alanında uzmanlaşmış bir yazılım mühendisiyim. Türkiye, Katar ve Makedonya gibi farklı sağlık ekosistemlerinde kullanılan sağlık platformlarının geliştirilmesinde aktif rol alıyor; çoklu klinik yönetimi, hasta yönetim sistemleri, tedavi süreçleri, medikal raporlama ve sağlık bilgi sistemleri entegrasyonlarına yönelik çözümler geliştiriyorum.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#64748b" }}>
                5+ yıllık deneyimim boyunca sağlık kuruluşlarının operasyonel süreçlerini dijitalleştiren kurumsal yazılımlar geliştirdim. Bunun yanında yapay zeka destekli uygulamalar, akıllı karar destek sistemleri ve veri odaklı sağlık teknolojileri üzerine çalışmalar yürütüyor, modern web teknolojileri ile yenilikçi çözümler tasarlıyorum.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["🇹🇷 Türkiye", "🇶🇦 Katar", "🇲🇰 Makedonya"].map((c) => (
                  <span
                    key={c}
                    className="px-4 py-1.5 rounded-full text-sm font-medium"
                    style={{ background: "rgba(30,58,95,0.08)", color: "#1e3a5f", border: "1px solid rgba(30,58,95,0.15)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)" }}
                >
                  İletişime Geç <ArrowRight size={16} />
                </Link>
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:bg-gray-50"
                  style={{ border: "2px solid #1e3a5f", color: "#1e3a5f" }}
                >
                  CV İndir <Download size={16} />
                </a>
              </div>
            </div>

            {/* Avatar card */}
            <div className="flex justify-center">
              <div
                className="relative w-72 h-80 rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(30,58,95,0.25)" }}
              >
                <Image
                  src="/images/nur-asiltas.jpg"
                  alt="Nur Asıltaş"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 28%" }}
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 100%)",
                  }}
                >
                  <p className="font-semibold text-sm" style={{ color: "#ffffff" }}>Nur Asıltaş</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>
                    Yazılım Mühendisi
                  </p>
                </div>
                {/* Gold border frame */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ border: "2px solid rgba(201,168,76,0.30)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
              >
                Teknik Yetkinlikler
              </h2>
              <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium" style={{ color: "#1e3a5f" }}>
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold" style={{ color: "#c9a84c" }}>
                        {skill.pct}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: "#f1f5f9" }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.pct}%`,
                          background: "linear-gradient(90deg, #1e3a5f 0%, #c9a84c 100%)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div>
              <h2
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
              >
                Çalışma Prensipleri
              </h2>
              <div className="space-y-5">
                {[
                  { title: "Hasta Güvenliği Önce", desc: "Her yazılım kararında hasta güvenliği birinci öncelik." },
                  { title: "Kullanıcı Odaklı Tasarım", desc: "Hemşire ve hekimlerin günlük iş akışlarını anlayarak tasarım yapıyorum." },
                  { title: "Sürdürülebilir Kod", desc: "Uzun vadeli bakım ve geliştirme kolaylığını önceleyen temiz mimari." },
                  { title: "Klinik Domain Bilgisi", desc: "Teknik yetkinliği klinik iş süreçleri bilgisiyle birleştiriyorum." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-xl"
                    style={{ background: "#f8f9fc", border: "1px solid #e2e8f0" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      style={{ background: "#c9a84c" }}
                    />
                    <div>
                      <p className="font-semibold text-sm mb-1" style={{ color: "#1e3a5f" }}>
                        {item.title}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-14 bg-white" style={{ borderTop: "1px solid #f1f5f9" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="gold-line" />
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
            >
              Eğitim
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* University card */}
            <div
              className="col-span-1 p-7 rounded-2xl flex gap-5 items-start"
              style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)", boxShadow: "0 8px 32px rgba(30,58,95,0.18)" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                style={{ background: "rgba(201,168,76,0.18)", border: "1px solid rgba(201,168,76,0.30)" }}
              >
                🎓
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#c9a84c" }}>
                  Lisans Eğitimi
                </p>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "Playfair Display, serif", color: "#ffffff" }}>
                  Yaşar Üniversitesi
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>
                  Bilgisayar Mühendisliği
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "rgba(201,168,76,0.15)", color: "#e2c47a", border: "1px solid rgba(201,168,76,0.25)" }}
                  >
                    🇹🇷 İzmir
                  </span>
                </div>
              </div>
            </div>

            {/* Focus areas */}
            <div
              className="col-span-2 p-7 rounded-2xl"
              style={{ background: "#f8f9fc", border: "1px solid #e2e8f0" }}
            >
              <p className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "#1e3a5f" }}>
                Uzmanlık Odakları
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🏥", label: "Sağlık Bilişimi", desc: "Healthcare IT & klinik yazılım mimarisi" },
                  { icon: "🔗", label: "Sistem Entegrasyonu", desc: "LIS, HIS, SGK web servis entegrasyonları" },
                  { icon: "🤖", label: "Yapay Zeka", desc: "Karar destek sistemleri & veri odaklı çözümler" },
                  { icon: "🌐", label: "Global Platformlar", desc: "Çok dilli, çok ülkeli klinik yazılımlar" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-3 p-4 rounded-xl"
                    style={{ background: "#ffffff", border: "1px solid #e8eef4" }}
                  >
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "#1e3a5f" }}>{item.label}</p>
                      <p className="text-xs leading-snug" style={{ color: "#64748b" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16" style={{ background: "#f8f9fc" }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
          >
            Kariyer Yolculuğu
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{ background: "linear-gradient(to bottom, #1e3a5f, #c9a84c)" }}
            />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-16">
                  {/* Dot */}
                  <div
                    className="absolute left-4 top-1.5 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                    style={{
                      background: "white",
                      borderColor: i === timeline.length - 1 ? "#c9a84c" : "#1e3a5f",
                      boxShadow: i === timeline.length - 1 ? "0 0 0 4px rgba(201,168,76,0.20)" : "none",
                    }}
                  />
                  <div
                    className="p-6 rounded-2xl"
                    style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(30,58,95,0.04)" }}
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                      style={{ background: "#1e3a5f", color: "white" }}
                    >
                      {item.year}
                    </span>
                    <h3
                      className="font-bold text-base mb-2"
                      style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
