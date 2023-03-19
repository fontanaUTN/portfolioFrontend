export class Knowledge {
    id: number;
    nameK: string;
    descriptionK: string;
    imageK: string;
    skillK: string;

    constructor(nameK: string, descriptionK: string, imageK: string, skillK: string){
        this.nameK = nameK;
        this.descriptionK = descriptionK;
        this.imageK = imageK;
        this.skillK = skillK;
    }
}
