import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About | Healthcare Software Engineer",
  description:
    "Nur Asıltaş — Software engineer with 5+ years specialising in healthcare IT. Clinical management systems, patient tracking software, healthcare IT consulting. Yaşar University Computer Engineering graduate.",
  keywords: [
    "Nur Asıltaş",
    "healthcare software engineer",
    "healthcare IT specialist",
    "clinical software developer",
    "patient tracking system developer",
    "sağlık yazılımı mühendisi",
  ],
};

export default function AboutPage() {
  return <AboutContent />;
}
