import { describe, expect, it } from "vitest";
import { cardDecoration } from "./cardDecoration";
import { SHAPE_FILL_COLORS } from "./shapeColors";

describe("cardDecoration", () => {
  it("returns the same shapes for the same article id", () => {
    expect(cardDecoration("intro-to-sqs")).toEqual(
      cardDecoration("intro-to-sqs"),
    );
  });

  it("returns different shapes for different ids", () => {
    expect(cardDecoration("intro-to-sqs")).not.toEqual(
      cardDecoration("intro-to-amazon-ecs"),
    );
  });

  it("draws four shapes, one in each accent colour", () => {
    const shapes = cardDecoration("intro-to-aws-lambda");
    expect(shapes).toHaveLength(4);
    expect(shapes.map((s) => s.fill).sort()).toEqual(
      [...SHAPE_FILL_COLORS].sort(),
    );
  });

  it("gives each shape a small scatter offset for hover", () => {
    for (const { offset } of cardDecoration("intro-to-aws-lambda")) {
      const distance = Math.hypot(offset.dx, offset.dy);
      expect(distance).toBeGreaterThanOrEqual(3);
      expect(distance).toBeLessThanOrEqual(8);
    }
  });
});
