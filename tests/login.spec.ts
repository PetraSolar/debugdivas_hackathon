import { expect, test } from "@playwright/test";

import { AllPages } from "../pages/allpages";

test.describe("Successful login and logout", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);
    await pages.visit("/en/login?back=my-account.html");
  });

test("Successful login and logout", async ({ page }) => {
  await page.locator('#email').fill('hackathon@seznam.cz');
  await page.getByLabel('Password').fill('Hackathon01');
  await page.getByRole('button', { name: ' Sign in' }).click();
 await pages.LoginPage.checkIsLoggedIn(); 
  await page.getByRole('button', { name: 'Petra' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  var h1 = await page.getByText('Authentication');
  expect(h1).toBeTruthy();
})
  
})
