import { UgenePage } from './app.po';

describe('ugene App', () => {
  let page: UgenePage;

  beforeEach(() => {
    page = new UgenePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
