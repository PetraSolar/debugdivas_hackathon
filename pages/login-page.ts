import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly buttonByName: Locator;
  readonly EmailInput: Locator;
  readonly PasswordInput: Locator;
  readonly LoginButton: Locator;
  readonly loggedInText: Locator;
  readonly loggedOutText: Locator;
  readonly loggedUser: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonByName = page.locator("Sign in")
    this.EmailInput = page.locator('//*[@id="email"]');
    this.PasswordInput = page.locator('//*[@id="passwd"]');
    this.LoginButton = page.locator("//button[@type='submit']");
    this.loggedInText = page.locator(".account_user_name");
    
    this.loggedOutText = page.locator("Authentication");
    this.loggedUser = page.locator(".account_user_name");

  }

  async visit() {
    await this.page.goto("/en/login?back=my-account.html");
  }

  async insertEmail(email: string) {
    await this.EmailInput.fill(email);
  }

  async insertPassword(password: string) {
    await this.PasswordInput.fill(password);
  }

  async clickLoginButton() {
    await this.LoginButton.click();
  }


  async checkIsLoggedIn(): Promise<void> {
    const loggedInText = await this.loggedInText.textContent();
    expect(loggedInText).toBe("Petra");
  }

  async checkIsLoggedOut(): Promise<void> {
    const loggedOutText = await this.loggedOutText;
    expect(loggedOutText).toHaveText("Authentication");
  }
}
