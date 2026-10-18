import { test, expect, type Page } from "@playwright/test";

const tiles = (page: Page) => page.locator("main .lift-in > :not(h2)");

test("home tiles lift off their shadows one after another", async ({
  page,
}) => {
  await page.goto("/");
  const delays = await tiles(page).evaluateAll((els) =>
    els.map((el) => {
      const lift = el
        .getAnimations()
        .find((a) => (a as CSSAnimation).animationName === "lift-in");
      return lift ? Number(lift.effect?.getTiming().delay) : null;
    }),
  );
  expect(delays.length).toBeGreaterThan(5);
  expect(delays.every((d) => d !== null)).toBe(true);
  // Each tile starts no earlier than the one before it.
  for (let i = 1; i < delays.length; i++) {
    expect(delays[i]!).toBeGreaterThanOrEqual(delays[i - 1]!);
  }
});

test("tiles settle at rest and still lift on hover", async ({ page }) => {
  await page.goto("/");
  const project = page.locator("main a[href^='/projects/']").first();
  await expect
    .poll(() => project.evaluate((el) => el.getAnimations().length), {
      timeout: 5000,
    })
    .toBe(0);
  expect(
    await project.evaluate((el) => getComputedStyle(el).boxShadow),
  ).toMatch(/8px 8px 0px 0px/);
  await project.hover();
  await expect
    .poll(() => project.evaluate((el) => getComputedStyle(el).boxShadow))
    .toMatch(/12px 12px 0px 0px/);
});

test("tiles do not animate with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const running = await tiles(page).evaluateAll(
    (els) => els.filter((el) => el.getAnimations().length > 0).length,
  );
  expect(running).toBe(0);
});

test("the entrance plays once per visit", async ({ page }) => {
  const lifting = () =>
    tiles(page).evaluateAll(
      (els) =>
        els.filter((el) =>
          el
            .getAnimations()
            .some((a) => (a as CSSAnimation).animationName === "lift-in"),
        ).length,
    );

  await page.goto("/");
  expect(await lifting()).toBeGreaterThan(0);

  // Back to the home page in the same tab: no entrance this time.
  await page.goto("/articles");
  await page.goto("/");
  expect(await lifting()).toBe(0);
});
