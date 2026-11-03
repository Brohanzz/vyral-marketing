import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article, { FaqList, Markdown, formatDate } from "@/components/site/Article";
import Button from "@/components/site/Button";
import JsonLd from "@/components/site/JsonLd";
import { getAllAlternatives, getAlternativeBySlug } from "@/lib/alternatives";
import { absoluteUrl, pageMetadata, withSuffix } from "@/lib/metadata";
import { articleSchema, faqSchema } from "@/lib/schema";
import { APP_SIGNUP_URL } from "@/lib/urls";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const alternatives = getAllAlternatives();
  return alternatives.map((a) => ({ slug: a.frontmatter.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const alt = getAlternativeBySlug(slug);
  if (!alt) return {};
  const { frontmatter: fm } = alt;
  return pageMetadata({
    title: withSuffix(fm.title, " | VYRAL"),
    description: fm.description,
    path: `/alternatives/${fm.slug}`,
    image: fm.image,
    type: "article",
  });
}

// Comparison pages keep their text for now; it is rewritten after launch.
export default async function AlternativePage({ params }: Props) {
  const { slug } = await params;
  const alt = getAlternativeBySlug(slug);
  if (!alt) notFound();

  const { frontmatter: fm, content } = alt;

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: fm.title,
          description: fm.description,
          url: absoluteUrl(`/alternatives/${fm.slug}`),
          image: fm.image,
          datePublished: fm.date,
          dateModified: fm.updated,
          author: "VYRAL",
        })}
      />
      {fm.faq && <JsonLd data={faqSchema(fm.faq)} />}
      <Article
        title={fm.h1 ?? fm.title}
        meta={
          <>
            {fm.updated ? `Last updated ${formatDate(fm.updated)}` : formatDate(fm.date)} · {fm.author}
          </>
        }
        tags={fm.tags}
        after={
          <div className="rounded-lg bg-surface-soft p-8 text-center shadow-1">
            <h2 className="m-0 font-display text-heading-2 font-medium text-ink">Try VYRAL on your own posts</h2>
            <p className="mt-3 mb-6 text-[16px] text-muted">
              Built on LinkedIn&apos;s official API. 14 days of Pro with 50 AI runs, no credit card.
            </p>
            <Button href={APP_SIGNUP_URL}>Start free trial</Button>
          </div>
        }
      >
        <Markdown source={content} />
        {fm.faq && <FaqList items={fm.faq} />}
      </Article>
    </>
  );
}
