export class people {
    id?: number;
    name: String;
    lastname: String;
    image: String;

    constructor(name: String, lastname: String, image: String){
        this.name = name;
        this.lastname = lastname;
        this.image = image;
    }
}