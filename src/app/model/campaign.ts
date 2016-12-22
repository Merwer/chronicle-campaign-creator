import { Level } from "./level";

export class Campaign {
    name: string;
    description: string;
    levels: Level[];
    customTitleImage: string;//Image;
    customPageTexture: string;//Image;

    constructor() {
        this.name = '';
        this.description = '';
        this.levels = [];
        this.customTitleImage = '';
        this.customPageTexture = '';
    }
}
