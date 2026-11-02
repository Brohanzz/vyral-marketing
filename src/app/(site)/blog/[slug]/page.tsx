import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article, { Markdown, formatDate } from "@/components/site/Article";
import Button from "@/components/site/Button";
import JsonLd from "@/components/site/JsonLd";
import NewsletterSignup from "@/components/site/NewsletterSignup";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { APP_SIGNUP_URL } from "@/lib/urls";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.frontmatter.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const { frontmatter: fm } = post;
  return pageMetadata({
    title: `${fm.title} | VYRAL Blog`,
    description: fm.description,
    path: `/blog/${fm.slug}`,
    image: fm.image,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter: fm, content } = post;

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: fm.title,
          description: fm.description,
          url: absoluteUrl(`/blog/${fm.slug}`),
          image: fm.image,
          datePublished: fm.date,
          author: "VYRAL",
        })}
      />
      <Article
        back={{ label: "← Back to blog", href: "/blog" }}
        title={fm.title}
        meta={
          <>
            {formatDate(fm.date)} · {fm.author}
          </>
        }
        tags={fm.tags}
        after={
          <>
            <div className="rounded-lg bg-surface-soft p-8 text-center shadow-1">
              <h2 className="m-0 font-display text-heading-2 font-medium text-ink">Ready to grow on LinkedIn?</h2>
              <p className="mt-3 mb-6 text-[16px] text-muted">
                Join VYRAL and get official LinkedIn analytics, AI coaching, and content intelligence in one place.
              </p>
              <Button href={APP_SIGNUP_URL}>Start your free trial</Button>
            </div>
            <div data-tone="dark" className="rounded-lg bg-band-dark p-8 text-on-dark-muted">
              <h2 className="m-0 font-display text-heading-3 font-medium text-on-dark">Get the VYRAL newsletter</h2>
              <p className="mt-2 mb-5 text-[15px] leading-normal">
                Practical LinkedIn growth tactics and product updates, once a week.
              </p>
              <NewsletterSignup />
            </div>
          </>
        }
      >
        <Markdown source={content} />
      </Article>
    </>
  );
}
