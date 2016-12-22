import { PlayerDeck } from '../model/playerDeck';
import { Level } from '../model/level';
import { Campaign } from '../model/campaign';
import { FirstTurnType } from '../model/firstTurnType';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-level',
    templateUrl: '../campaign-level/campaign-level.component.html',
    styleUrls: ['../campaign-level/campaign-level.component.css'],
    inputs: ['level']
})
export class CampaignLevelComponent {
  level: Level;

    Enums = {
        FirstTurnType: FirstTurnType
    }

  addPlayerDeck = function () {
    this.level.playerDecks.push(new PlayerDeck());
  }
}
