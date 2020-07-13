"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
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
    Professional.prototype.getName = function () {
        return this.name;
    };
    Professional.prototype.getAge = function () {
        return this.age;
    };
    Professional.prototype.getGenre = function () {
        return this.genre;
    };
    Professional.prototype.getWheight = function () {
        return this.weight;
    };
    Professional.prototype.getHeight = function () {
        return this.height;
    };
    Professional.prototype.getHairColor = function () {
        return this.hairColor;
    };
    Professional.prototype.getEyeColor = function () {
        return this.eyeColor;
    };
    Professional.prototype.getRace = function () {
        return this.race;
    };
    Professional.prototype.getNationality = function () {
        return this.nationality;
    };
    Professional.prototype.getOscarsNumber = function () {
        return this.oscarsNumber;
    };
    Professional.prototype.getProfession = function () {
        return this.profession;
    };
    Professional.prototype.toPrint = function () {
        console.log("[" + this.getName() + "\n" + this.getAge() + "\n" + this.getGenre() + "\n" + this.getWheight() + "\n" + this.getHeight() + "\n" + this.getHairColor() + "\n" + this.getEyeColor() + " cams." + "\n" + this.getRace() + this.getNationality() + "\n" + this.getOscarsNumber() + " cams." + "\n" + this.getProfession() + "]");
    };
    return Professional;
}());
exports.Professional = Professional;
