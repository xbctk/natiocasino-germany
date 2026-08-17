import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ResponsibleGamingContent, responsibleGamingSections } from "@/components/ResponsibleGamingContent";
import { Sidebar } from "@/components/Sidebar";

const title = "National Casino NZ Responsible Gaming & Support";
const description = "Responsible gaming at National Casino for New Zealand players: licence, security, KYC and AML checks, self-exclusion, limits, reality checks and local support.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/responsible-gaming" },
  openGraph: {
    title,
    description,
    url: "/responsible-gaming",
    siteName: "National Casino New Zealand",
    locale: "en_NZ",
    type: "website",
    images: [{ url: "/content/responsible-gaming/hero.webp", width: 1672, height: 941, alt: title }],
  },
};

const titleLines = ["National Casino Responsible Gaming", "New Zealand"];
const descriptionLines = [
  "Responsible gaming at National Casino for New Zealand players: licence, security,",
  "KYC and AML checks, self-exclusion, limits, reality checks and local support.",
];

export default function ResponsibleGamingPage() {
  return (
    <div className="site-shell">
      <Header />
      <div className="page-layout">
        <Sidebar label="Responsible Gaming page sections" sections={responsibleGamingSections} />
        <main className="page-main">
          <Hero breadcrumbLabel="VERANTWORTUNGSVOLLES SPIELEN" breadcrumbPath="/responsible-gaming" className="responsible-gaming-hero" descriptionLines={descriptionLines} imageSrc="/content/responsible-gaming/hero.webp" showAction={false} titleLines={titleLines} />
          <ResponsibleGamingContent />
          <Footer />
        </main>
      </div>
    </div>
  );
}
