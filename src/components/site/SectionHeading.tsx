import { cx } from "@/lib/cx";

export default function SectionHeading({
  id,
  as: Tag = "h2",
  className,
  children,
}: {
  id?: string;
  as?: "h1" | "h2";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      id={id}
      className={cx(
        "m-0 max-w-[720px] text-pretty font-display text-heading-2 font-medium text-ink on-dark:text-on-dark",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
