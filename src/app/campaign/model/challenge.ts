import { CardPredicate } from './cardPredicate';
import { ChallengeFailureGoal } from './challengeFailureGoal';
import { GoalSubtype } from './goalSubtype';
import { ChallengeGoal } from './challengeGoal';

export class Challenge {
    description: string;
    objective: ChallengeGoal;
    objectiveSubtype: GoalSubtype
    objectiveGoal: number;
    objectiveCheckedDuringGame: boolean;
    failureCondition: ChallengeFailureGoal;
    failureConditionType: GoalSubtype;
    failureAmount: number;
    failureCheckedDuringGame: boolean;
    cardPredicates: CardPredicate[];
}