import Image from "next/image";
import type { ReactNode } from "react";
import { GENERAL_AFFILIATE_URL } from "./affiliateLinks";
import { AppPromoBanner } from "./AppPromoBanner";
import { JsonLd } from "./JsonLd";
import { PromotionBanner } from "./PromotionBanner";

const appFaqItems = [
  [
    "Hat National Casino eine echte App?",
    "Ja — eine installierbare Web-App (eine PWA) für Android und iOS. Du fügst sie über deinen Browser zu deinem Startbildschirm hinzu, und sie öffnet sich in ihrem eigenen Fenster wie jede andere App. In einigen Regionen wird möglicherweise auch ein vollständigerer nativer Download angeboten, aber die Web-App ist der Weg, der überall funktioniert.",
  ],
  [
    "Wie lade ich sie herunter?",
    "Auf Android öffne die offizielle Seite in Chrome, geh zum Anwendung-Bereich und bestätige die Installation. Auf iPhone oder iPad öffne die Seite in Safari, tippe auf Teilen und wähle Zum Home-Bildschirm. Beides dauert etwa eine Minute.",
  ],
  [
    "Gibt es einen Mobil-Bonus?",
    "Ja — 10 Freispiele ohne Einzahlung fürs Installieren der App. Logg dich nach der Installation ein, und die Spins sollten innerhalb einer Stunde erscheinen. Es ist ein einmaliges Angebot.",
  ],
  [
    "Ist die App sicher?",
    "Sie ist so sicher wie die Hauptseite, denn sie ist die Hauptseite hinter einem Startbildschirm-Icon, mit derselben Anmeldung und Sicherheit. Installiere sie nur von der offiziellen National Casino Seite — niemals von einer Drittanbieter-APK oder einer inoffiziellen Kopie.",
  ],
  [
    "Brauche ich ein separates Konto fürs Handy?",
    "Nein. Ein Konto deckt Desktop, die mobile Seite und die installierte App ab. Dein Guthaben, deine Boni, Comp Points und Historie synchronisieren sich alle über dein Profil.",
  ],
  [
    "Kann ich über die App ein- und auszahlen?",
    "Ja — die Kasse funktioniert sowohl in der App als auch im mobilen Browser. Die genauen Zahlungsmethoden und Limits erscheinen, sobald du eingeloggt bist.",
  ],
  [
    "Wie aktualisiere ich die App?",
    "Gar nicht. Eine PWA bleibt automatisch mit der Website aktuell. Wenn die Oberfläche je merkwürdig aussieht, schließe die App, aktualisiere die Seite in deinem Browser, oder füge das Icon neu hinzu.",
  ],
] as const;

export const appSections: ReadonlyArray<readonly [string, string]> = [
  ["die-national-casino-app-in-deutschland", "Die National Casino App in Deutschland"],
  ["was-die-app-tatsaechlich-ist", "Was die App tatsächlich ist"],
  ["so-installierst-du-sie", "So installierst du sie"],
  ["ein-klares-wort-zu-apk-dateien", "Ein klares Wort zu APK-Dateien"],
  ["was-du-davon-hast", "Was du davon hast"],
  ["was-dein-geraet-braucht", "Was dein Gerät braucht"],
  ["die-mobile-seite", "Die mobile Seite, falls du lieber nichts installierst"],
  ["haeufig-gestellte-fragen", "Häufig gestellte Fragen"],
  ["verantwortungsvoll-spielen", "Verantwortungsvoll spielen"],
];

