import { describe, it, expect } from "vitest";
import { articleTitleTransitionName, toSlug } from "./slug";

describe("toSlug", () => {
  it("strips .md extension", () => {
    expect(toSlug("my-article.md")).toBe("my-article");
  });

  it("strips .mdx extension", () => {
    expect(toSlug("data-visualization.mdx")).toBe("data-visualization");
  });

  it("leaves a string without an extension unchanged", () => {
    expect(toSlug("my-article")).toBe("my-article");
  });

  it("handles nested paths by only stripping the extension", () => {
    expect(toSlug("articles/my-article.md")).toBe("articles/my-article");
  });
});

describe("articleTitleTransitionName", () => {
  it("prefixes the slug so the name never starts with a digit", () => {
    expect(articleTitleTransitionName("intro-to-sqs")).toBe(
      "article-intro-to-sqs",
    );
    expect(articleTitleTransitionName("6-months-of-python")).toBe(
      "article-6-months-of-python",
    );
  });

  it("replaces characters that are not valid in a CSS name", () => {
    expect(articleTitleTransitionName("guides/Intro.To")).toBe(
      "article-guides-intro-to",
    );
  });
});
