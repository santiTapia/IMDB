"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.print = function () {
        console.log(this.peliculas);
    };
    return Imdb;
}());
exports.Imdb = Imdb;
