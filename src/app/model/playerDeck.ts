import { Archetype } from './archetype';

import { Deck } from './deck';
export class PlayerDeck extends Deck {
    name: string;
    archetype: Archetype;
}