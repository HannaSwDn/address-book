import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display create contact header', () => {
    expect(page.getParagraphText()).toEqual('Create contact');
  });

  it('should add a new contact', () => {
    let count = page.cardCount();
    expect(count).toBe(0);

    page.getField('name').sendKeys('John Doe');
    page.getField('email').sendKeys('john@craftacademy.se');
    page.getField('company').sendKeys('Craft Academy');
    page.getField('role').sendKeys('Tester');
    page.getField('twitter').sendKeys('@tester');
    page.getField('location').sendKeys('Gothenburg');
    page.getField('notes').sendKeys('Some tester guy');

    page.getSubmitButton().click();

    count = page.cardCount();
    expect(count).toBe(1);
  });
});
