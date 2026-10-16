// Where generated share images live (src/pages/og/[...path].png.ts) and how
// big they are. Pages and the generator both use these, so a page can never
// link a card that was not generated. Kept free of satori/sharp imports so
// layouts can use it.

export const SHARE_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export const shareImageIds = {
  default: "default",
  article: (slug: string) => `articles/${slug}`,
  /** `href` is a project's case-study path from src/data/projects.ts. */
  project: (href: string) => href.replace(/^\//, ""),
};

export const shareImageUrl = (id: string) => `/og/${id}.png`;

export const isShareImage = (url: string) => url.startsWith("/og/");
