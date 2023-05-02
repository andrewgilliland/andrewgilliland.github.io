export type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    exceprt: string;
    draft: boolean;
  };
};
