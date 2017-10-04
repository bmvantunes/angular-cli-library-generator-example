import { AppPage } from './app.po';

describe('angular-cli-library-generator-example App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to mc!');
  });
});
