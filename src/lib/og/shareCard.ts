import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import satori from "satori";
import sharp from "sharp";
import { NEON } from "../neonPalette";
import { SHARE_IMAGE_SIZE } from "./shareImages";

// Build-time only: renders the link-preview image for a page in the neon
// brutalist style. Satori draws text as paths, so the result does not depend
// on fonts installed on the build machine.

export type ShareCardAccent = "pink" | "emerald" | "yellow" | "cyan";

export interface ShareCard {
  /** Short mono line above the title, e.g. "Article · September 15, 2026". */
  eyebrow: string;
  title: string;
  accent: ShareCardAccent;
}

const WHITE = "#fafafa";
const MUTED = "#a3a3a3";

const { width: WIDTH, height: HEIGHT } = SHARE_IMAGE_SIZE;

const stripes = (angle: string) =>
  `linear-gradient(${angle}, ${NEON.pink}, ${NEON.pink} 30%, ${NEON.emerald} 30%, ${NEON.emerald} 50%, ${NEON.yellow} 50%, ${NEON.yellow} 70%, ${NEON.cyan} 70%, ${NEON.cyan})`;

type Node = {
  type: string;
  props: { style: Record<string, unknown>; children?: unknown };
};
const div = (style: Record<string, unknown>, children?: unknown): Node => ({
  type: "div",
  props: { style, children },
});

// Resolve through Node so the build works from any working directory.
const resolve = createRequire(import.meta.url).resolve;
const fontFile = (pkg: string, file: string) =>
  readFile(resolve(`${pkg}/files/${file}`));

let fonts: Promise<Parameters<typeof satori>[1]["fonts"]> | undefined;
const loadFonts = () =>
  (fonts ??= Promise.all([
    fontFile(
      "@fontsource/space-grotesk",
      "space-grotesk-latin-700-normal.woff",
    ),
    fontFile(
      "@fontsource/jetbrains-mono",
      "jetbrains-mono-latin-700-normal.woff",
    ),
  ])
    .then(([grotesk, mono]) => [
      {
        name: "Space Grotesk",
        data: grotesk,
        weight: 700 as const,
        style: "normal" as const,
      },
      {
        name: "JetBrains Mono",
        data: mono,
        weight: 700 as const,
        style: "normal" as const,
      },
    ])
    .catch((error) => {
      fonts = undefined; // Let the next card retry instead of caching the failure.
      throw error;
    }));

// Step the title down as it grows, and clamp it to four lines (with an
// ellipsis), so it never runs into the name and stripe at the bottom.
export const titleFontSize = (title: string) =>
  title.length > 70 ? 48 : title.length > 40 ? 56 : 72;

export async function renderShareCard({
  eyebrow,
  title,
  accent,
}: ShareCard): Promise<Buffer> {
  const card = div(
    {
      width: WIDTH,
      height: HEIGHT,
      display: "flex",
      boxSizing: "border-box",
      padding: 56,
      backgroundColor: NEON.bg,
      fontFamily: "Space Grotesk",
    },
    div(
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        padding: 56,
        backgroundColor: NEON.surface,
        border: `4px solid ${WHITE}`,
        boxShadow: `16px 16px 0 0 ${NEON[accent]}`,
      },
      [
        div(
          {
            fontFamily: "JetBrains Mono",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: MUTED,
          },
          eyebrow,
        ),
        div(
          {
            fontSize: titleFontSize(title),
            display: "block",
            lineClamp: 4,
            fontWeight: 700,
            lineHeight: 1.1,
            // Balancing a clamped title spreads it over every line first, so
            // only balance titles short enough to show in full.
            textWrap: title.length > 70 ? "wrap" : "balance",
            color: WHITE,
          },
          title,
        ),
        div(
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
          [
            div(
              {
                fontSize: 36,
                fontWeight: 700,
                color: "transparent",
                backgroundImage: stripes("to bottom right"),
                backgroundClip: "text",
              },
              "Andrew Gilliland",
            ),
            div({
              width: 320,
              height: 28,
              border: `4px solid ${WHITE}`,
              backgroundImage: stripes("-10deg"),
            }),
          ],
        ),
      ],
    ),
  );

  const svg = await satori(card as Parameters<typeof satori>[0], {
    width: WIDTH,
    height: HEIGHT,
    fonts: await loadFonts(),
  });
  return sharp(Buffer.from(svg)).png().toBuffer();
}
