const { test, expect } = require("@playwright/test");

test("Verify file upload", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("assets\\debug.png");
    await page.locator("#file-submit").click();

    const fileUploadHeader = page.locator("//h3");

    await expect(fileUploadHeader).toHaveText("File Uploaded!");
});