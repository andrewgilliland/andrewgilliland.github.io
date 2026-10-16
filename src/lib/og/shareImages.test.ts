import { describe, expect, it } from "vitest";
import { isShareImage, shareImageIds, shareImageUrl } from "./shareImages";

describe("share image paths", () => {
  it("maps pages to their generated card", () => {
    expect(shareImageUrl(shareImageIds.default)).toBe("/og/default.png");
    expect(shareImageUrl(shareImageIds.article("intro-to-sqs"))).toBe(
      "/og/articles/intro-to-sqs.png",
    );
    expect(shareImageUrl(shareImageIds.project("/projects/smartscout"))).toBe(
      "/og/projects/smartscout.png",
    );
  });

  it("recognises generated cards but not other images", () => {
    expect(isShareImage("/og/default.png")).toBe(true);
    expect(isShareImage("/projects/smartscout-1.webp")).toBe(false);
  });
});
