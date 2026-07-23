import Link from "next/link";
import { Mail, Heart, Globe, ExternalLink } from "lucide-react";

const footerLinks = {
  Sayfalar: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/portfolio", label: "Portföy" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Hakkımda" },
    { href: "/contact", label: "İletişim" },
  ],
  Hizmetler: [
    { href: "/portfolio#klinik-yonetim", label: "Klinik Yazılım" },
    { href: "/portfolio#entegrasyon", label: "Sistem Entegrasyonu" },
    { href: "/portfolio#raporlama", label: "Klinik Raporlama" },
    { href: "/contact", label: "Danışmanlık" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a" }} className="text-white">
      {/* Top CTA band */}
      <div
        className="py-12 px-6"
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "Playfair Display, serif", color: "#ffffff" }}
            >
              Projenizi Hayata Geçirelim
            </h3>
            <p style={{ color: "rgba(255,255,255,0.70)", fontSize: "15px" }}>
              Klinik yazılım ihtiyaçlarınız için ücretsiz ön görüşme talep edin.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #c9a84c 0%, #e2c47a 100%)",
              color: "#1e3a5f",
            }}
          >
            Ücretsiz Görüşme Talep Et
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                NA
              </div>
              <div>
                <p className="font-semibold text-base">Nur Asıltaş</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.50)" }}>
                  Yazılım Mühendisi
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.60)", maxWidth: "320px" }}>
              Sağlık sektöründe yazılım çözümleri geliştirerek kliniklerin daha verimli, güvenli ve hasta odaklı çalışmasına katkı sağlıyorum.
            </p>
            <div className="flex gap-3">
              {[
                { href: "mailto:nur@example.com", Icon: Mail, label: "Email" },
                { href: "https://linkedin.com", Icon: Globe, label: "LinkedIn" },
                { href: "https://github.com", Icon: ExternalLink, label: "GitHub" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.70)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4" style={{ color: "#c9a84c" }}>
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>
            © {new Date().getFullYear()} Nur Asıltaş. Tüm hakları saklıdır.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.40)" }}>
            Sağlık sektörüne <Heart size={12} style={{ color: "#c9a84c" }} fill="#c9a84c" /> ile yapıldı
          </p>
        </div>
      </div>
    </footer>
  );
}
