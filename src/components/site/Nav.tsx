import Link from "next/link";
import { APP_LOGIN_URL, APP_SIGNUP_URL } from "@/lib/urls";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

const LINKS = [
  { label: "Product", href: "/how-vyral-works" },
  { label: "Official API", href: "/linkedin-tool-safe" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const navLink = "inline-flex min-h-11 items-center rounded-md text-[15px] font-medium text-ink hover:text-primary-strong";

export default function Nav() {
  return (
    <header className="vy-band" data-variant="tint">
      <Container className="flex h-20 items-center gap-4 desk:gap-9">
        <Link href="/" className="inline-flex min-h-11 items-center rounded-md" aria-label="VYRAL home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden gap-7 desk:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={navLink}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4 desk:gap-5">
          <a href={APP_LOGIN_URL} className={navLink}>
            Log in
          </a>
          <Button href={APP_SIGNUP_URL} size="sm">
            Start free trial
          </Button>
        </div>
      </Container>
    </header>
  );
}
