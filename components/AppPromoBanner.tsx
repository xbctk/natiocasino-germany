import Image from "next/image";
import { GENERAL_AFFILIATE_URL } from "./affiliateLinks";

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

export function AppPromoBanner() {
  return (
    <div className="app-promo-banner">
      <Image
        className="app-promo-banner__background"
        src="/app/app-promo-background.webp"
        alt=""
        fill
        sizes="(max-width: 1180px) 100vw, 80vw"
        aria-hidden="true"
      />
      <div className="app-promo-banner__button app-promo-banner__button--ios">
        <DownloadButton platform="ios" />
      </div>
      <Image
        className="app-promo-banner__phone"
        src="/app/app-bonus-phone.webp"
        width={473}
        height={581}
        alt="National Casino application shown on a mobile phone"
      />
      <div className="app-promo-banner__button app-promo-banner__button--android">
        <DownloadButton platform="android" />
      </div>
    </div>
  );
}
