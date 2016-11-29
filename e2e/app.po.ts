import {browser, protractor, ElementFinder, element, by} from 'protractor';

export class Ng2MaskUsagePage {
  navigateTo() {
    return browser.get('/');
  }

  getInput(): ElementFinder{
    return element(by.css('app-root input'));
  }

  typeText(sequence:string, clear?:boolean) {
    this.getInput().click();
    
    if(clear){
      this.getInput().sendKeys(protractor.Key.BACK_SPACE);
    }
    
    this.getInput().sendKeys(sequence);
    browser.actions().keyUp(protractor.Key.SHIFT);
  }

  getInputText() {
    return this.getInput().getAttribute('value');
  }
}
