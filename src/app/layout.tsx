import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "VYRAL — LinkedIn Content Intelligence",
  description:
    "The only LinkedIn content platform built on official API data.",
  metadataBase: new URL("https://www.getvyral.io"),
  alternates: {
    canonical: "https://www.getvyral.io",
  },
  openGraph: {
    type: "website",
    url: "https://www.getvyral.io",
    siteName: "VYRAL",
    title: "VYRAL — LinkedIn Content Intelligence",
    description:
      "The only LinkedIn content platform built on official API data.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "VYRAL — LinkedIn Content Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VYRAL — LinkedIn Content Intelligence",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="flex min-h-full flex-col"
        style={{ backgroundColor: "#080510", color: "#f8f8f8" }}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7PCGETZ0BP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-7PCGETZ0BP');
  `}
        </Script>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
