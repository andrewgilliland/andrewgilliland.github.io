import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";
import { SHAPE_FILL_COLORS } from "./shapeColors";

const require = createRequire(import.meta.url);
const tailwindConfig = require("../../tailwind.config.cjs");
const neon = tailwindConfig.theme.extend.colors.neon;

describe("SHAPE_FILL_COLORS", () => {
  it("uses the neon accent palette from the Tailwind config", () => {
    expect([...SHAPE_FILL_COLORS].sort()).toEqual(
      [neon.pink, neon.cyan, neon.emerald, neon.yellow].sort(),
    );
  });
});
