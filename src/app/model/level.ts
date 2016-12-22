import { PageTemplate } from './pageTemplate';
import { Challenge } from './challenge';
import { FailureCondition } from './failureCondition';
import { GoalSubtype } from './goalSubtype';
import { Goal } from './goal';
import { Card } from './card';
import { OpponentLegend } from './opponentLegend';
import { Deck } from './deck';
import { Difficulty } from './difficulty';
import { Legend } from './legend';
import { PlayerDeck } from './PlayerDeck';
import { FirstTurnType } from './FirstTurnType'

export class Level {
    name: string;
    description: string;
    allowMulligan: boolean;
    playerTurnPriority: FirstTurnType;
    allowUserDecks: boolean;
    playerDecks: PlayerDeck[];
    playerHero: Legend;
    opponentDifficulty: Difficulty;
    opponentDeck: Deck;
    opponentHero: OpponentLegend;
    opponentAvatarOverride: Card;
    opponentEmblemOverride: string;
    opponentTitleOverride: string;
    introDialogue: string;
    objective: Goal;
    objectiveSubtype: GoalSubtype;
    objectiveGoal: number;
    objectiveAffectsOpponent: boolean;
    failureCondition: FailureCondition;
    failureConditionType: GoalSubtype;
    failureAmount: number;
    failureAffectsOpponent: boolean;
    allowKillVictory: boolean;
    challengeStars: Challenge[];
    pageTemplates: PageTemplate[];

    constructor() {
        this.playerDecks = [];
        this.challengeStars = [];
        this.pageTemplates = [];
        this.playerHero = new Legend();
    }
}
