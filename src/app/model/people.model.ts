export class people {
    id?: number;
    name: string;
    lastname: string;
    description: string;
    image: string;

    constructor(name: string, lastname: string, description: string, image: string){
        this.name = name;
        this.lastname = lastname;
        this.description = description;
        this.image = image;
    }
}