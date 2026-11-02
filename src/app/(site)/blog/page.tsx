import Link from "next/link";
import { formatDate, Tags } from "@/components/site/Article";
import Card from "@/components/site/Card";
import Section from "@/components/site/Section";
import PageHero from "@/components/site/PageHero";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Blog | LinkedIn Strategy & Content Intelligence | VYRAL",
  description: "LinkedIn strategy, algorithm insights, and creator growth tips from the VYRAL team.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero label="Blog" title="VYRAL Blog" sub="LinkedIn strategy, algorithm insights, and creator growth tips." />
      <Section variant="tint" className="pt-4 pb-[84px]">
        {posts.length === 0 ? (
          <p className="m-0 py-20 text-center text-[16px] text-muted">Blog posts coming soon. Check back shortly.</p>
        ) : (
          <ul className="m-0 grid list-none gap-6 p-0 desk:grid-cols-2">
            {posts.map((post) => (
              <li key={post.frontmatter.slug}>
                <Card as="article" className="group h-full gap-3.5 p-7">
                  <Tags tags={post.frontmatter.tags} />
                  <h2 className="m-0 text-pretty font-display text-heading-3 font-medium text-ink">
                    <Link
                      href={`/blog/${post.frontmatter.slug}`}
                      className="after:absolute after:inset-0 after:rounded-lg group-hover:text-primary-strong"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <p className="m-0 text-[15px] leading-[1.6] text-muted">{post.frontmatter.description}</p>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-2 text-[13px]">
                    <span className="text-muted">{formatDate(post.frontmatter.date)}</span>
                    <span aria-hidden="true" className="font-semibold text-primary-hover">
                      Read more →
                    </span>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
