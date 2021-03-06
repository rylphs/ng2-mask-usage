import { Ng2MaskUsagePage } from './app.po';
import { TEST_INPUTS } from './input';
import {browser, protractor, ElementFinder, element, by} from 'protractor';

describe('ng2-mask-usage App', function() {
  let page: Ng2MaskUsagePage;

  beforeEach(() => {
    page = new Ng2MaskUsagePage();
  });

  it('should display message saying app works', () => {
    browser.get("/");
    expect(page.getInputText()).toEqual('0');
    /*for(let i in TEST_INPUTS["999-999"]){
      let input = TEST_INPUTS["999-999"][i];
      console.log(input.input, input.clear, input.result);
      page.typeText(input.input, input.clear);
      expect(page.getInputText()).toEqual(input.result);
    }*/
   // expect(0).toEqual('0');

    
    // element(by.css('app-root input')).sendKeys("b").then(()=>{
    //   //console.log(protractor.Key);
    //   expect(page.getInputText()).toEqual('1');
    // })
    element(by.css('app-root input')).sendKeys('1').then(()=>{
      page.getInput().getText().then((v:any)=>{
        console.log("tag attr: ", v);
      })
      expect(page.getInputText()).toEqual('1');
   })
    page.typeText("11111");

    expect(page.getInputText()).toEqual('1');
    
  });
});
