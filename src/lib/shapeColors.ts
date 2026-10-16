import colors from "tailwindcss/colors";
import { NEON } from "./neonPalette";

export const SHAPE_FILL_COLORS = [
  NEON.pink,
  NEON.cyan,
  NEON.emerald,
  NEON.yellow,
] as const;

export const DARK_SHAPE_STROKE = colors.black;
export const LIGHT_SHAPE_STROKE = colors.white;
