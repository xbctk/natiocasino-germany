import Image from "next/image";
import Link from "next/link";
import { GENERAL_AFFILIATE_URL } from "./affiliateLinks";
import { JsonLd } from "./JsonLd";

const siteUrl = "https://natiocasino.vercel.app";

const mainTitleLines = ["National Casino: Slots, Live-Spiele & echte RTP in Deutschland"];
const mainDescriptionLines = [
  "National Casino legt die Karten offen — Live-RTP auf jeder Kachel, eine thematische Lobby, Evolution-Livetische und ein 15-stufiger VIP-Aufstieg.",
];

export function Hero({
  breadcrumbLabel,
  breadcrumbPath,
  className = "",
  descriptionLines = mainDescriptionLines,
  imageSrc = "/content/main/hero.webp",
  showAction = true,
  titleLines = mainTitleLines,
}: {
  breadcrumbLabel?: string;
  breadcrumbPath?: string;
  className?: string;
  descriptionLines?: readonly string[];
  imageSrc?: string;
  showAction?: boolean;
  titleLines?: readonly string[];
}) {
  return (
    <section className={`hero ${className}`.trim()} aria-labelledby="hero-title">
      {breadcrumbLabel && breadcrumbPath ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: breadcrumbLabel, item: `${siteUrl}${breadcrumbPath}` },
            ],
          }}
        />
      ) : null}
      <Image className="hero__image" src={imageSrc} alt="" fill priority sizes="(max-width: 1180px) 100vw, 82vw" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__content">
        {breadcrumbLabel ? (
          <nav className="hero__breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><span aria-current="page">{breadcrumbLabel}</span></li>
            </ol>
          </nav>
        ) : (
          <p className="hero__rating">Overall Rating 4.4/5</p>
        )}
        <h1 id="hero-title">
          {titleLines.map((line) => <span className="hero__line" key={line}>{line}</span>)}
        </h1>
        <p className="hero__description">
          {descriptionLines.map((line) => <span className="hero__line" key={line}>{line}</span>)}
        </p>
        {showAction ? (
          <a className="button button--primary hero__button" href={GENERAL_AFFILIATE_URL} rel="sponsored">
            Join now
          </a>
        ) : null}
      </div>
    </section>
  );
}
