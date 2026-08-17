import Image from "next/image";
import type { ReactNode } from "react";
import { BONUS_AFFILIATE_URL, GENERAL_AFFILIATE_URL } from "./affiliateLinks";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { PromotionBanner } from "./PromotionBanner";

export const bonusesSections: ReadonlyArray<readonly [string, string]> = [
  ["national-casino-promotions-and-bonuses", "National Casino Promotions & Bonuses"],
  ["introduction-to-casino-promotions", "Introduction to Casino Promotions"],
  ["welcome-bonus", "Get Started with Our Welcome Bonus"],
  ["weekly-reload-bonuses", "Boost Your Balance with Weekly Reload Bonuses"],
  ["free-spins-offers", "Grab Our Free Spins Offers"],
  ["loyalty-rewards", "Loyalty Rewards & VIP Perks"],
  ["weekly-cashback", "Get Weekly Cashback"],
  ["tournament", "Join Our Exciting Tournament"],
  ["limited-time-offers", "Grab Limited-Time Offers"],
  ["play-responsibly", "Play Responsibly"],
  ["gaming-bonuses-summary", "Join National Casino for Gaming Bonuses"],
];

function Section({
  actionLabel = "Join now",
  children,
  className = "",
  id,
  title,
}: {
  actionLabel?: "Join now" | null;
  children: ReactNode;
  className?: string;
  id: string;
  title: string;
}) {
  return (
    <section className={`content-section ${className}`.trim()} id={id}>
      <h2>{title}</h2>
      {children}
      {actionLabel ? <a className="button button--primary content-section__action" href={GENERAL_AFFILIATE_URL} rel="sponsored">{actionLabel}</a> : null}
    </section>
  );
}

