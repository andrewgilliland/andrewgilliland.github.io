import { readFile } from "node:fs/promises";
import { join } from "node:path";
import satori from "satori";
import sharp from "sharp";

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

// Mirrors the neon palette in tailwind.config.cjs.
const NEON = {
  bg: "#0a0a0a",
  surface: "#171717",
  pink: "#ec4899",
  emerald: "#6ee7b7",
  yellow: "#fde047",
  cyan: "#67e8f9",
};
const WHITE = "#fafafa";
const MUTED = "#a3a3a3";

const WIDTH = 1200;
const HEIGHT = 630;

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

const fontFile = (pkg: string, file: string) =>
  readFile(join(process.cwd(), "node_modules", pkg, "files", file));

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
  ]).then(([grotesk, mono]) => [
    { name: "Space Grotesk", data: grotesk, weight: 700, style: "normal" },
    { name: "JetBrains Mono", data: mono, weight: 700, style: "normal" },
  ]));

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
            fontSize: title.length > 40 ? 56 : 72,
            fontWeight: 700,
            lineHeight: 1.1,
            textWrap: "balance",
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
