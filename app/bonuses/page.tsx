import type { Metadata } from "next";
import { BonusesContent, bonusesSections } from "@/components/BonusesContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sidebar } from "@/components/Sidebar";

const title = "National Casino NZ Bonuses | Up to NZ$500 + 100 Spins";
const description = "Collect National Casino bonuses for New Zealand: Welcome Bonus up to NZ$500, 100 Free Spins, crypto offer, reload bonuses, VIP rewards and wagering rules.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/bonuses" },
  openGraph: {
    title,
    description,
    url: "/bonuses",
    siteName: "National Casino New Zealand",
    locale: "en_NZ",
    type: "website",
    images: [{ url: "/content/bonuses/hero.webp", width: 1672, height: 941, alt: title }],
  },
};

const titleLines = ["National Casino Bonuses New Zealand |", "Up to NZ$500 + 100 Free Spins"];
const descriptionLines = [
  "Collect National Casino bonuses for New Zealand: Welcome Bonus up to NZ$500,",
  "100 Free Spins, crypto offer, reload bonuses, VIP rewards and wagering rules.",
];

export default function BonusesPage() {
  return (
    <div className="site-shell">
      <Header />
      <div className="page-layout">
        <Sidebar label="Bonuses page sections" sections={bonusesSections} />
        <main className="page-main">
          <Hero breadcrumbLabel="Bonuses" breadcrumbPath="/bonuses" descriptionLines={descriptionLines} imageSrc="/content/bonuses/hero.webp" titleLines={titleLines} />
          <BonusesContent />
          <Footer />
        </main>
      </div>
    </div>
  );
}
