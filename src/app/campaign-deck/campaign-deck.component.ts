import { Archetype } from '../model/archetype';
import { PlayerDeck } from '../model/playerDeck';
import { Campaign } from '../model/campaign';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-deck',
    templateUrl: '../campaign-deck/campaign-deck.component.html',
    styleUrls: ['../campaign-deck/campaign-deck.component.css'],
    inputs: ['deck']
})
export class CampaignDeckComponent {
  deck = new PlayerDeck();

  Enums = {
    Archetype: Archetype
  };
}
