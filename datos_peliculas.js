"use strict";
exports.__esModule = true;
var movie_1 = require("./movie");
var m1 = new movie_1.Movie("Troya", 2001, "American", "Legend");
var m2 = new movie_1.Movie("El rey Leon", 2002, "European", "Kids");
var array = [m1, m2];
for (var i = 0; i < array.length; i++) {
    array[i].toString();
}
