import Image from "next/image";
import type { ReactNode } from "react";
import { BONUS_AFFILIATE_URL, GENERAL_AFFILIATE_URL } from "./affiliateLinks";
import { AppPromoBanner } from "./AppPromoBanner";
import { JsonLd } from "./JsonLd";
import { PromotionBanner } from "./PromotionBanner";
import { ReviewsSlider } from "./ReviewsSlider";

const germanPlayerReviews = [
  { title: "„Ich kam für den Krypto-Bonus und blieb wegen des Rads.\"", name: "Marcus", review: "Habe mich rein deshalb angemeldet, weil das 200-%-Krypto-Match besser war als überall sonst, wo ich in der Woche geschaut hatte — ich bin ehrlich, das war der ganze Grund. Dachte, ich nehme den Bonus und gehe. Dann fand ich die Spielshow-Tische und verlor einen ganzen Sonntag an Crazy Time, was ich nicht eingeplant hatte. Die Auszahlung dauerte einen Tag länger, als mir lieb war, aber sie kam einwandfrei an. Ich bin drei Monate später immer noch hier, hauptsächlich wegen des Rads. Das habe ich nicht kommen sehen." },
  { title: "„Die RTP-Sache hat neu verdrahtet, wie ich spiele.\"", name: "Priya", review: "Früher habe ich einfach geklickt, was glänzte. Jetzt prüfe ich tatsächlich zuerst die Zahl auf der Kachel, was nerdig klingt und es wahrscheinlich auch ist. Heißt nicht, dass ich mehr gewinne — ich weiß, dass es so nicht funktioniert, mein Verstand weiß es, meine Brieftasche vergisst es gelegentlich — aber ich habe das Gefühl, klüger zu spielen, und ehrlich, dieses Gefühl ist die halbe Miete, warum ich das tue. Seltsamerweise hat mich die Transparenz ein bisschen weniger spielen lassen, nicht mehr." },
  { title: "„Toller Spielsaal, ein Ärgernis.\"", name: "Tom", review: "Alles am eigentlichen Spielen ist hervorragend. Riesige Blackjack-Auswahl, die Dealer sind auf Zack, kein Live-Tisch ist mir je eingefroren. Meine eine Beschwerde, und die bringe ich jedes Mal vor: Ich zahle in Bitcoin ein und muss dann auf meine Karte auszahlen. Warum. Lasst es mich einfach so herausnehmen, wie ich es hineingesteckt habe. Kleinigkeit. Logge mich trotzdem heute Abend ein." },
  { title: "„Ich verstehe den RTP nicht mal wirklich, aber ich mag, dass er da ist.\"", name: "Eleanor", review: "Mein Sohn hat es mir zweimal erklärt, und ich könnte dir immer noch nicht genau sagen, was 138 % bedeutet, irgendwas mit jüngsten Auszahlungen, sagte er. Aber ich mag einen Ort, der einem Dinge zeigt, statt sie zu verstecken. Fühlt sich ehrlich an. Ich spiele meist den Frosch-Slot mit der Elvis-Musik, der mich jedes Mal zum Lachen bringt, und die Sonntags-Spins sind mehr wert als die Freispiele, die ich irgendwo sonst bekomme." },
  { title: "„Die Turniere haben mich erwischt, und ich bin nicht stolz darauf.\"", name: "Dani", review: "Fing mit den Treasure Races als Scherz an, weil ich den kleinen Countdown-Timer mochte. Jetzt prüfe ich morgens, wo ich auf der Bestenliste stehe, bevor ich meine E-Mails prüfe. Es sind dieselben Spins, die ich ohnehin machen würde, das rede ich mir jedenfalls ein, aber da ist etwas am Gerankt-Sein, das einen gewöhnlichen Dienstagabend wichtig anfühlen lässt. Die 300 Freispiele schaden auch nicht." },
  { title: "„Tiefer Katalog, hat eine Weile gedauert, meine Ecke zu finden.\"", name: "Kwame", review: "In der ersten Woche war ich überfordert — es ist einfach viel davon, und ich sprang herum, ohne wirklich irgendwo zu landen. Dann fand ich das Hold-&-Win-Regal und ging im Grunde nie wieder weg. Auf genau die Studios filtern zu können, denen ich vertraue, ist die Sache, die es für mich klick machen ließ. Der Support beantwortete eine Zahlungsfrage zu einer unchristlichen Stunde und war tatsächlich hilfreich, was ich gelernt habe, nicht als selbstverständlich zu nehmen. Solider Ort, sobald du deine Ecke davon gefunden hast." },
] as const;

const germanMainFaqItems = [
  ["Was bedeutet die RTP-Zahl auf jedem Spiel eigentlich?", "Es ist der Live-Return-to-Player-Wert — eine Momentaufnahme davon, wie das Spiel über die jüngste Spielphase ausgezahlt hat, keine Garantie für deinen nächsten Spin. Der langfristig konfigurierte RTP, meist 94–97 %, ist der Wert, der deine Chancen über die Zeit bestimmt; die Zahl auf der Kachel zeigt nur das jüngste Verhalten. Beide sind nützlich; keiner sagt irgendetwas voraus."],
  ["Ist National Casino sicher zu spielen?", "Es hält eine Curaçao-Lizenz, was echte regulatorische Aufsicht und zertifizierte Zufallsgeneratoren bedeutet. Es ist ein Regime mit leichterer Hand als die strengsten EU-Jurisdiktionen, also legitim und funktionierend statt maximal reguliert. Für die meisten Spieler ist das vollkommen solide — geh einfach mit dem Wissen hinein, in welcher Klasse du spielst."],
  ["Kann ich hier wirklich Geld gewinnen?", "Ja — das sind Echtgeld-Spiele mit echten Auszahlungen, und die RTP-Werte sind echt. Aber jedes Spiel trägt einen Hausvorteil, was genau der Grund ist, warum der Rat zum verantwortungsvollen Spielen oben existiert. Spiel zur Unterhaltung, behandle Gewinne als Zugabe und jage niemals hinterher."],
  ["Muss ich eine App herunterladen, um am Handy zu spielen?", "Nein. Du kannst die Web-App zu deinem Startbildschirm hinzufügen für ein app-ähnliches Erlebnis, oder einfach in jedem mobilen Browser spielen. Beide nutzen dasselbe Konto und dieselben Spiele. Das Installieren bringt dir 10 Freispiele ohne Einzahlung."],
  ["Wie steige ich im VIP-Programm auf?", "Automatisch, durch das Spielen von Slots. Du verdienst einen Comp Point für je 20 € Umsatz an Slots, und die Leiter läuft fünfzehn Stufen tief mit Belohnungen, die von Freispielen bis zu spürbarem Bargeld skalieren. Punkte werden alle zwei Monate zurückgesetzt, es belohnt also stetiges Spiel."],
  ["Warum nutzen Auszahlungen nur Karten, wenn ich in Krypto eingezahlt habe?", "Das ist eine echte Eigenheit des Setups: Einzahlungen akzeptieren Krypto und E-Wallets, aber Auszahlungen laufen über Visa und Mastercard. Plane deine Auszahlungsmethode mit diesem Wissen, statt anzunehmen, dass das Geld auf demselben Weg hinausgeht, auf dem es hereinkam."],
] as const;

