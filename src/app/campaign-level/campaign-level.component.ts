import { PageTemplate } from '../model/pageTemplate';
import { Challenge } from '../model/challenge';
import { FailureCondition } from '../model/failureCondition';
import { Goal } from '../model/goal';
import { GoalSubtype } from '../model/goalSubtype';
import { ChallengeFailureGoal } from '../model/challengeFailureGoal';
import { ChallengeGoal } from '../model/challengeGoal';
import { Difficulty } from '../model/difficulty';
import { PlayerDeck } from '../model/playerDeck';
import { Level } from '../model/level';
import { Campaign } from '../model/campaign';
import { FirstTurnType } from '../model/firstTurnType';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-level',
    templateUrl: './campaign-level.component.html',
    styleUrls: ['./campaign-level.component.css'],
    inputs: ['level']
})
export class CampaignLevelComponent {
  level: Level;

  Enums = {
      FirstTurnType: FirstTurnType,
      Difficulty: Difficulty,
      Goal: Goal,
      GoalSubtype: GoalSubtype,
      FailureCondition: FailureCondition,
      ChallengeGoal: ChallengeGoal,
      ChallengeFailureGoal: ChallengeFailureGoal
  }

  addPlayerDeck = function () {
    this.level.playerDecks.push(new PlayerDeck());
  }

  addChallengeStar = function () {
    if(this.level.challengeStars.length < 3) {
      this.level.challengeStars.push(new Challenge());
    }
  }

  addPageTemplate = function () {
    this.level.pageTemplates.push(new PageTemplate());
  }
}
