import { cx } from "@/lib/cx";
import Container from "./Container";

type Props = {
  /** light: base fading to soft. tint: soft fading to base. dark: a dark band. */
  variant: "light" | "tint" | "dark";
  /** Dark bands only: the colour the band fades in from. */
  from?: "base" | "soft";
  /** Dark bands only: "dark" keeps the band dark to the bottom edge (into the footer). */
  to?: "base" | "dark";
  /** Light bands only: hold the base colour for the top 40% (the hero). */
  hold?: boolean;
  id?: string;
  labelledBy?: string;
  /** Classes for the inner container, usually vertical padding. */
  className?: string;
  children: React.ReactNode;
};

export default function Section({ variant, from, to, hold, id, labelledBy, className, children }: Props) {
  const dark = variant === "dark";
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-variant={variant}
      data-from={dark ? from : undefined}
      data-to={dark ? to : undefined}
      data-hold={hold ? "true" : undefined}
      data-tone={dark ? "dark" : undefined}
      className={cx("vy-band", dark && "text-on-dark")}
    >
      <Container className={className}>{children}</Container>
    </section>
  );
}
