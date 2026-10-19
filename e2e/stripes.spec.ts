import { test, expect, type Page, type Locator } from "@playwright/test";
import sharp from "sharp";

const NEON: Record<string, number[]> = {
  pink: [0xec, 0x48, 0x99],
  emerald: [0x6e, 0xe7, 0xb7],
  yellow: [0xfd, 0xe0, 0x47],
  cyan: [0x67, 0xe8, 0xf9],
};

/** Share of a row through the stripe's middle that each colour covers. */
async function bandShares(page: Page, stripe: Locator) {
  // Settle load animations (infinite ones cannot be finished).
  await page.mouse.move(0, 0);
  await page.evaluate(() =>
    document.getAnimations().forEach((a) => {
      if (a.effect?.getComputedTiming().endTime !== Infinity) a.finish();
    }),
  );
  await stripe.scrollIntoViewIfNeeded();
  const box = (await stripe.boundingBox())!;
  // Inside the 2px borders, through the vertical middle.
  const png = await page.screenshot({
    clip: {
      x: box.x + 2,
      y: box.y + box.height / 2,
      width: box.width - 4,
      height: 1,
    },
  });
  const { data, info } = await sharp(png)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const counts: Record<string, number> = {
    pink: 0,
    emerald: 0,
    yellow: 0,
    cyan: 0,
  };
  for (let i = 0; i < data.length; i += info.channels) {
    const px = [data[i], data[i + 1], data[i + 2]];
    const distance = (c: number[]) =>
      c.reduce((sum, v, k) => sum + (v - px[k]) ** 2, 0);
    const nearest = Object.keys(NEON).sort(
      (a, b) => distance(NEON[a]) - distance(NEON[b]),
    )[0];
    counts[nearest]++;
  }
  return Object.values(counts).map((n) => n / info.width);
}

const expectEqualBands = (shares: number[]) => {
  for (const share of shares) {
    expect(share).toBeGreaterThan(0.24);
    expect(share).toBeLessThan(0.26);
  }
};

test.use({ viewport: { width: 1280, height: 800 } });

test("the home intro stripe has four equal bands", async ({ page }) => {
  await page.goto("/");
  expectEqualBands(
    await bandShares(page, page.locator(".color-divider--slide")),
  );
});

test("page heading stripes have four equal bands", async ({ page }) => {
  await page.goto("/articles");
  expectEqualBands(
    await bandShares(page, page.locator("main header .color-divider")),
  );
});

test("the footer stripe has four equal bands", async ({ page }) => {
  await page.goto("/");
  expectEqualBands(
    await bandShares(page, page.locator(".color-divider:has(+ footer)")),
  );
});
