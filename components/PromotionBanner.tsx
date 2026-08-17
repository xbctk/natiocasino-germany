import Image from "next/image";
import { BONUS_AFFILIATE_URL } from "./affiliateLinks";

const promotionBanners = {
  "first-deposit": {
    title: "First Deposit Bonus",
    offer: "100% up to NZ$500",
    bonus: "+ 100 Free spins",
    image: "/banners/first-deposit.webp",
  },
  "second-deposit": {
    title: "Second Deposit Bonus",
    offer: "50% up to NZ$1000",
    bonus: "+ 50 Free spins",
    image: "/banners/second-deposit.webp",
  },
  highroller: {
    title: "Highroller Bonus",
    offer: "100% up to NZ$3000",
    bonus: null,
    image: "/banners/highroller.webp",
  },
  "friday-reload": {
    title: "Friday Reload Bonus",
    offer: "50% up to NZ$250",
    bonus: "+ 100 Free spins",
    image: "/banners/friday-reload.webp",
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
        <a className="button button--primary promotion-banner__action" href={BONUS_AFFILIATE_URL} rel="sponsored">Get bonus</a>
      </div>
    </aside>
  );
}
