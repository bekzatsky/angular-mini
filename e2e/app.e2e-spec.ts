import { AngularMiniPage } from './app.po';

describe('angular-mini App', () => {
  let page: AngularMiniPage;

  beforeEach(() => {
    page = new AngularMiniPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
