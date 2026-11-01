import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | LinkedIn Strategy & Content Intelligence | VYRAL",
  description:
    "LinkedIn strategy, algorithm insights, and creator growth tips from the VYRAL team.",
  alternates: { canonical: "https://www.getvyral.io/blog" },
  openGraph: {
    title: "Blog | LinkedIn Strategy & Content Intelligence | VYRAL",
    description:
      "LinkedIn strategy, algorithm insights, and creator growth tips from the VYRAL team.",
    url: "https://www.getvyral.io/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ background: "#080510", minHeight: "100vh", color: "#fff" }}>
      <section
        style={{
          paddingTop: 120,
          paddingBottom: 80,
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(124,58,237,0.9)",
            marginBottom: 20,
          }}
        >
          Blog
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 52,
            lineHeight: 1.1,
            color: "#fff",
            margin: "0 0 16px",
          }}
        >
          VYRAL Blog
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          LinkedIn strategy, algorithm insights, and creator growth tips.
        </p>
      </section>

      <section
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 24px 120px",
        }}
      >
        {posts.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              color: "rgba(255,255,255,0.4)",
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
            }}
          >
            Blog posts coming soon. Check back shortly.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))",
              gap: 24,
            }}
          >
            {posts.map((post) => (
              <Link
                key={post.frontmatter.slug}
                href={`/blog/${post.frontmatter.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  style={{
                    background: "#111111",
                    border: "1px solid #222222",
                    borderRadius: 12,
                    padding: 28,
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 14,
                    }}
                  >
                    {post.frontmatter.tags.map((tag) => (
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
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 22,
                      color: "#fff",
                      margin: "0 0 10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.frontmatter.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.6,
                      margin: "0 0 18px",
                    }}
                  >
                    {post.frontmatter.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      {new Date(post.frontmatter.date).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#a78bfa",
                      }}
                    >
                      Read more →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
