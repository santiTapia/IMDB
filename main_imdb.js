"use strict";
exports.__esModule = true;
var imdb_1 = require("./imdb");
var movie_1 = require("./movie");
var m1 = new movie_1.Movie("Troya", 2001, "American", "Legend");
var peli = new imdb_1.Imdb([m1]);
peli.print();
