import { CardService } from './../shared/services/card.service';
import { Deck } from '../model/deck';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-deck',
    templateUrl: './campaign-deck.component.html',
    styleUrls: ['./campaign-deck.component.css'],
    inputs: ['deck']
})
export class CampaignDeckComponent {
  deck: Deck;

  constructor(private cardService: CardService) {

  }
}
