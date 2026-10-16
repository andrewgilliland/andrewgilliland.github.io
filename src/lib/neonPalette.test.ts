import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";
import { NEON } from "./neonPalette";

const require = createRequire(import.meta.url);
const tailwindConfig = require("../../tailwind.config.cjs");

describe("NEON", () => {
  it("matches the neon palette in tailwind.config.cjs", () => {
    expect(NEON).toEqual(tailwindConfig.theme.extend.colors.neon);
  });
});
