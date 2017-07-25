import { TurnPage } from './app.po';

describe('turn App', () => {
  let page: TurnPage;

  beforeEach(() => {
    page = new TurnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
