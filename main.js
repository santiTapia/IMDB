"use strict";
exports.__esModule = true;
var principal_1 = require("./principal");
var indiv1 = new principal_1.Professional("Brad", 39, "Male", 80, 180, "Blond", "Brown", "Etnic", "No", "American", 45, "Actor");
var indiv2 = new principal_1.Professional("Angelina", 42, "Female", 58, 183, "Brown", "Blue", "European", "No", "American", 37, "Actress");
var arr = [indiv1, indiv2];
for (var i = 0; i < arr.length; i++) {
    arr[i].toPrint();
}
