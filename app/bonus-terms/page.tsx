import type { Metadata } from "next";
import { TechnicalPage } from "@/components/TechnicalPage";

const title = "Bonusbedingungen | National Casino Deutschland";
const description = "Allgemeine Bedingungen für Boni, Freispiele, Umsatzanforderungen und bonusbezogene Auszahlungen bei National Casino.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/bonus-terms.html" },
  openGraph: { title, description, url: "/bonus-terms.html", siteName: "National Casino Deutschland", locale: "de_DE", type: "website" },
};

const sections = [
  {
    title: "Allgemeine Bonusregeln",
    items: [
      "Ein Bonus wird grundsätzlich nur einmal pro Person, Konto, Haushalt, Gerät oder vergleichbarer Zuordnung gewährt, sofern das Angebot nichts anderes bestimmt.",
      "Für Einzahlungsboni gilt nach dem Originaltext eine Mindesteinzahlung von 20 EUR oder USD.",
      "Der gewünschte Bonus muss vor dem Spielen nach den Hinweisen des jeweiligen Angebots aktiviert werden.",
      "Es kann jeweils nur ein Bonus aktiv sein; einzahlungsabhängige Boni werden nicht miteinander kombiniert.",
    ],
  },
  {
    title: "Einsätze und Umsatzanforderungen",
    paragraphs: [
      "Nach den allgemeinen Originalbedingungen beträgt der maximale Einsatz mit einem aktiven Bonus 5 EUR oder USD, sofern ein Angebot keinen anderen Wert nennt. Einzahlungsboni unterliegen dort grundsätzlich einer 40-fachen Umsatzanforderung.",
      "Slots tragen üblicherweise vollständig zum Umsatz bei. Tischspiele, Live-Dealer-Spiele, Jackpotspiele und ausdrücklich ausgeschlossene Titel können gar nicht oder abweichend angerechnet werden.",
    ],
  },
  {
    title: "Freispiele und Bonusguthaben",
    paragraphs: [
      "Freispiele müssen im Bonusbereich für den vorgesehenen Slot aktiviert werden. Bei aktivem Bonus wird zunächst verfügbares Echtgeld und danach Bonusguthaben eingesetzt. Bonus und daraus entstandene Gewinne können nach Ablauf der Gültigkeit verfallen.",
    ],
  },
  {
    title: "Auszahlung und Stornierung",
    paragraphs: [
      "Vor einer bonusbezogenen Auszahlung kann eine vollständige Kontoverifizierung sowie eine qualifizierende Einzahlung verlangt werden. Für bestimmte Bonusarten gelten Höchstbeträge; darüber hinausgehende Gewinne können verfallen.",
      "Ein Bonus kann vor Beginn des Durchspielens storniert werden. Wird eine Einzahlung vor Erfüllung der Umsatzanforderungen ausgezahlt, verfallen der Bonus und die damit erzielten Gewinne.",
    ],
  },
  {
    title: "Missbrauch und Sonderbedingungen",
    paragraphs: [
      "Bonusmissbrauch, Mehrfachkonten, abgestimmtes Spiel, Überschreiten des erlaubten Einsatzes und andere unlautere Methoden können zur Stornierung des Bonus und der daraus erzielten Gewinne führen. Die besonderen Bedingungen einer Aktion haben Vorrang vor den allgemeinen Bonusbedingungen.",
    ],
  },
] as const;

export default function BonusTermsPage() {
  return <TechnicalPage intro="Allgemeine Regeln für die Aktivierung und Nutzung von Bonusangeboten." label="Bonusbedingungen" path="/bonus-terms.html" sections={sections} />;
}
