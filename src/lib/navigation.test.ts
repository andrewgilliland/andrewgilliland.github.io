import { describe, expect, it } from "vitest";
import { navState } from "./navigation";

describe("navState", () => {
  it("marks the exact page, with or without a trailing slash", () => {
    expect(navState("/articles", "/articles")).toBe("page");
    expect(navState("/articles", "/articles/")).toBe("page");
    expect(navState("/", "/")).toBe("page");
  });

  it("marks the section for pages beneath it", () => {
    expect(navState("/articles", "/articles/intro-to-ecs")).toBe("section");
    expect(navState("/about", "/about/resume/")).toBe("section");
  });

  it("does not mark unrelated pages or prefixes of other words", () => {
    expect(navState("/", "/articles")).toBeUndefined();
    expect(navState("/projects", "/articles")).toBeUndefined();
    expect(navState("/about", "/aboutness")).toBeUndefined();
  });
});
