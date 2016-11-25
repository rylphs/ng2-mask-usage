import { browser, element, by } from 'protractor';

export class Ng2MaskUsagePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root span')).getText();
  }
}
