const { test, expect } = require("@playwright/test");

test('My first test', async ({ page }) => {
    expect(12).toBe(12);
});

test("My Second Test", async ({ page }) => {
    expect(100).toBe(100);
});

test("My Third Test", async ({ page }) => {
    expect(2.0).toBe(2.0);
});

test("My Fourth Test", async ({ page }) => {
    expect("Google Chrome").toContain("Google");
    expect(true).toBeTruthy();
});

test("My Fifth Test", async ({ page }) => {
    expect(false).toBeFalsy();
});

test("My Sixth Test", async ({page}) => {
    expect("Google Chrome".includes("Chrome")).toBeTruthy();
});