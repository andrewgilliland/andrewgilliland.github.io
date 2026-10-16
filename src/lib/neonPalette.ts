// The neon palette from tailwind.config.cjs, for code that needs raw hex
// values (SVG fills, generated share images). neonPalette.test.ts keeps the
// two in sync.
export const NEON = {
  bg: "#0a0a0a",
  surface: "#171717",
  pink: "#ec4899",
  emerald: "#6ee7b7",
  yellow: "#fde047",
  cyan: "#67e8f9",
} as const;
