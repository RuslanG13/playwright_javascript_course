const { test, expect } = require("@playwright/test");

test.use(
    {
        viewport: {
            width: 1500,
            height: 1000
        }
    }
)

test("Verify Error Message", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // console.log(page.viewportSize().width);  // 1280
    // console.log(page.viewportSize().height);  // 720

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin124");
    await page.locator("//button[@type='submit']").click();

    const errorMessage = await page.locator("//p[contains(@class, 'oxd-alert-content-text')]").textContent();

    expect(errorMessage.includes("Invalid")).toBeTruthy();
    expect(errorMessage === "Invalid credentials").toBeTruthy();
});