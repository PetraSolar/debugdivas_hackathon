import { Locator, Page, expect } from "@playwright/test";

export class RegistrationPage {
  readonly page: Page;

  readonly buttonByName: Locator;
  readonly EmailInput: Locator;
  readonly FirstNameInput: Locator;
  readonly LastNameInput: Locator;
  readonly PasswordInput: Locator;
  readonly RegisterButton: Locator;
  readonly loggedInUser: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonByName = page.locator("Create an account")
    this.buttonByName = page.locator("Register")
    this.EmailInput = page.locator('//*[@id="email_create"]');
    this.FirstNameInput = page.locator('//*[@id="customer_firstname"]');
    this.LastNameInput = page.locator('//*[@id="customer_lastname"]');
    this.PasswordInput = page.locator('//*[@id="passwd"]');
    this.RegisterButton = page.locator("//button[@type='submit']");
    
    this.loggedInUser = page.locator(".account_user_name");

  }

  async visit() {
    await this.page.goto("/en/login?back=my-account.html");
  }

  async insertEmail(email: string) {
    await this.EmailInput.fill(email);
  }

  async insertFirstName(firstName: string) {
    await this.FirstNameInput.fill(firstName);
  }

  async insertLastName(lastName: string) {
    await this.LastNameInput.fill(lastName);
  }

  async insertPassword(password: string) {
    await this.PasswordInput.fill(password);
  }

  async clickRegisterButton() {
    await this.RegisterButton.click();
  }


  async checkIsLoggedIn(): Promise<void> {
    const loggedInUser = await this.page.locator(".account_user_name");
    expect(loggedInUser).toBeDefined();
  }

}
