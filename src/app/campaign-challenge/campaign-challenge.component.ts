import { CardPredicate } from './../model/cardPredicate';
import { ChallengeFailureGoal } from '../model/challengeFailureGoal';
import { GoalSubtype } from '../model/goalSubtype';
import { ChallengeGoal } from '../model/challengeGoal';
import { Challenge } from '../model/challenge';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-challenge',
    templateUrl: './campaign-challenge.component.html',
    styleUrls: ['./campaign-challenge.component.css'],
    inputs: ['challenge']
})
export class CampaignChallengeComponent {
  challenge: Challenge;

  addCardPredicate = function () {
      this.challenge.cardPredicates.push(new CardPredicate());
  }

  Enums = {
      ChallengeGoal: ChallengeGoal,
      GoalSubtype: GoalSubtype,
      ChallengeFailureGoal: ChallengeFailureGoal
  }
}
