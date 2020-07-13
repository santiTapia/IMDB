

import { Movie } from "./movie"

let m1: Movie = new Movie ("Troya", 2001, "American", "Legend");
let m2: Movie = new Movie ("El rey Leon", 2002, "European", "Kids");

let array = [m1, m2];

for(let i = 0; i<array.length; i++) {
    array[i].toString();
}

