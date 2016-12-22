export class ChallengeFailureGoal {
    constructor(public value: string) {
    }

    toString() : string {
        return this.value;
    }
    
    static StatGreater = new ChallengeFailureGoal("STAT_GT");
    static StatLess = new ChallengeFailureGoal("STAT_LT");
    static StatMost = new ChallengeFailureGoal("STAT_MOST");
    static StatLeast = new ChallengeFailureGoal("STAT_LEAST");
    static OpponentStatGreater = new ChallengeFailureGoal("OPPONENT_STAT_GT");
    static OpponentStatLess = new ChallengeFailureGoal("OPPONENT_STAT_LT");
    static CardsPlayerGreater = new ChallengeFailureGoal("CARDS_PLAYED_GT");
    static CardsPlayerLess = new ChallengeFailureGoal("CARDS_PLAYED_LT");
}