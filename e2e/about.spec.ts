import { test, expect } from "@playwright/test";

test("about page renders heading", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { name: /developer/i })).toBeVisible();
});

test("about page links to the resume", async ({ page }) => {
  await page.goto("/about");
  await page.getByRole("link", { name: /resume/i }).click();
  await expect(page).toHaveURL("/about/resume");
});

test("resume page renders its sections and links back to About", async ({
  page,
}) => {
  await page.goto("/about/resume");
  await expect(
    page.getByRole("heading", { level: 1, name: "Resume" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Professional Experience" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Back to About" }),
  ).toHaveAttribute("href", "/about");
});
