const { test, expect } = require("@playwright/test");

test("Handle Alert Box", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async (dialogWindow) => {
        expect(dialogWindow.type()).toBe("alert");
        expect(dialogWindow.message()).toBe("I am a JS Alert");
        dialogWindow.accept();
    });

    await page.locator("button[onClick='jsAlert()']").click();
});

test("Handle Confirm Box", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async (dialogWindow) => {
        expect(dialogWindow.type()).toBe("confirm");
        expect(dialogWindow.message()).toBe("I am a JS Confirm");
        // dialogWindow.accept();
        dialogWindow.dismiss();
    });

    await page.locator("button[onClick='jsConfirm()']").click();
});

test("Handle Prompt Box", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async (dialogWindow) => {
        expect(dialogWindow.type()).toBe("prompt");
        expect(dialogWindow.message()).toBe("I am a JS prompt");
        dialogWindow.accept("Playwright framework");
    });

    await page.locator("button[onClick='jsPrompt()']").click();
});