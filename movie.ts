

export class Movie {

    title: string
    releaseYear: number
    actors: string
    nationality: string
    director: string
    writer: string
    language: string
    plataform: string
    isMCU: string
    mainCharacterName: string
    producer: string
    distributor: string
    genre: string

    constructor (title: string, releaseYear: number, nationality: string, genre: string) {

        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;

    }

    toString () {
        console.log("[" + this.title + "\n" + this.releaseYear + "\n" + this.actors + "\n" + this.nationality + "\n" + this.director + "\n" + this.writer + "\n" + this.language + "\n" + this.plataform +  this.isMCU + "\n" + this.mainCharacterName + "\n" + this.producer + "\n" + this.distributor + "\n" + this.genre + "]");
    }
}
