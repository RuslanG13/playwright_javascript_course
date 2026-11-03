const { test, expect } = require("@playwright/test");

const testData = JSON.parse(JSON.stringify(require("../testdata.json")));
const testParametrData = JSON.parse(JSON.stringify(require("../testlogin.json")));

test("Valid Login", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    await page.getByPlaceholder("Username").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").click();
    await page.getByText("Logout").click();

    await expect(page).toHaveURL(/login/);
});

test("Login To Application", async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.locator("input[id='email1']").fill(testData.username);
    await page.locator("input[id='password1']").fill(testData.password);
});

test.describe("Data Driven Login Test", () => {

    for (const data of testParametrData) {
        test.describe(`Login with users ${data.id}`, () => {
            test("Login To Application With Parameterization", async ({ page }) => {

                await page.goto("https://freelance-learn-automation.vercel.app/login");

                await page.locator("input[id='email1']").fill(data.username);
                await page.locator("input[id='password1']").fill(data.password);
            });
        });
    }
});