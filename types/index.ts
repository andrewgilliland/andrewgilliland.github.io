export type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    draft: boolean;
  };
};

export type HeadingElement = {
  id: string;
  text: string;
  tag: string;
};
