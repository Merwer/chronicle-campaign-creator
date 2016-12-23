import { CardService } from './../shared/services/card.service';
import { Card } from '../model/card';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-card',
    templateUrl: './campaign-card.component.html',
    styleUrls: ['./campaign-card.component.css'],
    inputs: ['card']
})
export class CampaignCardComponent {
  card: Card;

  constructor(private cardService: CardService) {

  }
}
