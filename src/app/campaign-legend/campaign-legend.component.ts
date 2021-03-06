import { Legend } from '../model/legend';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-legend',
    templateUrl: './campaign-legend.component.html',
    styleUrls: ['./campaign-legend.component.css'],
    inputs: ['legend']
})
export class CampaignLegendComponent {
  legend: Legend;
}
