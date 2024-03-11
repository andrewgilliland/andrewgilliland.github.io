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

export type Note = {
  frontmatter: {
    title: string;
    excerpt: string;
    date: string;
  };
  content: string;
};

export type HeadingElement = {
  id: string;
  text: string;
  tag: string;
};

export type Page = { href: string; title: string };
