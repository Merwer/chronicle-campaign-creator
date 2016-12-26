import { CardService } from './../shared/services/card.service';
import { Deck } from '../model/deck';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-deck',
    templateUrl: './campaign-deck.component.html',
    styleUrls: ['./campaign-deck.component.css'],
    inputs: ['deck']
})
export class CampaignDeckComponent implements OnInit {
  deck: Deck;

  constructor(private cardService: CardService) {

  }

  ngOnInit(): void {
    this.cardService.init();
  }
}
