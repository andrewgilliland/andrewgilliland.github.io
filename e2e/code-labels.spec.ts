import { test, expect, type Page } from "@playwright/test";

const labelOf = (page: Page, language: string) =>
  page
    .locator(`.neon-prose pre[data-language="${language}"]`)
    .first()
    .evaluate((pre) => getComputedStyle(pre, "::before").content);

test("code blocks are labelled with their language", async ({ page }) => {
  await page.goto(
    "/articles/building-data-pipelines-with-step-functions-and-lambda",
  );
  expect(await labelOf(page, "python")).toBe('"python"');
});

test("short language aliases share one label", async ({ page }) => {
  await page.goto(
    "/articles/ai-powered-e2e-testing-with-playwright-and-claude",
  );
  expect(await labelOf(page, "ts")).toBe('"typescript"');
});

test("plain text blocks have no label", async ({ page }) => {
  await page.goto(
    "/articles/autonomous-test-generation-with-playwright-and-claude",
  );
  expect(await labelOf(page, "plaintext")).toBe("none");
});
