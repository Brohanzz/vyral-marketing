import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Public_Sans } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

// next/font only accepts an extra axis (opsz) on the full variable font, so
// Bricolage loads as the variable font; the design uses weights 500 and 600.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-public-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-plex-mono",
  display: "swap",
});

// Site-wide defaults only. Canonical and og:url are set per page, never here,
// so no page can inherit the homepage's.
export const metadata: Metadata = {
  title: "VYRAL: LinkedIn Content Intelligence",
  description:
    "The only LinkedIn content platform built on official API data.",
  metadataBase: new URL("https://www.getvyral.io"),
  openGraph: {
    type: "website",
    siteName: "VYRAL",
    title: "VYRAL: LinkedIn Content Intelligence",
    description:
      "The only LinkedIn content platform built on official API data.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "VYRAL: LinkedIn Content Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VYRAL: LinkedIn Content Intelligence",
    description:
      "The only LinkedIn content platform built on official API data.",
    images: ["/og-default.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

// viewport-fit=cover lets the sticky bar read the phone safe-area insets.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${bricolage.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <body className="flex min-h-full flex-col bg-base font-body text-ink">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
