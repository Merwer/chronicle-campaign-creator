import { Campaign } from './model/campaign';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign',
    templateUrl: './campaign.component.html',
    styleUrls: ['./campaign.component.css']
})
export class CampaignComponent {
  campaign = new Campaign();
}
