import Image from "next/image";
import type { ReactNode } from "react";
import { BONUS_AFFILIATE_URL, GENERAL_AFFILIATE_URL } from "./affiliateLinks";
import { AppPromoBanner } from "./AppPromoBanner";
import { JsonLd } from "./JsonLd";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { PromotionBanner } from "./PromotionBanner";
import { ReviewsSlider } from "./ReviewsSlider";

const mainFaqItems = [
  ["What is the minimum deposit at National Casino New Zealand?", "The usual minimum deposit starts from NZ$10. The full Welcome Bonus requires NZ$35, the Friday Reload requires NZ$35, and the Highroller Bonus requires NZ$500."],
  ["Which payment methods are available in New Zealand?", "Among the options are Visa, Mastercard, POLi, Skrill, Neteller, MiFinity, Paysafecard, Neosurf and cryptocurrency."],
  ["How long does a National Casino withdrawal take?", "The processing depends on the method, KYC and security checks. Some methods can be processed from 1-2 hours to 3 days."],
  ["Is KYC required before withdrawal?", "The operator has the right to require KYC before confirming the payment. The identity, address, and affiliation of the payment method are usually verified. In some cases, selfies or source-of-funds documents are requested."],
  ["Does National Casino support NZD?", "Yes. The regional version allows you to select the NZD for the balance. At the same time, individual general limits can be published in EUR and recalculated by the system."],
  ["Can I use cryptocurrency?", "Yes. The platform has cryptocurrency payments and a separate Crypto First Deposit Bonus."],
  ["Does National Casino have a mobile app?", "National Casino is installed as a PWA via Chrome or Safari. A separate APK is not required, and there are no confirmed native listings on Google Play or the App Store."],
  ["Can I play games for free?", "Many slots support Demo Mode. Live Casino requires authorization and a real-money balance."],
] as const;

const playerReviews = [
  { name: "Oliver Bennett", country: "Australia", score: "5/5", review: "It is convenient that the balance can be opened in NZD and not recalculate every bet. Most of the time I play BGaming slots and sometimes I go to live blackjack. The menu is clear, and the necessary categories are found quickly." },
  { name: "Anna Keller", country: "Germany", score: "4,3/5", review: "I liked the mobile app via Chrome. It is installed without APK and opens with a separate icon. The only thing was that I had to read wagering rules separately before using Free Spins to understand everything." },
  { name: "Miguel Santos", country: "Portugal", score: "5/5", review: "The selection of promos is really big: welcome, Friday Reload, Secret Bonus and provider drops, which I use. Support helped us figure out why you can't keep multiple active bonuses at the same time." },
  { name: "Katarzyna Nowak", country: "Poland", score: "4,7/5", review: "First, I used Demo Mode to check out a few slots. After registration, I liked the VIP system and the clear display of Comp Points. I would like to see the exact withdrawal dates immediately on the public page." },
  { name: "Sofía Ramírez", country: "Mexico", score: "5/5", review: "Live Chat responded late last night and explained which documents were needed for verification. It is convenient that you can send any message by email and save the correspondence." },
  { name: "Freja Nielsen", country: "Denmark", score: "4,4/5", review: "The mobile version and desktop use the same balance, so it's easy to switch between devices. Cashier shows the available methods after logging in, although I would like to see the full list for the country in advance." },
] as const;

function Section({
  children,
  id,
  title,
  className = "",
  actionLabel = "Join now",
}: {
  children: ReactNode;
  id: string;
  title: string;
  className?: string;
  actionLabel?: "Join now" | "Get bonus" | null;
}) {
  return (
    <section className={`content-section ${className}`.trim()} id={id}>
      <h2>{title}</h2>
      {children}
      {actionLabel && (
        <a
          className="button button--primary content-section__action"
          href={actionLabel === "Get bonus" ? BONUS_AFFILIATE_URL : GENERAL_AFFILIATE_URL}
          rel="sponsored"
        >
          {actionLabel}
        </a>
      )}
    </section>
  );
}

