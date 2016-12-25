export class Campaign {
    name: string;
    description: string;
    levels: string[];
    customTitleImage: string;//Image;
    customPageTexture: string;//Image;

    constructor() {
        this.levels = [];
    }
}
