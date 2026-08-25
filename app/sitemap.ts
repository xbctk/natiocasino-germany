import type { MetadataRoute } from "next";

const siteUrl = "https://natiocasino-germany.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/bonuses.html` },
    { url: `${siteUrl}/app.html` },
    { url: `${siteUrl}/responsible-gaming.html` },
    { url: `${siteUrl}/terms-and-conditions.html` },
    { url: `${siteUrl}/privacy-policy.html` },
    { url: `${siteUrl}/bonus-terms.html` },
    { url: `${siteUrl}/faq.html` },
    { url: `${siteUrl}/about-us.html` },
    { url: `${siteUrl}/contact.html` },
  ];
}
