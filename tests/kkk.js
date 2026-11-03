console.log("1");

async function test() {
    console.log("2");

    await Promise.resolve();

    console.log("3");
}

test();

console.log("4");

test("Open page", async ({ page }) => {
    console.log("1");

    await page.goto("https://example.com");

    console.log("2");
});