function Table({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="table-scroll" role="region" aria-label={caption} tabIndex={0}>
      <table>
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>{headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row">{cell}</th> : <td key={cellIndex}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StepList({ children }: { children: ReactNode }) {
  return <ol className="step-list">{children}</ol>;
}

function AppDownloadButton({ platform }: { platform: "android" | "ios" }) {
  const isAndroid = platform === "android";

  return (
    <a className={`app-download-button app-download-button--${platform}`} href={GENERAL_AFFILIATE_URL} rel="sponsored">
      <Image
        className="app-download-button__icon"
        src={isAndroid ? "/icons/android.svg" : "/icons/apple.svg"}
        width={isAndroid ? 51 : 45}
        height={60}
        alt=""
        aria-hidden="true"
      />
      <span className="app-download-button__text">
        <span>Download the</span>
        <span>{isAndroid ? "Android App" : "iOS App"}</span>
      </span>
    </a>
  );
}

export function MainContent() {
  return (
    <div className="main-content">
      <Section id="national-casino-new-zealand" title="National Casino New Zealand" actionLabel={null}>
        <div className="split-layout intro-layout">
          <div className="prose-block">
            <p>National Casino is an international online platform offering users from New Zealand casino games, live dealer tables, sports betting, tournaments and a bonus program. The regional version of the site supports NZD, so deposits, balance, and most of the local promos are displayed in New Zealand dollars.</p>
            <p>First Deposit Bonus 100% up to NZ$500 + 100 Free Spins + 1 Bonus Game is available for new players. The full package with spins and Instant Bonus Round requires a deposit of NZ$35. The first 50 Free Spins are credited after the deposit, and the remaining 50 after 24 hours.</p>
            <p>The National Casino catalog includes slots, table games, live casino and fast formats. The platform offers a 15-level VIP Club, Fortune Wheel, Missions, Prize Drops and temporary promotions from Pragmatic Play and BGaming.</p>
          </div>
          <PlaceholderMedia src="/content/main/overview.webp" alt="National Casino games, betting and New Zealand overview" position="64% center" />
        </div>
        <h3>Key Factors</h3>
        <Table
          caption="National Casino key factors"
          headers={["Feature", "Details"]}
          rows={[
            ["Website", "natiocasino-luck.com/en_nz"],
            ["Established", "No public information"],
            ["Licence", "Curaçao Gaming Authority, OGL/2024/590/0758"],
            ["Minimum Deposit", "From NZ$10; full Welcome Bonus requires NZ$35"],
            ["Currencies", "NZD, EUR, USD, AUD, CAD, GBP and others"],
            ["Payment Methods", "Visa, Mastercard, e-wallets, banking methods, vouchers and cryptocurrency"],
            ["Game Providers", "Pragmatic Play, BGaming, Playson, Hacksaw Gaming, Booongo, NetGame, GameBeat, Mascot, Popiplay, Platipus and others"],
            ["Games Lobby", "Slots, Bonus Buy, Drops & Wins, Fast Games, Megaways, Hold & Win, Table Games and Live Casino"],
            ["Mobile Compatibility", "Android, iPhone and iPad via mobile site or installable PWA"],
            ["Support", "Live Chat 24/7, support@nationalcasino.com, complaints@nationalcasino.com"],
          ]}
        />
      </Section>

      <Section id="advantages-and-disadvantages" title="Advantages and Disadvantages" actionLabel={null}>
        <div className="pros-cons-grid">
          <div className="list-card list-card--positive">
            <h3>Pros</h3>
            <ul>
              <li>Support for NZD and localized offers. Players from New Zealand can open an account in NZD and see the main bonuses, limits and rewards in New Zealand dollars.</li>
              <li>A large Welcome Bonus with several types of rewards. The First Deposit Bonus includes 100% up to NZ$500, 100 Free Spins and 1 Bonus Game. A separate alternative is provided for cryptocurrency users — 200% up to NZ$800, while players with a larger budget can choose the Highroller Bonus up to NZ$3,000.</li>
              <li>A diverse catalog of casino games. The lobby features classic slots, Bonus Buy, Megaways, Hold & Win, Drops & Wins, table games and live dealer tables.</li>
              <li>A large selection of promotions for regular players. After the Welcome Bonus, users can enjoy the Second Deposit Bonus, Friday Reload, Unlimited Reload, Secret Bonus, Fortune Wheel, VIP Sunday Boost and temporary promotions from game studios.</li>
              <li>15-level VIP Program. Players accumulate Comp Points and gradually receive a more profitable exchange rate. The rewards start with Free Spins, and at high levels include large amounts of NZD.</li>
              <li>Easy access from mobile devices. National Casino operates through an adaptive mobile site and an installable PWA. The user can add an icon to Android, iPhone or iPad without downloading a separate APK and continue using the same account, balance and bonuses.</li>
              <li>Casino and sportsbook in the same account. Slots, live casino, Prematch and Live Betting are available on the platform. The user does not need to create separate profiles or manually transfer funds between game sections.</li>
              <li>24-Hour Live Chat. Support is available 24/7 via the website and the mobile version. For more detailed requests, separate email addresses are provided for standard requests and official complaints.</li>
            </ul>
          </div>
          <div className="list-card list-card--negative">
            <h3>Cons</h3>
            <ul>
              <li>Bonus conditions require careful monitoring. The standard wagering is x40, and the maximum bet for an active bonus is usually limited to NZ$8. Table Games and Live Dealer Games are not counted in wagering, and some slots are completely excluded.</li>
              <li>The full list of payment methods is visible only after logging in. The available deposit and withdrawal methods may depend on the country, currency, KYC status, and payment provider. Therefore, the user cannot always see all the options in advance.</li>
              <li>Some limits are published in EUR. Despite the support of the NZD, certain general rules and withdrawal limits can be specified in euros with subsequent recalculation. The total amount may vary due to the internal exchange rate.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="how-to-register-and-log-in" title="How to Register and Log In">
        <p>Registration at the National Casino takes place in several stages. First, the user specifies an email address and password, then fills in personal information and selects account settings.</p>
        <div className="split-layout">
          <div>
            <h3>Account Registration</h3>
            <p>To create an account:</p>
            <StepList>
              <li>Open the National Casino for New Zealand regional page.</li>
              <li>Click Register now.</li>
              <li>Enter a valid email address.</li>
              <li>Create a strong password.</li>
              <li>Click Next Step.</li>
              <li>Please provide your first and last name, date of birth, and residential address.</li>
              <li>Select New Zealand and NZD.</li>
              <li>Confirm that you have reached the legal age.</li>
              <li>Check out the Terms &amp; Conditions.</li>
              <li>Complete the registration.</li>
            </StepList>
            <p>National Casino allows only one account per user. Additional profiles created with a different email or device may be closed.</p>
          </div>
          <PlaceholderMedia src="/content/main/registration.webp" alt="Player creating a secure National Casino account" position="68% center" />
        </div>
      </Section>

      <Section id="verification-process" title="Verification Process" className="image-copy-section">
        <Image className="image-copy-section__image" src="/content/main/verification.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>National Casino may request KYC before withdrawing funds or during additional account verification. Verification confirms the user&apos;s identity, residential address, and ownership of the selected payment method.</p>
          <p>The casino can request:</p>
          <ul>
            <li>passport, driving license, or other photo identification;</li>
            <li>a recent document confirming the address;</li>
            <li>a photo or screenshot of a bank card, e-wallet, or other payment method;</li>
            <li>a selfie with a document;</li>
            <li>information about the source of funds;</li>
            <li>additional phone or video verification.</li>
          </ul>
          <p>The name in the payment details must match the registration data. Using another person&apos;s bank card, account, or e-wallet may delay payment or limit your account.</p>
        </div>
      </Section>

      <PromotionBanner variant="first-deposit" />

      <Section id="national-casino-mobile-app" title="National Casino Mobile App" actionLabel={null}>
        <p>National Casino offers an installable web application for Android and iOS. It works in the PWA format and adds the National icon to the device&apos;s home screen.</p>
        <p>A separate APK file or application from the market is not required: installation begins directly on the official website.</p>
        <p>For the first suitable installation, an App Bonus is available: 10 Free Spins without a deposit. The bonus is given once per person, email, browser, device and IP address.</p>
      </Section>

      <AppPromoBanner />

      <Section id="how-to-download-the-app" title="How to Download the National Casino App" actionLabel={null}>
        <div className="app-install-layout">
          <div className="split-layout app-install-row">
            <div className="app-install-copy">
              <h3>For Android</h3>
              <p>On Android, the installation is done via Chrome:</p>
              <StepList>
                <li>Open the National Casino in Google Chrome.</li>
                <li>Go to the Application section.</li>
                <li>Click Install App.</li>
                <li>Confirm the National installation.</li>
                <li>Wait for the icon to appear on the main screen.</li>
                <li>Open the app and log in to your account.</li>
              </StepList>
              <AppDownloadButton platform="android" />
            </div>
            <PlaceholderMedia src="/content/shared/android-install.webp" alt="Casino web app installation on an Android phone" position="68% center" />
          </div>
          <div className="split-layout app-install-row app-install-row--media-first">
            <div className="app-install-copy">
              <h3>For iOS</h3>
              <p>On an iPhone or iPad:</p>
              <StepList>
                <li>Open the website in Safari.</li>
                <li>Click Share.</li>
                <li>Select Add to Home Screen.</li>
                <li>Confirm adding the icon.</li>
                <li>Launch National and log in.</li>
              </StepList>
              <AppDownloadButton platform="ios" />
            </div>
            <PlaceholderMedia src="/content/shared/ios-install-centered.webp" alt="Casino web app added to an iPhone home screen" position="center" />
          </div>
        </div>
        <p>If the installation is unavailable, you can continue playing through the mobile website. It provides almost the same set of functions without adding a separate icon.</p>
      </Section>

      <Section id="promotions-and-bonuses" title="National Casino Promotions & Bonuses" actionLabel={null}>
        <p>National Casino provides bonuses for new and regular users. In addition to the standard Welcome Bonus, a separate crypto offer, Second Deposit Bonus, Friday Reload, Highroller Bonus, Fortune Wheel, Unlimited Reload and special provider promotions are available.</p>
        <p>Before making a deposit, you must select the appropriate Bonus Card in the Cashier. Deposit bonuses do not add up, and only one active offer is allowed at a time.</p>
        <p>According to the general rules:</p>
        <ul className="feature-list bonus-terms-list">
          <li>The standard wagering deposit bonus is x40;</li>
          <li>slots give 100% wagering contribution, except for excluded games;</li>
          <li>Table Games and Live Dealer Games are not counted;</li>
          <li>The maximum bet with an active bonus is NZ$8, unless the individual rules set a different limit.;</li>
          <li>the real-money balance is spent first, then the bonus balance;</li>
          <li>exceeding the maximum bet may result in cancellation of winnings.;</li>
          <li>You can withdraw your deposit before wagering is completed only with the loss of the bonus and related winnings.</li>
        </ul>
        <div className="bonus-grid">
          <article className="bonus-card">
            <Image className="bonus-card__background" src="/bonuses/backgrounds/welcome.png" alt="" fill sizes="(max-width: 1180px) 100vw, 75vw" aria-hidden="true" />
            <div className="bonus-card__content">
              <h3>Welcome Bonus</h3>
              <p>The First Deposit Bonus for New Zealand includes:</p>
              <ul><li>100% up to NZ$500;</li><li>100 Free Spins;</li><li>1 Bonus Game;</li><li>wagering x40;</li><li>maximum bet NZ$8.</li></ul>
              <p>The minimum deposit for the cash portion starts at NZ$10. However, a minimum of NZ$35 per transaction is required to receive the full package with 100 Free Spins and Instant Bonus Round.</p>
              <p>The first 50 Free Spins are credited immediately after successful deposit. The remaining 50 become available after 24 hours. The Bonus Game is provided in Big Bass Bonanza 1000. If Pragmatic Play is unavailable in the user&apos;s region, the operator can replace the reward with a Bonus Buy in one of the BGaming games.</p>
              <a className="button button--primary bonus-card__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Get bonus</a>
            </div>
            <div className="bonus-card__art" aria-hidden="true">
              <Image src="/bonuses/welcome.png" alt="" width={404} height={425} />
            </div>
          </article>
          <article className="bonus-card">
            <Image className="bonus-card__background" src="/bonuses/backgrounds/crypto.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 75vw" aria-hidden="true" />
            <div className="bonus-card__content">
              <h3>Crypto First Deposit Bonus</h3>
              <p>A separate offer is provided for the first cryptocurrency deposit:</p>
              <ul><li>200% up to NZ$800;</li><li>minimum deposit NZ$35;</li><li>wagering x40;</li><li>maximum bet NZ$6.50.</li></ul>
              <p>The Crypto First Deposit Bonus is an alternative to the standard Welcome Bonus. You cannot receive both offers for the same first deposit.</p>
              <a className="button button--primary bonus-card__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Get bonus</a>
            </div>
            <div className="bonus-card__art" aria-hidden="true">
              <Image src="/bonuses/crypto.webp" alt="" width={684} height={611} />
            </div>
          </article>
          <article className="bonus-card">
            <Image className="bonus-card__background" src="/bonuses/backgrounds/second-deposit.png" alt="" fill sizes="(max-width: 1180px) 100vw, 75vw" aria-hidden="true" />
            <div className="bonus-card__content">
              <h3>Second Deposit Offer</h3>
              <p>The Second Deposit Bonus is activated upon the second qualifying account deposit:</p>
              <ul><li>50% up to NZ$1,000;</li><li>50 Free Spins;</li><li>minimum deposit NZ$35;</li><li>wagering x40;</li><li>maximum bet NZ$8.</li></ul>
              <p>All 50 Free Spins are credited after a successful deposit. The payment must be made in one transaction, having previously selected the Second Deposit Bonus card in the Cashier. Winnings from Free Spins are also wagering x40. Table Games and Live Casino are not counted towards the fulfillment of the conditions.</p>
              <a className="button button--primary bonus-card__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Get bonus</a>
            </div>
            <div className="bonus-card__art" aria-hidden="true">
              <Image src="/bonuses/second-deposit.png" alt="" width={419} height={425} />
            </div>
          </article>
          <article className="bonus-card">
            <Image className="bonus-card__background" src="/bonuses/backgrounds/friday-reload.png" alt="" fill sizes="(max-width: 1180px) 100vw, 75vw" aria-hidden="true" />
            <div className="bonus-card__content">
              <h3>Friday Reload Bonus</h3>
              <p>Friday Reload is available once a week for deposits made on Friday from 00:00 to 23:59 UTC.</p>
              <p>The offer includes:</p>
              <ul><li>50% up to NZ$250;</li><li>100 Free Spins;</li><li>minimum deposit NZ$35;</li><li>wagering x40.</li></ul>
              <p>The first 50 Free Spins are credited immediately after the deposit, and the remaining 50 after 24 hours. To participate, you must select the Friday Reload Bonus in the deposit window and deposit the entire amount in one transaction.</p>
              <a className="button button--primary bonus-card__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Get bonus</a>
            </div>
            <div className="bonus-card__art" aria-hidden="true">
              <Image src="/bonuses/friday-reload.png" alt="" width={448} height={431} />
            </div>
          </article>
          <article className="bonus-card">
            <Image className="bonus-card__background" src="/bonuses/backgrounds/highroller.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 75vw" aria-hidden="true" />
            <div className="bonus-card__content">
              <h3>Highroller Bonus</h3>
              <p>Highroller Bonus is designed for users who are willing to make a larger first deposit.:</p>
              <ul><li>100% up to NZ$3,000;</li><li>minimum deposit NZ$500;</li><li>available only for the first deposit;</li><li>the deposit is carried out in one transaction.</li></ul>
              <p>Before making a payment, you must select the appropriate Bonus Card. Since individual Terms do not set a different wagering, General Bonus Terms &amp; Conditions apply, including the standard x40 and maximum bet NZ$8.</p>
              <a className="button button--primary bonus-card__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Get bonus</a>
            </div>
            <div className="bonus-card__art" aria-hidden="true">
              <Image src="/bonuses/highroller.webp" alt="" width={455} height={531} />
            </div>
          </article>
        </div>
      </Section>

      <Section id="vip-programme" title="VIP Programme">
        <div className="split-layout">
          <div>
            <p>National Casino offers a 15-tier VIP Program. The user accumulates Comp Points(CP) during a suitable game and automatically moves on to the next level.</p>
            <p>The CP exchange rate improves as the status increases:</p>
            <ul className="feature-list">
              <li>Level 1 — 110 CP for NZ$1.25;</li><li>Level 2 — 105 CP for NZ$1.25;</li><li>Level 3 — 100 CP for NZ$1.25;</li><li>Level 4 — 95 CP for NZ$1.25;</li><li>Level 5 — 90 CP for NZ$1.25;</li><li>Level 6 — 85 CP for NZ$1.25;</li><li>Level 7 — 80 CP for NZ$1.25;</li><li>Level 8 — 70 CP for NZ$1.25;</li><li>Level 9-15 — 60 CP for NZ$1.25.</li>
            </ul>
            <p>The rate of level-up may depend on the chosen game and the internal rules of the program. Comp Points are exchanged for bonuses that are subject to General Bonus Terms &amp; Conditions, unless the individual rules specify otherwise.</p>
          </div>
          <PlaceholderMedia src="/content/main/vip.webp" alt="National Casino VIP loyalty levels and rewards" position="68% center" />
        </div>
      </Section>

      <PromotionBanner variant="second-deposit" />

      <Section id="vip-levels-and-rewards" title="VIP Levels and Rewards">
        <Table
          caption="VIP levels and rewards"
          headers={["VIP Level", "Reward", "Required CP"]}
          rows={[
            ["Level 1", "25 Free Spins", "25 CP"], ["Level 2", "50 Free Spins", "100 CP"], ["Level 3", "NZ$15 + 20 Free Spins", "500 CP"], ["Level 4", "NZ$30 + 40 Free Spins", "1,200 CP"], ["Level 5", "NZ$75", "3,000 CP"], ["Level 6", "NZ$150", "10,000 CP"], ["Level 7", "NZ$300", "25,000 CP"], ["Level 8", "NZ$750", "50,000 CP"], ["Level 9", "NZ$1,500", "100,000 CP"], ["Level 10", "NZ$3,200", "200,000 CP"], ["Level 11", "NZ$6,500", "400,000 CP"], ["Level 12", "NZ$16,000", "750,000 CP"], ["Level 13", "NZ$32,000", "1,200,000 CP"], ["Level 14", "NZ$80,000", "2,000,000 CP"], ["Level 15", "NZ$160,000", "3,500,000 CP"],
          ]}
        />
        <p>The first four levels combine Free Spins with small cash rewards. Starting from Level 5, prizes are fully converted to cash, and the maximum amount claimed reaches NZ$160,000 at Level 15.</p>
        <p>These amounts can be credited as bonus funds, rather than as instant withdrawals. Wagering, expiration date, and available games must be checked before receiving or using the reward.</p>
      </Section>

      <Section id="game-tournaments" title="National Casino Game Tournaments">
        <p>The National Casino has a separate Tournaments section where users compete for positions in the overall leaderboard. Tournament points are awarded for betting in suitable slots during a set period, and the final reward depends on the participant&apos;s place in the table after the event ends.</p>
        <p>There are three Treasure Race formats available on the platform:</p>
        <ul className="feature-list bonus-terms-list tournament-card-list"><li>Sonic Treasure Race — NZ$100 and 300 Free Spins;</li><li>Flash Treasure Race — NZ$75 and 300 Free Spins;</li><li>Rapid Treasure Race — NZ$50 and 300 Free Spins.</li></ul>
        <p>Each race has its own timer, a list of qualifying games, and a separate leaderboard. Points scored in one tournament are not carried over to another competition.</p>
        <div className="split-layout">
          <div>
            <h3>How to Join?</h3>
            <p>To participate in the tournament:</p>
            <StepList><li>Log in to your National Casino account.</li><li>Open the Tournaments section.</li><li>Select an available Treasure Race.</li><li>Check the time period and the list of eligible slots.</li><li>Activate participation if the event requires an opt-in.</li><li>Make qualifying bets in allowed games.</li><li>Keep track of your position on the leaderboard.</li><li>After the tournament ends, check the Bonuses section or account notifications.</li></StepList>
          </div>
          <PlaceholderMedia src="/content/shared/tournament.webp" alt="Casino slot tournament champion and race trophy" position="66% center" />
        </div>
        <p>The tournament system calculates the result automatically. However, a bet may not earn points if the wrong slot is selected, the set betting range is violated, or the round was completed after the timer ended</p>
        <h3>Available Races</h3>
        <div className="card-grid card-grid--three">
          <article className="info-card"><h4>Sonic Treasure Race</h4><p>Sonic Treasure Race offers a cash portion of NZ$100 and 300 Free Spins. This is a separate competition with its own qualifying range and final table.</p></article>
          <article className="info-card"><h4>Flash Treasure Race</h4><p>The Flash Treasure Race includes NZ$75 and 300 Free Spins. The results of the Sonic Race will not be carried over to this tournament.</p></article>
          <article className="info-card"><h4>Rapid Treasure Race</h4><p>Rapid Treasure Race offers NZ$50 and 300 Free Spins and is designed for a separate set of bets and participating games.</p></article>
        </div>
        <p>According to the General Bonus Terms, the maximum winnings paid on the tournament bonus are limited to NZ$10,000, unless the individual rules specify a different condition.</p>
      </Section>

      <Section id="online-slots" title="Online Slots">
        <p>Slots make up the main part of the National Casino catalog. The game lobby is divided into categories, allowing you to quickly find the right format from Popular and Hits to Bonus Buy and Hold &amp; Win.</p>
        <p>Users can also filter games by provider. The catalog includes BGaming, Pragmatic Play, NetEnt, Play&apos;n GO, Yggdrasil, Relax Gaming, Push Gaming, Hacksaw Gaming, Quickspin and other studios.</p>
        <p>A Play Demo is available in many slots. The free mode allows you to explore the interface, paytable and bonus features without using a real balance. Demo Mode does not generate withdrawable winnings and may not be available for individual games.</p>
        <p>The betting range should be the provider reference range, not the guaranteed limit specifically for the NZD account. The provider can use a different certified configuration, so before the real-money spin, the player needs to open Game Rules, Info or Paytable.</p>
        <Table
          caption="Online slots"
          headers={["Slot Game", "Provider", "Min Bet", "Max Bet", "RTP"]}
          rows={[
            ["Elvis Frog in Vegas", "BGaming", "0.25", "25.00", "95.30%"],
            ["Book of Cats", "BGaming", "0.10", "25.00", "96.99%"],
            ["Big Bass Bonanza 1000", "Pragmatic Play", "0.20", "240.00", "96.51%"],
            ["Sweet Bonanza 1000", "Pragmatic Play", "0.20", "125.00", "96.53%"],
            ["Wolf Gold", "Pragmatic Play", "0.25", "125.00", "96.01%"],
          ]}
        />
      </Section>

      <Section id="table-games" title="National Casino Table Games">
        <p>National Casino offers digital table games in which the outcome is determined by the RNG rather than the actual dealer. Such games are usually faster than live tables and are available without waiting for the next round. The main categories include Blackjack, Roulette, Baccarat, Casino Poker and selected instant or dice formats.</p>
        <Table
          caption="National Casino table games"
          headers={["Casino Game", "Game Features", "Game Type"]}
          rows={[
            ["Blackjack", "The goal is to get a hand closer to 21 than the dealer's, without exceeding this value. Depending on the version, hit, stand, split and double are available.", "American Blackjack, European Blackjack, Single Deck, Multihand Blackjack"],
            ["Roulette", "Bets are placed on numbers, colors, odd/even, and sector groups.", "European Roulette, French Roulette, American Roulette"],
            ["Baccarat", "The user chooses Player, Banker, or Tie. The hand with a score closer to 9 wins.", "Classic Baccarat, Speed Baccarat, Mini Baccarat, No Commission Baccarat"],
            ["Poker – Casino Variants", "The game is played against a house, and payouts are determined by the combination and paytable of the selected version.", "Caribbean Stud Poker, Casino Hold’em, Three Card Poker"],
            ["Crash & Instant Games", "Short rounds with fast results, multipliers, or the ability to choose a cashout moment.", "Crash, Plinko, Dice and other instant formats"],
          ]}
        />
        <div className="card-grid card-grid--two">
          <article className="info-card">
            <h3 className="table-game-card__title"><Image className="table-game-card__icon" src="/content-icons/cards.png" alt="" width={188} height={180} aria-hidden="true" />Blackjack</h3>
            <p>Blackjack requires you to make decisions after the cards are dealt. The user can take an additional card, stop, double the bet, or split a matching pair.</p>
            <p>Before you start, you should check: the number of decks; the payout for natural blackjack; the dealer&apos;s action on soft 17; the split and double rules available on side bets.</p>
          </article>
          <article className="info-card">
            <h3 className="table-game-card__title"><Image className="table-game-card__icon" src="/content-icons/cards.png" alt="" width={188} height={180} aria-hidden="true" />Roulette</h3>
            <p>European and French Roulette use a single zero, whereas American Roulette adds a double zero. This difference affects the house edge, even if the main betting options look the same. Inside bets cover individual numbers or small groups of sectors. Outside bets include red/black, odd/even, and large number ranges.</p>
          </article>
          <article className="info-card">
            <h3 className="table-game-card__title"><Image className="table-game-card__icon" src="/content-icons/cards.png" alt="" width={188} height={180} aria-hidden="true" />Baccarat</h3>
            <p>In Baccarat, the player does not control the collection of cards after placing a bet. The system automatically generates Player and Banker hands according to the rules of the selected version.</p>
            <p>The banker usually has a commission, but its amount may vary. The Tie rate offers a higher potential payout, but it is much less common.</p>
          </article>
          <article className="info-card">
            <h3 className="table-game-card__title"><Image className="table-game-card__icon" src="/content-icons/cards.png" alt="" width={188} height={180} aria-hidden="true" />Poker Variants</h3>
            <p>Casino Poker should not be confused with multiplayer poker rooms. The user is playing against house, not against other registered players. The payout amount depends on the combination, dealer qualification, and payout table. Side bets can increase potential winnings, but at the same time increase volatility.</p>
          </article>
        </div>
        <p>Bets in Table Games and Live Dealer Games are not counted in the standard bonus wagering. To meet the requirements, slots are given 100% contribution, except for the separately excluded titles.</p>
      </Section>

      <PromotionBanner variant="highroller" />

      <Section id="live-games" title="Live Games">
        <p>Live Casino uses video broadcasts from studios with real dealers, physical cards and roulette wheels. The user places bets through a digital interface, and the dealer conducts a round in front of the camera.</p>
        <p>Live Games do not support Demo Mode. Authorization and a sufficient real-money balance are required to connect to the table.</p>
        <Table
          caption="Live games"
          headers={["Live Game", "Provider", "Min Bet", "Max Bet", "Mobile Support"]}
          rows={[
            ["Crazy Time", "Evolution", "0.10", "5,000", "Yes"],
            ["Immersive Roulette", "Evolution", "1.00", "5,000", "Yes"],
            ["Sweet Bonanza CandyLand", "Pragmatic Play Live", "0.20", "3,000", "Yes"],
            ["Gates of Olympus Roulette", "Pragmatic Play Live", "0.10", "5,000", "Yes"],
            ["Mega Wheel", "Pragmatic Play Live", "0.10", "1,000", "Yes"],
          ]}
        />
      </Section>

      <Section id="license-and-regulations" title="License & Local iGaming Regulations" className="image-copy-section" actionLabel={null}>
        <Image className="image-copy-section__image" src="/content/main/license.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>The National Casino operates under an international license from the Curaçao Gaming Authority OGL/2024/590/0758 . The official certificate indicates that nationalcasino.com It is operated by TechSolutions Group N.V., registered on Curaçao under the number 144920. The license was issued on April 14, 2025 and has the Active status at the time of verification.</p>
          <p>This is not a New Zealand license. The Online Casino Gambling Act 2026 is already in effect in the country, but the new local system is being introduced in stages and should be fully operational in 2027. During the current transition phase, casinos that served New Zealand users before May 1, 2026, may continue to operate until December 1, 2026, but are not allowed to advertise online casinos to New Zealand users. New operators cannot enter the market yet.</p>
          <p>Thus, National Casino is an international offshore platform with a valid Curaçao license, but not a locally licensed New Zealand casino. The legal status of access needs to be re-evaluated as the new regulatory system is implemented.</p>
        </div>
      </Section>

      <Section id="deposits-and-withdrawals" title="Deposits & Withdrawals">
        <p>The exact list of available payment methods is displayed after authorization in Cashier and may depend on the account status, the selected currency and the payment provider.</p>
        <div className="split-layout">
          <div>
            <p>Among the supported categories are:</p>
            <ul className="feature-list"><li>Visa and Mastercard;</li><li>POLi and other online banking methods;</li><li>Skrill, Neteller, and MiFinity;</li><li>Paysafecard and Neosurf;</li><li>cryptocurrency payments;</li><li>other local and international options.</li></ul>
            <p>The usual minimum deposit starts at NZ$10, but there are separate thresholds for bonus offers. For example, the full First Deposit Bonus and most reload offers require at least NZ$35, while the Highroller Bonus requires NZ$500.</p>
            <p>The payment details must belong to the account owner. Using another person&apos;s card, bank account, or e-wallet may result in additional verification or rejection of the transaction.</p>
          </div>
          <PlaceholderMedia src="/content/main/payments.webp" alt="Secure casino deposit and withdrawal methods" position="66% center" />
        </div>
        <div className="subsection-panel">
          <h3>Withdrawal Rules</h3>
          <p>The minimum standard withdrawal amount is €10 or the currency equivalent. For wire transfer, a higher minimum is applied — €500 or the equivalent in the account currency.</p>
          <p>The total maximum limits are:</p>
          <ul className="limit-list">
            {[["€4,000", "per day"], ["€16,000", "per week"], ["€50,000", "per month"]].map(([amount, period]) => (
              <li key={period}>
                <Image className="limit-list__icon" src="/content-icons/coin-1.png" alt="" width={162} height={162} aria-hidden="true" />
                <span className="limit-list__text"><strong>{amount}</strong><span>{period}</span></span>
              </li>
            ))}
          </ul>
          <p>For an NZD account, the amount is recalculated at the National Casino rate. Individual or VIP limits may differ if it is displayed separately in the profile.</p>
          <p>Before withdrawing a regular deposit, you must perform a minimum turnover:</p>
          <ul className="feature-list"><li>x3 for casino and live casino;</li><li>x1 for sports betting.</li></ul>
          <p>This rule applies separately from bonus wagering. If a bonus is active on the account, the user must first fulfill its requirements or cancel the offer with the loss of the bonus amount and related winnings.</p>
          <p>For the no-deposit bonus, the maximum withdrawal amount is NZ$75. Winnings on cashback, Comp Points, tournaments, deposit bonuses, VIP and weekly bonuses, except for the Welcome Bonus, are limited to NZ$10,000, unless special terms establish a different rule.</p>
        </div>
      </Section>

      <Section id="customer-support" title="Customer Support" actionLabel={null}>
        <div className="split-layout">
          <div>
            <p>The National Casino has a 24/7 Live Chat to keep users engaged. The chat is available on the desktop website, in a mobile browser, and via an installed PWA.</p>
            <p>Live Chat is suitable for questions about:</p>
            <ul className="feature-list"><li>registration and entry;</li><li>bonus availability;</li><li>accrual of Free Spins;</li><li>deposit status;</li><li>withdrawal of funds;</li><li>KYC requirements;</li><li>regional game restrictions;</li><li>setting account limits.</li></ul>
            <p>Email is used for requests that require detailed descriptions or applications.:</p>
            <ul className="contact-list"><li><strong>support@nationalcasino.com</strong> — general questions and help;</li><li><strong>complaints@nationalcasino.com</strong> — official complaints.</li></ul>
            <p>It is recommended that you specify the account&apos;s email address, the date of the operation, the amount, and a consistent description of the problem in the email. Do not share your password or personal information.</p>
          </div>
          <PlaceholderMedia src="/content/main/support.webp" alt="National Casino customer support specialist" position="68% center" />
        </div>
      </Section>

      <PromotionBanner variant="friday-reload" />

      <Section id="faqs" title="FAQs" actionLabel={null}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: mainFaqItems.map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          }}
        />
        <div className="faq-list">
          {mainFaqItems.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="feedback-from-players" title="Feedback from Players" actionLabel={null}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": playerReviews.map(({ name, review, score }) => ({
              "@type": "Review",
              itemReviewed: { "@type": "Organization", name: "National Casino" },
              author: { "@type": "Person", name },
              reviewBody: review,
              reviewRating: {
                "@type": "Rating",
                ratingValue: Number.parseFloat(score.replace(",", ".")),
                bestRating: 5,
                worstRating: 1,
              },
            })),
          }}
        />
        <p className="reviews-intro">We have collected several user reviews about the mechanics of operation, the game lobby and money withdrawal.</p>
        <ReviewsSlider reviews={playerReviews} />
      </Section>

      <Section id="national-casino-grade" title="National Casino Grade" actionLabel={null}>
        <Table
          caption="National Casino expert grade"
          headers={["Parameter", "Score", "Expert Comment"]}
          rows={[
            ["Game Variety", "4.7/5", "Slots, table games, live casino, instant formats and sportsbook"],
            ["Mobile Experience", "4.5/5", "PWA and full mobile web version"],
            ["Bonuses & Promotions", "4.6/5", "Welcome package, crypto bonus, reloads, VIP and provider promotions"],
            ["Payment Options", "4.2/5", "Cards, banking, e-wallets, vouchers and cryptocurrency"],
            ["Customer Support", "4.5/5", "Live Chat 24/7 and e-mail support"],
            ["Security & Verification", "4.3/5", "HTTPS, KYC, payment ownership and source-of-funds checks"],
            ["Withdrawal Conditions", "4.1/5", "Limits have been published, but there is no single public processing time"],
          ]}
        />
        <p className="expert-rating">Expert Rating: 4.4/5</p>
      </Section>

      <Section id="summary" title="Summary" className="image-copy-section summary-section">
        <Image className="image-copy-section__image" src="/content/main/summary.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p className="summary-section__byline">Expert Summary by Ethan McKenzie</p>
          <p>National Casino offers New Zealand users a combination of online casino, live dealer games, sports betting, tournaments and a 15-tier VIP Program. NZD is used as the account currency, and the main bonuses are localized in New Zealand dollars, which is a plus.</p>
          <p>Strengths include a Welcome Bonus up to NZ$500, a separate crypto offer, a diverse lobby slots, 24/7 Live Chat, and an installable PWA. Users also get access to Friday Reload, Secret Bonus, Fortune Wheel and provider promotions. Before making a deposit, it is important to consider wagering x40, maximum bet NZ$8 and the list of restricted games. Withdrawal of funds may require KYC, and the exact processing time depends on the method and verification of the account.</p>
          <p>The National Casino operates under a Curaçao license, but does not have a confirmed New Zealand local license. Therefore, the user should keep an eye on local regulatory changes and re-check the operator&apos;s status before registering.</p>
          <p className="verdict">Expert Verdict: National Casino is suitable for adult players who value NZD, diverse gaming categories and regular promotions. The most reasonable approach is to first study Demo Mode and Cashier, go through verification in advance and choose only those bonuses whose terms correspond to your personal budget.</p>
        </div>
      </Section>
    </div>
  );
}
