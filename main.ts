

import { Professional } from "./principal"


let indiv1: Professional = new Professional ("Brad", 39, "Male", 80, 180, "Blond", "Brown", "Etnic", "No", "American", 45, "Actor");
let indiv2: Professional = new Professional ("Angelina", 42, "Female", 58, 183, "Brown", "Blue", "European", "No", "American", 37, "Actress");


let arr = [indiv1, indiv2];

for (let i=0; i<arr.length; i++) {
    arr[i].toPrint();
}
