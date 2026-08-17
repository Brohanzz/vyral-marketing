import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://www.getvyral.io";
const STATIC_LAST_MOD = "2026-05-27";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.frontmatter.slug}`,
    lastModified: post.frontmatter.date,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    // Core
    { url: `${BASE}/`, lastModified: STATIC_LAST_MOD, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/pricing`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/product`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/how-it-works`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/why-vyral`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    // Product sub-pages
    { url: `${BASE}/product/analytics`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/product/blueprint-ai`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/product/performance-lab`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/product/proof-page`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    // Feature/SEO hubs
    { url: `${BASE}/linkedin-analytics`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ai-coach`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/linkedin-content-strategy`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/linkedin-growth-tool`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ai-linkedin-post-writer`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/linkedin-personal-branding`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/linkedin-tool-safe`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/linkedin-post-analytics`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/linkedin-coaching`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/linkedin-content-calendar`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    // Solutions
    { url: `${BASE}/solutions`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions/creators`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions/ghostwriters`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/solutions/agencies`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    // Alternatives
    { url: `${BASE}/alternatives/taplio`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/shield`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/typefully`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/authoredup`, lastModified: "2026-05-29", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alternatives/kleo`, lastModified: "2026-05-29", changeFrequency: "monthly", priority: 0.7 },
    // Other pages
    { url: `${BASE}/about`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/getting-started`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/newsletter`, lastModified: "2026-08-17", changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/resources/playbooks`, lastModified: STATIC_LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
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
