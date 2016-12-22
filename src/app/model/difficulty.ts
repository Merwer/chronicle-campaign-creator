export class Difficulty {
    constructor(public value: string) {
    }

    toString() : string {
        return this.value;
    }

    static Easy = new Difficulty('EASY');
    static Normal = new Difficulty('NORMAL');
    static Hard = new Difficulty('HARD');
}