import { Deck } from './deck';
import { Archetype } from './archetype';

export class PlayerDeck extends Deck {
    name: string;
    archetype: Archetype;
}