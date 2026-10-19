import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 375, height: 812 } });

for (const path of [
  "/",
  "/articles",
  "/articles/intro-to-amazon-ecs",
  "/projects",
  "/projects/smartscout",
  "/about",
  "/about/resume",
  "/this-page-does-not-exist",
]) {
  test(`the open mobile menu sits above the page content on ${path}`, async ({
    page,
  }) => {
    await page.goto(path, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Toggle menu" }).click();
    const menu = page.getByRole("dialog", { name: "Navigation menu" });
    await expect(menu).toHaveAttribute("class", /translate-y-0/);
    // Wait for the slide-down transition to settle.
    await expect
      .poll(() => menu.evaluate((el) => el.getBoundingClientRect().top))
      .toBeGreaterThan(0);

    // Every link in the menu is the topmost element at its own centre.
    for (const link of await menu.getByRole("link").all()) {
      const box = (await link.boundingBox())!;
      const onTop = await page.evaluate(
        ([x, y]) =>
          document.elementFromPoint(x, y)?.closest("#mobile-menu") !== null,
        [box.x + box.width / 2, box.y + box.height / 2],
      );
      expect(onTop, await link.textContent()).toBe(true);
    }
  });
}
