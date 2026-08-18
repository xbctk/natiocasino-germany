import Image from "next/image";
import type { ReactNode } from "react";
import { BONUS_AFFILIATE_URL } from "./affiliateLinks";

export const bonusesSections: ReadonlyArray<readonly [string, string]> = [
  ["national-casino-boni-aktionen", "National Casino Boni & Aktionen in Deutschland"],
  ["warum-aktionen-lohnen", "Warum sich die Aktionen hier für deutsche Spieler lohnen"],
  ["willkommenspaket", "Das Willkommenspaket, auf zwei Arten"],
  ["reload-boni", "Reload-Boni"],
  ["freispiele-kalender", "Freispiele über den ganzen Kalender"],
  ["treuebelohnungen-vip", "Treuebelohnungen & VIP-Vorteile"],
  ["mehr-wege-zum-wert", "Mehr Wege, auf denen der Wert zurückkommt"],
  ["turniere-bestenlisten", "Turniere und Bestenlisten"],
  ["aktionscodes", "Aktionscodes: Dein Ticket für etwas Extra"],
  ["saisonale-angebote", "Zeitlich begrenzte und saisonale Angebote"],
  ["verantwortungsvoll-spielen-boni", "Verantwortungsvoll spielen"],
  ["angebot-waehlen", "Dein Angebot wählen"],
];

const bonusEventArt = [
  ["/bonuses/special/prize-drops.webp", "Prize Drops"],
  ["/bonuses/special/pragmatic-dw.webp", "Pragmatic Play Drops & Wins"],
  ["/bonuses/special/bgaming-drops.webp", "BGaming Drops"],
  ["/bonuses/special/fortune-wheel.webp", "Glücksrad"],
] as const;

function Section({ children, className = "", id, title }: { children: ReactNode; className?: string; id: string; title: string }) {
  return <section className={`content-section ${className}`.trim()} id={id}><h2>{title}</h2>{children}</section>;
}

function StepList({ children }: { children: ReactNode }) {
  return <ol className="step-list">{children}</ol>;
}

function PromotionStoryCard({ background, character, children, title, wide = false }: {
  background: string;
  character: string;
  children: ReactNode;
  title: string;
  wide?: boolean;
}) {
  return (
    <article className={`info-card promotion-art-card boni-promotion-card${wide ? " promotion-art-card--wide" : ""}`}>
      <Image className="promotion-art-card__background" src={background} alt="" fill sizes="(max-width: 960px) 100vw, 42vw" aria-hidden="true" />
      <div className="promotion-art-card__shade" aria-hidden="true" />
      <div className="promotion-art-card__character" aria-hidden="true">
        <Image src={character} alt="" fill sizes="(max-width: 719px) 72vw, 24vw" />
      </div>
      <div className="promotion-art-card__content">
        <div className="promotion-art-card__copy">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </article>
  );
}

