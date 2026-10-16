import colors from "tailwindcss/colors";

// The neon accents from tailwind.config.cjs, as hex for SVG fills.
// shapeColors.test.ts keeps the two in sync.
export const SHAPE_FILL_COLORS = [
  "#ec4899", // neon.pink
  "#67e8f9", // neon.cyan
  "#6ee7b7", // neon.emerald
  "#fde047", // neon.yellow
] as const;

export const DARK_SHAPE_STROKE = colors.black;
export const LIGHT_SHAPE_STROKE = colors.white;
