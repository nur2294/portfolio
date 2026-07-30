import type { Metadata } from "next";
import PortfolioClient from "@/components/portfolio/PortfolioClient";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";

export const metadata: Metadata = {
  title: "Portfolio | Clinical Software & Healthcare IT Projects",
  description:
    "Healthcare software projects by Nur Asıltaş. Dialysis management system, patient tracking software, LIS integration, clinical management platform. Active projects in Turkey, Qatar and Macedonia.",
  keywords: [
    "clinical software portfolio",
    "healthcare software projects",
    "dialysis management system",
    "patient tracking software",
    "healthcare IT projects",
    "LIS integration",
    "clinical management platform",
  ],
  openGraph: {
    title: "Portfolio | Clinical Software & Healthcare IT Projects",
    description: "Dialysis management, patient tracking, LIS integration and clinical management platform projects.",
    url: "https://nurasiltas.vercel.app/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHeader />
      <PortfolioClient />
    </>
  );
}
