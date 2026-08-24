import type { Metadata } from "next";
import { TechnicalPage } from "@/components/TechnicalPage";

const title = "Allgemeine Geschäftsbedingungen | National Casino Deutschland";
const description = "Allgemeine Bedingungen für die Nutzung von National Casino, Konten, Zahlungen, Spiele und Auszahlungen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: { title, description, url: "/terms-and-conditions", siteName: "National Casino Deutschland", locale: "de_DE", type: "website" },
};

const sections = [
  {
    title: "Geltungsbereich",
    paragraphs: [
      "Die Bedingungen regeln die Nutzung der Casino- und Wettangebote von National Casino. Spieler sind selbst dafür verantwortlich, vor der Nutzung zu prüfen, ob Online-Glücksspiel an ihrem Wohn- und Aufenthaltsort erlaubt ist.",
      "Die Bedingungen können geändert werden. Maßgeblich ist die jeweils veröffentlichte Fassung; bei Abweichungen zwischen Sprachversionen hat die englische Fassung Vorrang.",
    ],
  },
  {
    title: "Teilnahme und Spielerkonto",
    items: [
      "Teilnehmen dürfen nur volljährige Personen, die das gesetzliche Mindestalter ihrer Gerichtsbarkeit erreicht haben.",
      "Pro Spieler ist nur ein persönliches Konto zulässig; Angaben müssen vollständig und richtig sein.",
      "Zugangsdaten dürfen nicht weitergegeben werden. Kontoinhaber tragen die Verantwortung für Vorgänge über ihr Konto.",
      "Identitäts-, Alters-, Adress- und Zahlungsnachweise können vor oder während der Nutzung verlangt werden.",
    ],
  },
  {
    title: "Einzahlungen, Einsätze und Auszahlungen",
    paragraphs: [
      "Einzahlungen müssen von einem Zahlungsmittel stammen, das dem Kontoinhaber zugeordnet ist. Vor einer Auszahlung können Umsatz-, Verifizierungs- und Sicherheitsprüfungen erforderlich sein.",
      "Gebühren und Steuern, die durch Zahlungsanbieter oder die persönliche Rechtslage entstehen, liegen in der Verantwortung des Spielers. Verfügbare Methoden, Limits und Bearbeitungszeiten können sich unterscheiden.",
    ],
  },
  {
    title: "Spiel- und Wettregeln",
    paragraphs: [
      "Spieler müssen sich vor einem Einsatz mit den Regeln, Auszahlungsquoten und Bedingungen des jeweiligen Spiels oder Marktes vertraut machen. Bestätigte Einsätze können grundsätzlich nicht nachträglich geändert werden.",
      "Offensichtlich fehlerhafte Quoten, verspätete Wetten, technische Fehler oder missbräuchliche Vorgänge können geprüft, begrenzt oder storniert werden. Ergebnisse und Abrechnungen richten sich nach den veröffentlichten Regeln.",
    ],
  },
  {
    title: "Unzulässige Nutzung",
    items: [
      "Betrug, Geldwäsche, Kollusion, technische Manipulation und die Nutzung fremder Zahlungsdaten sind untersagt.",
      "Beschränkungen nach Land, Spielanbieter oder Produkt dürfen nicht umgangen werden.",
      "Bei Regelverstößen kann das Konto eingeschränkt oder geschlossen und eine Transaktion oder ein Gewinn überprüft werden.",
    ],
  },
  {
    title: "Beschwerden und Verantwortung",
    paragraphs: [
      "Unstimmigkeiten sollten mit allen verfügbaren Angaben zeitnah gemeldet werden. Spieler sind verpflichtet, ihre Konto- und Wettvorgänge zu kontrollieren und verantwortungsvoll zu spielen.",
    ],
  },
] as const;

export default function TermsAndConditionsPage() {
  return <TechnicalPage intro="Zusammenfassung der grundlegenden Regeln für die Nutzung der Plattform." label="Allgemeine Geschäftsbedingungen" path="/terms-and-conditions" sections={sections} />;
}
