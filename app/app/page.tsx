import type { Metadata } from "next";
import { AppContent, appSections } from "@/components/AppContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sidebar } from "@/components/Sidebar";

const title = "National Casino App NZ | iOS & Android PWA Guide";
const description = "Use the National Casino PWA in New Zealand: install it on Android, iPhone and iPad, explore mobile games, bonuses, security and key features.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/app" },
  openGraph: {
    title,
    description,
    url: "/app",
    siteName: "National Casino New Zealand",
    locale: "en_NZ",
    type: "website",
    images: [{ url: "/content/app/hero.webp", width: 1672, height: 941, alt: title }],
  },
};

const titleLines = ["National Casino App New Zealand |", "Installation on iOS and Android"];
const descriptionLines = [
  "Download the National Casino apps for New Zealand players: installing PWA on Android,",
  "iPhone and iPad, mobile games, download bonus, security and basic features.",
];

export default function AppPage() {
  return (
    <div className="site-shell">
      <Header />
      <div className="page-layout">
        <Sidebar label="App page sections" sections={appSections} />
        <main className="page-main">
          <Hero breadcrumbLabel="App" breadcrumbPath="/app" descriptionLines={descriptionLines} imageSrc="/content/app/hero.webp" titleLines={titleLines} />
          <AppContent />
          <Footer />
        </main>
      </div>
    </div>
  );
}
