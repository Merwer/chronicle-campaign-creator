import { Card } from './../../model/card';
import { Injectable } from '@angular/core';

@Injectable()
export class CardService {
    MockCards: Card[];

    constructor() {
        this.MockCards = [];
        let c1 = new Card();
        c1.id = 1;
        c1.name = "Test Card 1";
        let c2 = new Card();
        c2.id = 2;
        c2.name = "Test Card 2";
        this.MockCards.push(c1);
        this.MockCards.push(c2);
    }

    getCards(): Card[] {
        return this.MockCards;
    }
}