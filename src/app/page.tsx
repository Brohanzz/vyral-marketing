import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VYRAL | LinkedIn Content Intelligence Platform",
  description:
    "Grow on LinkedIn with data-grounded content strategy. Built on LinkedIn's official API.",
  alternates: {
    canonical: "https://www.getvyral.io",
  },
};

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center">
      <h1
        className="text-5xl sm:text-6xl leading-tight mb-6"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#f8f8f8",
        }}
      >
        VYRAL —{" "}
        <span style={{ color: "#7c3aed" }}>Coming Soon</span>
      </h1>
      <p
        className="max-w-xl text-lg leading-relaxed"
        style={{ color: "#a1a1aa" }}
      >
        Grow on LinkedIn with data-grounded content strategy. Built on
        LinkedIn&apos;s official API.
      </p>
      <a
        href="https://app.getvyral.io"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center rounded-lg px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#7c3aed" }}
      >
        Get Early Access
      </a>
    </section>
  );
}
