import { ChronicleCampaignCreatorPage } from './app.po';

describe('chronicle-campaign-creator App', function() {
  let page: ChronicleCampaignCreatorPage;

  beforeEach(() => {
    page = new ChronicleCampaignCreatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
