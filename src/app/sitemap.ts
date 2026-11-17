import type { MetadataRoute } from "next";
import { getAllAlternatives } from "@/lib/alternatives";
import { getAllPosts } from "@/lib/blog";
import { pageLastModified } from "@/lib/page-dates";
import { lastUpdated } from "@/lib/schema";

const BASE = "https://www.getvyral.io";

/** Static pages; each lastmod is the last commit that touched its page file. */
const STATIC_ROUTES = [
  // Core
  "/",
  "/pricing",
  // Feature pages (each also carries the content of the URLs merged into it)
  "/how-vyral-works",
  "/linkedin-analytics",
  "/ai-coach",
  "/linkedin-content-strategy",
  "/linkedin-tool-safe",
  "/solutions",
  // Product sub-pages
  "/product/profile-review",
  // Other pages
  "/about",
  "/contact",
  "/newsletter",
  // Tools
  "/tools/linkedin-reach-checker",
  // Help
  "/help",
  "/help/faq",
  // Legal
  "/legal",
  "/legal/privacy-policy",
  "/legal/terms",
  "/legal/cookies",
  "/legal/gdpr",
  "/legal/dpa",
  "/legal/security",
  "/legal/imprint",
];

const latest = (dates: string[]) => dates.reduce((a, b) => (b > a ? b : a));

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.frontmatter.slug}`,
    lastModified: lastUpdated(post.frontmatter),
  }));

  const alternatives = getAllAlternatives().map((alt) => ({
    url: `${BASE}/alternatives/${alt.frontmatter.slug}`,
    lastModified: lastUpdated(alt.frontmatter),
  }));

  const pages = STATIC_ROUTES.map((route) => ({
    url: route === "/" ? `${BASE}/` : `${BASE}${route}`,
    lastModified: pageLastModified(route),
  }));

  // The blog index changes when its page file changes or a listed post does.
  const blogIndex = {
    url: `${BASE}/blog`,
    lastModified: latest([pageLastModified("/blog"), ...posts.map((p) => p.lastModified)]),
  };

  return [...pages, ...alternatives, blogIndex, ...posts];
}
