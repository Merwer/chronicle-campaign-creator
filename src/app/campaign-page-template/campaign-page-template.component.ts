import { Card } from './../model/card';
import { PageTemplate } from '../model/pageTemplate';
import { MapId } from '../model/mapId';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-page-template',
    templateUrl: './campaign-page-template.component.html',
    styleUrls: ['./campaign-page-template.component.css'],
    inputs: ['template']
})
export class CampaignPageTemplateComponent {
  template: PageTemplate;

  Enums = {
    MapId: MapId
  }

  addCardToDraw = function () {
    this.template.cardsToDraw.push(new Card());
  }
  addOpponentCardToDraw = function () {
    this.template.opponentCardsToDraw.push(new Card());
  }
}
