const { test, expect } = require("@playwright/test");
const path = require("path");

test("Verify file upload", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    const filePath = path.resolve("assets", "debug.png");

    await page.locator("#file-upload").setInputFiles(filePath);
    await page.locator("#file-submit").click();

    const fileUploadHeader = page.locator("//h3");

    await expect(fileUploadHeader).toHaveText("File Uploaded!");
});