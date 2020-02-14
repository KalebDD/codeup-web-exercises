"use strict";

//Q.1
function allIndexesOf(arr, val) {
    var newIndex = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            newIndex.push(i);
        }
    }
    return newIndex;
}

var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
console.log(allIndexesOf(fruits, "apple"));
console.log(allIndexesOf(fruits, "guava"));
console.log(allIndexesOf(fruits, "pineapple"));

//Q.2
function removeAll(arr, val) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
console.log(removeAll(bugs, "ant"));



//DICE QUESTIONS, SIDEBAR FROM ARRAYS
function randomIntBetween(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function coinFlip() {
    return randomIntBetween(0, 2);
}

function twoDice() {
    var dice1 = randomIntBetween(1, 6);
    var dice2 = randomIntBetween(1, 6);
    var diceSum = dice1 + dice2;

    return diceSum;

}

function twentySidedDie() {
    return randomIntBetween(1, 20);
}

function twelveSidedDie() {
    return randomIntBetween(1, 12);
}

function tetrahedron() {
    return randomIntBetween(1, 4);
}

function rollDie() {
    return randomIntBetween(1, 6);
}

function listOfRolls(num) {
    var arrayOfRolls = [];

    for (var i = 0; i < num; i++) {
        arrayOfRolls += rollDie();
    }
    return arrayOfRolls.split("");
}

function listOfRollsFromDieFunc(numberOfRolls, diceFunction) {
    var arrayOfRolls = [];

    arrayOfRolls +=



}