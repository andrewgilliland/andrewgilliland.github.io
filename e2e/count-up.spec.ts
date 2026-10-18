import { test, expect, type Page } from "@playwright/test";

const counter = (page: Page) =>
  page.locator(".count-up").evaluate((el) => ({
    shown: getComputedStyle(el).counterReset,
    real: el.previousElementSibling?.textContent ?? "",
    animations: el.getAnimations().length,
  }));

test("the article count animates up to the real total", async ({ page }) => {
  await page.goto("/");
  const { real, animations } = await counter(page);
  expect(Number(real)).toBeGreaterThan(0);
  expect(animations).toBeGreaterThan(0);
  await expect
    .poll(async () => (await counter(page)).shown, { timeout: 5000 })
    .toBe(`count ${real}`);
});

test("the article count is static with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const { shown, real, animations } = await counter(page);
  expect(animations).toBe(0);
  expect(shown).toBe(`count ${real}`);
});
