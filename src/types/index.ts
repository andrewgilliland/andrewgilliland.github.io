export type Frontmatter = {
  title: string;
  date: string;
  excerpt: string;
  draft: boolean;
};

export type Post = {
  slug: string;
  frontmatter: Frontmatter;
};

export type HeadingElement = {
  id: string;
  text: string;
  tag: string;
};

export type Page = { href: string; title: string };
