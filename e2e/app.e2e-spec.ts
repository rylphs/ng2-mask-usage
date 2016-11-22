import { Ng2MaskUsagePage } from './app.po';

describe('ng2-mask-usage App', function() {
  let page: Ng2MaskUsagePage;

  beforeEach(() => {
    page = new Ng2MaskUsagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
