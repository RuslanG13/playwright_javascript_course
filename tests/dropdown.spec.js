const { test, expect } = require("@playwright/test");

test("Select Values From Dropdown", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    /*
    label
    value
    index
    */

    await page.locator("#state").selectOption({ label: "Goa" });
    await page.locator("#state").selectOption({ value: "Himachal Pradesh" });
    await page.locator("#state").selectOption({ index: 3 });

    // const values = await page.locator("#state").textContent();
    // expect(values.includes("Assam")).toBeTruthy();

    let state = await page.$("#state");
    let allElements = await state.$$("option");
    let dropdownStatus = false;

    for (let i = 1; i < allElements.length; i++) {
        let element = allElements[i];

        let value = await element.textContent();

        if (value.includes("Assam")) {
            console.log(value);

            dropdownStatus = true;
            break;
        }
    }

    expect(dropdownStatus).toBeTruthy();

    await page.locator("#hobbies").selectOption(["Playing", "Dancing"]);
});