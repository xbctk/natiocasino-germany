import type { Metadata } from "next";
import { TechnicalPage } from "@/components/TechnicalPage";

const title = "National Casino Deutschland: Verantwortungsvolles Spielen";
const description = "Hinweise zu verantwortungsvollem Spielen, Kontolimits, Selbstsperre und externer Hilfe bei National Casino.";

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
  },
};

const sections = [
  {
    title: "Glücksspiel als Unterhaltung",
    paragraphs: [
      "Glücksspiel sollte ausschließlich der Unterhaltung dienen. Es ist kein verlässlicher Weg, Einkommen zu erzielen oder Verluste zurückzugewinnen. Wer Zeit und Ausgaben nicht mehr sicher kontrollieren kann, sollte das Spielen unterbrechen.",
    ],
  },
  {
    title: "Selbstsperre und Kontolimits",
    paragraphs: [
      "Spieler können eine Selbstsperre beantragen. Außerdem lassen sich Grenzen für Verluste, Einzahlungen, Spielsitzungen und Einsätze festlegen. Diese Schutzmaßnahmen sollten eingerichtet werden, bevor das Spielen problematisch wird.",
    ],
  },
  {
    title: "Warnzeichen ernst nehmen",
    items: [
      "Nicht mit Geld spielen, das für laufende Ausgaben benötigt wird.",
      "Verluste nicht durch höhere oder zusätzliche Einsätze ausgleichen.",
      "Spielzeit und eingesetzte Beträge regelmäßig kontrollieren.",
      "Bei Kontrollverlust das Spielen beenden und fachliche Hilfe suchen.",
    ],
  },
  {
    title: "Externe Hilfe",
    paragraphs: [
      "Unabhängige Beratungsangebote unterstützen Betroffene und Angehörige bei problematischem Spielverhalten. Der Originalhinweis nennt hierfür Gamblers Anonymous, GamCare und Gambling Therapy.",
    ],
  },
] as const;

export default function ResponsibleGamingPage() {
  return <TechnicalPage intro="Informationen zum sicheren und kontrollierten Umgang mit Glücksspiel." label="Verantwortungsvolles Spielen" path="/responsible-gaming" sections={sections} />;
}
