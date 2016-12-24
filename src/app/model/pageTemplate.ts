import { Card } from './card';
import { MapId } from './mapId'

export class PageTemplate {
    id: number;
    mapId: MapId;
    pinnedCards: Card[] = [];
    cardsToDraw: Card[] = [];
    opponentDrawsNormally: boolean;
    opponentCardsToDraw: Card[] = [];
    opponentCardsToPlay: Card[] = [];
    opponentCardsRevealed: boolean;

    constructor () {
        this.pinnedCards[0] = new Card();
        this.pinnedCards[1] = new Card();
        this.pinnedCards[2] = new Card();
        this.pinnedCards[3] = new Card();
        this.opponentCardsToPlay[0] = new Card();
        this.opponentCardsToPlay[1] = new Card();
        this.opponentCardsToPlay[2] = new Card();
        this.opponentCardsToPlay[3] = new Card();
    }
}