import type { NextConfig } from "next";

// Pages merged in the redesign. Each old URL points permanently at the page
// that now carries its content, so no indexed URL is lost.
const MERGED: Record<string, string[]> = {
  "/how-vyral-works": ["/how-it-works", "/product", "/why-vyral", "/getting-started"],
  "/linkedin-analytics": ["/linkedin-post-analytics", "/product/analytics", "/product/performance-lab"],
  "/ai-coach": ["/linkedin-coaching", "/ai-linkedin-post-writer"],
  "/linkedin-content-strategy": [
    "/linkedin-content-calendar",
    "/linkedin-personal-branding",
    "/linkedin-growth-tool",
    "/product/blueprint-ai",
  ],
  "/solutions#agencies": ["/solutions/agencies"],
  "/solutions#creators": ["/solutions/creators"],
  "/solutions#ghostwriters": ["/solutions/ghostwriters"],
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /waitlist and /beta were live, indexed URLs (and /beta was advertised in
      // public/llms.txt) until self-serve trials opened. They redirect to the
      // homepage rather than to app.getvyral.io so the link equity stays on
      // this domain.
      //
      // `statusCode: 301` rather than `permanent: true` on purpose: the latter
      // emits 308, and these are indexed GET URLs where the classic 301 is what
      // every crawler and SEO tool expects.
      { source: "/waitlist", destination: "/", statusCode: 301 },
      { source: "/beta", destination: "/", statusCode: 301 },
      ...Object.entries(MERGED).flatMap(([destination, sources]) =>
        sources.map((source) => ({ source, destination, statusCode: 301 as const })),
      ),
    ];
  },
};

export default nextConfig;
