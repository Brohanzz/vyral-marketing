import { cx } from "@/lib/cx";

type Props = {
  /** default: tier and testimonial cards. float: loop cards. dark: cards inside a dark band. */
  variant?: "default" | "float" | "dark";
  /** Coral ring, for the highlighted pricing tier. */
  highlight?: boolean;
  as?: "div" | "article" | "figure" | "li";
  className?: string;
  children: React.ReactNode;
};

const variants = {
  default: "bg-surface shadow-3",
  float: "bg-surface shadow-2",
  dark: "bg-band-surface shadow-band-2",
};

export default function Card({ variant = "default", highlight, as: Tag = "div", className, children }: Props) {
  return (
    <Tag
      className={cx(
        "relative flex flex-col rounded-lg",
        variants[variant],
        highlight && "shadow-[var(--vy-shadow-2),inset_0_0_0_2px_var(--vy-primary)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
