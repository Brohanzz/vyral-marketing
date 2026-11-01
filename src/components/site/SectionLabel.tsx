import { cx } from "@/lib/cx";

export default function SectionLabel({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cx("mb-3.5 text-[14px] font-semibold text-primary-strong on-dark:text-signal", className)}>
      {children}
    </p>
  );
}
