import Image from "next/image";
import type { ReactNode } from "react";
import { GENERAL_AFFILIATE_URL } from "./affiliateLinks";
import { AppPromoBanner } from "./AppPromoBanner";
import { JsonLd } from "./JsonLd";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { PromotionBanner } from "./PromotionBanner";

const appFaqItems = [
  ["Does National Casino Have an Android App?", "Yes. National Casino can be installed on Android as a PWA via Google Chrome. This is not a native app from Google Play and not a separate APK."],
  ["Is the National Casino App Available in the App Store?", "There is no confirmed National Casino app in the Apple App Store. On the iPhone and iPad, the platform is added to the home screen via Safari."],
  ["Do I Need to Download an APK?", "No. You do not need to download the APK and allow the installation of files from unknown sources. The application is installed via a browser."],
  ["Is the National Casino App Free?", "Yes. The PWA installation is free. The user independently decides whether to make a deposit and whether to play for real money."],
  ["Do I Need a New Account for the App?", "No. The application uses the same email address and password as on the desktop website or in the mobile web version. The balance and account history are synchronized automatically."],
  ["Can New Zealand Players Use NZD in the App?", "Yes. If the NZD currency is set in the profile, the balance, deposits and local bonus amounts are displayed in New Zealand dollars."],
  ["What Is the National Casino App Bonus?", "For the first suitable PWA installation, 10 Free Spins are provided without a deposit. The user must log into the account through the installed application and check the accrual in the Bonuses section.\n\nThe bonus is given once per person, email, browser, device, and IP address. The validity period, wagering and other general conditions apply to it."],
  ["Can I Play Live Casino Through the App?", "Yes. Live Blackjack, Live Roulette, Live Baccarat, Live Poker and Game Shows are available in the app. The game requires authorization, a real balance and a stable Internet connection."],
  ["Does the App Update Automatically?", "Yes. Since National Casino operates as a PWA, the main changes are downloaded from the web platform. You do not need to install updates manually through the app store."],
] as const;

export const appSections: ReadonlyArray<readonly [string, string]> = [
  ["national-casino-app", "National Casino App for iOS and Android"],
  ["download-install-app", "How to Download & Install the App?"],
  ["app-features-benefits", "App Features & Benefits"],
  ["app-requirements", "National Casino App Requirements"],
  ["mobile-web-vs-app", "Mobile Web Version vs App"],
  ["app-faq", "FAQ"],
  ["responsible-gaming", "Responsible Gaming"],
  ["final-thoughts", "Final Thoughts"],
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

function Table({ caption, headers, rows }: { caption: string; headers: string[]; rows: string[][] }) {
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
        className="app-download-button__icon"
        src={isAndroid ? "/icons/android.svg" : "/icons/apple.svg"}
        width={isAndroid ? 51 : 45}
        height={60}
        alt=""
        aria-hidden="true"
      />
      <span className="app-download-button__text">
        <span>Lade die</span>
        <span>{isAndroid ? "Android-App herunter" : "iOS-App herunter"}</span>
      </span>
    </a>
  );
}

function FeatureTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="app-feature-title">
      <Image alt="" aria-hidden="true" height={180} src="/content-icons/cards.png" width={188} />
      <span>{children}</span>
    </h3>
  );
}

