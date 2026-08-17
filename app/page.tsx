import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MainContent } from "@/components/MainContent";
import { Sidebar } from "@/components/Sidebar";

const title = "National Casino New Zealand | Bonuses, Games & NZD Payments";
const description = "Try National Casino for New Zealand players: Welcome Bonus up to NZ$500, 100 Free Spins, NZD payments, slots, live casino, VIP Club and mobile app.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "National Casino New Zealand",
    locale: "en_NZ",
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