function Table({ caption, className = "", headers, rows }: { caption: string; className?: string; headers: string[]; rows: string[][] }) {
  return (
    <div className={`table-scroll ${className}`.trim()} role="region" aria-label={caption} tabIndex={0}>
      <table>
        <caption className="sr-only">{caption}</caption>
        <thead><tr>{headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
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

function BonusOptionLead({ children }: { children: ReactNode }) {
  return (
    <span className="bonus-option-title">
      <Image alt="" aria-hidden="true" height={162} src="/content-icons/coin-1.png" width={162} />
      <strong>{children}</strong>
    </span>
  );
}

export function BonusesContent() {
  return (
    <div className="main-content bonuses-content">
      <Section
        actionLabel={null}
        className="image-copy-section"
        id="national-casino-promotions-and-bonuses"
        title="National Casino Promotions & Bonuses"
      >
        <Image className="image-copy-section__image" src="/content/bonuses/intro.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>National Casino offers bonuses for new and regular users from New Zealand. The basic package for the first deposit includes 100% up to NZ$500 + 100 Free Spins + 1 Bonus Game, however, the player can also choose a separate Crypto First Deposit Bonus or Highroller Bonus.</p>
          <p>After the first deposit, reload offers, provider promotions, Fortune Wheel, Secret Bonus, VIP Sunday Boost and other temporary promotions become available. Most offers must be activated manually: before depositing, the player selects the appropriate Bonus Card in the Cashier.</p>
          <p>The standard wagering for deposit bonuses is x40, unless the individual conditions provide for a different multiplier. Only one bonus can be used at a time, and the maximum bet is usually limited to NZ$8. Slots give 100% contribution to wagering, while Table Games and Live Dealer Games are not counted.</p>
        </div>
      </Section>

      <Section id="introduction-to-casino-promotions" title="Introduction to Casino Promotions">
        <p>The National Casino bonus program includes several offer formats. Deposit Match increases the game balance by a set percentage of a suitable deposit. Free Spins allow you to launch certain slots without deducting the standard spin cost from the main balance. Provider Promotions are linked to individual studio games and can distribute cash prizes, Free Spins, or random Prize Drops among participants.</p>
        <p>Reload offers, VIP rewards and the exchange of accumulated Comp Points are provided for regular users. Some promotions are available only on a certain day of the week, while others are allowed to be received once during the entire account usage period.</p>
        <div className="split-layout">
          <div>
            <p>The National Casino offers the following types of bonuses:</p>
            <ul className="feature-list promotion-types-list">
              <li>First Deposit Bonus;</li><li>Crypto First Deposit Bonus;</li><li>Second Deposit Bonus;</li>
              <li>Highroller Bonus;</li><li>Friday Reload Bonus;</li><li>Unlimited Bonus;</li>
              <li>Fortune Wheel Bonus;</li><li>App Bonus;</li><li>Subscription Reward;</li>
              <li>Secret Bonus;</li><li>Prize Drops;</li><li>Pragmatic D&amp;W;</li>
              <li>BGaming Drops;</li><li>VIP Sunday Boost;</li><li>temporary Promo Codes.</li>
            </ul>
          </div>
          <PlaceholderMedia src="/content/bonuses/promotions-overview.webp" alt="National Casino promotion types" position="66% center" />
        </div>
        <p>According to the standard rules, only one bonus can be active on the account. Combining several promotions is allowed only in cases where it is directly stipulated by the terms of a specific offer.</p>
      </Section>

      <PromotionBanner variant="first-deposit" />

      <Section id="welcome-bonus" title="Get Started with Our Welcome Bonus">
        <div className="content-subsection">
          <div className="split-layout welcome-package-layout">
            <article className="info-card bonus-option-card welcome-package-card">
              <div className="bonus-option-title">
                <Image alt="" aria-hidden="true" height={162} src="/content-icons/coin-1.png" width={162} />
                <h3>What is the Welcome Bonus?</h3>
              </div>
              <p>The standard First Deposit Bonus includes:</p>
              <ul className="feature-list welcome-package-list">
                <li>100% of the deposit amount up to NZ$500;</li><li>100 Free Spins;</li><li>1 Bonus Game;</li>
                <li>minimum deposit of NZ$35 for the full package;</li><li>The x40 wager;</li><li>the maximum bid is NZ$8.</li>
              </ul>
            </article>
            <PlaceholderMedia src="/content/bonuses/welcome.webp" alt="Welcome Bonus rewards and free spins" position="68% center" />
          </div>
          <p>A suitable payment must be the first deposit in the entire history of the account and be carried out in one transaction. Before making a deposit, you must select the First Deposit Bonus card in the Cashier.</p>
          <p>Free Spins are awarded in two stages. The first 50 spins become available after a successful deposit, and the remaining 50 are issued after 24 hours. The winnings received with the help of Free Spins must be wagered x40.</p>
          <p>The offer also includes an Instant Bonus Round in the Big Bass Bonanza 1000 slot. If Pragmatic Play games are not available in the user&apos;s region, the operator can replace the reward with a Bonus Buy feature in a suitable BGaming slot.</p>
          <div className="card-grid card-grid--two bonus-detail-grid">
            <article className="info-card bonus-option-card">
              <div className="bonus-option-title">
                <Image alt="" aria-hidden="true" height={162} src="/content-icons/coin-1.png" width={162} />
                <p>After completing the first offer, the player can activate the Second Deposit Bonus.:</p>
              </div>
              <ul className="feature-list"><li>50% of the second deposit up to NZ$1,000;</li><li>50 Free Spins;</li><li>minimum deposit is NZ$35;</li><li>The x40 wager;</li><li>the maximum bid is NZ$8.</li></ul>
              <p>This package applies only to the next eligible deposit. All 50 Free Spins are credited after processing the second deposit.</p>
            </article>
            <article className="info-card bonus-option-card">
              <div className="bonus-option-title">
                <Image alt="" aria-hidden="true" height={162} src="/content-icons/coin-1.png" width={162} />
                <p>The Crypto First Deposit Bonus is available for the first cryptocurrency payment.:</p>
              </div>
              <ul className="feature-list"><li>200% of the deposit up to NZ$800;</li><li>minimum deposit is NZ$35;</li><li>The x40 wager;</li><li>The maximum bid is NZ$6.50.</li></ul>
              <p>The Crypto First Deposit Bonus replaces the standard welcome offer rather than complementing it. Before paying, you must select the appropriate card and the available cryptocurrency method in Cashier.</p>
            </article>
          </div>
        </div>
        <div className="content-subsection">
          <h3>How to Claim?</h3>
          <p>To activate the welcome bonus:</p>
          <div className="split-layout step-media-layout">
            <StepList>
              <li>Open the New Zealand version of National Casino.</li><li>Click Sign Up and create an account.</li>
              <li>Specify New Zealand as the country of residence.</li><li>Select NZD as the game balance currency.</li>
              <li>Fill out the registration form and log in to your profile.</li><li>Go to the Cashier or Deposit section.</li>
              <li>Find the card of the desired welcome offer.</li><li>Select the bonus before making the payment.</li>
              <li>Deposit the required amount in one transaction.</li><li>Open the Bonuses section and check the award accrual.</li>
              <li>Activate the Free Spins manually if they don&apos;t start automatically.</li>
            </StepList>
            <PlaceholderMedia src="/content/bonuses/welcome-activation.webp" alt="Player selecting and activating a welcome offer" position="70% center" />
          </div>
          <p>For First Deposit Bonus and Crypto First Deposit Bonus, you must deposit at least NZ$35. Highroller Bonus requires a first deposit of NZ$500. After fulfilling the conditions of the first offer, you can select the Second Deposit Bonus and make the next suitable deposit starting from NZ$35.</p>
        </div>
        <div className="content-subsection">
          <h3>Important Terms</h3>
          <p>The following basic conditions apply to National Casino&apos;s welcome offers:</p>
          <ul className="feature-list bonus-terms-list">
            <li>Minimum Deposit: NZ$35 for First Deposit Bonus, Second Deposit Bonus and Crypto First Deposit Bonus; NZ$500 for Highroller Bonus.</li>
            <li>Qualifying Payment: A suitable deposit must be made in one transaction.</li>
            <li>Wagering Requirement: Bonus funds and winnings from Free Spins are usually wagered x40.</li>
            <li>Free Spins Delivery: in the First Deposit Bonus, the first 50 spins are given after the deposit, the second 50 after 24 hours.</li>
            <li>Bonus Game: The Instant Bonus Round is available in Big Bass Bonanza 1000 or replaced with a suitable BGaming game.</li>
            <li>Maximum Bet: the standard limit is NZ$8, and for the Crypto First Deposit Bonus, NZ$6.50.</li>
            <li>Eligible Games: Slots usually give 100% of the wagering contribution; Table Games and Live Dealer Games are not counted.</li>
            <li>Active Bonuses: Only one active bonus is allowed at a time.</li>
            <li>Account Restrictions: One reward is given per user, email, browser, device, and IP address.</li>
          </ul>
          <p>The purchase of Bonus Buy, respins and other paid game features is included in the total bet amount. Exceeding the maximum bet or using an excluded game may void the winnings.</p>
        </div>
      </Section>

      <Section id="weekly-reload-bonuses" title="Boost Your Balance with Weekly Reload Bonuses">
        <p>After using the welcome offers, players can switch to bonuses for the following deposits. You do not need to create a new account to receive them, however, each promotion must be activated separately.</p>
        <p>The main weekly offer is the Friday Reload Bonus. Unlimited Bonus, Secret Bonus, VIP Sunday Boost, Fortune Wheel and temporary campaigns from gaming providers are also available in Promotions. Some promotions are linked to a specific day of the week and use UTC time.</p>
        <div className="subsection-panel">
          <h3>Weekly Reload Offers</h3>
          <p>Friday Reload Bonus is available every Friday from 00:00 to 23:59 UTC.</p>
          <p>The offer includes:</p>
          <ul className="feature-list bonus-terms-list bonus-terms-list--balanced"><li>50% of the deposit amount up to NZ$250;</li><li>100 Free Spins;</li><li>minimum deposit is NZ$35;</li><li>a wager of winnings from x40 spins.</li></ul>
          <p>Free Spins are distributed over two accruals. The first 50 become available after a successful deposit, and another 50 are issued after 24 hours.</p>
          <p>To receive the Friday Reload Bonus, you must:</p>
          <div className="split-layout step-media-layout">
            <StepList><li>Log in to the National Casino account.</li><li>Open a Cashier.</li><li>Select the Friday Reload Bonus card.</li><li>Deposit at least NZ$35 in one transaction.</li><li>Check the accrual in the Bonuses section.</li><li>Activate the bonus and Free Spins.</li><li>Execute the wager before the expiration date.</li></StepList>
            <PlaceholderMedia src="/content/bonuses/friday-reload.webp" alt="Friday Reload Bonus and two-stage free spins" position="68% center" />
          </div>
          <p>A standard x40 wager and a maximum bet of NZ$8 are applied to this bonus.</p>
        </div>
        <div className="subsection-panel">
          <h3>Special Reload Promotions</h3>
          <p>In addition to Friday Reload, National Casino offers several additional promotions for repeat deposits and constant activity.</p>
          <div className="card-grid card-grid--two bonus-detail-grid">
            <article className="info-card"><p><BonusOptionLead>Unlimited Bonus</BonusOptionLead>Unlimited Bonus provides 15 Free Spins after each suitable deposit starting from NZ$50. The available cost of rotation can reach NZ$2. Before making a deposit, you must select an Unlimited Bonus card.</p></article>
            <article className="info-card"><p><BonusOptionLead>VIP Sunday Boost</BonusOptionLead>VIP Sunday Boost is valid on Sundays from 00:00 to 23:59 UTC. The amount of the reward depends on the amount of one transaction:</p><ul className="feature-list"><li>deposit from NZ$40 — 10 Mega Spins;</li><li>deposit from NZ$100 — 25 Mega Spins;</li><li>deposit from NZ$200 — 50 Mega Spins.</li></ul><p>Each Mega Spin has a fixed cost of NZ$2. Only one package can be received in one week, and winnings are wagered x40.</p></article>
            <article className="info-card"><p><BonusOptionLead>Secret Bonus</BonusOptionLead>Secret Bonus is available on Thursdays with a deposit starting from NZ$60. After replenishment, the system randomly selects one of the possible rewards - a percentage bonus, Free Spins or a cash prize without a wager. The received offer must be activated within three days, and seven days are available for wagering.</p></article>
            <article className="info-card"><p><BonusOptionLead>Fortune Wheel Bonus</BonusOptionLead>Fortune Wheel Bonus opens the wheel rotation after a suitable deposit. Possible results may be Free Spins, bonus funds or other rewards. The exact set of prizes depends on the available wheel type.</p></article>
          </div>
          <p>Temporary reload offers and provider campaigns may appear and disappear from the Promotions section.</p>
        </div>
      </Section>

      <PromotionBanner variant="second-deposit" />

      <Section actionLabel={null} id="free-spins-offers" title="Grab Our Free Spins Offers">
        <p>Free Spins are included in several National Casino offers at once. They can supplement the deposit bonus, be credited for installing the application, be given for a subscription, or become a random reward as part of a temporary promotion.</p>
        <p>The number of spins, the order of accrual and the available slot depend on the specific offer. In some bonuses, all Free Spins appear at once, in others they are distributed over several stages. Free Spins usually need to be activated manually.</p>
        <div className="subsection-panel">
          <h3 className="subsection-icon-title"><Image alt="" aria-hidden="true" height={162} src="/content-icons/coin-1.png" width={162} /><span>Free Spins</span></h3>
          <Table caption="Free Spins offers" className="free-spins-table" headers={["Promotion", "Free Spins", "Delivery"]} rows={[
            ["First Deposit Bonus", "100", "50 after a suitable deposit and another 50 after 24 hours"],
            ["Second Deposit Bonus", "50", "After processing the second suitable deposit"],
            ["Friday Reload Bonus", "100", "50 after a suitable deposit and another 50 after 24 hours"],
            ["App Bonus", "10", "Within an hour after the first installation of the PWA and login to the account"],
            ["Subscription Reward", "10", "After fulfilling the subscription conditions"],
            ["Unlimited Bonus", "15", "As one of the random rewards for making a deposit on Thursday"],
            ["Secret Bonus", "From 30 to 300", "As one of the random rewards for making a deposit on Thursday"],
            ["VIP Sunday Boost", "10, 25 or 50 Mega Spins", "The amount depends on the amount of the Sunday deposit"],
          ]} />
        </div>
        <div className="subsection-panel">
          <h3 className="subsection-icon-title"><Image alt="" aria-hidden="true" height={162} src="/content-icons/coin-1.png" width={162} /><span>Slot-Specific Promotions</span></h3>
          <p>National Casino holds promotions related to individual developers&apos; games. In such offers, the reward may drop out directly during a regular round in a suitable slot.</p>
          <div className="bonus-grid slot-promotion-grid">
            <article className="bonus-card slot-promotion-card">
              <Image className="bonus-card__background" src="/bonuses/special/backgrounds/prize-drops.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 75vw" aria-hidden="true" />
              <div className="bonus-card__content">
                <h3>Prize Drops</h3>
                <p>Prize Drops distributes a portion of the total prize pool of up to NZ$160,000 among the participants.</p>
                <p>To participate, you must:</p>
                <StepList><li>Open the Prize Drops card.</li><li>Check the duration of the promotion.</li><li>Select a game from the list of participating slots.</li><li>Use a bid not lower than the set minimum.</li><li>Continue playing during the campaign period.</li></StepList>
                <p>A separate participation fee is usually not required. However, the total fund of NZ$160,000 is distributed among all eligible participants and is not a guaranteed single player prize.</p>
                <a className="button button--primary bonus-card__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Get bonus</a>
              </div>
              <div className="bonus-card__art slot-promotion-card__art" aria-hidden="true">
                <Image src="/bonuses/special/prize-drops.webp" alt="" width={482} height={590} loading="eager" unoptimized />
              </div>
            </article>
            <article className="bonus-card slot-promotion-card">
              <Image className="bonus-card__background" src="/bonuses/special/backgrounds/pragmatic-dw.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 75vw" aria-hidden="true" />
              <div className="bonus-card__content">
                <h3>Pragmatic D&amp;W</h3>
                <p>Pragmatic D&amp;W is a Pragmatic Play promotion with a stated fund of €2,000,000 per month.</p>
                <p>The rewards are distributed in the provider&apos;s suitable games. Before starting, you need to check:</p>
                <ul className="feature-list"><li>list of participating slots;</li><li>period of the event;</li><li>the minimum bid;</li><li>Reward drop rules;</li><li>availability of wagering;</li><li>the deadline for receiving the winnings.</li></ul>
                <p>Despite the use of NZD in the account, the fund of this campaign is displayed in EUR.</p>
                <a className="button button--primary bonus-card__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Get bonus</a>
              </div>
              <div className="bonus-card__art slot-promotion-card__art" aria-hidden="true">
                <Image src="/bonuses/special/pragmatic-dw.webp" alt="" width={449} height={544} loading="eager" unoptimized />
              </div>
            </article>
            <article className="bonus-card slot-promotion-card">
              <Image className="bonus-card__background" src="/bonuses/special/backgrounds/bgaming-drops.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 75vw" aria-hidden="true" />
              <div className="bonus-card__content">
                <h3>BGaming Drops</h3>
                <p>BGaming Drops includes 12,000 prizes in suitable BGaming slots.</p>
                <p>The reward can appear directly during a regular spin. To participate, the selected game, the amount of the bet and the time of the round must comply with the rules of the current campaign.</p>
                <p>Launching any BGaming slot does not guarantee participation: you must use a title that is included in the current promotion list.</p>
                <a className="button button--primary bonus-card__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Get bonus</a>
              </div>
              <div className="bonus-card__art slot-promotion-card__art slot-promotion-card__art--compact" aria-hidden="true">
                <Image src="/bonuses/special/bgaming-drops.webp" alt="" width={277} height={312} loading="eager" unoptimized />
              </div>
            </article>
            <article className="bonus-card slot-promotion-card">
              <Image className="bonus-card__background" src="/bonuses/special/backgrounds/fortune-wheel.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 75vw" aria-hidden="true" />
              <div className="bonus-card__content">
                <h3>Fortune Wheel Bonus</h3>
                <p>Fortune Wheel becomes available after a suitable deposit. The user gets the opportunity to start the wheel and win one of the random rewards.</p>
                <p>Possible results may be:</p>
                <ul className="feature-list"><li>Free Spins;</li><li>bonus funds;</li><li>Reward Points;</li><li>a cash prize.</li></ul>
                <p>The composition of the awards depends on the available type of wheel. After the spin, the prize may require manual activation in the Bonuses section.</p>
                <a className="button button--primary bonus-card__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Get bonus</a>
              </div>
              <div className="bonus-card__art slot-promotion-card__art" aria-hidden="true">
                <Image src="/bonuses/special/fortune-wheel.webp" alt="" width={481} height={590} loading="eager" unoptimized />
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section id="loyalty-rewards" title="Loyalty Rewards & VIP Perks">
        <p>The National Casino has a VIP Program consisting of 15 levels. Participation starts automatically: the user accumulates Comp Points and moves on to the next level after reaching the set threshold.</p>
        <p>As the level increases, two main characteristics change:</p>
        <ul className="feature-list bonus-terms-list bonus-terms-list--balanced"><li>reward for achieving a new status;</li><li>the exchange rate of Comp Points for bonus funds.</li></ul>
        <p>At the initial levels, mostly Free Spins are given. From Level 3, cash rewards are added to them, and starting from Level 5, prizes are completely converted to a monetary format.</p>
        <div className="content-subsection">
          <h3>Loyalty System</h3>
          <p>To achieve each VIP Level, you must accumulate a set number of Comp Points.</p>
          <Table caption="VIP loyalty levels" headers={["Level", "Points"]} rows={[
            ["Level 1", "25 CP"], ["Level 2", "100 CP"], ["Level 3", "500 CP"], ["Level 4", "1,200 CP"], ["Level 5", "3,000 CP"],
            ["Level 6", "10,000 CP"], ["Level 7", "25,000 CP"], ["Level 8", "50,000 CP"], ["Level 9", "100,000 CP"], ["Level 10", "200,000 CP"],
            ["Level 11", "400,000 CP"], ["Level 12", "750,000 CP"], ["Level 13", "1,200,000 CP"], ["Level 14", "2,000,000 CP"], ["Level 15", "3,500,000 CP"],
          ]} />
        </div>
        <div className="content-subsection">
          <h3>VIP Benefits</h3>
          <p>The higher the VIP Level, the more profitable the Comp Points exchange rate becomes. At Level 1, it takes 110 CP to receive NZ$1.25. Starting from Level 9, the best exchange rate is set at 60 CP for NZ$1.25.</p>
          <Table caption="VIP benefits" headers={["Level", "Exchange Rate", "Prize"]} rows={[
            ["Level 1", "110 CP : NZ$1.25", "25 Free Spins"], ["Level 2", "105 CP : NZ$1.25", "50 Free Spins"], ["Level 3", "100 CP : NZ$1.25", "NZ$15 + 20 Free Spins"],
            ["Level 4", "95 CP : NZ$1.25", "NZ$30 + 40 Free Spins"], ["Level 5", "90 CP : NZ$1.25", "NZ$75"], ["Level 6", "85 CP : NZ$1.25", "NZ$150"],
            ["Level 7", "80 CP : NZ$1.25", "NZ$300"], ["Level 8", "70 CP : NZ$1.25", "NZ$750"], ["Level 9", "60 CP : NZ$1.25", "NZ$1,500"],
            ["Level 10", "60 CP : NZ$1.25", "NZ$3,200"], ["Level 11", "60 CP : NZ$1.25", "NZ$6,500"], ["Level 12", "60 CP : NZ$1.25", "NZ$16,000"],
            ["Level 13", "60 CP : NZ$1.25", "NZ$32,000"], ["Level 14", "60 CP : NZ$1.25", "NZ$80,000"], ["Level 15", "60 CP : NZ$1.25", "NZ$160,000"],
          ]} />
          <p>The cash Prize can be credited to the bonus, and not to the real balance. Before using the reward, you must check the wager, expiration date, maximum bet and withdrawal limit.</p>
        </div>
      </Section>

      <PromotionBanner variant="highroller" />

      <Section actionLabel={null} id="weekly-cashback" title="Get Weekly Cashback">
        <p>Cashback can appear as a temporary, personal, or VIP offer.</p>
        <div className="split-layout cashback-availability-layout">
          <div>
            <p>The availability of the refund may depend on:</p>
            <ul className="feature-list cashback-availability-list"><li>VIP Level;</li><li>the period of activity;</li><li>the size of the net loss;</li><li>selected games;</li><li>performing a minimum turnover;</li><li>Manual activation;</li><li>individual account conditions.</li></ul>
          </div>
          <PlaceholderMedia src="/content/bonuses/cashback-availability.webp" alt="Weekly cashback eligibility factors" position="right top" />
        </div>
        <div className="bonus-grid cashback-bonus-grid">
          <article className="bonus-card cashback-bonus-card">
            <Image className="bonus-card__background" src="/bonuses/backgrounds/friday-reload.png" alt="" fill sizes="(max-width: 1180px) 100vw, 75vw" aria-hidden="true" />
            <div className="bonus-card__content">
              <h3>How Cashback Works</h3>
              <p>The Cashback calculation is usually based on a net loss over a set period. The system can compare the total amount of eligible bets with the winnings received and charge a portion of the negative result as a refund.</p>
              <p>Cashback can be credited in several forms:</p>
              <ul className="feature-list"><li>real-money balance;</li><li>bonus balance;</li><li>Free Spins;</li><li>Comp Points;</li><li>personal VIP reward.</li></ul>
              <p>The total maximum winnings associated with the cashback bonus is NZ$10,000, unless the individual rules set a different limit.</p>
              <a className="button button--primary bonus-card__action" href={GENERAL_AFFILIATE_URL} rel="sponsored">Join now</a>
            </div>
            <div className="bonus-card__art cashback-bonus-card__art" aria-hidden="true">
              <Image src="/bonuses/friday-reload.png" alt="" width={448} height={431} unoptimized />
            </div>
          </article>
        </div>
        <div className="subsection-panel">
          <h3>Claiming Your Cashback</h3>
          <p>If the Cashback appears in the account, the order in which it is received is as follows:</p>
          <div className="split-layout step-media-layout">
            <StepList><li>Log in to your National Casino account.</li><li>Open the Promotions or VIP Club section.</li><li>Find the active Cashback card.</li><li>Check the billing period and the refund amount.</li><li>Check the list of participating games.</li><li>Check minimum loss, wagering, and maximum cashout.</li><li>Click Activate if the offer requires manual activation.</li><li>Use only suitable games and allowed bets.</li><li>After the end of the period, open the Bonuses section.</li><li>Check the refund accrual.</li><li>Perform wagering if the Cashback has been credited to the bonus balance.</li></StepList>
            <PlaceholderMedia src="/content/bonuses/cashback-claim.webp" alt="Player claiming casino cashback" position="68% center" />
          </div>
          <p>Some personal offers may be activated automatically.</p>
          <a className="button button--primary content-section__action" href={GENERAL_AFFILIATE_URL} rel="sponsored">Join now</a>
        </div>
      </Section>

      <Section id="tournament" title="Join Our Exciting Tournament">
        <p>The National Casino platform has a separate Tournaments section with time-limited slot competitions. Participants launch suitable games, place bets in the range and receive tournament points.</p>
        <p>The player&apos;s place is determined by the number of points scored. The higher the score compared to other participants, the higher the position in the leaderboard and the probability of receiving a part of the prize pool.</p>
        <div className="content-subsection">
          <h3>Ongoing and Upcoming Tournaments</h3>
          <p>The National Casino currently offers three Treasure Race formats.</p>
          <Table caption="Treasure Race tournaments" headers={["Tournament", "Cash Prize", "Free Spins"]} rows={[
            ["Sonic Treasure Race", "NZ$100", "300 Free Spins"], ["Flash Treasure Race", "NZ$75", "300 Free Spins"], ["Rapid Treasure Race", "NZ$50", "300 Free Spins"],
          ]} />
        </div>
        <div className="content-subsection">
          <h3>How to Participate</h3>
          <p>To join the active Treasure Race:</p>
          <div className="split-layout step-media-layout">
            <StepList><li>Log in to your National Casino account.</li><li>Open the Tournaments section.</li><li>Choose Sonic, Flash or Rapid Treasure Race.</li><li>Check the dates and times of the event.</li><li>Learn the rules of scoring tournament points.</li><li>Open the list of participating slots.</li><li>Check the allowed betting range.</li><li>Click the participate button if an opt-in is required.</li><li>Launch only suitable games.</li><li>Keep track of your place on the leaderboard.</li><li>After the event ends, check the Bonuses and account notifications section.</li></StepList>
            <PlaceholderMedia src="/content/bonuses/tournament.webp" alt="Casino tournament race and leaderboard trophy" position="68% center" />
          </div>
          <p>Points are usually awarded automatically. A bet may not be counted if an unsuitable game is used, the betting range is violated, or the game round is completed after the end of the tournament.</p>
        </div>
      </Section>

      <PromotionBanner variant="friday-reload" />

      <Section id="limited-time-offers" title="Grab Limited-Time Offers">
        <p>The Promotions section is not limited to permanent deposit bonuses. National Casino offers temporary offers, promotions from gaming providers and no deposit bonuses that may disappear after the end of the established period.</p>
        <div className="split-layout">
          <div><p>The section contains the following suggestions:</p><ul className="feature-list limited-offers-list"><li>Get the App, Grab FS!;</li><li>A Quick Tap! A Sweet Reward!;</li><li>Prize Drops;</li><li>Fortune Wheel Bonus;</li><li>Secret Bonus;</li><li>Unlimited Bonus;</li><li>Pragmatic D&amp;W;</li><li>BGaming Drops!;</li><li>Promo Codes and Bonuses.</li></ul></div>
          <PlaceholderMedia src="/content/bonuses/limited-offers.webp" alt="Limited-time casino rewards and events" position="66% center" />
        </div>
        <div className="subsection-panel">
          <h3>Exclusive Events</h3>
          <p>One of the no deposit offers is the App Bonus. After the first suitable installation of National Casino through the Application section, the user receives 10 Free Spins.</p>
          <p>The main terms of the App Bonus:</p>
          <ul className="feature-list bonus-terms-list"><li>provided once;</li><li>no deposit required;</li><li>Free Spins are awarded after installing and logging into the account;</li><li>the reward usually appears within one hour.;</li><li>Seven days are allowed for use and wagering.;</li><li>The user, email, browser, device, and IP address are taken into account.;</li><li>General Bonus Terms &amp; Conditions apply.</li></ul>
          <p>The application is installed from the website in the PWA format. You do not need to download a separate APK or create a new account.</p>
          <p>Offer A Quick Tap! A Sweet Reward! provides 10 Free Spins after fulfilling the subscription conditions. The appropriate slot, wager, and expiration date must be checked on the promotion page.</p>
          <p>The Secret Bonus also applies to temporary events. The exact prize is unknown in advance: the system selects the reward after a suitable deposit on Thursday. Possible results are a percentage bonus, Free Spins or NZ$150 without wagering.</p>
        </div>
        <div className="subsection-panel">
          <h3>Promotional Codes</h3>
          <p>The National Casino has a separate Promo Codes and Bonuses card. Promo codes can be distributed through affiliate campaigns, promotional offers, email newsletters, and temporary promotions.</p>
          <p>Depending on the specific offer, the code can be entered:</p>
          <ul className="feature-list"><li>in a special field during registration;</li><li>in the Promotions section;</li><li>in the Cashier before depositing;</li><li>in the Bonus or Coupon field in your merchant profile.</li></ul>
          <p>The Promo code does not cancel the General Bonus Terms. Even if the short advertising message does not specify a wager or a bid limit, the general restrictions remain in effect.</p>
        </div>
      </Section>

      <Section actionLabel={null} className="image-copy-section" id="play-responsibly" title="Play Responsibly">
        <Image className="image-copy-section__image" src="/content/bonuses/responsible-gaming.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>Bonuses increase the available game balance, but do not change the mathematical advantage of the casino and do not guarantee a positive result. The wager, expiration dates, and betting restrictions may encourage you to play longer than planned.</p>
          <p>Before activating the offer, you should evaluate not only the amount of the reward, but also the amount that you will need to put in order to fulfill the conditions.</p>
          <p>Before starting the game, it is recommended to determine:</p>
          <ul><li>maximum budget per session;</li><li>weekly or monthly limit;</li><li>the allowed duration of the game;</li><li>the amount to stop after losing it;</li><li>bonuses corresponding to the selected budget;</li><li>time for mandatory breaks.</li></ul>
          <p>You should not increase the bets to refund the lost funds or make an additional deposit just to complete the wagering.</p>
        </div>
      </Section>

      <Section actionLabel={null} className="image-copy-section summary-section" id="gaming-bonuses-summary" title="Join National Casino for Gaming Bonuses">
        <Image className="image-copy-section__image" src="/content/bonuses/summary.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>National Casino offers New Zealand players bonuses for both first and second deposits. The initial series includes the First Deposit Bonus, Crypto First Deposit Bonus and Highroller Bonus, after which the Second Deposit Bonus, Friday Reload, Unlimited Bonus and other offers become available.</p>
          <p>Slot lovers can also get Free Spins, participate in Prize Drops and use Pragmatic Play and BGaming promotions. Regular users have access to Comp Points, 15 VIP Club levels, Status upgrade rewards, and VIP Sunday Boost.</p>
          <p>National Casino offers a wide range of promotions, but the optimal bonus remains, the terms of which correspond to the gaming budget and do not require an increase in planned expenses.</p>
          <a className="button button--primary content-section__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Get bonus</a>
        </div>
      </Section>
    </div>
  );
}
