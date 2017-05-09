import { SchoolManagementSystemPage } from './app.po';

describe('school-management-system App', () => {
  let page: SchoolManagementSystemPage;

  beforeEach(() => {
    page = new SchoolManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
