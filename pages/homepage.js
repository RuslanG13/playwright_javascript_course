const { expect } = require("@playwright/test");

class HomePage {
    constructor(page) {
        this.page = page;
        this.menu = "img[alt='menu']";
        this.logoutOption = "//button[text() = 'Sign out']";
        this.manageOption = "//span[text() = 'Manage']";
    }

    async logoutFromApplication() {
        await this.page.click(this.menu);
        await this.page.click(this.logoutOption);
    }

    async verifyManageOption() {
        await expect(this.page.locator(this.manageOption)).toBeVisible();
    }
}

module.exports = HomePage;