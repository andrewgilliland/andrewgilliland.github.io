import sharp from "sharp";
import { describe, expect, it } from "vitest";
import { renderShareCard } from "./shareCard";

describe("renderShareCard", () => {
  it("renders a 1200x630 PNG for link previews", async () => {
    const png = await renderShareCard({
      eyebrow: "Article · September 15, 2026",
      title: "Intro to Amazon ECS",
      accent: "cyan",
    });

    const { format, width, height } = await sharp(png).metadata();
    expect({ format, width, height }).toEqual({
      format: "png",
      width: 1200,
      height: 630,
    });
  });

  it("is not a blank image", async () => {
    const png = await renderShareCard({
      eyebrow: "Case study",
      title: "Manchester United Hospitality",
      accent: "emerald",
    });

    const { channels } = await sharp(png).stats();
    // A flat single-colour image has no spread in any channel.
    expect(channels.some((c) => c.max - c.min > 100)).toBe(true);
  });
});
