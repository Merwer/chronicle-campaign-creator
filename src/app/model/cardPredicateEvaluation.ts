export class CardPredicateEvaluation {
    constructor(public value: string) {
    }

    toString() : string {
        return this.value;
    }

    static Equals = new CardPredicateEvaluation("EQUALS");
    static NotEquals = new CardPredicateEvaluation("NOT_EQUALS");
    static Greater = new CardPredicateEvaluation("GREATER_THAN");
    static Less = new CardPredicateEvaluation("LESS_THAN");
    static GreaterOrEqual = new CardPredicateEvaluation("GREATER_OR_EQUAL");
    static LessOrEqual = new CardPredicateEvaluation("SMALLER_OR_EQUAL");
}