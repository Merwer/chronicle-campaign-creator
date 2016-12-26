import { CardService } from './../shared/services/card.service';
import { Card } from '../model/card';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-card',
    templateUrl: './campaign-card.component.html',
    styleUrls: ['./campaign-card.component.css'],
    inputs: ['card']
})
export class CampaignCardComponent implements OnInit {
  card: Card;

  constructor(private cardService: CardService) {

  }

  ngOnInit(): void {
    this.cardService.init();
  }
}