function Section({
  children,
  className = "",
  id,
  title,
}: {
  children: ReactNode;
  className?: string;
  id: string;
  title: string;
}) {
  return (
    <section className={`content-section ${className}`.trim()} id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function StepList({ children }: { children: ReactNode }) {
  return <ol className="step-list">{children}</ol>;
}

function JoinNowButton() {
  return <a className="button button--primary content-section__action" href={GENERAL_AFFILIATE_URL} rel="sponsored">Jetzt beitreten</a>;
}

function PlatformTitle({ icon, title }: { icon: "android" | "apple"; title: string }) {
  return (
    <h3 className="app-platform-title">
      <span className="app-platform-title__icon" aria-hidden="true">
        <Image alt="" height={60} src={`/icons/${icon}.svg`} width={60} />
      </span>
      <span>{title}</span>
    </h3>
  );
}

function DownloadButton({ platform }: { platform: "android" | "ios" }) {
  const isAndroid = platform === "android";

  return (
    <a className={`app-download-button app-download-button--${platform}`} href={GENERAL_AFFILIATE_URL} rel="sponsored">
      <Image
        alt=""
        aria-hidden="true"
        className="app-download-button__icon"
        height={60}
        src={isAndroid ? "/icons/android.svg" : "/icons/apple.svg"}
        width={isAndroid ? 51 : 45}
      />
      <span className="app-download-button__text">
        <span>Lade die</span>
        <span>{isAndroid ? "Android-App herunter" : "iOS-App herunter"}</span>
      </span>
    </a>
  );
}

export function AppContent() {
  return (
    <div className="main-content app-content">
      <Section className="image-copy-section app-intro-image-section" id="die-national-casino-app-in-deutschland" title="Die National Casino App in Deutschland">
        <Image className="image-copy-section__image" src="/content/app/intro-v2.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Hier ist etwas, das die meisten Casino-App-Seiten dir nicht geradeheraus sagen: Viele „Casino-Apps&quot; sind überhaupt keine echten Apps. Sie sind ein Download-Button, der dich entweder zu einem Store-Eintrag schickt, den es vielleicht gibt und vielleicht nicht, oder — schlimmer — dich auf eine Datei zeigt, die du von irgendwoher installieren sollst, wo du noch nie warst. National Casino spart sich das Theater. Was es bietet, ist eine Web-App, die du direkt von der Seite auf deinen Startbildschirm installierst, und sobald du verstehst, was das tatsächlich ist, erweist es sich ohnehin als die sinnvollere Lösung.</p>
          <p>Diese Seite führt genau durch, wie es funktioniert: wie du sie auf einem iPhone oder einem Android-Handy installierst, was du davon hast, was dein Gerät braucht und warum die ehrliche Antwort auf „Gibt es eine App?&quot; lautet: „Ja, und sie ist besser als das, was du erwartet hast.&quot;</p>
        </div>
      </Section>

      <Section id="was-die-app-tatsaechlich-ist" title="Was die App tatsächlich ist">
        <div className="split-layout app-definition-layout">
          <div className="app-definition-copy">
            <p>Die National Casino App ist eine Progressive Web App — eine PWA. Im Klartext ist sie das Casino, installiert auf deinem Startbildschirm als eigenes Icon, das sich in seinem eigenen Fenster öffnet und sich fast genau wie eine heruntergeladene App verhält. Aber statt ein Paket aus einem Store oder eine Datei aus einem Verzeichnis zu ziehen, fügst du sie direkt von der offiziellen Seite über deinen Browser hinzu.</p>
            <p>Diese Unterscheidung klingt technisch, aber sie verändert das Erlebnis auf Weisen, die du tatsächlich spürst. Es gibt kein separates Mobil-Konto zu erstellen — die App nutzt dieselbe Anmeldung wie die Desktop-Seite, dein Guthaben, deine Boni, deine VIP-Stufe und deine Historie sind also schon da, sobald du dich einloggst. Es gibt nichts manuell zu aktualisieren, weil die App automatisch mit der Website Schritt hält. Und es gibt keine APK, die man aus einer inoffiziellen Quelle aufstöbern muss — was, wie wir gleich sehen, genau der Teil ist, den du vermeiden willst.</p>
            <p>In einigen Regionen ist möglicherweise ein vollständigerer nativer Download verfügbar, aber die installierbare Web-App ist der Weg, der überall funktioniert, und für die meisten Spieler ist es der, der sich ungeachtet dessen lohnt. Sie ist schneller einzurichten, sie ist sicherer, und sie macht alles, was die Spiele brauchen.</p>
            <p>Es gibt auch eine kleine Karotte fürs Einrichten: Die Installation der App bringt dir 10 Freispiele, ohne Einzahlung. Mehr zum Beanspruchen weiter unten.</p>
          </div>
          <div className="app-definition-art" aria-hidden="true">
            <Image alt="" fill sizes="(max-width: 960px) 100vw, 40vw" src="/content/app/general-install-v2.webp" />
          </div>
        </div>
        <JoinNowButton />
      </Section>

      <PromotionBanner variant="first-deposit" />

      <Section id="so-installierst-du-sie" title="So installierst du sie">
        <p>Die Installation dauert etwa eine Minute, und sie beginnt auf jedem Gerät gleich — indem du die tatsächliche National Casino Seite in deinem Browser öffnest, nicht indem du einen Store durchsuchst. Hier jede Plattform.</p>

        <div className="app-install-layout app-page-install-layout">
          <div className="split-layout app-install-row app-install-row--android">
            <div className="app-install-media" aria-hidden="true">
              <Image alt="" fill sizes="(max-width: 960px) 100vw, 40vw" src="/content/app/android-install-v2.webp" />
            </div>
            <div className="app-install-copy app-platform-panel">
              <PlatformTitle icon="android" title="Auf Android" />
              <p>Android installiert über Chrome, und es gibt keine separate Datei zum Herunterladen:</p>
              <StepList>
                <li>Öffne Google Chrome auf deinem Handy oder Tablet.</li>
                <li>Geh auf die offizielle National Casino Website.</li>
                <li>Logg dich in dein Konto ein, oder registriere dich, wenn du neu bist.</li>
                <li>Öffne das Seitenmenü und wähle Anwendung.</li>
                <li>Tippe auf den Installations-Button auf der Seite.</li>
                <li>Wenn Chrome seine „National installieren&quot;-Aufforderung zeigt, bestätige sie.</li>
                <li>Warte, bis das National-Icon auf deinem Startbildschirm erscheint.</li>
                <li>Öffne es und logg dich mit deiner üblichen E-Mail und deinem Passwort ein.</li>
              </StepList>
              <DownloadButton platform="android" />
              <p>Auf manchen Handys bietet Chrome sein eigenes Installations-Banner automatisch an — wenn du es siehst, kannst du einfach auf Installieren tippen und bestätigen. So oder so landest du beim selben Startbildschirm-Icon.</p>
            </div>
          </div>

          <div className="split-layout app-install-row app-install-row--ios">
            <div className="app-install-copy app-platform-panel">
              <PlatformTitle icon="apple" title="Auf iPhone und iPad" />
              <p>Auf iOS wird National über Safari zum Startbildschirm hinzugefügt:</p>
              <StepList>
                <li>Öffne den Safari-Browser.</li>
                <li>Geh auf die offizielle National Casino Website.</li>
                <li>Logg dich in dein Konto ein.</li>
                <li>Öffne den Anwendung-Bereich, um das mobile Angebot zu prüfen.</li>
                <li>Tippe auf den Teilen-Button in Safaris Symbolleiste.</li>
                <li>Scroll die Liste durch und wähle Zum Home-Bildschirm.</li>
                <li>Prüfe den Icon-Namen — er liest sich meist als National — und tippe auf Hinzufügen.</li>
                <li>Kehr zu deinem Startbildschirm zurück, öffne das neue Icon und logg dich ein.</li>
              </StepList>
              <DownloadButton platform="ios" />
              <p>Die App öffnet sich von da an in ihrem eigenen Fenster, mit vollem Zugriff auf die Spiele-Lobby, Aktionen, Kasse, den VIP-Bereich, das Sportwetten-Angebot und den Support.</p>
            </div>
            <div className="app-install-media" aria-hidden="true">
              <Image alt="" fill sizes="(max-width: 960px) 100vw, 40vw" src="/content/app/ios-install-v2.webp" />
            </div>
          </div>
        </div>
        <JoinNowButton />
      </Section>

      <Section className="image-copy-section app-apk-section" id="ein-klares-wort-zu-apk-dateien" title="Ein klares Wort zu APK-Dateien">
        <Image className="image-copy-section__image" src="/content/app/apk-warning-v2.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Du wirst den Begriff „APK&quot; auf vielen Android-Casino-Seiten herumgeworfen sehen, machen wir also Klartext dazu. Eine APK ist eine Android-Installationsdatei, und manche Seiten drängen dich, eine aus einem Drittanbieter-Verzeichnis herunterzuladen. Davon würden wir dich wegsteuern. Eine Datei aus einer inoffiziellen Quelle zu installieren bedeutet, Androids Schutz gegen unbekannte Installationsquellen abzuschalten und einer Kopie der App zu vertrauen, die du nicht überprüfen kannst — was genau die Art von Risiko ist, die man mit einem Konto, das dein Geld hält, besser nicht eingeht.</p>
          <p>Die National Casino App braucht nichts davon. Du installierst sie von der offiziellen Seite über Chrome, ohne Berechtigungen für unbekannte Quellen und ohne heruntergeladenes Paket, um das man sich sorgen müsste. Wenn eine Seite dir je sagt, eine National APK von irgendwo zu laden, das nicht die offizielle Seite ist, behandle das als Grund, den Tab zu schließen. Der sichere Weg ist praktischerweise auch der einfache.</p>
          <JoinNowButton />
        </div>
      </Section>

      <PromotionBanner variant="second-deposit" />

      <Section className="app-benefits-section" id="was-du-davon-hast" title="Was du davon hast">
        <p className="app-benefits-lead">Die App behält alles, was die mobile Seite kann, und fügt die Bequemlichkeit eines eigenen Icons hinzu. Die echten Vorteile sortieren sich in vier Bereiche.</p>

        <div className="app-benefits-grid">
          <article className="info-card app-benefit-card">
            <h3 className="boni-icon-heading boni-icon-heading--cards">Sie ist wirklich tragbar</h3>
            <p>Das ist der offensichtliche, aber es ist der Sinn des Ganzen. Nachdem du sie installiert hast, lebt National auf deinem Startbildschirm — kein Browser öffnen, keine Adresse tippen, kein Lesezeichen suchen jedes Mal. Ein Tipp, und du bist drin. Und weil dein Konto an dein Profil gebunden ist statt an dein Gerät, kannst du eine Session auf einem Laptop beginnen, später dein Handy in die Hand nehmen und dasselbe Guthaben, Bonusguthaben, deine VIP-Stufe, Comp Points, aktiven Boni und Transaktionshistorie genau da vorfinden, wo du sie gelassen hast.</p>
          </article>

          <article className="info-card app-benefit-card">
            <h3 className="boni-icon-heading boni-icon-heading--cards">Sie ist von Grund auf sicherer</h3>
            <p>Von der offiziellen Seite zu installieren umgeht das größte Mobil-Casino-Risiko vollständig: Es gibt kein gefälschtes Paket zum versehentlichen Herunterladen, keine Berechtigung für unbekannte Quellen zu erteilen, keinen Drittanbieter-Store im Spiel. Die App nutzt dasselbe Autorisierungs- und Sicherheitssystem wie die Hauptseite — du erschaffst keine neue Angriffsfläche, du stellst nur eine vertrauenswürdige Sache hinter ein Startbildschirm-Icon.</p>
          </article>

          <article className="info-card app-benefit-card">
            <h3 className="boni-icon-heading boni-icon-heading--cards">Sie ist für den Bildschirm gebaut, den du in der Hand hältst</h3>
            <p>Die mobile Oberfläche baut die Seite für einen kleinen Bildschirm neu auf, statt die Desktop-Version zu schrumpfen. Das Menü öffnet sich in einem kompakten Format, Spielkacheln stapeln sich vertikal, und Kategorien wechseln mit einem Tipp statt mit einem Hover. Die Bedienelemente passen sich der Berührung an. Der eine ehrliche Vorbehalt: Einzelne Spiele laden über ihre eigenen Anbieter-Oberflächen, das genaue Gefühl eines bestimmten Slots oder Live-Tisches hängt also vom Studio ab, das ihn gebaut hat — aber der Casino-Rahmen drumherum ist ordentlich optimiert.</p>
          </article>
        </div>

        <h3>Sie kommt mit ihrer eigenen Belohnung</h3>
        <p className="app-benefits-reward-intro">Der bestätigte App-exklusive Vorteil sind 10 Freispiele ohne Einzahlung. Um sie zu beanspruchen:</p>

        <div className="app-benefits-reward-layout">
          <div className="app-benefits-reward-copy">
            <StepList>
              <li>Installiere National über den Anwendung-Bereich.</li>
              <li>Öffne die App.</li>
              <li>Logg dich in dein bestehendes Konto ein, oder registriere dich.</li>
              <li>Warte bis zu einer Stunde.</li>
              <li>Prüfe den Boni-Bereich auf deine Spins.</li>
            </StepList>
          </div>
          <div className="app-benefits-reward-art" aria-hidden="true">
            <Image alt="" fill sizes="(max-width: 960px) 100vw, 40vw" src="/content/app/app-reward-v3.webp" />
          </div>
        </div>

        <p className="app-benefits-closing">Das Angebot kann einmal beansprucht werden, es ist also ein einmaliger Bonus fürs Einrichten der App — klein, aber gratis, und es gibt keinen Grund, ihn unbeansprucht zu lassen.</p>
        <JoinNowButton />
      </Section>

      <AppPromoBanner />

      <Section className="image-copy-section app-requirements-section" id="was-dein-geraet-braucht" title="Was dein Gerät braucht">
        <Image className="image-copy-section__image" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" src="/content/app/requirements-v2.webp" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy app-requirements-copy">
          <p>Weil dies eine PWA ist, sind die Anforderungen erfrischend leicht. Vergiss das Durchsuchen einer Liste bestimmter Modellnummern — die ehrliche Antwort lautet: Wenn dein Handy einen aktuellen Browser hat, bist du dabei. Konkret willst du:</p>
          <ul className="feature-list">
            <li>Ein Smartphone oder Tablet mit Android oder iOS.</li>
            <li>Eine aktuelle Version von Chrome (für Android) oder Safari (für iPhone und iPad).</li>
            <li>Eine stabile Internetverbindung.</li>
            <li>Zugriff auf die offizielle National Casino Seite.</li>
            <li>Ein wenig freien Speicher für das Icon und temporäre Browser-Daten.</li>
            <li>Ein aktives Konto, um um Echtgeld zu spielen und den App-Bonus zu beanspruchen.</li>
          </ul>
          <p>Du musst keine APK herunterladen, keine Installationen aus unbekannten Quellen erlauben und nicht durch Google Play oder den App Store gehen. Das ist das ganze Design.</p>
          <p>Zur Verbindung: Ein normales Mobilsignal reicht für Slots reichlich. Live-Casino und Live-Wetten verlangen etwas Beständigeres, da sie Echtzeit-Video streamen — wenn du eine Live-Dealer-Session planst, dient dir WLAN oder ein starkes Signal besser. Und wenn die App sich je träge anfühlt, greifen die üblichen Kniffe: Browser aktualisieren, überzählige Tabs schließen, ein wenig Speicher freimachen und neu starten. Bleibt ein Problem bestehen, ist dasselbe Casino immer nur einen Tipp entfernt in einem normalen Browser-Tab, was uns zur Alternative bringt.</p>
          <JoinNowButton />
        </div>
      </Section>

      <PromotionBanner variant="highroller" />

      <Section id="die-mobile-seite" title="Die mobile Seite, falls du lieber nichts installierst">
        <p>Du musst überhaupt nichts installieren. Das volle Casino läuft in jedem mobilen Browser — Chrome, Safari, Edge, was auch immer du nutzt — mit demselben Konto, denselben Spielen und demselben Alles, nur durch einen Tab statt ein Icon. Für gelegentliches Spiel ist das oft alles, was du brauchst.</p>
        <p>Hier die ehrliche Gegenüberstellung.</p>
        <div className="app-comparison-grid" aria-label="Vergleich zwischen mobiler Seite und installierter App">
          <article className="info-card app-comparison-card">
            <h3 className="boni-icon-heading boni-icon-heading--cards">Mobile Seite</h3>
            <ul className="feature-list">
              <li>Keine Installation nötig</li>
              <li>Läuft in jedem mobilen Browser</li>
              <li>Nichts zu deinem Gerät hinzugefügt</li>
              <li>Immer die aktuelle Seite</li>
              <li>Gut für gelegentliches Spiel</li>
              <li>Kein Installations-Bonus</li>
            </ul>
          </article>
          <article className="info-card app-comparison-card">
            <h3 className="boni-icon-heading boni-icon-heading--cards">Installierte App</h3>
            <ul className="feature-list">
              <li>Startet von ihrem eigenen Icon</li>
              <li>Öffnet sich in ihrem eigenen Fenster</li>
              <li>Sitzt auf deinem Startbildschirm</li>
              <li>Aktualisiert sich automatisch mit der Seite</li>
              <li>Besser für regelmäßige Besuche</li>
              <li>10 Freispiele fürs Installieren</li>
            </ul>
          </article>
        </div>
        <p>Beide Wege verbinden sich mit demselben Profil, du bist also nie auf eine Wahl festgelegt — du kannst heute im Browser spielen und die App nächste Woche installieren, ohne irgendetwas zu verlieren. Die Installation tauscht nur dreißig Sekunden Einrichtung gegen einen schnelleren Weg hinein und einen kleinen Freispiel-Bonus. Für alle, die mehr als gelegentlich spielen, lohnt sich dieser Tausch.</p>
        <JoinNowButton />
      </Section>

      <Section id="haeufig-gestellte-fragen" title="Häufig gestellte Fragen">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: appFaqItems.map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          }}
        />
        <div className="faq-list">
          {appFaqItems.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <PromotionBanner variant="friday-reload" />

      <Section className="image-copy-section app-responsible-section" id="verantwortungsvoll-spielen" title="Verantwortungsvoll spielen">
        <Image className="image-copy-section__image" src="/content/app/responsible-play-v2.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Die Werkzeuge für verantwortungsvolles Spielen sind auf dem Handy genau so verfügbar wie auf dem Desktop — sowohl über die installierte App als auch über die mobile Seite. Du kannst Limits oder Selbstausschluss anfordern, indem du den Live-Chat oder Support kontaktierst, der rund um die Uhr läuft.</p>
          <p>Die Bequemlichkeit einer App auf deinem Startbildschirm ist ein echter Vorteil, aber es lohnt sich, die Kehrseite ehrlich zu benennen: Ein Casino, das nur einen Tipp entfernt ist, ist leichter geöffnet, ohne nachzudenken. Setz dir ein Budget, bevor du spielst — eine Summe, die du verlieren kannst, ohne dass es etwas berührt, worauf es ankommt — und behandle Boni als ein bisschen Extra-Spaß statt als Weg, einen Verlust zu jagen. Wenn das Spiel je aufhört, sich wie Unterhaltung anzufühlen, gibt es Hilfe über Organisationen wie die BZgA-Spielsucht-Beratung (Telefon 0800 1 37 27 00), Gamblers Anonymous und Gambling Therapy. Hier zu spielen sollte ein Vergnügen bleiben, und dafür zu sorgen, dass es das bleibt, ist der Sinn jedes Werkzeugs oben.</p>
        </div>
      </Section>
    </div>
  );
}
