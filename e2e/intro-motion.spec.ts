import { test, expect, type Page } from "@playwright/test";

const animation = (page: Page, name: string) =>
  page.evaluate((name) => {
    const found = document
      .getAnimations()
      .find((a) => (a as CSSAnimation).animationName === name);
    if (!found) return null;
    const timing = found.effect!.getComputedTiming();
    return {
      playState: found.playState,
      duration: timing.duration,
      iterations: timing.iterations,
    };
  }, name);

const intro = (page: Page) =>
  page.getByRole("region", { name: "Introduction" });

test("the intro stripe slides once on load, then loops while hovered", async ({
  page,
}) => {
  await page.goto("/");
  // One pass, short enough not to need a pause control (WCAG 2.2.2).
  const pass = await animation(page, "stripe-pass");
  expect(pass?.iterations).toBe(1);
  expect(Number(pass?.duration)).toBeLessThanOrEqual(5000);

  expect((await animation(page, "stripe-loop"))?.playState).toBe("paused");
  await intro(page).hover();
  expect((await animation(page, "stripe-loop"))?.playState).toBe("running");
  await page.mouse.move(0, 0);
  expect((await animation(page, "stripe-loop"))?.playState).toBe("paused");
});

test("Andrew springs on hover", async ({ page }) => {
  await page.goto("/");
  await page.locator("h1 .spring-hover").hover();
  await expect
    .poll(async () => (await animation(page, "spring-bounce"))?.playState)
    .toBeTruthy();
});

test("the intro stays still with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.locator("h1 .spring-hover").hover();
  for (const name of ["stripe-pass", "stripe-loop", "spring-bounce"]) {
    expect(await animation(page, name)).toBeNull();
  }
});
