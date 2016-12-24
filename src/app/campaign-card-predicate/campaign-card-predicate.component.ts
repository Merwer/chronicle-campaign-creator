import { CardPredicateEvaluation } from '../model/cardPredicateEvaluation';
import { CardPredicateType } from '../model/cardPredicateType';
import { CardPredicate } from '../model/cardPredicate';
import { Component } from '@angular/core';

@Component({
    selector: 'chronicle-campaign-card-predicate',
    templateUrl: './campaign-card-predicate.component.html',
    styleUrls: ['./campaign-card-predicate.component.css'],
    inputs: ['predicate']
})
export class CampaignCardPredicateComponent {
  predicate: CardPredicate;

  Enums = {
    CardPredicateType: CardPredicateType,
    CardPredicateEvaluation: CardPredicateEvaluation
  }
}
