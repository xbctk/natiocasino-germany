import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MainContent } from "@/components/MainContent";
import { Sidebar } from "@/components/Sidebar";

const title = "National Casino: Slots, Live-Spiele & echte RTP in Deutschland";
const description = "National Casino legt die Karten offen — Live-RTP auf jeder Kachel, eine thematische Lobby, Evolution-Livetische und ein 15-stufiger VIP-Aufstieg.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "National Casino Deutschland",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/content/main/hero.webp", width: 1672, height: 941, alt: title }],
  },
};

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <div className="page-layout">
        <Sidebar />
        <main className="page-main">
          <Hero />
          <MainContent />
          <Footer />
        </main>
      </div>
    </div>
  );
}
