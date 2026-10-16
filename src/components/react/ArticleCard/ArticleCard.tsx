import { useState } from "react";
import {
  roundedPolygonPath,
  seededRng,
  strToSeed,
} from "../../../lib/deterministicShapes";
import {
  DARK_SHAPE_STROKE,
  LIGHT_SHAPE_STROKE,
  SHAPE_FILL_COLORS,
} from "../../../lib/shapeColors";
import { articleTitleTransitionName } from "../../../lib/slug";
import { formatArticleDate } from "../../../lib/date";

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
};

export type Accent = "pink" | "emerald" | "yellow" | "cyan";

// Full class names so Tailwind can see them.
const SHADOW_COLORS: Record<Accent, string> = {
  pink: "[--neo-color:theme(colors.neon.pink)]",
  emerald: "[--neo-color:theme(colors.neon.emerald)]",
  yellow: "[--neo-color:theme(colors.neon.yellow)]",
  cyan: "[--neo-color:theme(colors.neon.cyan)]",
};

type ShapeType = "circle" | "rect" | "triangle" | "diamond";
const SHAPES: ShapeType[] = ["circle", "rect", "triangle", "diamond"];

interface ShapeProps {
  type: ShapeType;
  cx: number;
  cy: number;
  size: number;
  fill: string;
  rotate: number;
}

function renderShape(
  { type, cx, cy, size, fill, rotate }: ShapeProps,
  key: number,
  stroke: string,
  style?: React.CSSProperties,
) {
  const shared = { fill, stroke, strokeWidth: 2 };
  const t = `rotate(${rotate} ${cx} ${cy})`;
  const r = size * 0.2;

  let shape;
  if (type === "circle") {
    shape = <circle {...shared} cx={cx} cy={cy} r={size} />;
  } else if (type === "rect") {
    shape = (
      <rect
        {...shared}
        x={cx - size}
        y={cy - size}
        width={size * 2}
        height={size * 2}
        rx={r}
        transform={t}
      />
    );
  } else if (type === "triangle") {
    const pts = [
      [cx, cy - size],
      [cx - size * 0.866, cy + size * 0.5],
      [cx + size * 0.866, cy + size * 0.5],
    ];
    shape = <path {...shared} d={roundedPolygonPath(pts, r)} transform={t} />;
  } else if (type === "diamond") {
    const pts = [
      [cx, cy - size],
      [cx + size, cy],
      [cx, cy + size],
      [cx - size, cy],
    ];
    shape = <path {...shared} d={roundedPolygonPath(pts, r)} transform={t} />;
  }

  return (
    <g key={key} style={style}>
      {shape}
    </g>
  );
}

function CardDecoration({
  id,
  hovered,
  stroke,
}: {
  id: string;
  hovered: boolean;
  stroke: string;
}) {
  const rng = seededRng(strToSeed(id));
  const rand = (min: number, max: number) => min + rng() * (max - min);
  const pick = <T,>(arr: T[]): T => arr[Math.floor(rng() * arr.length)];

  const decorationColors = [...SHAPE_FILL_COLORS];
  for (let i = decorationColors.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [decorationColors[i], decorationColors[j]] = [
      decorationColors[j],
      decorationColors[i],
    ];
  }

  const shapes: ShapeProps[] = [
    {
      type: pick(SHAPES),
      cx: rand(70, 108),
      cy: rand(70, 108),
      size: rand(55, 64),
      fill: decorationColors[0],
      rotate: rand(0, 45),
    },
    {
      type: pick(SHAPES),
      cx: rand(36, 72),
      cy: rand(62, 98),
      size: rand(35, 54),
      fill: decorationColors[1],
      rotate: rand(0, 45),
    },
    {
      type: pick(SHAPES),
      cx: rand(60, 102),
      cy: rand(32, 70),
      size: rand(24, 42),
      fill: decorationColors[2],
      rotate: rand(0, 45),
    },
    {
      type: pick(SHAPES),
      cx: rand(30, 65),
      cy: rand(36, 68),
      size: rand(14, 27),
      fill: decorationColors[3],
      rotate: rand(0, 45),
    },
  ];

  const offsets = shapes.map(() => {
    const dir = rng() * Math.PI * 2;
    const mag = 3 + rng() * 5;
    return { dx: Math.cos(dir) * mag, dy: Math.sin(dir) * mag };
  });

  return (
    <svg
      className="pointer-events-none absolute bottom-0 right-0 select-none"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      overflow="visible"
      aria-hidden="true"
    >
      {shapes.map((s, i) => {
        const { dx, dy } = offsets[i];
        return renderShape(s, i, stroke, {
          transition: "transform 0.3s ease",
          transform: hovered
            ? `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`
            : "translate(0px, 0px)",
        });
      })}
    </svg>
  );
}

export default function ArticleCard({
  article,
  featured,
  accent = "pink",
}: {
  article: Article;
  featured: boolean;
  /** Colour of the offset shadow. */
  accent?: Accent;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article className={featured ? "sm:col-span-2" : ""}>
      <a
        href={`/articles/${article.id}`}
        className={`neo-shadow neo-press relative grid h-full overflow-hidden border-2 border-neutral-50 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-50 ${SHADOW_COLORS[accent]} ${
          featured
            ? "min-h-[280px] bg-neon-pink text-neutral-950"
            : "min-h-[220px] bg-neon-surface text-neutral-50"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CardDecoration
          id={article.id}
          hovered={hovered}
          stroke={featured ? DARK_SHAPE_STROKE : LIGHT_SHAPE_STROKE}
        />
        <div className="flex h-full grow flex-col space-y-2 p-6">
          <h2
            className={`flex-none pr-6 font-bold leading-tight ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}
            style={{
              viewTransitionName: articleTitleTransitionName(article.id),
            }}
          >
            {article.title}
          </h2>
          <div className="flex-1" />
          <div
            className={`flex-none font-mono text-xs uppercase tracking-[0.2em] ${featured ? "text-neutral-900" : "text-neutral-400"}`}
          >
            {featured && "Latest · "}
            <time dateTime={article.date}>
              {formatArticleDate(article.date)}
            </time>
          </div>
        </div>
      </a>
    </article>
  );
}
