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

test("the stripe never runs out of colour while it slides", async ({
  page,
}) => {
  await page.goto("/");
  await page.mouse.move(0, 0);
  // Push both animations to their furthest point: pass done, loop at its end.
  await page.evaluate(() => {
    for (const a of document.getAnimations()) {
      const name = (a as CSSAnimation).animationName;
      if (name === "stripe-pass") a.finish();
      if (name === "stripe-loop") {
        a.pause();
        a.currentTime = Number(a.effect!.getTiming().duration) - 1;
      }
      if (name === "lift-in") a.finish();
    }
  });
  const stripe = page.locator(".color-divider--slide");
  const box = (await stripe.boundingBox())!;
  const png = await page.screenshot({
    clip: {
      x: box.x + box.width - 12,
      y: box.y + box.height / 2,
      width: 4,
      height: 1,
    },
  });
  // The tile's surface is #171717; any stripe colour is far brighter.
  const { data } = await (
    await import("sharp")
  )
    .default(png)
    .raw()
    .toBuffer({ resolveWithObject: true });
  expect(Math.max(data[0], data[1], data[2])).toBeGreaterThan(100);
});

test("the intro stripe's colour bands are equal widths", async ({ page }) => {
  await page.goto("/");
  await page.mouse.move(0, 0);
  // Settle the load animations (infinite ones cannot be finished).
  await page.evaluate(() =>
    document.getAnimations().forEach((a) => {
      if (a.effect?.getComputedTiming().endTime !== Infinity) a.finish();
    }),
  );
  const box = (await page.locator(".color-divider--slide").boundingBox())!;
  const png = await page.screenshot({
    clip: {
      x: box.x + 2,
      y: box.y + box.height / 2,
      width: box.width - 4,
      height: 1,
    },
  });
  const { data, info } = await (
    await import("sharp")
  )
    .default(png)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const neon: Record<string, number[]> = {
    pink: [0xec, 0x48, 0x99],
    emerald: [0x6e, 0xe7, 0xb7],
    yellow: [0xfd, 0xe0, 0x47],
    cyan: [0x67, 0xe8, 0xf9],
  };
  const counts: Record<string, number> = {
    pink: 0,
    emerald: 0,
    yellow: 0,
    cyan: 0,
  };
  for (let i = 0; i < data.length; i += info.channels) {
    const px = [data[i], data[i + 1], data[i + 2]];
    const nearest = Object.entries(neon).sort(
      ([, a], [, b]) =>
        a.reduce((s, v, k) => s + (v - px[k]) ** 2, 0) -
        b.reduce((s, v, k) => s + (v - px[k]) ** 2, 0),
    )[0][0];
    counts[nearest]++;
  }
  // The row spans exactly one period of the pattern.
  for (const share of Object.values(counts).map((n) => n / info.width)) {
    expect(share).toBeGreaterThan(0.22);
    expect(share).toBeLessThan(0.28);
  }
});
