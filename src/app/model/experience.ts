export class Experience {
    id? : number;
    nameE : string;
    descriptionE : string;
    imageE : string;

    constructor(nameE: string, descriptionE: string, imageE: string){
        this.nameE = nameE;
        this.descriptionE = descriptionE;
        this.imageE = imageE;
    }
}
