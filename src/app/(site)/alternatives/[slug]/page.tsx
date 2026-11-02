import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article, { Markdown, formatDate } from "@/components/site/Article";
import Button from "@/components/site/Button";
import JsonLd from "@/components/site/JsonLd";
import { getAllAlternatives, getAlternativeBySlug } from "@/lib/alternatives";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
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
    title: `${fm.title} | VYRAL`,
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
          author: "VYRAL",
        })}
      />
      <Article
        title={fm.title}
        meta={
          <>
            {formatDate(fm.date)} · {fm.author}
          </>
        }
        tags={fm.tags}
        after={
          <div className="rounded-lg bg-surface-soft p-8 text-center shadow-1">
            <h2 className="m-0 font-display text-heading-2 font-medium text-ink">Ready to switch to VYRAL?</h2>
            <p className="mt-3 mb-6 text-[16px] text-muted">
              Official LinkedIn API. AI coaching. Deep analytics. 14-day free trial, no credit card required.
            </p>
            <Button href={APP_SIGNUP_URL}>Sign up for a trial</Button>
          </div>
        }
      >
        <Markdown source={content} />
      </Article>
    </>
  );
}