const liveGameShows = [
  { name: "Crazy Time", src: "/content/main/live-games/crazy-time.webp" },
  { name: "Funky Time", src: "/content/main/live-games/funky-time.webp" },
  { name: "Monopoly Big Baller", src: "/content/main/live-games/monopoly-big-baller.webp" },
  { name: "Crazy Coin Flip", src: "/content/main/live-games/crazy-coin-flip.webp" },
  { name: "Lightning Storm", src: "/content/main/live-games/lightning-storm.webp" },
  { name: "Sweet Bonanza Candyland", src: "/content/main/live-games/sweet-bonanza-candyland.webp" },
] as const;

const liveTableGames = [
  { name: "Aurora Blackjack Libra", src: "/content/main/live-games/aurora-blackjack.webp" },
  { name: "Speed Blackjack Varna", src: "/content/main/live-games/speed-blackjack.webp" },
  { name: "Infinite Free Bet Blackjack", src: "/content/main/live-games/infinite-free-bet-blackjack.webp" },
  { name: "Casino Hold'em", src: "/content/main/live-games/casino-holdem.webp" },
  { name: "Texas Hold'em Bonus", src: "/content/main/live-games/texas-holdem-bonus.webp" },
  { name: "Gates of Olympus Roulette", src: "/content/main/live-games/gates-of-olympus-roulette.webp" },
  { name: "Baccarat 1", src: "/content/main/live-games/baccarat-1.webp" },
  { name: "Craps", src: "/content/main/live-games/craps.webp" },
] as const;

const featuredProviders = [
  {
    name: "Pragmatic Play",
    icon: "/content/main/providers/pragmatic-play.svg",
    games: ["Gates of Olympus Super Scatter", "Starlight Princess Super Scatter"],
  },
  {
    name: "Dynabit Gaming",
    icon: "/content/main/providers/dynabit-gaming.svg",
    games: ["Coin Bandit: Hold and Win", "Flash Coins: Hold and Win"],
  },
  {
    name: "BGaming",
    icon: "/content/main/providers/bgaming.svg",
    games: ["Burning Chilli 243", "Wild West TRUEWAYS"],
  },
  {
    name: "Hacksaw",
    icon: "/content/main/providers/hacksaw.svg",
    games: ["Nitro Nights"],
  },
  {
    name: "Felix Gaming",
    icon: "/content/main/providers/felix-gaming.svg",
    games: ["20 Boost Hot", "It’s a Joker"],
  },
  {
    name: "Spinomenal",
    icon: "/content/main/providers/spinomenal.svg",
    games: ["3 Scarabs Of Rebirth"],
  },
] as const;

