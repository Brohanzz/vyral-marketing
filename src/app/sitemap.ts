import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://www.getvyral.io";
const STATIC_LAST_MOD = "2026-05-27";
/** Pages rebuilt in the redesign. */
const REBUILT = "2026-11-02";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.frontmatter.slug}`,
    lastModified: post.frontmatter.date,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    // Core
    { url: `${BASE}/`, lastModified: REBUILT, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/pricing`, lastModified: REBUILT, changeFrequency: "monthly", priority: 0.9 },
    // Feature pages (each also carries the content of the URLs merged into it)
    { url: `${BASE}/how-vyral-works`, lastModified: REBUILT, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/linkedin-analytics`, lastModified: REBUILT, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ai-coach`, lastModified: REBUILT, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/linkedin-content-strategy`, lastModified: REBUILT, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/linkedin-tool-safe`, lastModified: REBUILT, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions`, lastModified: REBUILT, changeFrequency: "monthly", priority: 0.7 },
    // Product sub-pages
    { url: `${BASE}/product/profile-review`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    // Alternatives
    { url: `${BASE}/alternatives/taplio`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/shield`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/typefully`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/authoredup`, lastModified: "2026-05-29", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/kleo`, lastModified: "2026-05-29", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/magicpost`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/postiv`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/scripe`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/supergrow`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/stanley`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    // Other pages
    { url: `${BASE}/about`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/newsletter`, lastModified: "2026-08-17", changeFrequency: "monthly", priority: 0.6 },
    // Blog
    { url: `${BASE}/blog`, lastModified: STATIC_LAST_MOD, changeFrequency: "weekly", priority: 0.6 },
    ...blogPosts,
    // Help
    { url: `${BASE}/help`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/help/faq`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
    // Legal
    { url: `${BASE}/legal`, lastModified: STATIC_LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/privacy-policy`, lastModified: STATIC_LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/terms`, lastModified: STATIC_LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/cookies`, lastModified: STATIC_LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/gdpr`, lastModified: STATIC_LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/dpa`, lastModified: STATIC_LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/security`, lastModified: STATIC_LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/legal/imprint`, lastModified: STATIC_LAST_MOD, changeFrequency: "yearly", priority: 0.3 },
  ];
}
