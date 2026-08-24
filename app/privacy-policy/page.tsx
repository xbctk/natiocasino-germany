import type { Metadata } from "next";
import { TechnicalPage } from "@/components/TechnicalPage";

const title = "Datenschutzrichtlinie | National Casino Deutschland";
const description = "Informationen zur Erhebung, Nutzung, Speicherung und Sicherheit personenbezogener Daten bei National Casino.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title, description, url: "/privacy-policy", siteName: "National Casino Deutschland", locale: "de_DE", type: "website" },
};

const sections = [
  {
    title: "Welche Daten verarbeitet werden",
    paragraphs: [
      "Verarbeitet werden können Registrierungs- und Kontaktdaten, Kontokorrespondenz, Transaktions- und Spielverläufe, technische Zugriffs- und Gerätedaten sowie Unterlagen, die für Identitäts-, Zahlungs- oder Betrugsprüfungen angefordert werden.",
    ],
  },
  {
    title: "Zwecke der Verarbeitung",
    items: [
      "Bereitstellung und Verwaltung des Spielerkontos und der angebotenen Dienste.",
      "Abwicklung von Spielen, Wetten, Einzahlungen und Auszahlungen.",
      "Identitätsprüfung sowie Erfüllung von KYC-, AML- und weiteren gesetzlichen Pflichten.",
      "Erkennung von Betrug, Missbrauch und unregelmäßigen Aktivitäten.",
      "Kundendienst, technische Analyse und statistische Auswertung.",
    ],
  },
  {
    title: "Marketing",
    paragraphs: [
      "Marketingmitteilungen werden entsprechend den gewählten Einstellungen und erteilten Einwilligungen versendet. Eine zuvor erteilte Zustimmung kann über die vorgesehenen Kontoeinstellungen oder den Kundendienst widerrufen werden.",
    ],
  },
  {
    title: "Empfänger und Weitergabe",
    paragraphs: [
      "Zugriff erhalten nur zuständige Beschäftigte und erforderliche Dienstleister, etwa für Zahlungen, Verifizierung, Betrugsprävention, Technik oder Spielinhalte. Daten können außerdem offengelegt werden, wenn dies gesetzlich vorgeschrieben ist oder der Aufklärung unzulässiger Handlungen dient.",
      "Personenbezogene Daten werden nicht als Handelsware verkauft oder vermietet. Bei internationalen Übermittlungen sollen angemessene Schutzmaßnahmen gelten.",
    ],
  },
  {
    title: "Speicherung und Sicherheit",
    paragraphs: [
      "Daten werden nur so lange aufbewahrt, wie es für die genannten Zwecke, rechtliche Pflichten und die Bearbeitung möglicher Ansprüche erforderlich ist. Technische und organisatorische Schutzmaßnahmen einschließlich verschlüsselter Übertragung sollen unbefugten Zugriff, Verlust und Missbrauch verhindern.",
    ],
  },
  {
    title: "Cookies und Drittinhalte",
    paragraphs: [
      "Cookies und vergleichbare Technologien können für Betrieb, Sicherheit, Einstellungen und Analyse eingesetzt werden. Für Spiele oder Dienste externer Anbieter können zusätzlich deren eigene Datenschutzbestimmungen gelten.",
    ],
  },
] as const;

export default function PrivacyPolicyPage() {
  return <TechnicalPage intro="Diese Seite beschreibt, welche personenbezogenen Daten verarbeitet werden und zu welchen Zwecken dies geschieht." label="Datenschutzrichtlinie" path="/privacy-policy" sections={sections} />;
}
