import type { MetadataRoute } from "next";

const BASE = "https://rogaleme.online";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/joc`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/confidentialitate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/termeni`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
