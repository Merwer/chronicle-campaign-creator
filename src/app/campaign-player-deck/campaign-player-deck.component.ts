import { CardService } from './../shared/services/card.service';
import { Archetype } from '../model/archetype';
import { PlayerDeck } from '../model/playerDeck';
import { Campaign } from '../model/campaign';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-player-deck',
    templateUrl: './campaign-player-deck.component.html',
    styleUrls: ['./campaign-player-deck.component.css'],
    inputs: ['deck']
})
export class CampaignPlayerDeckComponent {
  deck = new PlayerDeck();
  Enums = {
    Archetype: Archetype
  };

  constructor(private cardService: CardService) {

  }
}
