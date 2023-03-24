export class About {
    id? : number;
    text : string;
    extra : string;

    constructor(text: string, extra: string){
        this.text = text;
        this.extra = extra;
    }
}
