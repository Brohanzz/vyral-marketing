import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { SITE_URL } from "@/lib/metadata";
import Section from "./Section";
import PageHero from "./PageHero";

// Shared layout for blog posts, comparison pages and legal text: the light
// hero on the 720px reading column, then the body in .vy-prose.

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

/** Links to other sites open in a new tab with rel="noopener". Links on this site are left alone. */
function MdxLink({ href = "", children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = /^https?:\/\//.test(href) && !href.startsWith(SITE_URL);
  return external ? (
    <a href={href} target="_blank" rel="noopener" {...rest}>
      {children}
    </a>
  ) : (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

/** Wraps markdown tables so they scroll in their own box on narrow screens. */
const mdxComponents = {
  a: MdxLink,
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="vy-table">
      <table {...props} />
    </div>
  ),
};

export function Markdown({ source }: { source: string }) {
  return (
    <MDXRemote source={source} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
  );
}

export type FaqEntry = { question: string; answer: string };

/** Visible FAQ for article pages. The same entries feed the FAQPage structured data. */
export function FaqList({ items }: { items: FaqEntry[] }) {
  return (
    <section aria-labelledby="article-faq">
      <h2 id="article-faq">Frequently asked questions</h2>
      {items.map((item) => (
        <div key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </section>
  );
}

export function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
      {tags.map((tag) => (
        <li key={tag} className="rounded-pill bg-surface-soft px-2.5 py-1 text-[12px] font-medium text-ink-2">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function Article({
  back,
  label,
  title,
  meta,
  tags,
  children,
  after,
}: {
  back?: { label: string; href: string };
  label?: string;
  title: React.ReactNode;
  /** Small line under the title: a date and author, or "Last updated". */
  meta?: React.ReactNode;
  tags?: string[];
  children: React.ReactNode;
  /** Content below the article body, still on the reading column. */
  after?: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        narrow
        label={label}
        title={title}
        before={
          back && (
            <Link href={back.href} className="font-semibold text-primary-hover hover:text-primary-strong">
              {back.label}
            </Link>
          )
        }
      >
        {(meta || tags) && (
          <div className="flex w-full flex-col gap-4">
            {meta && <p className="m-0 text-[14px] text-muted">{meta}</p>}
            {tags && tags.length > 0 && <Tags tags={tags} />}
          </div>
        )}
      </PageHero>
      <Section variant="tint" className="pt-4 pb-[84px]">
        <article className="vy-prose">{children}</article>
        {after && <div className="mx-auto mt-14 flex max-w-[720px] flex-col gap-6">{after}</div>}
      </Section>
    </>
  );
}
