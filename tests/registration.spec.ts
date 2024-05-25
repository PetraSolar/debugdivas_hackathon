import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Successful registration", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.visit("/en/login?back=my-account.html");
  });

test("Successful registration", async ({ page }) => {
  const randomEmail = generateRandomEmail();
  const randomPassword = generateRandomPassword();
  const randomName = generateRandomName();
  const randomSurname = generateRandomSurname();

  await page.locator('#email_create').fill(randomEmail);
  await page.getByRole('button', { name: ' Create an account' }).click();
  await page.getByLabel('Mr.').check();
  await page.getByLabel('First name *').fill(randomName);
  await page.getByLabel('Last name *').fill(randomSurname);
  await page.getByLabel('Password *').fill(randomPassword);
  await page.getByRole('button', { name: 'Register  ' }).click();
  await pages.RegistrationPage.checkIsLoggedIn();
});
})

function generateRandomEmail(): string {
  const randomString = Math.random().toString(36).substring(2, 10);
  const email = `${randomString}@example.com`;
  return email;
}

function generateRandomPassword(): string {
  const randomString = Math.random().toString(36).substring(2, 10);
  const password = randomString;
  return password;
}

function generateRandomName(): string {
  const randomString = Math.random().toString(36).substring(2, 10);
  const name = randomString;
  return name;
}

function generateRandomSurname(): string {
  const randomString = Math.random().toString(36).substring(2, 10);
  const surname = randomString;
  return surname;
}
