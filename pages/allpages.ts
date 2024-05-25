import { Page } from "@playwright/test";
import { LoginPage } from "./login-page";
import { RegistrationPage } from "./registration-page";


// abys mohla pouzivat await pages.templatePage, tak je potreba si ji tady nadefinovat.
// to znamena, ze si vytvoris novou instanci tridy TemplatePage (nebo Tvoji tridy) a predas ji page (kterou dostanes v konstruktoru)
// vice mene udelej to stejne, jak je ta TemplatePage :) a melo by to fungovat :) 
export class AllPages {
  readonly page: Page;

  // 
  readonly LoginPage: LoginPage;
  readonly RegistrationPage: RegistrationPage;

  constructor(page: Page) {
    this.page = page;
    this.LoginPage = new LoginPage(page);
    this.RegistrationPage = new RegistrationPage(page);
  }

  async visit(url: string) {
    await this.page.goto(url);
  }
}
