import type { MetadataRoute } from "next";

const siteUrl = "https://natiocasino-germany.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/bonuses` },
    { url: `${siteUrl}/app` },
    { url: `${siteUrl}/responsible-gaming` },
    { url: `${siteUrl}/terms-and-conditions` },
    { url: `${siteUrl}/privacy-policy` },
    { url: `${siteUrl}/bonus-terms` },
    { url: `${siteUrl}/faq` },
    { url: `${siteUrl}/about-us` },
    { url: `${siteUrl}/contact` },
  ];
}
