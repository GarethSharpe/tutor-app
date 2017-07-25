import { TutorAppPage } from './app.po';

describe('tutor-app App', () => {
  let page: TutorAppPage;

  beforeEach(() => {
    page = new TutorAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
