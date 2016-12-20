export class ChallengeGoal {
    constructor(public value: string) {
    }

    toString() : string {
        return this.value;
    }

    static Standard = new ChallengeGoal("STANDARD");
    static ReachEnd = new ChallengeGoal("REACH_END");
    static StatGreater = new ChallengeGoal("STAT_GT");
    static StatLess = new ChallengeGoal("STAT_LT");
    static StatMost = new ChallengeGoal("STAT_MOST");
    static StatLeast = new ChallengeGoal("STAT_LEAST");
    static OpponentStatGreater = new ChallengeGoal("OPPONENT_STAT_GT");
    static OpponentStatLess = new ChallengeGoal("OPPONENT_STAT_LT");
    static DeckRestriction = new ChallengeGoal("DECK_RESTRICTION");
    static CardsPlayerGreater = new ChallengeGoal("CARDS_PLAYED_GT");
    static CardsPlayerLess = new ChallengeGoal("CARDS_PLAYED_LT");
}