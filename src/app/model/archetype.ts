export class Archetype {
    constructor(public value: string) {
    }

    toString() : string {
        return this.value;
    }

    static Linza = new Archetype('Linza');
    static Raptor = new Archetype('Raptor');
    static Ozan = new Archetype('Ozan');
    static Vanescula = new Archetype('Vanescula');
    static Ariane = new Archetype('Ariane');
    static Morvran = new Archetype('Morvran');
}