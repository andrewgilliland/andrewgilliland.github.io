export type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    draft: boolean;
  };
};
