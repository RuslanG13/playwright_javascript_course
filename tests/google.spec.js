const { test, expect } = require("@playwright/test");

test("Verify Application Title", async ({ page }) => {
    await page.goto("https://www.google.com/");

    const url = page.url();
    const title = await page.title();

    await expect(page).toHaveTitle("Google");
});