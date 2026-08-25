import type { Metadata } from "next";
import { TechnicalPage } from "@/components/TechnicalPage";

const title = "Kontakt | National Casino Deutschland";
const description = "Hinweise zur Kontaktaufnahme mit dem Kundendienst von National Casino.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact.html" },
  openGraph: { title, description, url: "/contact.html", siteName: "National Casino Deutschland", locale: "de_DE", type: "website" },
};

const sections = [
  {
    title: "Anfragen an den Kundendienst",
    paragraphs: [
      "Für Fragen zum Konto, zu Einzahlungen oder Auszahlungen und zu anderen Plattformfunktionen steht der Kundendienst über die offiziellen Kontaktmöglichkeiten der Plattform zur Verfügung.",
      "Der Originalhinweis nennt für eingereichte Kontaktanfragen eine Rückmeldung innerhalb von 24 Stunden. Die tatsächliche Bearbeitungszeit kann vom Thema und von der erforderlichen Prüfung abhängen.",
    ],
  },
  {
    title: "Erforderliche Angaben",
    items: [
      "Passende Kategorie der Anfrage, zum Beispiel Einzahlung oder Auszahlung.",
      "Name und die dem Spielerkonto zugeordnete E-Mail-Adresse.",
      "Eine klare Beschreibung des Anliegens mit den erforderlichen Vorgangsdaten.",
      "Bestätigung der notwendigen Verarbeitung personenbezogener Daten.",
    ],
  },
  {
    title: "Sichere Kommunikation",
    paragraphs: [
      "Passwörter, vollständige Kartendaten und andere geheime Zugangsinformationen sollten nicht in einer allgemeinen Nachricht übermittelt werden. Angeforderte Nachweise sind ausschließlich über die dafür vorgesehenen sicheren Plattformwege einzureichen.",
    ],
  },
] as const;

export default function ContactPage() {
  return <TechnicalPage intro="Technische Hinweise für eine vollständige und sichere Kontaktanfrage." label="Kontakt" path="/contact.html" sections={sections} />;
}
