import type { Metadata } from "next";
import { TechnicalPage } from "@/components/TechnicalPage";

const title = "Über uns | National Casino Deutschland";
const description = "Informationen über das Angebot, die mobile Nutzung, Aktionen und den Betrieb von National Casino.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about-us" },
  openGraph: { title, description, url: "/about-us", siteName: "National Casino Deutschland", locale: "de_DE", type: "website" },
};

const sections = [
  {
    title: "National Casino",
    paragraphs: [
      "National Casino wurde von einem Team mit Erfahrung im Online-Glücksspiel aufgebaut. Ziel ist eine übersichtliche Plattform, auf der Casino- und Wettangebote ohne unnötige Ablenkung genutzt werden können.",
    ],
  },
  {
    title: "Spielangebot",
    paragraphs: [
      "Der Katalog umfasst Slots, klassische Tischspiele und Live-Dealer-Angebote verschiedener Softwareanbieter. Die konkrete Verfügbarkeit kann je nach Standort, Gerät und Anbieter variieren.",
    ],
  },
  {
    title: "Mobile Nutzung",
    paragraphs: [
      "Die Plattform ist für die Nutzung auf Desktop-Geräten, Smartphones und Tablets ausgelegt. Funktionen und Spiele können abhängig vom jeweiligen Gerät über eine mobile Darstellung genutzt werden.",
    ],
  },
  {
    title: "Boni und Aktionen",
    paragraphs: [
      "National Casino stellt verschiedene Boni, Aktionen und Turniere bereit. Für jedes Angebot gelten eigene Voraussetzungen, Laufzeiten und Umsatzbedingungen.",
    ],
  },
  {
    title: "Betrieb und Sicherheit",
    paragraphs: [
      "Der Betrieb orientiert sich an den veröffentlichten Lizenz-, Sicherheits- und Compliance-Angaben. Spielerschutz, transparente Bedingungen und der Schutz personenbezogener Daten sind Bestandteil des Plattformbetriebs.",
    ],
  },
] as const;

export default function AboutUsPage() {
  return <TechnicalPage intro="Die wichtigsten Informationen über National Casino und das Angebot der Plattform." label="Über uns" path="/about-us" sections={sections} />;
}
