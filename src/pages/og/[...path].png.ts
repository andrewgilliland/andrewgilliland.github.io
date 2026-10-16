import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { projects } from "@/data/projects";
import { toSlug } from "@/lib/slug";
import { renderShareCard, type ShareCard } from "@/lib/og/shareCard";

// Link-preview images, generated at build time: /og/default.png,
// /og/articles/<slug>.png, and /og/projects/<slug>.png.

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const getStaticPaths = (async () => {
  const articles = await getCollection("articles", ({ data }) => !data.draft);

  const cards: { path: string; card: ShareCard }[] = [
    {
      path: "default",
      card: {
        eyebrow: "Software engineer · Bloomington, IL",
        title: "Writing about AWS, Python, and building things on the web.",
        accent: "pink",
      },
    },
    ...articles.map((article) => ({
      path: `articles/${toSlug(article.id)}`,
      card: {
        eyebrow: `Article · ${formatDate(article.data.date)}`,
        title: article.data.title,
        accent: "cyan" as const,
      },
    })),
    ...projects.map((project) => ({
      path: project.href.replace(/^\//, ""),
      card: {
        eyebrow: "Case study",
        title: project.title,
        accent: "emerald" as const,
      },
    })),
  ];

  return cards.map(({ path, card }) => ({ params: { path }, props: { card } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) =>
  new Response(
    new Uint8Array(await renderShareCard((props as { card: ShareCard }).card)),
    {
      headers: { "Content-Type": "image/png" },
    },
  );
