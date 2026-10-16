import { test, expect, type Page } from "@playwright/test";

// pagereveal carries a ViewTransition only when the navigation animated.
const recordReveal = (page: Page) =>
  page.addInitScript(() => {
    window.addEventListener("pagereveal", (event) => {
      (window as unknown as { __viewTransition: boolean }).__viewTransition =
        Boolean((event as Event & { viewTransition?: unknown }).viewTransition);
    });
  });

const revealedWithTransition = (page: Page) =>
  page.evaluate(
    () =>
      (window as unknown as { __viewTransition?: boolean }).__viewTransition,
  );

test("navigating from an article card animates the page change", async ({
  page,
}) => {
  await recordReveal(page);
  await page.goto("/articles", { waitUntil: "networkidle" });
  await page.locator("article a").first().click();
  await expect(page).toHaveURL(/\/articles\/.+/);
  await expect.poll(() => revealedWithTransition(page)).toBe(true);
});

test("page changes do not animate when reduced motion is requested", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await recordReveal(page);
  await page.goto("/articles", { waitUntil: "networkidle" });
  await page.locator("article a").first().click();
  await expect(page).toHaveURL(/\/articles\/.+/);
  await expect.poll(() => revealedWithTransition(page)).toBe(false);
});
