const { test } = require("@playwright/test");

test("Keyboard Events in Playwright", async ({ page }) => {

    await page.goto("https://www.google.com");

    // await page.locator("textarea[name='q']").fill("Mukesh Otwani");

    // await page.keyboard.press("Enter");  // Single Keys

    // await page.keyboard.press("Control+A");  // Multiple Keys
    // await page.keyboard.press("Control+C");
    // await page.keyboard.press("Backspace");
    // await page.keyboard.press("Control+V");


    await page.locator("textarea[name='q']").focus()

    await page.keyboard.type("Playwright framework!");
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.down("Shift");

    for (let i = 0; i < " framework".length; i++) {
        await page.keyboard.press("ArrowLeft");
    }

    await page.keyboard.up("Shift");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Enter");
});