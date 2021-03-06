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


//DICE FUNCTIONS
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

    for (var i = 0; i < numberOfRolls; i++) {
        arrayOfRolls.push(diceFunction());
    }
    return arrayOfRolls;
}

//END DICE FUNCTIONS


//ARRAY PRACTICE
//E.0
function first(array) {
    return array[0];
}

//E.1
function secondToLast(array) {
    return array[array.length - 2];
}

//E.2
function rest(array) {
    return array.slice(1, array.length);
}

//E.3
function getLongestString(array) {
    var elementLength = 0;
    var longestElement = "";

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > elementLength) {
            elementLength = array[i].length;
            longestElement = array[i];
        }
    }
    return longestElement;
}

//E.3-1
function getShortestString(array) {
    var elementLength = Infinity;
    var shortestElement = "";

    for (var i = 0; i < array.length; i++) {
        if (array[i].length < elementLength) {
            elementLength = (array[i].length);
            shortestElement = array[i];
        } else if (array[i].length === elementLength) {
            shortestElement += elementLength.push(array[i]);
        }
    }
    return shortestElement;
}

//E.4
function addTwoArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

//E.5
function getUniqueValues(array) {
    return [...new Set(array)];
}

//E.6
function reverseArray(array) {
    return array.slice().reverse();
}

//E.7
function getRandomQuote() {
    var quotesArray = [
        "Something inspirational is coming.",
        "Look towards tomorrow for answers.",
        "Inspiration is fickle; dedication is strong."
    ];
    var randomNumber = Math.floor(Math.random() * 3);

    return quotesArray[randomNumber];
}

//E.8
function getIndexesOf(arg1, arg2) {
    var indexArray = [];
    var arg2Array = arg2.split("");

    arg2Array.forEach(function (char, i) {
        if (char === arg1) {
            indexArray.push(i);
        }
    });

return indexArray;
}

//E.9
function removeAll(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
    // array.forEach(function(char, i) {
    //     if (char === value) {
    //         array.splice(i, 1);
    //         i--
    //     }
    // });
}
//E.10
function firstTenFibonacciNumbers() {

}