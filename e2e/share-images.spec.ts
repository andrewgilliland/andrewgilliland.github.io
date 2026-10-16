import { test, expect } from "@playwright/test";

for (const { path, image } of [
  { path: "/", image: "/og/default.png" },
  {
    path: "/articles/intro-to-amazon-ecs",
    image: "/og/articles/intro-to-amazon-ecs.png",
  },
  { path: "/projects/smartscout", image: "/og/projects/smartscout.png" },
]) {
  test(`${path} links a generated share image`, async ({ page, request }) => {
    await page.goto(path);
    const content = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content");
    expect(new URL(content ?? "").pathname).toBe(image);

    const response = await request.get(image);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("image/png");
  });
}
