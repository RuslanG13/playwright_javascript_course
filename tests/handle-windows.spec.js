const { test } = require("@playwright/test");

test("Working with multiple tabs", async ({ browser }) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("//a[contains(@href, 'facebook')]").first().click()

    ]);

    await newPage.locator("//input[@name='email']").last().fill("alexgoodman@gmail.com");

    await newPage.close();

    await page.locator("#email1").fill("alexgoodman@gmail.com");
});