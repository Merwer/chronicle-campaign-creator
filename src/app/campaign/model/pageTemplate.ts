import { Card } from './card';
import { MapId } from './mapId'

export class PageTemplate {
    id: number;
    mapId: MapId;
    pinnedCards: Card[];
    cardsToDraw: Card[];
    opponentDrawsNormally: boolean;
    opponentCardsToDraw: Card[];
    opponentCardsToPlay: Card[];
    opponentCardsRevealed: boolean;
}