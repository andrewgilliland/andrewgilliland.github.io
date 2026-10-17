import { test, expect } from "@playwright/test";

test("projects page renders heading", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: /projects/i })).toBeVisible();
});

test("SmartScout project card is visible and links to detail page", async ({
  page,
}) => {
  await page.goto("/projects");
  await page.getByRole("link", { name: /smartscout/i }).click();
  await expect(page).toHaveURL("/projects/smartscout");
});

test("Manchester United Hospitality card links to its case study", async ({
  page,
}) => {
  await page.goto("/projects");
  await page
    .getByRole("link", { name: /manchester united hospitality/i })
    .click();
  await expect(page).toHaveURL("/projects/manchester-united-hospitality");
  await expect(
    page.getByRole("heading", { name: "Manchester United Hospitality" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Visit hospitality.manutd.com" }),
  ).toHaveAttribute("href", "https://hospitality.manutd.com");
  await expect(
    page.getByRole("img", { name: "Storefront architecture" }),
  ).toBeVisible();
});

for (const { path, cta, href } of [
  {
    path: "/projects/manchester-united-hospitality",
    cta: "Visit hospitality.manutd.com",
    href: "https://hospitality.manutd.com",
  },
  {
    path: "/projects/smartscout",
    cta: "View on the App Store",
    href: "https://apps.apple.com/us/app/precision-planting-smartscout/id1672094173",
  },
  {
    path: "/projects/blono-dev",
    cta: "Visit blono.dev",
    href: "https://blono.dev",
  },
]) {
  test(`${path} links back to projects and out to the live project`, async ({
    page,
  }) => {
    await page.goto(path);
    await expect(
      page.getByRole("link", { name: "Back to Projects" }),
    ).toHaveAttribute("href", "/projects");
    await expect(page.getByRole("link", { name: cta })).toHaveAttribute(
      "href",
      href,
    );
  });
}
