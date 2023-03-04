import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export type BlogMetadata = {
  title: string;
  subtitle: string;
  cover: string;
  author: string;
  date: string;
  slug: string;
};

export type BlogDocument = BlogMetadata & {
  content: string;
};

const legalDirectory = join(process.cwd(), 'src/common/documents/blog');

export function getBlogSlugs() {
  return fs.readdirSync(legalDirectory);
}

export function getBlogBySlug(slug: string): BlogDocument {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(legalDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const document = { ...data, slug: realSlug, content } as BlogDocument;

  return document;
}

export function getAllBlogs(): BlogMetadata[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map(getBlogBySlug)
    .map(({ title, subtitle, cover, author, date, slug }) => ({
      title,
      subtitle,
      cover,
      author,
      date,
      slug,
    }));

  return posts;
}
