const { expect } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = "#email1";
        this.password = "#password1";
        this.loginBtn = "button[type='submit']";
        this.sighInHeader = "//h2[text()= 'Sign In']";
    }

    async loginToApplication(login, password) {
        await this.page.fill(this.username, login);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginBtn);
    }

    async verifySignIn() {
        await expect(this.page.locator(this.sighInHeader)).toBeVisible();
    }
}

module.exports = LoginPage;