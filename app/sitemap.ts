import type { MetadataRoute } from "next";

const siteUrl = "https://natiocasino-germany.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/bonuses` },
    { url: `${siteUrl}/app` },
    { url: `${siteUrl}/responsible-gaming` },
  ];
}
