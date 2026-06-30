import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface AlternativeFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  competitor: string;
  tags: string[];
  image: string;
  published: boolean;
}

export interface Alternative {
  frontmatter: AlternativeFrontmatter;
  content: string;
}

const ALTERNATIVES_DIR = path.join(process.cwd(), "content/alternatives");

export function getAllAlternatives(): Alternative[] {
  if (!fs.existsSync(ALTERNATIVES_DIR)) return [];
  const files = fs.readdirSync(ALTERNATIVES_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(ALTERNATIVES_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return { frontmatter: data as AlternativeFrontmatter, content };
    })
    .filter((a) => a.frontmatter.published);
}

export function getAlternativeBySlug(slug: string): Alternative | null {
  if (!fs.existsSync(ALTERNATIVES_DIR)) return null;
  const files = fs.readdirSync(ALTERNATIVES_DIR).filter((f) => f.endsWith(".mdx"));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(ALTERNATIVES_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    if (data.slug === slug && data.published) {
      return { frontmatter: data as AlternativeFrontmatter, content };
    }
  }
  return null;
}
