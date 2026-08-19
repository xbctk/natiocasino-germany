import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ResponsibleGamingContent, responsibleGamingSections } from "@/components/ResponsibleGamingContent";
import { Sidebar } from "@/components/Sidebar";

const title = "National Casino Deutschland: Verantwortungsvolles Spielen";
const description = "Verantwortungsvolles Spielen bei National Casino in Deutschland: Sicherheit, KYC- und AML-Prüfungen, Selbstsperre, Limits und unabhängige Hilfe.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/responsible-gaming" },
  openGraph: {
    title,
    description,
    url: "/responsible-gaming",
    siteName: "National Casino Deutschland",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/content/responsible-gaming/hero.webp", width: 1672, height: 941, alt: title }],
  },
};

const titleLines = ["National Casino: Verantwortungsvolles Spielen", "in Deutschland"];
const descriptionLines = [
  "Sicherheit, KYC- und AML-Prüfungen, Selbstsperre, Limits",
  "und unabhängige Hilfe für Spielerinnen und Spieler in Deutschland.",
];

export default function ResponsibleGamingPage() {
  return (
    <div className="site-shell">
      <Header />
      <div className="page-layout">
        <Sidebar label="Abschnitte zum verantwortungsvollen Spielen" sections={responsibleGamingSections} />
        <main className="page-main">
          <Hero breadcrumbLabel="VERANTWORTUNGSVOLLES SPIELEN" breadcrumbPath="/responsible-gaming" className="responsible-gaming-hero" descriptionLines={descriptionLines} imageSrc="/content/responsible-gaming/hero.webp" showAction={false} titleLines={titleLines} />
          <ResponsibleGamingContent />
          <Footer />
        </main>
      </div>
    </div>
  );
}