export function AppContent() {
  return (
    <div className="main-content app-content">
      <Section className="image-copy-section app-intro-image-section" id="national-casino-app" title="National Casino App for iOS and Android">
        <Image className="image-copy-section__image" src="/content/app/intro.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>National Casino offers mobile access to games through an installable web application. It works in the PWA format and is launched from a separate icon on the smartphone screen in much the same way as a regular application.</p>
          <p>The user does not need to search for National Casino on Google Play or the Apple App Store. Installation is performed directly from the official website via the Chrome browser on Android or Safari on iPhone and iPad. A separate APK file is also not needed.</p>
          <p>The application uses the same account as on the desktop site. Balance, Active bonuses, Comp Points, VIP Level and transaction history are synchronized between devices.</p>
          <p>For the first suitable installation, an App Bonus is provided — 10 Free Spins without a deposit. The award is given once and may require manual activation after logging into the account.</p>
        </div>
      </Section>

      <Section id="download-install-app" title="How to Download & Install the App?">
        <p>The National Casino app is installed through the regional version of the New Zealand website. The user needs to open the Application section or use the browser&apos;s suggestion to add the site to the home screen.</p>
        <p>General installation procedure:</p>
        <div className="split-layout step-media-layout app-general-install">
          <StepList>
            <li>Open the National Casino on your smartphone or tablet.</li>
            <li>Make sure that the New Zealand version of the website is used.</li>
            <li>Log in to your existing account or complete the registration.</li>
            <li>Go to the Application section.</li>
            <li>Select the application installation.</li>
            <li>Confirm adding National to the home screen.</li>
            <li>Launch the application through the icon that appears.</li>
            <li>Log in to your account again if the authorization has not been saved.</li>
          </StepList>
          <PlaceholderMedia src="/content/app/general-install.webp" alt="Installing the casino PWA from a mobile browser" position="66% center" />
        </div>
        <p>PWA does not take up as much space as a full-fledged native application, since most of the data is downloaded over the Internet. An active network connection is still required to launch games and process payments.</p>

        <div className="app-install-layout app-page-install-layout">
          <div className="split-layout app-install-row">
            <div className="app-install-copy app-platform-panel">
              <PlatformTitle icon="android" title="Android Download and Installation" />
              <p>On Android, the installation is done via Google Chrome. You do not need to download the APK from a third-party site and allow installation from unknown sources.</p>
              <p>To install National Casino on Android:</p>
              <StepList>
                <li>Open Chrome.</li>
                <li>Go to the National Casino for New Zealand website.</li>
                <li>Log in to your account.</li>
                <li>Open the Application section.</li>
                <li>Click Install App.</li>
                <li>Confirm the installation in the pop-up browser window.</li>
                <li>Wait for the National icon to appear on the main screen.</li>
                <li>Open the app and check the authorization.</li>
              </StepList>
              <DownloadButton platform="android" />
              <p>If the Install App button does not appear, you can open the Chrome menu and select Install app or Add to Home screen.</p>
            </div>
            <PlaceholderMedia src="/content/app/android-install.webp" alt="Casino PWA installation on an Android phone" position="68% center" />
          </div>

          <div className="split-layout app-install-row app-install-row--media-first">
            <div className="app-install-copy app-platform-panel">
              <PlatformTitle icon="apple" title="iOS Download at National Casino" />
              <p>On the iPhone and iPad, the app is added via Safari. Installation from the Apple App Store is not required.</p>
              <p>Procedure of actions:</p>
              <StepList>
                <li>Open Safari.</li>
                <li>Go to the National Casino regional page.</li>
                <li>Log in to your account.</li>
                <li>Click the Share button.</li>
                <li>Select Add to Home Screen.</li>
                <li>Check the name of the application.</li>
                <li>Click Add.</li>
                <li>Launch National from the home screen.</li>
              </StepList>
              <DownloadButton platform="ios" />
              <p>It is recommended to use Safari for proper installation. In other iOS browsers, the Add to Home Screen feature may work differently or may not be available.</p>
            </div>
            <PlaceholderMedia src="/content/app/ios-install.webp" alt="Casino PWA added to an iPhone home screen" position="35% center" />
          </div>
        </div>
      </Section>

      <PromotionBanner variant="first-deposit" />

      <Section id="app-features-benefits" title="App Features & Benefits">
        <p>The mobile application retains the main features of the desktop version and adapts them to touch controls. The user can search for games, top up their balance, activate bonuses, and contact support from a single device.</p>
        <div className="card-grid card-grid--two app-feature-grid">
          <article className="info-card app-feature-card">
            <FeatureTitle>Superior Portability</FeatureTitle>
            <p>The main advantage of the application is quick access to the platform without constantly searching the site in the browser. The National icon is placed on the main screen next to other applications.</p>
            <p>The player can switch between smartphone, tablet and computer while continuing to use:</p>
            <ul className="feature-list">
              <li>total real balance;</li>
              <li>bonus balance;</li>
              <li>Active Free Spins;</li>
              <li>VIP progress;</li>
              <li>Comp Points;</li>
              <li>the history of deposits and withdrawals;</li>
              <li>saved profile settings.</li>
            </ul>
            <p>The mobile format is suitable for short gaming sessions, as well as for viewing promotions or checking payment status.</p>
          </article>

          <article className="info-card app-feature-card">
            <FeatureTitle>Stronger Security</FeatureTitle>
            <p>PWA is installed directly from the National Casino website, so the user does not need to download an APK from an unknown source or transfer data to a third-party app store.</p>
            <p>To protect your account, we recommend:</p>
            <ul className="feature-list">
              <li>use a unique password;</li>
              <li>do not save login information on someone else&apos;s device;</li>
              <li>check the website address before authorization;</li>
              <li>do not share the password with the support staff;</li>
              <li>log out of your account on a shared smartphone;</li>
              <li>install browser and operating system updates;</li>
              <li>Use a screen lock with a PIN or biometrics.</li>
            </ul>
            <p>The app uses the same login and the same KYC procedures as the main site. Installing a PWA by itself is not a substitute for identity verification</p>
          </article>

          <article className="info-card app-feature-card">
            <FeatureTitle>Perfect Mobile Optimization</FeatureTitle>
            <p>The National Casino interface automatically adjusts to the size of the screen. The main buttons, game categories, and Cashier are available through the mobile menu, and the game cards are arranged in a compact grid.</p>
            <p>Optimized for mobile devices:</p>
            <ul className="feature-list">
              <li>search by game name;</li>
              <li>filters by category and providers;</li>
              <li>switching between casino and sportsbook;</li>
              <li>viewing bonus cards;</li>
              <li>Live Chat;</li>
              <li>deposit window;</li>
              <li>VIP section;</li>
              <li>vertical and horizontal game mode.</li>
            </ul>
            <p>Slots are usually launched directly in the browser window of the application. Demo Mode is available in many games, whereas Live Games require authorization and real balance.</p>
          </article>

          <article className="info-card app-feature-card app-feature-card--exclusive">
            <FeatureTitle>App-Only Exclusive Features</FeatureTitle>
            <p>The main exclusive offer for mobile users is the App Bonus.</p>
            <p>Terms of the promotion:</p>
            <ul className="feature-list">
              <li>10 Free Spins;</li>
              <li>no deposit required;</li>
              <li>available after the first suitable installation;</li>
              <li>The user must log in to the account through the installed application.;</li>
              <li>The reward can be awarded within one hour.;</li>
              <li>The bonus is given once per person, email, browser, device and IP address;</li>
              <li>Free Spins must be used within the prescribed time limit.;</li>
              <li>General Bonus Terms &amp; Conditions apply.</li>
            </ul>
            <p>After installation, open the Bonuses section and check the available reward. If the Free Spins do not appear within the specified time, you must contact the Live Chat before the game starts.</p>
          </article>
        </div>
      </Section>

      <AppPromoBanner />

      <Section id="app-requirements" title="National Casino App Requirements">
        <p>National Casino works as a PWA, so you don&apos;t need to download an APK or search for an app in the official store to install it. The main requirement is a modern mobile device with a browser that supports adding web applications to the home screen.</p>
        <Table
          caption="National Casino app requirements"
          headers={["Requirements", "Conditions"]}
          rows={[
            ["Supported devices", "Android smartphones and tablets, iPhone and iPad"],
            ["Operating system", "Modern version of Android, iOS or iPadOS"],
            ["Recommended browser for Android", "Google Chrome"],
            ["Recommended browser for iOS", "Safari"],
            ["Internet connection", "Wi-Fi, 4G or 5G"],
            ["Free space", "Small volume for icons and local PWA data"],
            ["Account", "Existing National Casino profile or new registration"],
            ["Currency for New Zealand", "NZD"],
            ["APK file", "Not needed"],
            ["Google Play / App Store", "No"],
            ["Age", "18+"],
            ["Verification", "It may be required for payments and withdrawals"],
          ]}
        />
      </Section>

      <PromotionBanner variant="second-deposit" />

      <Section id="mobile-web-vs-app" title="Mobile Web Version vs App">
        <p>The mobile website and the installed application use the same web platform. Their set of functions is almost the same, but the PWA provides faster access through a separate icon.</p>
        <Table
          caption="Mobile web version and installed app comparison"
          headers={["Mobile Web Version", "Installed App"]}
          rows={[
            ["Does not require installation", "It is launched via a separate icon"],
            ["Works in Chrome and Safari", "It opens in an independent window"],
            ["Does not add the app to the device", "Added to the main screen"],
            ["Uses the current version of the site", "Updated together with the website"],
            ["Suitable for rare use", "Convenient for regular entry"],
            ["Does not provide install bonus", "Allows you to get 10 Free Spins for the first install"],
          ]}
        />
        <a className="button button--primary content-section__action" href={GENERAL_AFFILIATE_URL} rel="sponsored">Jetzt beitreten</a>
      </Section>

      <Section id="app-faq" title="FAQ">
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
              {answer.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </details>
          ))}
        </div>
      </Section>

      <PromotionBanner variant="highroller" />

      <Section className="image-copy-section app-responsible-section" id="responsible-gaming" title="Responsible Gaming">
        <Image className="image-copy-section__image" src="/content/shared/responsible-gaming.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>The National Casino mobile app makes it easier to access games, so it&apos;s especially important to set personal limits in advance. Bonuses, Free Spins and notifications about new promotions do not change the probability of winning and do not guarantee a refund of the funds spent.</p>
          <p>Before starting a mobile session, it is recommended to determine:</p>
          <ul className="feature-list">
            <li>the maximum deposit amount;</li>
            <li>acceptable amount of losses;</li>
            <li>duration of the game session;</li>
            <li>weekly or monthly budget;</li>
            <li>the moment after which it is necessary to stop the game;</li>
            <li>bonus conditions corresponding to the planned expenses.</li>
          </ul>
          <p>You should not increase the bets in order to complete wagering faster or return the lost funds.</p>
        </div>
      </Section>

      <Section className="image-copy-section app-final-section" id="final-thoughts" title="Final Thoughts">
        <Image className="image-copy-section__image" src="/content/app/final.webp" alt="" fill sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
        <div className="image-copy-section__overlay" aria-hidden="true" />
        <div className="image-copy-section__copy">
          <p>The National Casino App provides players from New Zealand with almost the same set of features as the desktop version: slots, Live Casino, sports betting, Cashier, Promotions, Tournaments and VIP Club.</p>
          <p>The application works in PWA format and is installed directly from the website. On Android, Chrome and the Install App command are used, while on iPhone and iPad, Safari and the Add to Home Screen function are used. You do not need to download the APK or search for the platform on Google Play or the App Store.</p>
          <p>The main advantages of the mobile version:</p>
          <ul>
            <li>quick launch from the home screen;</li>
            <li>shared account and balance with the desktop website;</li>
            <li>NZD support;</li>
            <li>access to games and payments;</li>
            <li>automatic updates via the web platform;</li>
            <li>10 Free Spins for the first suitable installation.</li>
          </ul>
          <p>The main limitation is that the application does not work without the Internet. The National Casino App is suitable for users who regularly access the platform from a smartphone and want to get more convenient access without constantly opening a browser.</p>
          <a className="button button--primary content-section__action" href={GENERAL_AFFILIATE_URL} rel="sponsored">Jetzt beitreten</a>
        </div>
      </Section>

      <PromotionBanner variant="friday-reload" />
    </div>
  );
}
