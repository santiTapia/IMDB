"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.toString = function () {
        console.log("[" + this.title + "\n" + this.releaseYear + "\n" + this.actors + "\n" + this.nationality + "\n" + this.director + "\n" + this.writer + "\n" + this.language + " cams." + "\n" + this.plataform + this.isMCU + "\n" + this.mainCharacterName + "\n" + this.producer + "\n" + this.distributor + "\n" + this.genre + "]");
    };
    return Movie;
}());
exports.Movie = Movie;
