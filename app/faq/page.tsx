import type { Metadata } from "next";
import { TechnicalPage } from "@/components/TechnicalPage";

const title = "FAQ | National Casino Deutschland";
const description = "Antworten auf häufige Fragen zu Boni, Verifizierung, Zahlungen, RTP und Casino-Spielen bei National Casino.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq.html" },
  openGraph: { title, description, url: "/faq.html", siteName: "National Casino Deutschland", locale: "de_DE", type: "website" },
};

const sections = [
  {
    title: "Wie wird ein Casino-Bonus aktiviert?",
    paragraphs: ["Jede Aktion hat eigene Aktivierungsbedingungen. Der Bonus muss entsprechend den Angaben des jeweiligen Angebots ausgewählt und aktiviert werden."],
  },
  {
    title: "Warum wurde ein Einzahlungsbonus nicht gutgeschrieben?",
    paragraphs: ["Mögliche Gründe sind eine zu geringe Einzahlung, eine bereits genutzte Aktion, ein verbundenes Konto, deaktivierte Aktionsangebote oder eine regionale Einschränkung."],
  },
  {
    title: "Welche Unterlagen werden für die Verifizierung benötigt?",
    paragraphs: ["Für die Identitätsprüfung wird in der Regel ein gültiger amtlicher Ausweis wie Reisepass oder Personalausweis verlangt. Je nach Prüfung können weitere Nachweise erforderlich sein."],
  },
  {
    title: "Wie lange dauert die Kontoverifizierung?",
    paragraphs: ["Nach Eingang der erforderlichen Unterlagen wird die KYC-Prüfung laut Originalhinweis üblicherweise innerhalb von 72 Stunden abgeschlossen. Bei hohem Prüfaufkommen kann sie länger dauern."],
  },
  {
    title: "Was bedeutet RTP?",
    paragraphs: ["RTP bezeichnet die theoretische Auszahlungsquote eines Spiels über einen langen Zeitraum. Sie wird vom jeweiligen Anbieter festgelegt und kann sich je nach Titel unterscheiden."],
  },
  {
    title: "Wie lange dauern Auszahlungen?",
    paragraphs: ["Die Dauer hängt von der gewählten Methode und den erforderlichen Sicherheitsprüfungen ab. E-Wallet-Auszahlungen können schneller erfolgen, während andere Verfahren mehrere Tage beanspruchen können."],
  },
  {
    title: "Was ist bei einer fehlgeschlagenen Einzahlung zu tun?",
    paragraphs: ["Zuerst sollten Zahlungsdaten und verfügbare Deckung geprüft werden. Bleibt die Zahlung erfolglos, kann eine andere angebotene Methode verwendet oder der Kundendienst über die offiziellen Plattformkanäle informiert werden."],
  },
  {
    title: "Was ist eine Umsatzanforderung?",
    paragraphs: ["Sie legt fest, wie oft Bonusguthaben oder ein anderer definierter Betrag eingesetzt werden muss, bevor eine bonusbezogene Auszahlung möglich ist."],
  },
  {
    title: "Können Casino-Spiele kostenlos genutzt werden?",
    paragraphs: ["Viele Slots und Tischspiele bieten einen Demomodus. Dabei wird kein Echtgeld eingesetzt und es können keine Echtgeldgewinne ausgezahlt werden."],
  },
  {
    title: "Funktionieren Spiele auf Mobilgeräten?",
    paragraphs: ["Viele Spiele sind auf mobile Browser sowie iOS- und Android-Geräte ausgelegt. Verfügbarkeit und Darstellung hängen vom jeweiligen Spiel und Gerät ab."],
  },
  {
    title: "Wie werden Spielergebnisse bestimmt?",
    paragraphs: ["Bei automatisierten Casino-Spielen erzeugt ein Zufallszahlengenerator die Ergebnisse. Live-Dealer-Spiele werden dagegen über einen Live-Ablauf mit realen Spieltischen durchgeführt."],
  },
] as const;

export default function FaqPage() {
  return <TechnicalPage intro="Häufige Fragen zur Nutzung von National Casino und zu den wichtigsten Kontofunktionen." label="FAQ" path="/faq.html" sections={sections} />;
}
