import Image from "next/image";
import type { ReactNode } from "react";

export const responsibleGamingSections: ReadonlyArray<readonly [string, string]> = [
  ["responsible-gaming-overview", "Verantwortungsvolles Spielen"],
  ["licensing-security", "Lizenz & Sicherheit"],
  ["self-exclusion-limits", "Selbstsperre & Limits"],
  ["responsible-gambling-help", "Hilfe in Deutschland"],
];

function Section({ children, className = "", id, title }: { children: ReactNode; className?: string; id: string; title: string }) {
  return (
    <section className={`content-section responsible-section ${className}`.trim()} id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

const playerControls = [
  ["Verlust", "Lege den Höchstbetrag fest, den du bereit bist zu verlieren."],
  ["Einzahlung", "Begrenze Einzahlungen vor Spielbeginn; Kryptowährungen sind auf der veröffentlichten Seite davon ausgenommen."],
  ["Spielsitzung", "Begrenze die Dauer von Casinospielen oder Sportwetten."],
  ["Einsatz", "Lege eine Obergrenze für den Betrag fest, den du setzen möchtest."],
] as const;

function CardsTitle({ children }: { children: ReactNode }) {
  return (
    <span className="responsible-card-title">
      <Image alt="" aria-hidden="true" height={180} src="/content-icons/cards.png" width={188} />
      <span>{children}</span>
    </span>
  );
}

const supportResources = [
  {
    description: "Die veröffentlichten Hinweise der Marke zu Selbstsperre und Kontolimits.",
    label: "National Casino: Verantwortungsvolles Spielen",
  },
  {
    description: "Kostenlose und anonyme BIÖG-Beratung unter 0800 1 37 27 00: Montag bis Donnerstag 10–22 Uhr, Freitag bis Sonntag 10–18 Uhr.",
    label: "Check dein Spiel",
  },
  {
    description: "Über Check dein Spiel und das Suchthilfeverzeichnis lassen sich Beratungsstellen in der Nähe finden.",
    label: "Hilfe vor Ort",
  },
  {
    description: "Bundesweites, spielformübergreifendes System für Selbst- und Fremdsperren.",
    label: "OASIS-Spielersperrsystem",
  },
] as const;

export function ResponsibleGamingContent() {
  return (
    <div className="main-content responsible-gaming-content">
      <Section className="responsible-overview" id="responsible-gaming-overview" title="Verantwortungsvolles Spielen bei National Casino Deutschland">
        <div className="responsible-overview__layout">
          <p className="responsible-overview__lead">Casinospiele und Sportwetten sollten bezahlte Unterhaltung sein – kein Weg, um Einkommen zu erzielen oder Verluste auszugleichen.</p>
          <ul className="responsible-principles" aria-label="Grundsätze für verantwortungsvolles Spielen">
            <li className="info-card"><strong><CardsTitle>Grenzen zuerst festlegen</CardsTitle></strong><span>Lege vor dem Spielen ein Budget und eine Endzeit fest.</span></li>
            <li className="info-card"><strong><CardsTitle>Verlusten nie hinterherjagen</CardsTitle></strong><span>Leihe dir kein Geld zum Spielen und erhöhe Einsätze nicht, um Verluste auszugleichen.</span></li>
            <li className="info-card"><strong><CardsTitle>Auswirkungen ernst nehmen</CardsTitle></strong><span>Höre auf, wenn das Spielen deine Finanzen, Arbeit, Gesundheit oder Beziehungen beeinträchtigt.</span></li>
          </ul>
        </div>
      </Section>

      <Section id="licensing-security" title="Lizenz, Betreiber & Kontosicherheit">
        <p className="license-intro">Der veröffentlichten Lizenzinformation von National Casino zufolge ist TechSolutions Group N.V. Betreiber und Lizenzinhaber. Es handelt sich um eine internationale Curaçao-Lizenz, nicht um eine deutsche Lizenz. Prüfe vor der Registrierung das aktuelle Zertifikat auf der Markenwebsite, da sich Regulierungsstatus und angezeigte Angaben ändern können.</p>
        <div className="license-feature">
          <Image className="license-feature__image" src="/content/responsible-gaming/license-security.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
          <div className="license-feature__overlay" aria-hidden="true" />
          <div className="license-feature__content">
            <dl className="license-facts">
              <div className="info-card"><dt><CardsTitle>Betreiber & Lizenzinhaber</CardsTitle></dt><dd>TechSolutions Group N.V.</dd></div>
              <div className="info-card"><dt><CardsTitle>Unternehmensnummer</CardsTitle></dt><dd>144920</dd></div>
              <div className="info-card"><dt><CardsTitle>Lizenz</CardsTitle></dt><dd>OGL/2024/590/0758</dd></div>
              <div className="info-card"><dt><CardsTitle>Regulierungsbehörde</CardsTitle></dt><dd>Curaçao Gaming Authority</dd></div>
            </dl>
          </div>
        </div>
        <div className="security-grid">
          <article className="responsible-info-card">
            <h3>SSL / Sicherheit</h3>
            <p>Die Website wird über HTTPS/TLS ausgeliefert, häufig als SSL bezeichnet, um Daten während der Übertragung zu verschlüsseln. Verschlüsselung beseitigt die Risiken des Glücksspiels nicht: Verwende ein einzigartiges Passwort, prüfe die Website-Adresse und gib deine Zugangsdaten niemals weiter.</p>
          </article>
          <article className="responsible-info-card">
            <h3>KYC / AML</h3>
            <p>Für KYC- und AML-Prüfungen können Nachweise zu Identität, Alter, Adresse, Inhaberschaft des Zahlungsmittels oder Herkunft der Mittel verlangt werden. Auszahlungen können bis zum Abschluss der Verifizierung pausiert werden.</p>
          </article>
        </div>
      </Section>

      <Section id="self-exclusion-limits" title="Selbstsperre, Limits & Spielzeiterinnerungen">
        <div className="self-exclusion-intro">
          <span className="responsible-eyebrow">24/7-Live-Chat</span>
          <h3>Selbstsperre beantragen</h3>
          <p>Die veröffentlichte Seite zum verantwortungsvollen Spielen verweist für eine Selbstsperre auf den 24/7-Live-Chat. Wenn du die Kontrolle verlierst, zahle nicht weiter ein, beantrage eine Selbstsperre und suche sofort unabhängige Hilfe.</p>
        </div>
        <div className="self-exclusion-feature">
          <Image className="self-exclusion-section__image" src="/content/responsible-gaming/self-exclusion-wide.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
          <div className="self-exclusion-section__overlay" aria-hidden="true" />
          <div className="self-exclusion-section__content">
            <h3 className="responsible-subheading">Verfügbare Kontolimits</h3>
            <ul className="player-control-list">
              {playerControls.map(([name, description]) => (
                <li className="info-card" key={name}><strong><CardsTitle>{name}</CardsTitle></strong><span>{description}</span></li>
              ))}
            </ul>
            <p>Lege Limits fest, bevor du mit Casinospielen oder Sportwetten beginnst, und erhöhe sie nicht nach einem Verlust.</p>
          </div>
        </div>
        <aside className="reality-check-panel" aria-labelledby="reality-check-title">
          <h3 id="reality-check-title">Spielzeiterinnerungen</h3>
          <p>Die öffentliche Seite bestätigt keine separate automatische Erinnerungsfunktion. Nutze das Sitzungslimit, Gerätetimer und den Transaktionsverlauf deines Kontos als manuelle Kontrolle und frage im Live-Chat, ob regelmäßige Pop-up-Erinnerungen für dein Konto verfügbar sind.</p>
          <p>Eine Erinnerung sollte dich dazu veranlassen, vergangene Zeit, Einzahlungen, Einsätze und Nettoausgaben zu prüfen, bevor du weiterspielst.</p>
        </aside>
      </Section>

      <Section id="responsible-gambling-help" title="Hilfe bei Glücksspielproblemen in Deutschland">
        <p>Unabhängige Hilfe ist kostenlos und vertraulich. Diese Angebote richten sich an Spielerinnen und Spieler sowie an Angehörige, die sich wegen des Spielverhaltens einer nahestehenden Person sorgen:</p>
        <ul className="support-link-list">
          {supportResources.map((resource) => (
            <li key={resource.label}>
              <span><strong>{resource.label}</strong><small>{resource.description}</small></span>
            </li>
          ))}
        </ul>
        <div className="legal-age-warning">
          <span aria-hidden="true">18+</span>
          <p><strong>Nur für Erwachsene.</strong> Glücksspiel ist für Minderjährige ungeeignet. Registriere dich nicht und spiele nicht, wenn du das Mindestalter der Plattform oder das an deinem Aufenthaltsort geltende gesetzliche Alter nicht erfüllst. Wenn Glücksspiel keinen Spaß mehr macht oder nicht mehr bezahlbar ist, höre jetzt auf und wende dich an das BIÖG-Beratungstelefon.</p>
        </div>
      </Section>
    </div>
  );
}
