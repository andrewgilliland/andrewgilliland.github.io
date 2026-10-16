import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import ArticleCard, { type Accent, type Article } from "../ArticleCard";

// Offset-shadow colours cycle through the grid; the first card's cyan matches
// the home page's latest-article tile.
const CARD_ACCENTS: Accent[] = ["cyan", "pink", "emerald", "yellow"];

export function filterArticles(
  articles: Article[],
  query: string,
  selectedTag?: string,
): Article[] {
  let result = articles;

  if (selectedTag) {
    result = result.filter((a) => a.tags.includes(selectedTag));
  }

  if (query.trim() !== "") {
    const q = query.toLowerCase();
    result = result.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }

  return result;
}

export function getUniqueTags(articles: Article[]): string[] {
  return [...new Set(articles.flatMap((a) => a.tags))].sort();
}

export default function ArticleSearch({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const tag = params.get("tag");
    if (q) setQuery(q);
    if (tag) setSelectedTag(tag);
  }, []);

  const updateUrl = (q: string, tag: string) => {
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q);
    if (tag) params.set("tag", tag);
    const qs = params.toString();
    history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  };

  const setQueryAndUrl = (value: string) => {
    setQuery(value);
    updateUrl(value, selectedTag);
  };

  const toggleTag = (tag: string) => {
    const next = selectedTag === tag ? "" : tag;
    setSelectedTag(next);
    updateUrl(query, next);
  };

  const clearAll = () => {
    setQuery("");
    setSelectedTag("");
    history.replaceState(null, "", window.location.pathname);
  };

  const allTags = getUniqueTags(articles);
  const filtered = filterArticles(articles, query, selectedTag);

  return (
    <>
      <div className="pb-10">
        <div className="relative">
          <input
            type="search"
            aria-label="Search articles"
            value={query}
            onChange={(e) => setQueryAndUrl(e.target.value)}
            placeholder="Search articles…"
            data-foley-type="thock"
            className="w-full border-2 border-neutral-50 bg-neon-surface px-4 py-3 pr-12 font-mono text-sm text-neutral-50 placeholder-neutral-400 outline-none transition-shadow focus:shadow-[4px_4px_0_0_theme(colors.neon.pink)] [&::-webkit-search-cancel-button]:appearance-none"
          />
          {(query || selectedTag) && (
            <button
              onClick={clearAll}
              aria-label="Clear search"
              className="group absolute right-3 top-1/2 -translate-y-1/2 p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-50"
            >
              <Trash2 className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-neutral-50" />
            </button>
          )}
        </div>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {allTags.map((tag) => {
            const pressed = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                aria-pressed={pressed}
                className={`border-2 px-2.5 py-1 font-mono text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-50 ${
                  pressed
                    ? "neo-shadow neo-press border-neutral-950 bg-neon-pink text-neutral-950 [--neo-color:theme(colors.neon.cyan)] [--neo-hover:2px] [--neo-offset:3px]"
                    : "border-neutral-600 text-neutral-300 transition-transform hover:border-neutral-50 hover:shadow-[3px_3px_0_0_theme(colors.neon.pink)] motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length > 0 ? (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              accent={CARD_ACCENTS[index % CARD_ACCENTS.length]}
              featured={index === 0 && query.trim() === "" && !selectedTag}
            />
          ))}
        </section>
      ) : (
        <p className="py-16 text-center font-mono text-sm text-neutral-400">
          No articles match &ldquo;{selectedTag || query}&rdquo;
        </p>
      )}
    </>
  );
}
