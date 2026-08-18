import type { Metadata } from "next";
import { BonusesContent, bonusesSections } from "@/components/BonusesContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sidebar } from "@/components/Sidebar";

const title = "National Casino Boni in Deutschland: Willkommen, Spins & VIP";
const description = "Jeder Bonus im National Casino auf einen Blick — 200 % Krypto-Willkommen, Freitags-Reloads, 1-€-Mega-Spins, ein 15-stufiger VIP-Aufstieg und Treasure-Race-Turniere.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/bonuses" },
  openGraph: {
    title,
    description,
    url: "/bonuses",
    siteName: "National Casino Deutschland",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/content/bonuses/hero.webp", width: 1672, height: 941, alt: title }],
  },
};

const titleLines = ["National Casino Boni in Deutschland:", "Willkommen, Spins & VIP"];
const descriptionLines = [
  "Jeder Bonus im National Casino auf einen Blick — 200 % Krypto-Willkommen, Freitags-Reloads,",
  "1-€-Mega-Spins, ein 15-stufiger VIP-Aufstieg und Treasure-Race-Turniere.",
];

export default function BonusesPage() {
  return (
    <div className="site-shell">
      <Header />
      <div className="page-layout">
        <Sidebar label="Abschnitte der Boni-Seite" sections={bonusesSections} />
        <main className="page-main">
          <Hero breadcrumbLabel="Boni" breadcrumbPath="/bonuses" className="boni-hero" descriptionLines={descriptionLines} imageSrc="/content/bonuses/hero.webp" titleLines={titleLines} />
          <BonusesContent />
          <Footer />
        </main>
      </div>
    </div>
  );
}
