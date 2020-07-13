

import { Imdb } from "./imdb"
import { Movie } from "./movie"

let m1: Movie = new Movie ("Troya", 2001, "American", "Legend");

let peli: Imdb = new Imdb ([m1]);

peli.print();
