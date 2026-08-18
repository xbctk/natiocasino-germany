import type { Metadata } from "next";
import { AppContent, appSections } from "@/components/AppContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sidebar } from "@/components/Sidebar";

const title = "National Casino App Deutschland: Web-App holen & spielen";
const description = "Installiere die National Casino App direkt von der Seite — kein App Store, keine APK-Suche. Ein Konto, alle Spiele und 10 Freispiele fürs Einrichten.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/app" },
  openGraph: {
    title,
    description,
    url: "/app",
    siteName: "National Casino Deutschland",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/content/app/hero.webp", width: 1672, height: 941, alt: title }],
  },
};

const titleLines = ["National Casino App Deutschland:", "Web-App holen & spielen"];
const descriptionLines = [
  "Installiere die National Casino App direkt von der Seite — kein App Store, keine APK-Suche.",
  "Ein Konto, alle Spiele und 10 Freispiele fürs Einrichten.",
];

export default function AppPage() {
  return (
    <div className="site-shell">
      <Header />
      <div className="page-layout">
        <Sidebar label="Bereiche der App-Seite" sections={appSections} />
        <main className="page-main">
          <Hero breadcrumbLabel="App" breadcrumbPath="/app" className="app-hero" descriptionLines={descriptionLines} imageSrc="/content/app/hero.webp" titleLines={titleLines} />
          <AppContent />
          <Footer />
        </main>
      </div>
    </div>
  );
}
