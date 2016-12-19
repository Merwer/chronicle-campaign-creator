import { ChronicleCampaignCreatorAngularPage } from './app.po';

describe('chronicle-campaign-creator-angular App', function() {
  let page: ChronicleCampaignCreatorAngularPage;

  beforeEach(() => {
    page = new ChronicleCampaignCreatorAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
