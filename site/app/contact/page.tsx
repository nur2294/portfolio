import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";
import ContactHeader from "@/components/contact/ContactHeader";

export const metadata: Metadata = {
  title: "Contact | Project Proposal & Consulting",
  description:
    "Get in touch for healthcare software, clinical management systems or healthcare IT consulting. Project proposals, system integration and software development services.",
  keywords: [
    "healthcare software contact",
    "clinical software consulting",
    "healthcare IT project proposal",
    "software development proposal",
    "sağlık yazılımı iletişim",
  ],
  openGraph: {
    title: "Contact | Project Proposal & Consulting",
    description: "Get in touch for clinical software and healthcare IT projects.",
    url: "https://nurasiltas.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactClient />
    </>
  );
}
