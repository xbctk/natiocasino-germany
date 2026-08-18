import Image from "next/image";
import { BONUS_AFFILIATE_URL } from "./affiliateLinks";

const promotionBanners = {
  "first-deposit": {
    title: "Einzahlungsbonus",
    offer: "100 % bis zu 100 EUR",
    bonus: "+ 100 Freispiele",
    image: "/banners/first-deposit-v2.jpg",
  },
  "second-deposit": {
    title: "Zweite Einzahlungsbonus",
    offer: "50 % bis zu 200 EUR",
    bonus: "+ 50 Freispiele",
    image: "/banners/second-deposit-v2.jpg",
  },
  highroller: {
    title: "Highroller-Bonus",
    offer: "100 % bis zu 750 EUR",
    bonus: null,
    image: "/banners/highroller-v2.jpg",
  },
  "friday-reload": {
    title: "Freitags-Reload-Bonus",
    offer: "50 % bis zu 250 EUR",
    bonus: "+ 100 Freispiele",
    image: "/banners/friday-reload-v2.jpg",
  },
} as const;

export type PromotionBannerVariant = keyof typeof promotionBanners;

export function PromotionBanner({ variant }: { variant: PromotionBannerVariant }) {
  const banner = promotionBanners[variant];

  return (
    <aside className="promotion-banner" aria-label={banner.title}>
      <Image
        className="promotion-banner__image"
        src={banner.image}
        alt=""
        fill
        sizes="(max-width: 1180px) 100vw, 80vw"
        aria-hidden="true"
      />
      <div className="promotion-banner__overlay" aria-hidden="true" />
      <div className="promotion-banner__content">
        <p className="promotion-banner__title">{banner.title}</p>
        <p className="promotion-banner__offer">
          <span className="promotion-banner__offer-main">{banner.offer}</span>
          {banner.bonus && <span className="promotion-banner__offer-bonus">{banner.bonus}</span>}
        </p>
        <a className="button button--primary promotion-banner__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Bonus Holen</a>
      </div>
    </aside>
  );
}
