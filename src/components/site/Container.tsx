import { cx } from "@/lib/cx";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cx("mx-auto w-full max-w-content px-5 desk:px-24", className)}>{children}</div>;
}
