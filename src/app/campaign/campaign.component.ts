import { Level } from '../model/level';
import { Campaign } from '../model/campaign';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign',
    templateUrl: './campaign.component.html',
    styleUrls: ['./campaign.component.css'],
    inputs: ['campaign']
})
export class CampaignComponent {
  campaign: Campaign;

  addLevel = function() {
    this.campaign.levels.push(new Level());
  }
}
