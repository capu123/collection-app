export class Collectable {
    public name: string;
    public gender: string;
    public location: string;
    public photo: string;

    constructor(name: string, gender: string, location: string, photo: string){
        this.name = name;
        this.gender = gender;
        this.location = location;
        this.photo = photo;
    }
}