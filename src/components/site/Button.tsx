import Link from "next/link";
import { cx } from "@/lib/cx";

type Variant = "primary" | "ghost" | "on-dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-colors motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<Size, string> = {
  sm: "min-h-11 px-[18px] py-[11px] text-[15px]",
  md: "min-h-12 px-6 py-3.5 text-[16px]",
  lg: "min-h-12 px-7 py-4 text-[17px]",
};

// Primary switches to the on-dark style automatically inside a dark band.
const variants: Record<Variant, string> = {
  primary:
    "bg-primary-strong text-on-primary shadow-3 hover:bg-primary-hover on-dark:bg-band-primary on-dark:text-band-on-primary on-dark:shadow-none on-dark:hover:bg-band-primary-hover",
  ghost: "bg-surface/92 text-ink shadow-1 hover:bg-surface",
  "on-dark": "bg-band-primary text-band-on-primary hover:bg-band-primary-hover",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: React.ReactNode };
type AsLink = Common & { href: string };
type AsButton = Common & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };

export default function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cx(base, sizes[size], variants[variant], className);

  if (props.href !== undefined) {
    const { href } = props;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, type = "button", ...rest } = props;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
