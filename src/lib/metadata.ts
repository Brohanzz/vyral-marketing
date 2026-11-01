import type { Metadata } from "next";

export const SITE_URL = "https://www.getvyral.io";

export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Per-page metadata: title, description, canonical and og:url all point at the
 * page itself. openGraph is replaced as a whole object by Next, so the share
 * image and site name are repeated here.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "VYRAL",
      url,
      title,
      description,
      images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "VYRAL" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-default.png"],
    },
  };
}
