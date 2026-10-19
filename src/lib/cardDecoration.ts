import {
  roundedPolygonPath,
  seededRng,
  strToSeed,
} from "./deterministicShapes";
import { SHAPE_FILL_COLORS } from "./shapeColors";

// The overlapping shapes drawn in the corner of an article's card and on the
// home page's latest-article tile. Seeded by the article id, so an article
// always gets the same shapes wherever they appear. Renderers add the stroke;
// this module returns plain SVG geometry so React and Astro can both draw it.

type ShapeType = "circle" | "rect" | "triangle" | "diamond";
const SHAPES: ShapeType[] = ["circle", "rect", "triangle", "diamond"];

export type ShapeElement =
  | { tag: "circle"; attrs: { cx: number; cy: number; r: number } }
  | {
      tag: "rect";
      attrs: {
        x: number;
        y: number;
        width: number;
        height: number;
        rx: number;
        transform: string;
      };
    }
  | { tag: "path"; attrs: { d: string; transform: string } };

export interface DecorationShape {
  element: ShapeElement;
  fill: string;
  /** How far the shape moves when the card is hovered (px). */
  offset: { dx: number; dy: number };
}

/** The viewBox (and pixel) size of the decoration's SVG. */
export const DECORATION_SIZE = 120;

function shapeElement(
  type: ShapeType,
  cx: number,
  cy: number,
  size: number,
  rotate: number,
): ShapeElement {
  const transform = `rotate(${rotate} ${cx} ${cy})`;
  const r = size * 0.2;
  if (type === "circle") return { tag: "circle", attrs: { cx, cy, r: size } };
  if (type === "rect") {
    return {
      tag: "rect",
      attrs: {
        x: cx - size,
        y: cy - size,
        width: size * 2,
        height: size * 2,
        rx: r,
        transform,
      },
    };
  }
  const points =
    type === "triangle"
      ? [
          [cx, cy - size],
          [cx - size * 0.866, cy + size * 0.5],
          [cx + size * 0.866, cy + size * 0.5],
        ]
      : [
          [cx, cy - size],
          [cx + size, cy],
          [cx, cy + size],
          [cx - size, cy],
        ];
  return {
    tag: "path",
    attrs: { d: roundedPolygonPath(points, r), transform },
  };
}

export function cardDecoration(id: string): DecorationShape[] {
  // The order of rng() calls below fixes every article's shapes; changing it
  // reshuffles the decoration on every card.
  const rng = seededRng(strToSeed(id));
  const rand = (min: number, max: number) => min + rng() * (max - min);
  const pick = <T>(arr: T[]): T => arr[Math.floor(rng() * arr.length)];

  const colors: string[] = [...SHAPE_FILL_COLORS];
  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }

  // [cx range, cy range, size range] from the largest shape to the smallest.
  const slots: [number, number][][] = [
    [
      [70, 108],
      [70, 108],
      [55, 64],
    ],
    [
      [36, 72],
      [62, 98],
      [35, 54],
    ],
    [
      [60, 102],
      [32, 70],
      [24, 42],
    ],
    [
      [30, 65],
      [36, 68],
      [14, 27],
    ],
  ];
  const shapes = slots.map(([cxRange, cyRange, sizeRange], i) => {
    const type = pick(SHAPES);
    const cx = rand(...cxRange);
    const cy = rand(...cyRange);
    const size = rand(...sizeRange);
    const rotate = rand(0, 45);
    return {
      element: shapeElement(type, cx, cy, size, rotate),
      fill: colors[i],
    };
  });

  return shapes.map((shape) => {
    const dir = rng() * Math.PI * 2;
    const mag = 3 + rng() * 5;
    return {
      ...shape,
      offset: { dx: Math.cos(dir) * mag, dy: Math.sin(dir) * mag },
    };
  });
}
