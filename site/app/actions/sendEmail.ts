"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const SUBJECT_LABELS: Record<string, string> = {
  proje:        "Yeni Proje Teklifi",
  danismanlik:  "Danışmanlık",
  entegrasyon:  "Sistem Entegrasyonu",
  diger:        "Diğer",
};

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, company, subject, message } = data;
  const subjectLabel = SUBJECT_LABELS[subject] ?? subject;

  try {
    await resend.emails.send({
      from:    "Portfolio İletişim <onboarding@resend.dev>",
      to:      process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `[Portfolio] ${subjectLabel} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:#1e3a5f;padding:24px 32px;">
            <h2 style="color:#ffffff;margin:0;font-size:18px;">Yeni İletişim Mesajı</h2>
            <p style="color:#c9a84c;margin:6px 0 0;font-size:13px;">nurasiltas.portfolio</p>
          </div>
          <div style="padding:28px 32px;background:#ffffff;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr>
                <td style="padding:8px 0;color:#94a3b8;width:120px;vertical-align:top;">Ad Soyad</td>
                <td style="padding:8px 0;color:#1e293b;font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#94a3b8;vertical-align:top;">E-posta</td>
                <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1e3a5f;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding:8px 0;color:#94a3b8;vertical-align:top;">Kurum / Şirket</td>
                <td style="padding:8px 0;color:#1e293b;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding:8px 0;color:#94a3b8;vertical-align:top;">Konu</td>
                <td style="padding:8px 0;color:#1e293b;">${subjectLabel}</td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;" />
            <p style="color:#94a3b8;font-size:13px;margin:0 0 10px;">Mesaj</p>
            <p style="color:#1e293b;font-size:14px;line-height:1.7;white-space:pre-wrap;margin:0;">${message}</p>
          </div>
          <div style="background:#f8f9fc;padding:16px 32px;text-align:center;">
            <p style="color:#94a3b8;font-size:12px;margin:0;">
              Bu mesaj portfolio iletişim formu aracılığıyla gönderilmiştir.<br/>
              Yanıt vermek için doğrudan bu maili cevaplayabilirsiniz.
            </p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Email send error:", err);
    return { success: false, error: "Mail gönderilemedi." };
  }
}
