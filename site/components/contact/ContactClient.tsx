"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { Icon: Mail, label: "E-posta", value: "nur.asiltas94@gmail.com", href: "mailto:nur.asiltas94@gmail.com" },
  { Icon: Phone, label: "Telefon", value: "+90 (555) 000 00 00", href: "tel:+905550000000" },
  { Icon: MapPin, label: "Konum", value: "İzmir, Türkiye", href: null },
];

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1.5px solid #e2e8f0",
  fontSize: "14px",
  color: "#1e293b",
  background: "white",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "Inter, sans-serif",
};

export default function ContactClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section className="py-16" style={{ background: "#f8f9fc" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-6">
            {contactInfo.map(({ Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white"
                style={{ border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(30,58,95,0.04)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(30,58,95,0.08)" }}>
                  <Icon size={18} style={{ color: "#1e3a5f" }} />
                </div>
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: "#94a3b8" }}>{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-semibold transition-colors hover:text-gold" style={{ color: "#1e3a5f" }}>{value}</a>
                  ) : (
                    <p className="text-sm font-semibold" style={{ color: "#1e3a5f" }}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)", boxShadow: "0 8px 32px rgba(30,58,95,0.20)" }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full animate-pulse-gold" style={{ background: "#c9a84c" }} />
                <span className="text-xs font-semibold" style={{ color: "#c9a84c" }}>Proje Kabul Ediyorum</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Yeni projeler için müsaitim. Genellikle 24 saat içinde yanıt veriyorum.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl bg-white" style={{ border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(30,58,95,0.08)" }}>
                <CheckCircle2 size={56} style={{ color: "#c9a84c" }} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif", color: "#1e3a5f" }}>Mesajınız İletildi!</h3>
                <p style={{ color: "#64748b" }}>En kısa sürede size geri dönüş yapacağım.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white" style={{ border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(30,58,95,0.08)" }}>
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: "#1e3a5f" }}>Ad Soyad *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Adınız Soyadınız" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: "#1e3a5f" }}>E-posta *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="ornek@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: "#1e3a5f" }}>Kurum / Şirket</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Klinik / Şirket adı" style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: "#1e3a5f" }}>Konu *</label>
                    <select name="subject" required value={form.subject} onChange={handleChange} style={{ ...inputStyle, color: form.subject ? "#1e293b" : "#94a3b8" }}>
                      <option value="" disabled>Konu seçin</option>
                      <option value="proje">Yeni Proje Teklifi</option>
                      <option value="danismanlik">Danışmanlık</option>
                      <option value="entegrasyon">Sistem Entegrasyonu</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-semibold mb-2" style={{ color: "#1e3a5f" }}>Mesajınız *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Projenizi veya talebinizi kısaca açıklayın..." style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }} />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2a4f7c 100%)", color: "white", boxShadow: "0 4px 20px rgba(30,58,95,0.30)" }}
                >
                  {status === "sending" ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Gönderiliyor...</>
                  ) : (
                    <>Mesaj Gönder <Send size={15} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
