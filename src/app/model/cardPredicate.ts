import { CardPredicateEvaluation } from './cardPredicateEvaluation';
import { CardPredicateType } from './cardPredicateType';

export class CardPredicate {
    predicateType: CardPredicateType;
    predicateEval: CardPredicateEvaluation;
    predicateValue: number;
}