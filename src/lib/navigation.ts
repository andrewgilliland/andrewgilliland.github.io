const trimSlash = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, "") : path;

/**
 * How a nav link relates to the current path: the exact "page", the
 * "section" it heads (e.g. Articles while reading an article), or neither.
 * Trailing slashes are ignored.
 */
export function navState(
  href: string,
  currentPath: string,
): "page" | "section" | undefined {
  const target = trimSlash(href);
  const current = trimSlash(currentPath);
  if (current === target) return "page";
  if (target !== "/" && current.startsWith(`${target}/`)) return "section";
  return undefined;
}
