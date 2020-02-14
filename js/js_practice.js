"use strict";

function isNegative(inp) {
    return inp < 0;
}

function isTen(num) {
    return num === 10;
}

function square(num) {
    return Math.pow(num, 2);
}

function removes(array) {
    var removes = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] === 3) {
            removes += array.splice(i, 1);
            i--;
        }
    }
    return array;
}

function sumAll(array) {
    function reducer(accumulator, value) {
        return accumulator + value;
    }

    return array.reduce(reducer);
}

function countEvens(array) {
    // var evenNumbers = [];
    //
    // for (var i = 0; i < array.length; i++) {
    //     if (array[i] % 2 === 0) {
    //         evenNumbers += array[i];
    //     }
    // }
    // return evenNumbers.length;

    var counter = 0;

    array.forEach(function(number) {
        if (number % 2 === 0) {
            counter++;
        }
    });
    return counter;
}

