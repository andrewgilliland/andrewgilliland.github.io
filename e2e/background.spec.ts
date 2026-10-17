import { test, expect, type Page } from "@playwright/test";

const mainBackground = (page: Page) =>
  page
    .locator("main")
    .evaluate((main) => getComputedStyle(main).backgroundImage);

test("board pages draw the dot grid", async ({ page }) => {
  for (const path of ["/", "/articles", "/projects", "/about"]) {
    await page.goto(path);
    expect(await mainBackground(page), path).toContain("radial-gradient");
  }
});

test("reading pages keep a plain background", async ({ page }) => {
  for (const path of [
    "/articles/intro-to-amazon-ecs",
    "/projects/smartscout",
    "/about/resume",
  ]) {
    await page.goto(path);
    expect(await mainBackground(page), path).toBe("none");
  }
});
