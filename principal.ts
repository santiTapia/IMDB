

export class Professional {

public name: string
public age: number
public genre: string
public weight: number
public height: number
public hairColor: string
public eyeColor: string
public race: string
public isRetired: string
public nationality: string
public oscarsNumber: number
public profession: string

    constructor(name: string, age: number, genre: string, weight: number, height: number, hairColor: string, eyeColor: string, race: string, isRetired: string, nationality: string, oscarsNumber: number, profession: string){
        
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;

    }

    getName() {
        return this.name;
    }

    getAge () {
        return this.age;
    }

    getGenre () {
        return this.genre;
    }

    getWheight () {
        return this.weight;
    }

    getHeight () {
        return this.height;
    }

    getHairColor () {
        return this.hairColor;
    }

    getEyeColor () {
        return this.eyeColor;
    }

    getRace () {
        return this.race;
    }

    getNationality () {
        return this.nationality;
    }

    getOscarsNumber () {
        return this.oscarsNumber;
    }

    getProfession () {
        return this.profession;
    }

    toPrint () {
        console.log("[" + this.getName() + "\n" + this.getAge() + "\n" + this.getGenre() + "\n" + this.getWheight() + "\n" + this.getHeight() + "\n" + this.getHairColor() + "\n" + this.getEyeColor() + "\n" + this.getRace() +  this.getNationality() + "\n" + this.getOscarsNumber() + " cams." + "\n" + this.getProfession() + "]");
    }
}
