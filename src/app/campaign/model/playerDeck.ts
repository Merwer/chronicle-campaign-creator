import { Card } from './card';
import { Archetype } from './archetype';

export class PlayerDeck {
    name: string;
    archetype: Archetype;
    cards: Card[];
}