function LiveGameStrip({ games, label }: { games: ReadonlyArray<{ name: string; src: string }>; label: string }) {
  return (
    <div className="live-game-strip" role="region" tabIndex={0} aria-label={label}>
      <ul className={`live-game-strip__grid live-game-strip__grid--${games.length}`}>
        {games.map((game) => (
          <li key={game.src}>
            <Image
              className="live-game-strip__image"
              src={game.src}
              alt={game.name}
              width={427}
              height={575}
              sizes="(max-width: 719px) 136px, (max-width: 1180px) 148px, 160px"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function BonusVisualCard({ background, character, children, title, wide = false }: {
  background: string;
  character: string;
  children: ReactNode;
  title: string;
  wide?: boolean;
}) {
  return (
    <article className={`info-card promotion-art-card${wide ? " promotion-art-card--wide" : ""}`}>
      <Image className="promotion-art-card__background" src={background} alt="" fill sizes="(max-width: 960px) 100vw, 42vw" aria-hidden="true" />
      <div className="promotion-art-card__shade" aria-hidden="true" />
      <div className="promotion-art-card__character" aria-hidden="true">
        <Image src={character} alt="" fill sizes="(max-width: 719px) 72vw, 24vw" />
      </div>
      <div className="promotion-art-card__content">
        <div className="promotion-art-card__copy">
          <h3>{title}</h3>
          <p>{children}</p>
          <a className="button button--primary promotion-art-card__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Bonus Holen</a>
        </div>
      </div>
    </article>
  );
}

function Section({ children, className = "", id, title }: { children: ReactNode; className?: string; id: string; title: string }) {
  return <section className={`content-section ${className}`.trim()} id={id}><h2>{title}</h2>{children}</section>;
}

function JoinNowButton() {
  return <a className="button button--primary content-section__action" href={GENERAL_AFFILIATE_URL} rel="sponsored">Jetzt beitreten</a>;
}

function FireRating({ value }: { value: number }) {
  const fullIcons = Math.floor(value);
  const hasHalfIcon = value % 1 !== 0;
  const accessibleValue = value.toLocaleString("de-DE", { maximumFractionDigits: 1 });

  return (
    <span className="fire-rating" role="img" aria-label={`${accessibleValue} von 5`}>
      {Array.from({ length: fullIcons }, (_, index) => (
        <Image
          className="fire-rating__icon"
          src="/icons/fire.svg"
          alt=""
          width={28}
          height={28}
          aria-hidden="true"
          key={index}
        />
      ))}
      {hasHalfIcon ? (
        <span className="fire-rating__half" aria-hidden="true">
          <Image className="fire-rating__half-base" src="/icons/fire.svg" alt="" width={28} height={28} />
          <Image className="fire-rating__half-fill" src="/icons/fire.svg" alt="" width={28} height={28} />
        </span>
      ) : null}
    </span>
  );
}

export function MainContent() {
  return (
    <div className="main-content">
      <Section id="national-casino-spielsaal" title="National Casino: Ein Spielsaal, der seine Karten offenlegt" className="image-copy-section image-copy-section--wide-title">
        <Image className="image-copy-section__image" src="/content/main/overview-characters.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
            <p>Die meisten Casinos bitten dich, der Atmosphäre zu vertrauen. Tritt ein, bewundere das Licht, glaube einfach daran, dass die Spiele hinter den hübschen Kacheln auch wirklich auszahlen, was sie versprechen. National Casino macht etwas Leiseres und, sobald man es bemerkt, ein wenig Entwaffnendes: Es reicht dir die Beweise, bevor du dich überhaupt hinsetzt. Jedes Spiel im Saal trägt seinen Return-to-Player-Wert offen im Gesicht, direkt auf der Kachel, und aktualisiert ihn, während der Raum spielt. Es ist eine kleine Design-Entscheidung, die fast alles über diesen Ort verrät.</p>
            <p>Das ganze Casino ist wie eine Detektivgeschichte eingekleidet — Lupen, verborgene Boni, die darauf warten, aufgedeckt zu werden, ein schnauzbärtiger Ermittler, der auf der Hälfte der Werbebanner auftaucht — und dieses Thema erweist sich als mehr als bloße Kulisse. Das ist ein Spielsaal, gebaut für die Spielerin und den Spieler, die das Kleingedruckte lesen, die gerne die Zahlen kennen, die lieber genau hinschauen, als sich blenden zu lassen. Wenn das auf dich zutrifft, wirst du dich hier schnell zu Hause fühlen. Und wenn nicht, gibt es hier immer noch mehr als genug zu genießen, ohne je auf einen einzigen Prozentwert schielen zu müssen. Machen wir einen Rundgang.</p>
        </div>
      </Section>

      <Section id="was-diesen-spielsaal-auszeichnet" title="Was diesen Spielsaal auszeichnet" className="">
        <p>Vergiss das Thema für einen Moment, und hier ist die ehrliche Form des Ganzen. National Casino betreibt eine breite, moderne Slot-Bibliothek aus genau den Studios, die gerade zählen, kombiniert sie mit einem der stärksten Live-Dealer-Kataloge der Branche und packt das Ganze in einen Aktionskalender, der dir am Freitag, am Sonntag und an den meisten Tagen dazwischen einen Grund gibt, zurückzukehren. Es ist nicht bloß die RTP-auf-der-Kachel-Gewohnheit, denn darunter liegt ein tiefer, gut kuratierter Katalog, und es ist eben nicht nur eine dünne Bibliothek, die sich hinter einem Kniff versteckt.</p>
        <p>Es ist nicht das am strengsten regulierte Casino, in dem du je spielen wirst, und es gibt auch nicht vor, das zu sein. Was es stattdessen bietet, ist Transparenz darüber, wie sich die Spiele verhalten, ein Spielsaal mit echtem Charakter und eine Belohnungsleiter, die fünfzehn Sprossen tief reicht. Hier die schnelle Bilanz, bevor wir ins Detail gehen.</p>
        <div className="pros-cons-grid">
          <article className="list-card list-card--positive">
            <p className="list-card__label">Das Gute:</p>
            <ul className="feature-list">
              <li>Live-RTP auf jeder Spielkachel — du siehst, wie ein Spiel zuletzt ausgezahlt hat, bevor du auch nur einen Cent einsetzt.</li>
              <li>Eine Slot-Bibliothek von Pragmatic Play, Hacksaw Gaming, BGaming, Felix Gaming, Spinomenal, Novomatic, Fugaso und mehr.</li>
              <li>Eine Live-Casino-Wand, die weitgehend auf Evolution aufbaut — dem stärksten Studio des Formats — dazu Tische von Pragmatic Play, Ezugi, Playtech und Winfinity.</li>
              <li>Eine thematische Lobby, geordnet in wirklich nützliche Regale: Bonuskauf, Drops &amp; Wins, Hold-&amp;-Win-Mechanik, Megaways, Schnelle Spiele und Jackpot haben alle ihre eigene Eingangstür.</li>
              <li>Ein 15-stufiger VIP-Aufstieg und eine rotierende Auswahl an Turnieren mit echten Preispools.</li>
              <li>Ein Krypto-Willkommenspfad mit einem größeren Match als das übliche Ersteinzahlungsangebot.</li>
            </ul>
          </article>
          <article className="list-card list-card--negative">
            <p className="list-card__label">Die Kompromisse:</p>
            <ul className="feature-list">
              <li>Die Curaçao-Lizenz ist das Arbeitspferd der Branche, nicht die EU-Spitzenklasse — solide Aufsicht, aber gut zu wissen, bevor man einsteigt.</li>
              <li>Auszahlungen laufen über Visa und Mastercard, obwohl Einzahlungen Krypto und E-Wallets akzeptieren — das Geld verlässt das Konto also nicht immer auf demselben Weg, auf dem es hereinkam.</li>
              <li>Der Live-Katalog stützt sich stark auf ein einziges Studio, was zugleich eine Stärke und eine leichte Verengung ist.</li>
              <li>In den meisten Regionen keine echte native App — wobei, wie du sehen wirst, die Alternative ohnehin der bessere Weg ist.</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section id="technisches-bild" title="Das technische Bild auf einen Blick" className="">
        <p>Vor dem Rundgang die Eckdaten. Das ist der Rahmen, an dem alles andere hängt.</p>
        <div className="table-scroll" role="region" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Währungen</th>
                <td>EUR und andere, darunter mehrere Kryptowährungen</td>
              </tr>
              <tr>
                <th scope="row">Lizenz</th>
                <td>Curaçao</td>
              </tr>
              <tr>
                <th scope="row">Slot-Anbieter</th>
                <td>Pragmatic Play, Hacksaw Gaming, BGaming, Felix Gaming, Spinomenal, Novomatic, Fugaso, NetGame und mehr</td>
              </tr>
              <tr>
                <th scope="row">Live-Anbieter</th>
                <td>Evolution, Pragmatic Play, Ezugi, Playtech, Winfinity</td>
              </tr>
              <tr>
                <th scope="row">Lobby-Regale</th>
                <td>Für Sie, Beliebt, Neu, Hits, Spielautomat, Bonuskauf, Drops &amp; Wins, Schnelle Spiele, Megaways, Hold-&amp;-Win-Mechanik, Jackpot</td>
              </tr>
              <tr>
                <th scope="row">Live-RTP-Anzeige</th>
                <td>Ja — pro Spielkachel angezeigt</td>
              </tr>
              <tr>
                <th scope="row">Willkommensangebot</th>
                <td>100 % bis zu 100 € + 100 Freispiele (Krypto-Pfad: 200 % bis zu 500 €)</td>
              </tr>
              <tr>
                <th scope="row">VIP-Programm</th>
                <td>15 Stufen, Comp Points beim Slot-Spiel</td>
              </tr>
              <tr>
                <th scope="row">Einzahlungen</th>
                <td>Karten, E-Wallets, Kryptowährungen</td>
              </tr>
              <tr>
                <th scope="row">Auszahlungen</th>
                <td>Visa, Mastercard</td>
              </tr>
              <tr>
                <th scope="row">Support</th>
                <td>24/7-Live-Chat, E-Mail, mehrsprachig</td>
              </tr>
              <tr>
                <th scope="row">Mobil</th>
                <td>Installierbare Web-App (PWA) plus voller Mobil-Browser</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="germany-note-panel">
          <p>Eine Anmerkung zu dieser Lizenzzeile, denn sie verdient Ehrlichkeit statt eines Schulterzuckens. Eine Curaçao-Lizenz ist die häufigste Berechtigung im Online-Glücksspiel. Sie bedeutet, dass echte Aufsicht besteht — der Betreiber muss sich gegenüber einer Regulierungsbehörde verantworten, die Spiele laufen auf zertifizierten Zufallsgeneratoren — aber es ist ein Regime mit leichterer Hand als etwa das im Vereinigten Königreich oder auf Malta. Wer den strengstmöglichen Verbraucherschutz will, ist hier nicht richtig. Wer ein legitimes, funktionierendes Casino mit vernünftigen Schutzmechanismen will, ist es sehr wohl. Wenn du weißt, was du suchst, weißt du auch, ob das hier passt.</p>
          <p>Für deutsche Spielerinnen und Spieler lohnt ein zusätzlicher Satz: Der streng regulierte, lizenzierte deutsche Markt nach dem Glücksspielstaatsvertrag funktioniert nach anderen Regeln als ein Curaçao-Angebot. Das ist keine Wertung, sondern ein Hinweis — kenne den Rahmen, in dem du spielst, dann triffst du eine informierte Entscheidung.</p>
        </div>
      </Section>

      <Section id="lobby-landkarte" title="Die Lobby wie eine Landkarte lesen" className="">
        <p>Öffne das Spielemenü, und du blickst nicht auf einen wahllos zusammengeworfenen Haufen Titel — du blickst auf einen Grundriss. Die Regale verraten dir, für wen dieser Ort gemacht ist. Für Sie und Beliebt sind die Schaufenster. Neu und Hits halten die Stammgäste bei Laune. Dann wird es interessant: Bonuskauf bekommt ein eigenes Regal auf oberster Ebene, und Hold-&amp;-Win-Mechanik auch, und Megaways ebenso. Ein Casino, das Bonuskauf und Hold-&amp;-Win auf die Startseite stellt, ist ein Casino, gebaut von Leuten, die davon ausgehen, dass du bereits weißt, was ein Feature Buy ist und was ein Respin-Lock macht. Das ist ein Grundriss für Spieler mit ein wenig Erfahrung, keine Lobby, die die Mechanik vor dir versteckt.</p>
        <div className="lobby-map-scroll" role="region" tabIndex={0} aria-label="Ansicht der National-Casino-Lobby">
          <Image
            className="lobby-map-image"
            src="/content/main/lobby-map.png"
            alt="National-Casino-Lobby mit Kategorien, Suche, Spielempfehlungen und Live-RTP-Werten"
            width={3304}
            height={1396}
            sizes="(max-width: 1180px) 100vw, 82vw"
            unoptimized
          />
        </div>
        <p>Es gibt ein Regal für Schnelle Spiele für die Crash-und-Sofort-Fraktion, ein Drops-&amp;-Wins-Regal für die Jäger der Netzwerk-Preise und eine Jackpot-Ecke für alle, die den einen lebensverändernden Treffer suchen. Über die Suchleiste kannst du nach Anbieter filtern, was mehr zählt, als es klingt — wenn du entschieden hast, dass du nur der Mathematik eines bestimmten Studios vertraust, kannst du dich mit zwei Klicks darin einmauern. Die Lobby belohnt es, wenn du weißt, was du willst. Sie ist eine Landkarte und setzt voraus, dass du eine lesen kannst.</p>
      </Section>

      <PromotionBanner variant="first-deposit" />

      <Section id="zahlen-auf-der-kachel" title="Die Zahlen auf der Kachel" className="">
        <p>Hier ist der Teil, für den es sich lohnt, langsamer zu werden, denn es ist genau das, was National tut und die meisten seiner Mitbewerber schlicht nicht tun.</p>
        <p>Auf nahezu jeder Spielkarte siehst du einen RTP-Wert. Manche dieser Zahlen sehen auf den ersten Blick seltsam aus — ein Slot zeigt 101 %, ein anderer blinkt mit 138 %, ein Live-Spiel liest sich als 159 %. Kein Slot bringt über seine Lebensdauer 138 % zurück; wäre es so, wäre das Casino bis zum Mittagessen pleite. Was du siehst, ist Live-RTP — eine Momentaufnahme davon, wie dieses konkrete Spiel über die jüngste Spielphase tatsächlich ausgezahlt hat, nicht der theoretische Wert, der in seinem Code steckt. Stell es dir als das kurzfristige Wetter des Raums vor, nicht als sein Klima. Ein Spiel, das mit 138 % heißläuft, hat schlicht über das jüngste Fenster, das du siehst, mehr ausgezahlt, als es eingenommen hat; eine Stunde später kann es genauso gut 82 % anzeigen.</p>
        <div className="rtp-strip-scroll" role="region" tabIndex={0} aria-label="Live-RTP-Spielübersicht">
          <Image
            className="rtp-strip-image"
            src="/content/main/live-rtp-strip.png"
            alt="Spielkarten mit Live-RTP-Werten und aktuellen Spielerzahlen"
            width={2494}
            height={518}
            sizes="(max-width: 1180px) 100vw, 82vw"
          />
        </div>
        <p>Das ist echt nützlich und echt ehrlich, solange du es richtig liest. Der konfigurierte RTP — der Langzeitwert, um den herum das Spiel gebaut ist — ist die Zahl, die deine Gewinnchancen über Tausende von Spins tatsächlich bestimmt, und er liegt meist irgendwo zwischen 94 % und 97 %, je nachdem, wie der Betreiber das Spiel eingestellt hat. Der Live-RTP auf der Kachel sagt dir, was zuletzt passiert ist. Keiner von beiden sagt deinen nächsten Spin voraus, denn das kann nichts. Aber beide offen gezeigt zu bekommen, ist eine Höflichkeit, die die meisten Betreiber nicht erweisen. Sie behandelt dich wie jemanden, der den Unterschied verstehen kann — was, da du bis hierher gelesen hast, offenkundig auf dich zutrifft.</p>
        <p>Das Detektiv-Thema und diese Gewohnheit sind im Grunde dieselbe Geste. Ein Casino, das sich rund um Spuren und verborgene Dinge einkleidet und dir dann tatsächlich die Beweise auf jeder Kachel zeigt, ist zumindest in sich stimmig, was seine eigene Prämisse angeht. Es bittet dich, genau hinzuschauen, und belohnt dich dann fürs Hinschauen.</p>
      </Section>

      <Section id="spielkachel-lesen" title="Wie man eine Spielkachel im National Casino liest" className="">
        <p>Sobald du weißt, worauf du blickst, wird eine Spielkachel zu einem kleinen Cockpit. So entschlüsselst du eine auf einen Blick, denn in diesem kleinen Rechteck steckt mehr, als die meisten Spieler je bemerken.</p>
        <p>Die RTP-Flagge sitzt in der Ecke — das ist der Live-Wert, den wir gerade behandelt haben. Lies ihn als jüngstes Verhalten, nicht als Versprechen.</p>
        <p>Die Spielerzahl sagt dir, wie viele Leute genau jetzt an diesem Spiel sitzen. Es ist ein leises soziales Signal: Ein Spiel mit einer Menschentraube ist entweder wirklich beliebt oder gerade mitten in einem Lauf, den die Leute bemerkt haben. Ein leeres Spiel ist nicht zwangsläufig schlechter — es ist vielleicht nur weniger auffällig — aber die Zahl ist ein Echtzeit-Fingerzeig darauf, wohin die Aufmerksamkeit des Raums gerade zeigt.</p>
        <div className="rtp-strip-scroll" role="region" tabIndex={0} aria-label="Live-RTP-Spielübersicht">
          <Image
            className="rtp-strip-image"
            src="/content/main/live-rtp-strip.png"
            alt="Spielkarten mit Live-RTP-Werten und aktuellen Spielerzahlen"
            width={2494}
            height={518}
            sizes="(max-width: 1180px) 100vw, 82vw"
          />
        </div>
        <p>Der Anbietername steht unter dem Titel. Wenn du genug gespielt hast, ist das eine Kurzformel dafür, welche Art von Erlebnis dich erwartet — ein Hacksaw-Spiel fühlt sich völlig anders an als ein Novomatic-Spiel, und das Studium zu kennen sagt dir grob, welche Mathematik und welches Tempo dich erwarten, bevor du je einen Spin drehst.</p>
        <p>Die Kategorie-Tags und Badges — eine Drops-&amp;-Wins-Krone, ein Hold-&amp;-Win-Marker, ein Megaways-Etikett — sagen dir, an welche Mechanik und welche Netzwerk-Aktionen das Spiel angeschlossen ist. Ein Drops-&amp;-Wins-Badge bedeutet, dass das Spiel zusätzlich zu seiner eigenen Auszahlungstabelle in einen netzwerkweiten Preispool einspeist.</p>
        <p>Setz diese vier Ablesungen zusammen, und du kannst ein Spiel in etwa zwei Sekunden einschätzen, ohne es zu öffnen. Das ist die ganze Detektiv-Prämisse in die Praxis übersetzt: Die Spuren liegen alle auf der Kachel, wenn du weißt, wo du hinschauen musst.</p>
        <JoinNowButton />
      </Section>

      <Section id="slots-mit-zahlen" title="Die Slots, mit ihren Zahlen" className="">
        <p>Das Beliebt-Regal ist das ehrliche Schaufenster, also stellen wir den Aushängespielen echte Zahlen zur Seite. Das sind die vom Studio konfigurierten RTPs und die üblichen Einsatzspannen — die Langzeitmathematik, nicht die Live-Ablesungen der Kachel. Bedenke, dass ein Betreiber ein Spiel mit einer niedrigeren RTP-Einstellung als dem Maximum laufen lassen kann, also wirf immer einen Blick auf die Kachel, bevor du drehst.</p>
        <div className="table-scroll" role="region" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">Spiel</th>
                <th scope="col">Anbieter</th>
                <th scope="col">RTP (Standard)</th>
                <th scope="col">Min. Einsatz</th>
                <th scope="col">Max. Einsatz</th>
                <th scope="col">Volatilität</th>
                <th scope="col">Max. Gewinn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Gates of Olympus Super Scatter</th>
                <td>Pragmatic Play</td>
                <td>96,50 %</td>
                <td>0,20 €</td>
                <td>240 €</td>
                <td>Sehr hoch</td>
                <td>50.000x</td>
              </tr>
              <tr>
                <th scope="row">Elvis Frog TrueWays</th>
                <td>BGaming</td>
                <td>96,79 %</td>
                <td>0,10 €</td>
                <td>20 €</td>
                <td>Sehr hoch</td>
                <td>5.000x</td>
              </tr>
              <tr>
                <th scope="row">Burning Chilli X</th>
                <td>BGaming</td>
                <td>97,16 %</td>
                <td>0,20 €</td>
                <td>250 €</td>
                <td>Niedrig–mittel</td>
                <td>3.000x</td>
              </tr>
              <tr>
                <th scope="row">Book of Dragon Hold and Win</th>
                <td>Felix Gaming</td>
                <td>~96 %</td>
                <td>0,20 €</td>
                <td>100 €</td>
                <td>Hoch</td>
                <td>~5.000x</td>
              </tr>
              <tr>
                <th scope="row">20 Boost Hot</th>
                <td>Felix Gaming</td>
                <td>~96 %</td>
                <td>0,20 €</td>
                <td>100 €</td>
                <td>Mittel–hoch</td>
                <td>~1.000x</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Wo ein Wert mit einer Tilde markiert ist, behandle ihn als Arbeitsschätzung, die gegen das Info-Panel des Spiels selbst zu prüfen ist — RTP und Limits können sich zwischen Betreiber-Konfigurationen verschieben, und der ehrliche Zug ist, die Auszahlungstabelle im Spiel zu prüfen, statt irgendeine einzelne veröffentlichte Zahl als Evangelium zu nehmen. Das Muster, das zählt: Das ist eine Bibliothek mit echter Bandbreite. Burning Chilli X ist ein Grinder mit niedriger Volatilität und hohem RTP für eine lange ruhige Session; Gates of Olympus Super Scatter ist ein Monster sehr hoher Volatilität, das hundert Spins kalt bleiben und dir dann 50.000x in die Hand drücken kann. Zu wissen, in welcher Stimmung du gerade bist, ist die halbe Miete, um hier gut zu spielen.</p>
        <JoinNowButton />
      </Section>

      <Section id="anbieter" title="Die Anbieter hinter dem Spielsaal" className="image-copy-section image-copy-section--wide-title">
        <Image className="image-copy-section__image" src="/content/main/providers-characters.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
            <p>Ein Spiel ist nur so gut wie das Studio, das es gebaut hat, und Nationals Aufgebot liest sich wie ein Who&#x27;s Who dessen, was die Leute gerade wirklich spielen. Pragmatic Play bringt die Volatilitätsmaschinen mit hohem Deckel und das Gates-of-Olympus-Universum. Hacksaw Gaming liefert die scharfen, modernen Titel hoher Varianz, denen die Streaming-Szene hinterherjagt. BGaming deckt das krypto-freundliche, nachweislich faire Ende mit einem riesigen Backkatalog ab. Dann füllen Felix Gaming, Spinomenal, Novomatic, Fugaso und NetGame die Breite auf — klassische Walzen, Book-Slots, Hold-&amp;-Win-Gitter, das ganze Programm.</p>
            <p>Auf der Live-Seite ist die ehrliche Anmerkung, dass sich der Spielsaal stark auf Evolution stützt. Das ist eine Stärke, formuliert als milde Verengung: Evolution ist schlicht das beste Studio im Live-Dealer-Geschäft, sich darauf zu stützen bedeutet also, dass die Qualität hoch und beständig ist. Aber es bedeutet eben auch, dass du, wenn du über die Live-Etage gehst, größtenteils durch die Welt eines einzigen Unternehmens gehst, wobei Pragmatic Play Live, Ezugi, Playtech und Winfinity eher die Ränder abrunden, als sich den Raum gleichberechtigt zu teilen. Wenn Evolutions Tische ohnehin deine Favoriten sind — und für viele Spieler sind sie das — dann ist das ein Feature, keine Einschränkung.</p>
            <JoinNowButton />
        </div>
        <aside className="provider-showcase" aria-label="Beliebte Anbieter und ihre Spiele">
          <ul className="provider-showcase__list">
            {featuredProviders.map((provider) => (
              <li className="provider-showcase__item" key={provider.name}>
                <span className="provider-showcase__logo" aria-hidden="true">
                  <Image src={provider.icon} alt="" width={44} height={44} />
                </span>
                <span className="provider-showcase__details">
                  <strong>{provider.name}</strong>
                  <span>{provider.games.join(" · ")}</span>
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </Section>

      <PromotionBanner variant="second-deposit" />

      <Section id="live-etage" title="Die Live-Etage" className="">
        <p>Wenn die Slots der Ort sind, an dem du allein spielst, dann ist die Live-Etage der Ort, an dem sich das Casino besetzt anfühlt. Das ist wirklich einer der stärkeren Teile des Betriebs, und er teilt sich in zwei Stimmungen.</p>
        <p>Da ist die Spielshow-Wand — Crazy Time, Funky Time, Monopoly Big Baller, Crazy Coin Flip, Lightning Storm, Sweet Bonanza Candyland — wo ein echter Moderator ein helles, lautes Rad-und-Multiplikator-Spektakel leitet, das dem Unterhaltungsfernsehen näher ist als dem traditionellen Glücksspiel. Das sind die Spiele, die die Leute einschalten und an die sie eine Stunde verlieren, ohne es so recht gewollt zu haben.</p>
        <LiveGameStrip games={liveGameShows} label="Originale Spielkarten der genannten Live-Spielshows" />
        <p>Dann sind da die klassischen Tische, und hier ist die Tiefe ernst gemeint. Allein das Blackjack reicht tief — Aurora Blackjack, Speed Blackjack, VIP-Tische, Free-Bet-Varianten, dazu Casino Hold&#x27;em, Texas Hold&#x27;em Bonus, Roulette, Baccarat und Craps mit Live-Dealern. Für die Spielerin und den Spieler, die das tatsächliche Casino-Erlebnis wollen — ein echter Mensch, der echte Karten über einen echten Tisch gibt, in HD gestreamt — liefert diese Etage genau das, ohne auszudünnen.</p>
        <LiveGameStrip games={liveTableGames} label="Originale Spielkarten der genannten klassischen Live-Tische" />
        <p>Eine kurze Einführung, falls die Tischspiele noch nicht dein Terrain sind. Blackjack ist das Spiel, bei dem du versuchst, den Dealer bis 21 zu schlagen, ohne dich zu überkaufen — das Nächste, was ein Casino zu einem Geschicklichkeitsspiel hat, denn deine Entscheidungen bewegen die Quoten wirklich. Roulette ist der pure Zufall in Zeremonie gekleidet: Wähle eine Zahl, eine Farbe oder ein Segment des Rads und sieh zu, wie die Kugel entscheidet. Baccarat ist das elegante, fast passive Spiel — du setzt auf Spieler oder Bank, und die Regeln spielen sich von selbst aus, was genau der Grund ist, warum High Roller es seit jeher lieben. Craps ist das laute Würfelspiel mit dem einschüchternden Tischlayout, das sich als einfacher entpuppt, als es aussieht, sobald dich jemand durch die Pass Line führt. Jedes dieser Spiele ist hier mit einem Live-Dealer vertreten, du kannst also durch Zuschauen lernen, bevor du dich festlegst.</p>
        <JoinNowButton />
      </Section>

      <Section id="boni-und-aktionen" title="Boni und Aktionen" className="">
        <p>Der Aktionskalender ist der Ort, an dem sich National seinen „Komm morgen wieder&quot;-Sog verdient. Er ist breit und darauf gebaut, den meisten Wochentagen einen Grund zu geben. Hier die Ankerpunkte.</p>
        <div className="card-grid card-grid--two germany-bonus-grid">
          <BonusVisualCard title="Ersteinzahlungsbonus" background="/content/main/bonuses/welcome-bg.png" character="/content/main/bonuses/welcome-character.png">
            100 % bis zu 100 €, dazu ein Bonusspiel und 100 Freispiele. Die Freispiele kommen in zwei Hälften — 50 sofort gutgeschrieben, 50 nach 24 Stunden — was ein kleiner, vernünftiger Kniff ist, der den Spaß in deine zweite Session zieht, statt alles auf einmal abzukippen.
          </BonusVisualCard>
          <BonusVisualCard title="Krypto-Ersteinzahlungsbonus" background="/content/main/bonuses/crypto-bg.webp" character="/content/main/bonuses/crypto-character.webp">
            Die größere Tür. Zahle in Krypto ein, und das Match springt auf 200 % bis zu 500 €. Wenn du dich mit dem Spiel in Krypto ohnehin wohlfühlst, ist das schlicht das großzügigere Willkommen, und es ist das Angebot, das das Casino seinen Krypto-Spielern ganz offensichtlich schmackhaft machen will.
          </BonusVisualCard>
          <BonusVisualCard title="Zweite Einzahlungsbonus" background="/content/main/bonuses/second-deposit-bg.png" character="/content/main/bonuses/second-deposit-character.png">
            50 % bis zu 200 € plus 50 Freispiele, sofort gutgeschrieben. Ein sanfterer Nachschlag für deinen zweiten Besuch, der den Schwung hält, ohne eine große Verpflichtung zu verlangen.
          </BonusVisualCard>
          <BonusVisualCard title="Highroller-Bonus" background="/content/main/bonuses/highroller-bg.webp" character="/content/main/bonuses/highroller-character.webp">
            100 % bis zu 750 €, Mindesteinzahlung 300 €. Der zielt direkt auf Spieler mit größerer Bankroll, die ein Match wollen, das sie widerspiegelt — nicht für jeden, und mit seiner Zugangsvoraussetzung ehrlich darin.
          </BonusVisualCard>
          <BonusVisualCard title="Freitags-Reload-Bonus" background="/content/main/bonuses/friday-reload-bg.png" character="/content/main/bonuses/friday-reload-character.png">
            50 % bis zu 250 € plus 100 Freispiele auf Book of Cats, Freispiele geteilt 50 jetzt / 50 nach 24 Stunden. Der Wochenend-Nachschub, und ein guter Grund, eine Freitagseinzahlung dafür aufzuheben.
          </BonusVisualCard>
          <BonusVisualCard title="VIP-Sonntagsturbo" background="/content/main/bonuses/vip-sunday-bg.webp" character="/content/main/bonuses/vip-sunday-character.webp">
            Bis zu 50 Mega-Spins zu je 1 €, reserviert für VIP-Spieler. Ein Wert von 1 € pro Spin liegt spürbar über der üblichen Freispiel-Stufe, was das zu einer der wirklich wertvollen regelmäßigen Belohnungen im Kalender macht — sofern du weit genug aufgestiegen bist, um es freizuschalten.
          </BonusVisualCard>
          <BonusVisualCard title="Jenseits der Stammgäste" background="/content/main/bonuses/secret-bg.webp" character="/content/main/bonuses/secret-character.webp" wide>
            Der Kalender geht weiter. Es gibt einen Geheimbonus, der sich bei einer Einzahlung offenbart (verfügbar an einem festen Wochentag), einen Unbegrenzten Bonus mit einem Bonus auf jede Einzahlung ab 30 €, ein Glücksrad, das bei jeder Einzahlung verfügbar ist, Prize Drops, die einen Pool von 100.000 € aufteilen, und Netzwerk-Events wie Pragmatic Drops &amp; Wins und anbietergeführte Preiskampagnen, die eine Jagd wert sind. Es gibt außerdem eine feste App-Installations-Belohnung von 10 Freispielen und ein Abo-für-Spins-Angebot. Unterm Strich ergibt das einen Spielsaal, in dem allein das Einloggen am richtigen Tag meist etwas zutage fördert.
          </BonusVisualCard>
        </div>
        <p>Ein fairer Hinweis zu den Bedingungen: Wie bei jedem Casino tragen diese Boni Umsatzanforderungen, und die VIP-Belohnungen speziell laufen mit 10x Umsatz (wobei aus Comp Points umgewandeltes Guthaben mit 5x läuft). Lies die Bonusbedingungen, bevor du dich anmeldest — nicht weil hier irgendetwas ungewöhnlich wäre, sondern weil „lies die Bedingungen&quot; immer der richtige Instinkt ist, und dies ein Casino ist, das sie zu seinem Verdienst tendenziell klar benennt.</p>
      </Section>

      <Section id="vip-aufstieg" title="Der VIP-Aufstieg" className="image-copy-section">
        <Image className="image-copy-section__image" src="/content/main/vip-characters.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Nationals Treueprogramm ist eine richtige Leiter — fünfzehn Stufen, erklommen durch das Sammeln von Comp Points beim Slot-Spiel. Du verdienst einen CP für je 20 €/$ Umsatz an Slots, und der Umtauschkurs, um diese Punkte zurück in Wert zu verwandeln, verbessert sich, während du aufsteigst. Die Teilnahme setzt automatisch mit deiner ersten Einzahlung ein, du bist also vom Moment deines Starts an auf der Leiter.</p>
          <p>Die Belohnungen skalieren steil. Die frühen Sprossen geben Freispiele aus — 25 Spins auf Stufe 1, 50 auf Stufe 2 — dann beginnen die Stufen, Bargeld einzumischen: 10 € plus Spins auf Stufe 3, hoch über 50 €, 100 €, 200 € und weiter. An der Spitze der Leiter werden die Zahlen wirklich groß, wobei die höchsten Stufen ernsthaftes kumuliertes Spiel repräsentieren. Ein paar ehrliche Mechaniken, die man im Kopf behalten sollte: Comp Points werden alle zwei Monate zurückgesetzt, das belohnt also anhaltendes Spiel statt eines langsamen Rinnsals; mit Bonusgeld getätigte Einsätze zählen nicht zu den CP; und CP fallen an Slots an, nicht an Tischspielen. Es ist ein Programm, gebaut für die regelmäßige Slot-Spielerin und den regelmäßigen Slot-Spieler, und es ist transparent darin, genau das zu sein.</p>
          <JoinNowButton />
        </div>
      </Section>

      <Section id="turniere" title="Turniere" className="image-copy-section image-copy-section--wide-title">
        <Image className="image-copy-section__image" src="/content/main/tournament-characters.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
            <p>Neben dem VIP-Grind betreibt National eine rotierende Auswahl an Turnieren — zeitlich begrenzte Rennen, bei denen dein Spiel eine Bestenliste gegen die aller anderen hochklettert. Die wiederkehrende „Treasure Race&quot;-Reihe ist das Rückgrat: ein Sonic Treasure Race mit einem Pool von 100 € plus 300 Freispielen, ein Flash Treasure Race mit 75 € plus 300 Spins, ein Rapid Treasure Race mit 50 € plus 300 Spins, jedes auf seinem eigenen Countdown. Das sind druckarme Wege, einer Session, die du ohnehin gespielt hättest, einen Wettbewerbsreiz hinzuzufügen — du riskierst nichts Zusätzliches, du wirst nur für die Spins gerankt, die du sowieso machst. Für einen bestimmten Spielertyp ist genau diese Bestenliste der Haken, der einen gewöhnlichen Abend interessanter macht.</p>
            <JoinNowButton />
        </div>
      </Section>

      <PromotionBanner variant="highroller" />

      <Section id="registrierung-und-anmeldung" title="Loslegen: Registrierung und Anmeldung" className="image-copy-section image-copy-section--wide-title">
        <Image className="image-copy-section__image" src="/content/main/registration.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
            <p>Die Anmeldung ist bewusst schnell gehalten. Von der Startseite aus klickst du auf Registrieren, gibst die Basics an — E-Mail, Passwort, deine Angaben, bevorzugte Währung — und bestätigst, dass du volljährig bist. Irgendwann vor deiner ersten Auszahlung gibt es einen leichten Verifizierungsschritt, der Standard ist und ebenso zu deinem Schutz existiert wie zu dem des Casinos. Bist du einmal drin, ist das erneute Einloggen nur deine E-Mail und dein Passwort, von jedem Gerät aus.</p>
            <p>Dieser letzte Teil zählt mehr, als er klingt: Dein Konto ist an dein Profil gebunden, nicht an dein Gerät. Registriere dich auf einem Laptop, logge dich später auf dem Handy ein, und dein Guthaben, deine Boni, deine VIP-Stufe und deine Historie sind alle genau da, wo du sie gelassen hast. Es gibt kein separates Mobil-Konto zu jonglieren — eine Anmeldung folgt dir überallhin.</p>
            <JoinNowButton />
        </div>
        <div className="registration-signup-card">
          <Image
            className="registration-signup-card__image"
            src="/content/main/registration-signup.png"
            alt="Registrierungsformular mit Willkommensbonus und den Schritten zur Kontoerstellung"
            width={1587}
            height={991}
            sizes="(max-width: 1180px) calc(100vw - 80px), 40vw"
            unoptimized
          />
        </div>
      </Section>

      <Section id="spielen-am-handy" title="Spielen am Handy" className="image-copy-section image-copy-section--wide-title">
        <Image className="image-copy-section__image" src="/content/main/mobile-characters.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
            <p>National drängt an den meisten Orten keinen klassischen App-Store-Download auf, und ehrlich gesagt erweist sich das als die bessere Lösung. Statt einer nativen App bietet es eine installierbare Web-App — eine Version, die du direkt aus dem Browser zu deinem Startbildschirm hinzufügst, die dann in ihrem eigenen Fenster mit eigenem Icon öffnet und sich fast genau wie eine heruntergeladene App verhält, aber automatisch mit der Seite aktuell bleibt. In einigen Regionen ist ein nativer Download verfügbar, aber die installierbare Web-Version ist überall der verlässliche Weg, und sie kommt mit einer kleinen Karotte: einer 10-Freispiele-Belohnung fürs Installieren, ohne Einzahlung.</p>
            <p>Wenn du lieber gar nichts installieren möchtest, läuft das volle Casino wunderbar in jedem mobilen Browser — Chrome, Safari, alles. Dieselben Spiele, dasselbe Konto, dasselbe Alles, nur durch einen Tab statt ein Icon. Das gesamte Mobil-Setup behandeln wir ausführlich auf der eigenen App-Seite; die Kurzfassung ist, dass das Spielen am Handy hier ein erstklassiges Erlebnis ist, wie auch immer du es erreichst.</p>
        </div>
      </Section>

      <AppPromoBanner />

      <Section id="zahlungen-und-support" title="Einzahlungen, Auszahlungen und Support" className="image-copy-section image-copy-section--wide-title">
        <Image className="image-copy-section__image" src="/content/main/payments-characters.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
            <p>Auf dem Weg hinein ist National großzügig mit Optionen: Karten, eine Reihe von E-Wallets und ein solides Spektrum an Kryptowährungen, wobei Krypto- und E-Wallet-Einzahlungen in der Regel sofort ankommen. Auf dem Weg hinaus gilt der ehrliche Hinweis, den wir früher markiert haben — Auszahlungen werden über Visa und Mastercard abgewickelt, selbst wenn du in Krypto eingezahlt hast, ist der Auszahlungsweg also kartenbasiert. Das solltest du eher einplanen, als dich davon überraschen zu lassen. Ein- und Auszahlungslimits variieren je nach Methode, und die genauen Zahlen tauchen in der Kasse auf, sobald du eingeloggt bist.</p>
            <p>Der Support ist der beruhigende Teil: ein 24/7-Live-Chat als Hauptkanal, gestützt durch E-Mail, betreut von einem mehrsprachigen Team und vom Handy aus leicht erreichbar. Wenn um 3 Uhr morgens etwas schiefgeht, ist jemand da.</p>
        </div>
      </Section>

      <Section id="verantwortungsvolles-spielen" title="Ein Wort zum verantwortungsvollen Spielen" className="image-copy-section image-copy-section--wide-title">
        <Image className="image-copy-section__image" src="/content/main/responsible-gaming-characters.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Nichts von alledem zählt, wenn der Spaß aufhört, Spaß zu sein. National stellt den üblichen Werkzeugkasten für verantwortungsvolles Spielen bereit — du kannst Limits für Einzahlungen, Verluste, Sitzungsdauer und Umsatz setzen, indem du den Support kontaktierst, und Selbstausschluss ist über den Live-Chat verfügbar, der rund um die Uhr läuft. Der eine ehrliche Vorbehalt, der genannt werden muss: Einzahlungslimits decken Standardmethoden ab, aber nicht Kryptowährung, wenn du also in Krypto spielst, muss die Disziplin von dir kommen und nicht von einer Systemgrenze.</p>
          <p>Setz dir einen Betrag, bevor du anfängst — eine Summe, die du verlieren kannst, ohne dass es etwas berührt, worauf es ankommt — und behandle jeden Bonus als ein bisschen Extra-Spiel, niemals als Weg, einen Verlust zurückzugewinnen. Wenn es je von Unterhaltung in etwas Schwereres kippt, gibt es externe Hilfe über Organisationen wie die BZgA-Spielsucht-Beratung, Gamblers Anonymous und Gambling Therapy. Das Casino ist gebaut, um Spaß zu machen. Dafür zu sorgen, dass es das bleibt, ist das ganze Spiel.</p>
        </div>
      </Section>

      <PromotionBanner variant="friday-reload" />

      <Section id="haeufig-gestellte-fragen" title="Häufig gestellte Fragen" className="">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: germanMainFaqItems.map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          }}
        />
        <div className="faq-list">
          {germanMainFaqItems.map(([question, answer], index) => (
            <details key={question} name="main-faq" open={index === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="spielermeinungen" title="Was Spieler tatsächlich sagen" className="">
        <p className="reviews-intro">Sechs Stammgäste, in ihren eigenen Worten.</p>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": germanPlayerReviews.map(({ name, review, title }) => ({
              "@type": "Review",
              name: title,
              author: { "@type": "Person", name },
              itemReviewed: { "@type": "Organization", name: "National Casino" },
              reviewBody: review,
            })),
          }}
        />
        <ReviewsSlider reviews={germanPlayerReviews} />
      </Section>

      <Section id="bewertungskarte" title="Die Bewertungskarte" className="">
        <div className="rating-card-layout">
          <div className="table-scroll rating-card-layout__table" role="region" tabIndex={0}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Kategorie</th>
                  <th scope="col">Bewertung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Wettvielfalt</th>
                  <td><FireRating value={5} /></td>
                </tr>
                <tr>
                  <th scope="row">Mobile Anpassungsfähigkeit</th>
                  <td><FireRating value={4.5} /></td>
                </tr>
                <tr>
                  <th scope="row">Bonusangebote</th>
                  <td><FireRating value={4.5} /></td>
                </tr>
                <tr>
                  <th scope="row">Support</th>
                  <td><FireRating value={5} /></td>
                </tr>
                <tr>
                  <th scope="row">Auszahlungszeit</th>
                  <td><FireRating value={3.5} /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rating-card-layout__media">
            <Image src="/content/main/support-characters-v2.webp" alt="National Casino Kundenservice" fill sizes="(max-width: 960px) 100vw, 41vw" />
          </div>
        </div>
        <p>Vielfalt und Support tragen die Bewertungskarte; mobil ist hervorragend, sobald man den Web-App-Weg versteht; die Boni sind stark und häufig; die Auszahlungszeit ist der eine Bereich, in dem der reine Karten-Auszahlungsweg und die Standard-Bearbeitung sie von einer Top-Note abhalten.</p>
      </Section>

      <Section id="letztes-wort" title="Das letzte Wort" className="image-copy-section summary-section">
        <Image className="image-copy-section__image" src="/content/main/summary-characters-v2.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>National Casino setzt eine gezielte Wette darauf, wer seine Spielerin und sein Spieler ist: jemand, dem man lieber die Zahlen zeigt, als ihm eine Fantasie zu verkaufen. Diese eine Entscheidung — RTP auf jeder Kachel, offen — zieht sich durch alles andere, vom Detektiv-Thema, das den Spielsaal einkleidet, bis zur fünfzehnstufigen VIP-Leiter, die dich dafür belohnt, dass du weißt, was du tust. Es ist nicht der am strengsten regulierte Raum, in dem du je spielen wirst, und die Krypto-rein-Karte-raus-Auszahlungseigenheit ist eine echte Falte. Aber was du im Gegenzug bekommst, ist ein Spielsaal mit echtem Charakter, ein Live-Dealer-Katalog, der an der Spitze des Formats zuschlägt, eine Slot-Bibliothek mit echter Bandbreite und ein Betreiber, der mehr als die meisten damit im Reinen scheint, dich genau hinschauen zu lassen.</p>
          <p>Wenn du es magst, wenn man dir das Kleingedruckte zutraut — wenn du lieber die Kachel liest, als von ihr geblendet zu werden — dann ist das ein Spielsaal, gebaut für genau deine Art von Neugier. Und selbst wenn du lieber jeden Prozentwert auf dem Bildschirm ignorierst und einfach einen Abend lang dem Elvis-Frosch hinterherjagst, sind die Spiele gut genug, dass du so oder so eine gute Zeit haben wirst. Beide Spielertypen sind hier willkommen. Das ist die stille Stärke dieses Ortes.</p>
          <p className="summary-section__byline">— Bewertet von Daniel Roche, Chefredakteur iGaming</p>
          <JoinNowButton />
        </div>
      </Section>

    </div>
  );
}