export function BonusesContent() {
  return (
    <div className="main-content bonuses-content boni-page-content">
      <Section id="national-casino-boni-aktionen" title="National Casino Boni & Aktionen in Deutschland" className="image-copy-section image-copy-section--wide-title">
        <Image className="image-copy-section__image" src="/content/bonuses/intro.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Manche Casinos betreiben ein einziges Willkommensangebot und nennen das eine Aktionsseite. National Casino betreibt einen Kalender — eine rollende Auswahl an Matches, Spins, Reloads, Rädern und Turnieren, die den meisten Wochentagen einen Grund zum Einloggen gibt. Das hier ist die Landkarte zu allem: was angeboten wird, was jedes Einzelne tatsächlich wert ist und wo das Kleingedruckte steckt, damit du die Angebote auswählen kannst, die zu deiner Spielweise passen, statt den erstbesten glänzenden Button zu drücken.</p>
        </div>
      </Section>

      <Section id="warum-aktionen-lohnen" title="Warum sich die Aktionen hier für deutsche Spieler lohnen">
        <div className="card-grid card-grid--two boni-reason-grid">
          <article className="info-card">
            <p>Ein Bonus ist nur dann großzügig, wenn du ihn tatsächlich nutzen kannst, und genau hier fallen viele Casinos leise durch — große Schlagzeilenzahl, Umsatzbedingungen, die sie ganz verschlucken. Nationals Kalender verdient deine Aufmerksamkeit aus einem einfacheren Grund: Die Angebote sind vielfältig genug, dass wirklich eines für deinen Stil dabei ist, und die Bedingungen werden eher klar benannt als vergraben. Ob du ein Neuling bist, der das größtmögliche Match jagt, ein Krypto-Spieler, der eine größere Tür will, ein Freitagabend-Stammgast beim Nachtanken oder ein VIP, der 1-€-Spins freischaltet — es gibt ein bestimmtes Angebot, das für dich gebaut ist.</p>
          </article>
          <article className="info-card boni-reason-card--accent">
            <p>Der Trick, Boni gut zu spielen, besteht nicht darin, sich alle zu schnappen — sondern das richtige im richtigen Moment. Also hier jedes Ankerangebot, so aufgebaut, dass du genau das tun kannst.</p>
          </article>
        </div>
      </Section>

      <Section id="willkommenspaket" title="Das Willkommenspaket, auf zwei Arten">
        <div className="content-subsection">
          <h3>Was du tatsächlich bekommst</h3>
          <p>Das Willkommenspaket kommt in zwei Geschmacksrichtungen, und die richtige zu wählen, macht einen Unterschied.</p>
          <div className="card-grid card-grid--two germany-bonus-grid boni-welcome-grid">
            <PromotionStoryCard background="/content/main/bonuses/welcome-bg.png" character="/content/main/bonuses/welcome-character.png" title="Standard-Ersteinzahlungsbonus">
              <p>Der Standard-Ersteinzahlungsbonus ist ein 100-%-Match bis zu 100 €, dazu ein Bonusspiel und 100 Freispiele. Diese Freispiele kommen in zwei Hälften — 50 landen sofort, 50 am Folgetag — was den Spaß leise in eine zweite Session streckt, statt alles auf die erste Nacht abzukippen.</p>
            </PromotionStoryCard>
            <PromotionStoryCard background="/content/main/bonuses/crypto-bg.webp" character="/content/main/bonuses/crypto-character.webp" title="Krypto-Ersteinzahlungsbonus">
              <p>Der Krypto-Ersteinzahlungsbonus ist die größere Tür. Zahle in Kryptowährung ein, und das Match verdoppelt sich auf 200 % bis zu 500 €. Wenn du dich mit dem Spiel in Krypto ohnehin wohlfühlst, ist das schlicht das großzügigere Willkommen, und es ist ganz offensichtlich das, welches National seinen Krypto-Spielern schmackhaft machen will. Dasselbe Casino, größerer Schub — die Wahl ist im Grunde nur „Wie finanziere ich dieses Konto?&quot;</p>
            </PromotionStoryCard>
            <PromotionStoryCard background="/content/main/bonuses/second-deposit-bg.png" character="/content/main/bonuses/second-deposit-character.png" title="Zweiter Einzahlungsbonus" wide>
              <p>Es gibt außerdem einen Zweiten Einzahlungsbonus, der nach dem ersten wartet: 50 % bis zu 200 € plus 50 Freispiele, sofort gutgeschrieben. Ein sanfterer Nachschlag, der deinen Auftaktlauf am Laufen hält, ohne eine große Verpflichtung zu verlangen.</p>
            </PromotionStoryCard>
          </div>
        </div>
        <div className="content-subsection">
          <h3>So holst du ihn dir</h3>
          <p>Das Ganze dauert ein paar Minuten:</p>
          <div className="split-layout step-media-layout boni-claim-layout">
            <StepList>
              <li>Klick auf Registrieren und erstelle dein Konto — E-Mail, Passwort, deine Angaben, bevorzugte Währung.</li>
              <li>Bestätige, dass du volljährig bist, und schließe die schnelle Anmeldung ab.</li>
              <li>Geh zur Kasse und mach deine erste Einzahlung, wähle Krypto, wenn du das 200-%-Match willst.</li>
              <li>Der Bonus und deine erste Ladung Freispiele landen automatisch — für das Standard-Willkommen ist kein Code nötig.</li>
              <li>Prüfe den Boni-Bereich deines Kontos, um dein Bonusguthaben und die wartenden Spins zu sehen.</li>
            </StepList>
            <div className="boni-media-panel" aria-hidden="true">
              <Image src="/content/main/registration-signup.png" alt="" fill sizes="(max-width: 1180px) 100vw, 40vw" />
            </div>
          </div>
        </div>
        <div className="content-subsection boni-terms-panel">
          <h3>Die Bedingungen, die man kennen sollte</h3>
          <p>Jeder Bonus, überall, trägt Strings — der ehrliche Zug ist, sie zu lesen, nicht sie zu fürchten. Für die Willkommensangebote heißt das: eine Umsatzanforderung, die du erfüllen musst, bevor Bonusgewinne zu auszahlbarem Bargeld werden, ein Gültigkeitsfenster, in dem der Bonus lebt, und eine Liste berechtigter Spiele, die zum Umsatz zählen (Slots leisten die Schwerarbeit; Tischspiele tragen meist wenig oder nichts bei). Nichts davon ist ungewöhnlich. Was zählt, ist, die Einzelheiten in den Bonusbedingungen zu prüfen, bevor du dich anmeldest, damit du genau weißt, worauf du dich einlässt. National tendiert dazu, diese klar zu benennen, was mehr ist, als man vom Großteil des Feldes sagen kann.</p>
        </div>
      </Section>

      <Section id="reload-boni" title="Reload-Boni">
        <p>Das Willkommensangebot ist ein einmaliges Händeschütteln. Reloads sind der Grund, wiederzukommen.</p>
        <div className="card-grid card-grid--two germany-bonus-grid boni-reload-grid">
          <PromotionStoryCard background="/content/main/bonuses/friday-reload-bg.png" character="/content/main/bonuses/friday-reload-character.png" title="Der Freitags-Reload">
            <p>Der Anker der Woche. Jeden Freitag betreibt National einen 50-%-Reload bis zu 250 € plus 100 Freispiele auf Book of Cats — Spins geteilt, wie immer, 50 jetzt und 50 nach 24 Stunden. Es ist der Wochenend-Nachschub, und es lohnt sich, bewusst eine Freitagseinzahlung dafür zurückzuhalten, statt sie früher in der Woche für nichts Bestimmtes auszugeben.</p>
          </PromotionStoryCard>
          <PromotionStoryCard background="/bonuses/special/backgrounds/fortune-wheel.webp" character="/bonuses/special/fortune-wheel.webp" title="Die Alltags-Reloads">
            <p>Über den Freitag hinaus tankt der Kalender dich weiter auf. Der Unbegrenzte Bonus gibt dir einen Bonus auf jede Einzahlung ab 30 €, mit Freispielen und einer festgelegten Einsatzhöhe dran — das Angebot für Spieler, die regelmäßig einzahlen und jedes Mal etwas zurückwollen, statt nur zu den großen Anlässen. Es gibt auch ein Glücksrad, das bei jeder Einzahlung verfügbar ist und ein Routine-Nachtanken in einen Dreh für etwas Extra verwandelt. Der rote Faden durch das Ganze: National gibt dir lieber einen kleinen Grund, oft einzuzahlen, als einen großen Grund, einmal einzuzahlen.</p>
          </PromotionStoryCard>
        </div>
      </Section>

      <Section id="freispiele-kalender" title="Freispiele über den ganzen Kalender">
        <p>Freispiele sind großzügig über den ganzen Kalender verstreut, nicht hinter einem einzigen Angebot eingesperrt.</p>
        <div className="card-grid card-grid--two germany-bonus-grid boni-spins-grid">
          <PromotionStoryCard background="/content/main/bonuses/second-deposit-bg.png" character="/content/main/bonuses/second-deposit-character.png" title="Woher die Spins kommen">
            <p>Allein dein Willkommenspaket bringt 100. Der Freitags-Reload legt weitere 100 auf Book of Cats drauf. Die zweite Einzahlung steuert 50 bei. Zusätzlich zu den einzahlungsgebundenen Spins gibt es zwei Wege ohne Einzahlung, die man mitnehmen sollte: Die Installation der mobilen App bringt dir 10 Freispiele, ohne dass eine Einzahlung nötig ist, und es gibt ein Abo-Angebot, das 10 weitere hinlegt, nur fürs Anmelden. Keins kostet dich einen Cent, und beide sind die Art von kleinem, leichtem Wert, den liegen zu lassen albern wäre.</p>
          </PromotionStoryCard>
          <PromotionStoryCard background="/content/main/bonuses/vip-sunday-bg.webp" character="/content/main/bonuses/vip-sunday-character.webp" title="Die Spins, die tatsächlich mehr wert sind">
            <p>Hier ist der Ausreißer, und es ist ein echter. VIP-Spieler erhalten Zugang zum Sonntagsturbo: bis zu 50 Mega-Spins im Wert von je 1 €. Gewöhnliche Freispiele sind meist an einen Mindesteinsatzwert von ein paar Cent gebunden — ein Wert von 1 € pro Spin liegt spürbar höher, was diese zu den wertvollsten regelmäßigen Spins im ganzen Kalender macht. Sie sind eine Belohnung fürs Erklimmen der VIP-Leiter, was uns sauber zur Leiter selbst bringt.</p>
          </PromotionStoryCard>
        </div>
      </Section>

      <Section id="treuebelohnungen-vip" title="Treuebelohnungen & VIP-Vorteile" className="image-copy-section image-copy-section--wide-title boni-vip-section">
        <Image className="image-copy-section__image" src="/content/main/vip-characters.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Nationals Treueprogramm ist keine Alibi-Geste, die seitlich angeschraubt wurde — es ist ein fünfzehnstufiger Aufstieg, der dich leise dafür belohnt, so zu spielen, wie du ohnehin spielen wolltest.</p>
          <h3>Wie du verdienst</h3>
          <p>Du sammelst Comp Points (CPs) automatisch, während du Slots spielst — einen Punkt für je 20 € Umsatz. Die Teilnahme schaltet sich in dem Moment ein, in dem du deine erste Einzahlung machst, du kletterst also vom ersten Tag an, ohne dich für irgendetwas anmelden zu müssen. Der Umtauschkurs, um diese Punkte zurück in echten Wert zu verwandeln, verbessert sich, während du durch die Stufen aufsteigst, was bedeutet, dass sich Treue verzinst: Je länger du spielst, desto mehr ist jeder Punkt wert, wenn du ihn einlöst.</p>
          <h3>Die Stufen und was sie wert sind</h3>
          <p>Die Leiter läuft fünfzehn Sprossen, und die Belohnungen skalieren steil. Die frühen Stufen handeln mit Freispielen — 25 auf Stufe 1, 50 auf Stufe 2 — dann kommt Bargeld ins Spiel: 10 € plus Spins auf Stufe 3, hoch über 50 €, 100 €, 200 € und weit darüber hinaus, während du aufsteigst. In den oberen Stufen werden die Zahlen wirklich ernst, die Belohnung für anhaltendes, engagiertes Spiel.</p>
          <p>Ein paar ehrliche Mechaniken, damit dich nichts überrascht: Comp Points werden alle zwei Monate zurückgesetzt, das Programm belohnt also stetiges Spiel statt eines langsamen Mehrjahres-Rinnsals; mit Bonusgeld getätigte Einsätze zählen nicht zu den CP; und Punkte fallen an Slots an, nicht an Tischspielen. VIP-Belohnungen tragen eine 10x-Umsatzanforderung, und aus CPs in Bargeld umgewandelte Mittel tragen 5x. Es ist ein Programm, gebaut genau für die regelmäßige Slot-Spielerin und den regelmäßigen Slot-Spieler — und erfrischend offen darin, genau das zu sein.</p>
        </div>
      </Section>

      <Section id="mehr-wege-zum-wert" title="Mehr Wege, auf denen der Wert zurückkommt">
        <p>Über die Einzahlungsboni und die VIP-Leiter hinaus betreibt National eine Reihe von Angeboten, deren ganze Aufgabe es ist, laufenden Spielern zusätzlichen Wert in die Hand zu drücken — die Alltagsbelohnungen, die eine Session so anfühlen lassen, als gäbe sie etwas zurück.</p>
        <article className="info-card boni-network-card">
          <p>Das Glücksrad verwandelt jede Einzahlung in einen Dreh um Preise, die von Freispielen und Belohnungspunkten bis zu einem Aushängesegment von 10.000 € reichen. Die Sonntags-Mega-Spins, die wir behandelt haben, sind das VIP-Ende davon. Und die Netzwerk-Events sind dort, wo die größeren Pools leben: Prize Drops teilt einen Pool von 100.000 € unter Spielern auf, während anbietergeführte Kampagnen wie Pragmatic Plays Drops & Wins und BGaming Drops zufällige Bargeldpreise und Tausende einzelner Belohnungen in gewöhnliche Spins auf berechtigten Spielen fallen lassen. Bei den meisten davon meldest du dich nicht an — du spielst einfach ein qualifizierendes Spiel und bist im Rennen. Es ist gefundenes Geld, aufgeschichtet auf das Spiel, das du ohnehin schon gespielt hast.</p>
          <div className="boni-event-art" aria-hidden="true">
            {bonusEventArt.map(([src, label]) => (
              <div className="boni-event-art__item" key={src}>
                <Image src={src} alt={label} width={240} height={280} />
              </div>
            ))}
          </div>
        </article>
      </Section>

      <Section id="turniere-bestenlisten" title="Turniere und Bestenlisten" className="image-copy-section image-copy-section--wide-title boni-tournament-section">
        <Image className="image-copy-section__image" src="/content/main/tournament-characters.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Wenn eine Bestenliste die Art von Sache ist, die einen gewöhnlichen Abend wichtig anfühlen lässt, dann sind Nationals Turniere für dich gebaut.</p>
          <h3>Was läuft</h3>
          <p>Die wiederkehrende Treasure-Race-Reihe ist das Rückgrat. Es gibt ein Sonic Treasure Race mit einem Preispool von 100 € plus 300 Freispielen, ein Flash Treasure Race mit 75 € plus 300 Spins und ein Rapid Treasure Race mit 50 € plus 300 Spins — jedes auf seinem eigenen Countdown, jedes rankt dein Spiel gegen das aller anderen. Über die Treasure Races hinaus rotiert die Turnier-Auswahl, es lohnt sich also ein Blick, wann immer du dich einloggst.</p>
          <h3>Wie du mitmachst</h3>
          <p>Das Schöne daran ist, dass es meist nichts Zusätzliches zu riskieren gibt. Du spielst während des Turnierfensters qualifizierende Spiele, dein Umsatz klettert die Bestenliste hoch, und die Bestplatzierten teilen den Preispool in Bargeld und Freispielen. Du setzt nichts obendrauf zu deinem normalen Spiel — du wirst nur für die Spins gerankt, die du ohnehin gemacht hast. Für einen Wettbewerbsspieler ist das der ganze Haken: dieselbe Session, zusätzlicher Reiz, echte Preise an der Spitze.</p>
        </div>
      </Section>

      <Section id="aktionscodes" title="Aktionscodes: Dein Ticket für etwas Extra">
        <p>Manche von Nationals besten Angeboten schaltet man mit einem Aktionscode frei — und das ehrliche Detail hier spricht für das Casino. National streut keine zufälligen Codes über das Internet; seine Codes werden ausschließlich über seine vertrauenswürdigen Partner und Affiliates bereitgestellt. Wenn du einen hast, kam er aus einer legitimen Quelle, und er ist meist an ein zeitlich begrenztes Angebot gebunden, bei dem es sich lohnt, schnell zu handeln.</p>
        <p>Einen zu nutzen, ist eine Angelegenheit in vier Schritten:</p>
        <div className="split-layout step-media-layout boni-code-layout">
          <StepList>
            <li>Neuer Spieler? Gib deinen einzigartigen Aktionscode bei der Anmeldung ein, um einen exklusiven Willkommensbonus freizuschalten.</li>
            <li>Bestehendes Konto? Wirf den Code während deiner Einzahlung ins Gutscheinfeld, um das damit verbundene Sonderangebot zu beanspruchen.</li>
            <li>Aktiviere den Bonus in deinem Konto.</li>
            <li>Spiel — die Belohnung landet, und du bist in den Spielen der Top-Anbieter.</li>
          </StepList>
          <div className="boni-media-panel" aria-hidden="true">
            <Image src="/content/main/registration-signup.png" alt="" fill sizes="(max-width: 1180px) 100vw, 40vw" />
          </div>
        </div>
        <p>Weil es sich um begrenzte Angebote handelt, ist ein Code die Definition von „jetzt oder nie&quot;. Wenn dir einer über den Weg läuft, lass ihn nicht liegen.</p>
      </Section>

      <Section id="saisonale-angebote" title="Zeitlich begrenzte und saisonale Angebote" className="image-copy-section image-copy-section--wide-title boni-seasonal-section">
        <Image className="image-copy-section__image" src="/content/bonuses/limited-offers.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Der Kalender besteht nicht nur aus den festen Angeboten — es gibt eine rotierende Schicht des Vorübergehenden und Saisonalen, und hier zahlt sich Aufmerksamkeit aus.</p>
          <p>Der Geheimbonus ist genau das, wonach er klingt: Mach eine qualifizierende Einzahlung am richtigen Wochentag und enthülle eine verborgene Belohnung — ein bisschen Geheimnis, ganz im Einklang mit einem Casino, das um das Aufdecken von Dingen herum gestaltet ist. Rund um Feiertage und besondere Anlässe erwarten dich saisonale Reloads und thematische Aktionen zusätzlich zur üblichen Auswahl. Für deutsche Spieler heißt das in der Praxis: Rund um die großen Termine des Jahres — vom Oktoberfest bis zur Adventszeit — lohnt der Blick besonders, denn dann tauchen die themengebundenen Extras auf. Und die großen Netzwerk-Pools wie Prize Drops laufen in definierten Fenstern statt für immer, die 100.000 €, um die es geht, sind also nur zu haben, solange das Event live ist.</p>
          <p>Die praktische Erkenntnis: Prüfe den Aktionen-Tab, wenn du dich einloggst. Die festen Angebote werden immer da sein, aber die begrenzten sind per Definition die, die du verpasst, wenn du nicht hinschaust.</p>
        </div>
      </Section>

      <Section id="verantwortungsvoll-spielen-boni" title="Verantwortungsvoll spielen" className="image-copy-section image-copy-section--wide-title boni-responsible-section">
        <Image className="image-copy-section__image" src="/content/main/responsible-gaming-characters.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Ein Bonus ist Extra-Spiel, niemals ein Plan, um Geld zurückzugewinnen — und der Moment, in dem es sich anfängt wie Letzteres anzufühlen, ist der Moment, zurückzutreten. National stellt die üblichen Werkzeuge für verantwortungsvolles Spielen bereit: Du kannst Limits für Einzahlungen, Verluste, Sitzungsdauer und Umsatz setzen, indem du den Support kontaktierst, und Selbstausschluss ist über den Live-Chat verfügbar, der rund um die Uhr läuft. Ein ehrlicher Vorbehalt, der genannt werden muss: Einzahlungslimits decken Standard-Zahlungsmethoden ab, aber nicht Kryptowährung, wenn du dein Spiel also in Krypto finanzierst, muss diese Disziplin von dir kommen.</p>
          <p>Setz dir einen Betrag, den du bequem verlieren kannst, bevor du auch nur ein einziges Angebot beanspruchst, und behandle jeden Bonus als das, was er ist — ein bisschen Extra-Spaß obendrauf, keine Strategie. Wenn das Spiel je von Unterhaltung in etwas Schwereres kippt, gibt es Hilfe über Organisationen wie die BZgA-Spielsucht-Beratung (Telefon 0800 1 37 27 00), Gamblers Anonymous und Gambling Therapy. Es beim Spaß zu belassen, ist der ganze Sinn.</p>
        </div>
      </Section>

      <Section id="angebot-waehlen" title="Dein Angebot wählen" className="image-copy-section summary-section image-copy-section--wide-title boni-summary-section">
        <Image className="image-copy-section__image" src="/content/main/summary-characters-v2.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Das ist der ganze Kalender. Du brauchst nicht alles davon — niemand spielt jeden Bonus, und der Versuch, es zu tun, ist genau, wie Leute am Ende mehr umsetzen, als sie vorhatten. Finde das eine, das zu deiner tatsächlichen Spielweise passt, prüfe, was es von dir verlangt, und beanspruche genau dieses richtig. Der Rest wird immer noch hier sein, wenn du dich das nächste Mal einloggst.</p>
          <a className="button button--primary content-section__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Bonus Holen</a>
        </div>
      </Section>
    </div>
  );
}
