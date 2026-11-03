import { APP_SIGNUP_URL } from "@/lib/urls";
import Button from "./Button";
import Section from "./Section";

/** The dark band above the footer: one line, the trial button and short notes. */
export default function ClosingBand({
  title,
  from = "base",
  cta = "Start free trial",
  children,
}: {
  title: React.ReactNode;
  /** Button label. Always links to sign-up. */
  cta?: string;
  /** The colour of the section above, so the fade matches. */
  from?: "base" | "soft";
  /** Note lines under the button. */
  children?: React.ReactNode;
}) {
  return (
    <Section variant="dark" from={from} to="dark" labelledBy="closing-title" className="pt-[112px] pb-[82px] text-center">
      <h2
        id="closing-title"
        className="mx-auto my-0 max-w-[760px] text-pretty font-display text-[36px] leading-[1.06] font-semibold tracking-[-0.024em] text-on-dark desk:text-display-l"
      >
        {title}
      </h2>
      <div className="mt-[34px]">
        <Button href={APP_SIGNUP_URL} variant="on-dark" size="lg">
          {cta}
        </Button>
      </div>
      {children && <div className="mt-[18px] flex flex-col gap-3 text-[14px] text-on-dark-muted">{children}</div>}
    </Section>
  );
}
