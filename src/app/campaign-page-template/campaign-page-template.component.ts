import { PageTemplate } from '../model/pageTemplate';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-page-template',
    templateUrl: './campaign-page-template.component.html',
    styleUrls: ['./campaign-page-template.component.css'],
    inputs: ['template']
})
export class CampaignPageTemplateComponent {
  template: PageTemplate;
}
