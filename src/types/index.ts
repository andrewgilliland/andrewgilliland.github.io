export type NoteFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  draft: boolean;
};

// export type Post = {
//   path: string;
//   frontmatter: Frontmatter;
// };

export type Note = {
  path: string;
  frontmatter: NoteFrontmatter;
  content: string;
};

export type Topic = { name: string; path: string; color?: string };

export type HeadingElement = {
  id: string;
  text: string;
  tag: string;
};

export type Page = { href: string; title: string };

export type RoutePageProps = {
  note?: Note;
  topic?: string;
  notes?: Note[];
  topics?: Topic[];
};
