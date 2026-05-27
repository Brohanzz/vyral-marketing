import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10"
      style={{ backgroundColor: "#080510" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Logo */}
          <span
            className="text-xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#7c3aed",
            }}
          >
            VYRAL
          </span>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/legal/privacy-policy"
              className="transition-colors hover:text-white"
              style={{ color: "#a1a1aa" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="transition-colors hover:text-white"
              style={{ color: "#a1a1aa" }}
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-white"
              style={{ color: "#a1a1aa" }}
            >
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm" style={{ color: "#a1a1aa" }}>
            © 2026 VYRAL
          </p>
        </div>
      </div>
    </footer>
  );
}
