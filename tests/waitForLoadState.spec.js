const { test, expect } = require("@playwright/test");

test("Working With Load State", async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.locator("//a[@href='/signup']").click();

    await page.waitForLoadState("networkidle");

    const count = await page.locator("//input[@type='checkbox']").count();

    expect(count).toBe(6);

    await page.waitForTimeout(3000);
});