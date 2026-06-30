import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

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
  return {
    title: `${fm.title} | VYRAL Blog`,
    description: fm.description,
    alternates: {
      canonical: `https://www.getvyral.io/blog/${fm.slug}`,
    },
    openGraph: {
      title: fm.title,
      description: fm.description,
      url: `https://www.getvyral.io/blog/${fm.slug}`,
      type: "article",
      images: [{ url: fm.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fm.title,
      description: fm.description,
      images: [fm.image],
    },
  };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        fontSize: 28,
        color: "#fff",
        marginTop: 48,
        marginBottom: 16,
        lineHeight: 1.25,
      }}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        fontSize: 22,
        color: "#fff",
        marginTop: 32,
        marginBottom: 12,
        lineHeight: 1.3,
      }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 17,
        color: "rgba(209,213,219,1)",
        lineHeight: 1.8,
        marginBottom: 24,
      }}
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      style={{ color: "#a78bfa", textDecoration: "underline" }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 17,
        color: "rgba(209,213,219,1)",
        lineHeight: 1.8,
        marginBottom: 24,
        paddingLeft: 28,
      }}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 17,
        color: "rgba(209,213,219,1)",
        lineHeight: 1.8,
        marginBottom: 24,
        paddingLeft: 28,
      }}
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li style={{ marginBottom: 8 }} {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      style={{
        borderLeft: "4px solid #7c3aed",
        background: "#111111",
        padding: "16px 24px",
        marginBottom: 24,
        borderRadius: "0 8px 8px 0",
        fontStyle: "italic",
        color: "rgba(209,213,219,0.85)",
        fontFamily: "Inter, sans-serif",
        fontSize: 17,
        lineHeight: 1.8,
      }}
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ color: "#fff", fontWeight: 600 }} {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      style={{
        background: "rgba(124,58,237,0.12)",
        color: "#a78bfa",
        padding: "2px 6px",
        borderRadius: 4,
        fontFamily: "monospace",
        fontSize: 14,
      }}
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      style={{
        background: "#111111",
        border: "1px solid #222222",
        borderRadius: 8,
        padding: "20px 24px",
        overflowX: "auto",
        marginBottom: 24,
        fontFamily: "monospace",
        fontSize: 14,
        color: "#e5e7eb",
        lineHeight: 1.7,
      }}
      {...props}
    />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div style={{ overflowX: "auto", marginBottom: 24 }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "Inter, sans-serif",
          fontSize: 15,
          color: "rgba(209,213,219,1)",
        }}
        {...props}
      />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      style={{
        background: "#111111",
        border: "1px solid #222222",
        padding: "10px 16px",
        textAlign: "left",
        color: "#fff",
        fontWeight: 600,
      }}
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      style={{
        border: "1px solid #222222",
        padding: "10px 16px",
      }}
      {...props}
    />
  ),
  hr: () => (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid #222222",
        margin: "40px 0",
      }}
    />
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter: fm, content } = post;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fm.title,
    description: fm.description,
    datePublished: fm.date,
    author: { "@type": "Organization", name: "VYRAL" },
    publisher: {
      "@type": "Organization",
      name: "VYRAL",
      url: "https://www.getvyral.io",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
        <div style={{ maxWidth: 768, margin: "0 auto", padding: "100px 24px 120px" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-block",
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              marginBottom: 48,
            }}
          >
            ← Back to blog
          </Link>

          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}
          >
            {fm.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(124,58,237,0.1)",
                  color: "#a78bfa",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  padding: "3px 10px",
                  borderRadius: 999,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 44,
              lineHeight: 1.15,
              color: "#fff",
              margin: "0 0 20px",
            }}
          >
            {fm.title}
          </h1>

          <div
            style={{
              display: "flex",
              gap: 16,
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.4)",
              marginBottom: 56,
            }}
          >
            <span>
              {new Date(fm.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{fm.author}</span>
          </div>

          <article>
            <MDXRemote source={content} components={mdxComponents} />
          </article>

          <div
            style={{
              marginTop: 80,
              padding: "40px",
              background: "#111111",
              border: "1px solid #222222",
              borderRadius: 16,
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 28,
                color: "#fff",
                margin: "0 0 12px",
              }}
            >
              Ready to grow on LinkedIn?
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                color: "rgba(255,255,255,0.55)",
                marginBottom: 28,
              }}
            >
              Join VYRAL and get official LinkedIn analytics, AI coaching, and content intelligence in one place.
            </p>
            <Link
              href="/waitlist"
              style={{
                display: "inline-block",
                background: "#7c3aed",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                padding: "14px 32px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              Start your free trial
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
