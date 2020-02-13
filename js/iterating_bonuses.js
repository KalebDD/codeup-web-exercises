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
    var removedValues = [];
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            removedValues = arr.splice(i, 1);
        }
        newArray = arr;
    }
    return newArray;
}

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
console.log(removeAll(bugs, "ant"));
