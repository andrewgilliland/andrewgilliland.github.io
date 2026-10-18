import { test, expect, type Page } from "@playwright/test";

const style = (page: Page, selector: string) =>
  page.locator(selector).evaluate((el) => {
    const cs = getComputedStyle(el);
    const rise = el
      .getAnimations()
      .some((a) => (a as CSSAnimation).animationName === "rise-in");
    return { translate: cs.translate, boxShadow: cs.boxShadow, rise };
  });

const lastProject = "main .lift-in > a[href^='/projects/']:last-child";

test.describe("on a phone", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("tiles below the fold rise into place as they scroll in", async ({
    page,
  }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const before = await style(page, lastProject);
    expect(before.rise).toBe(true);
    expect(before.translate).toBe("0px 32px");

    await page
      .locator(lastProject)
      .evaluate((el) =>
        el.scrollIntoView({ block: "center", behavior: "instant" }),
      );
    await expect
      .poll(async () => (await style(page, lastProject)).translate)
      .toMatch(/^(none|0px)$/);
    expect((await style(page, lastProject)).boxShadow).toMatch(
      /8px 8px 0px 0px/,
    );
  });

  test("tiles still rise on a repeat visit", async ({ page }) => {
    await page.goto("/");
    await page.goto("/articles");
    await page.goto("/", { waitUntil: "networkidle" });
    expect((await style(page, lastProject)).rise).toBe(true);
  });

  test("tiles do not rise with reduced motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/", { waitUntil: "networkidle" });
    expect((await style(page, lastProject)).rise).toBe(false);
  });
});

test.describe("articles page on a phone", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("article cards rise into place as they scroll in", async ({ page }) => {
    await page.goto("/articles", { waitUntil: "networkidle" });
    const card = "main article:nth-of-type(6) > a";
    const before = await style(page, card);
    expect(before.rise).toBe(true);
    expect(before.translate).toBe("0px 32px");

    await page
      .locator(card)
      .evaluate((el) =>
        el.scrollIntoView({ block: "center", behavior: "instant" }),
      );
    await expect
      .poll(async () => (await style(page, card)).translate)
      .toMatch(/^(none|0px)$/);
    expect((await style(page, card)).boxShadow).toMatch(/8px 8px 0px 0px/);
  });
});
