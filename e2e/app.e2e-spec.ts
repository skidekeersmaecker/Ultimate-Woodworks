import { IndustialFurniturePage } from './app.po';

describe('industial-furniture App', function() {
  let page: IndustialFurniturePage;

  beforeEach(() => {
    page = new IndustialFurniturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
