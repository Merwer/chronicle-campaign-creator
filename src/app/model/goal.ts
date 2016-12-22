export class Goal {
    constructor(public value: string) {
    }

    toString() : string {
        return this.value;
    }

    static Standard = new Goal("STANDARD");
    static ReachEnd = new Goal("REACH_END");
    static StatGreater = new Goal("STAT_GT");
    static StatLess = new Goal("STAT_LT");
    static StatMost = new Goal("STAT_MOST");
}