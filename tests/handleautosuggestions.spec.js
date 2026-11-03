const { test } = require("@playwright/test");

test("Verify Application Title Using Keyboard", async ({ page }) => {

    await page.goto("https://www.google.com");

    await page.locator("textarea[name='q']").fill("Playwright framework");
    await page.waitForSelector("[role='option']");

    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
});

test("Verify Application Title Using Loop", async ({ page }) => {

    await page.goto("https://www.google.com");

    await page.locator("textarea[name='q']").fill("Playwright framework");
    await page.waitForSelector("[role='option']");

    const elements = await page.$$("[role = 'option']");

    for (let i = 0; i < elements.length; i++) {
        const text = await elements[i].textContent();

        if (text.includes("playwright framework tutorial")) {
            await elements[i].click();
            break;
        }
    }
    await page.waitForTimeout(3000);
});