export class FailureCondition {
    constructor(public value: string) {
    }

    toString() : string {
        return this.value;
    }

    static None = new FailureCondition("NONE");
    static StatGreater = new FailureCondition("STAT_GT");
    static StatLess = new FailureCondition("STAT_LT");
    static OpponentStatGreater = new FailureCondition("OPPONENT_STAT_GT");
    static OpponentStatLess = new FailureCondition("OPPONENT_STAT_LT");
}