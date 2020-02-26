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

//contains vowels, research indexof, str.match, str.includes
function containsVowel(str) {
    if (typeof str === 'string' && /*IS NOT NUMERIC*/) {
        str = str.toLowerCase();

        if (str.indexOf('a') >= 0 || )
    } else {
        return false;
    }


}
// Write a function named capitalizeName that accepts a string that is a first and last name separated by
// a space, and returns a string that that has the first and last names capitalized.
//
// For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.
//
// capitalizeName('ron weasley') // "Ron Weasley"

function capitalizeName(str) {
    var array = str.split(" ");
    var firstName = array[0].charAt(0).toUpperCase() + array[0].slice(1);
    var lastName = array[1].charAt(0).toUpperCase() + array[1].slice(1);
    var capName = firstName + " " + lastName;

    return capName;
}


function capitalizeName2(string) {
    var nameArray = string.split(" ");
    var firstNameCaps = (nameArray[0].split(""))[0].toUpperCase() + nameArray[0].slice(1);
    var lastNameCaps = (nameArray[1].split(""))[0].toUpperCase() + nameArray[1].slice(1);
    var newName = firstNameCaps + " " + lastNameCaps;

    return newName;
}

//Vivian's Solution
function capitalizeNameVivian(string) {
    var firstName = string.split('')[0];
    var lastName = string.split('')[1];

    var firstCapital = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    var lastCapital = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return firstCapital + " " + lastCapital;

}

//
// Write a function named capitalizeAllNames that accepts an array of strings where each string is in the format described in the previous problem, and returns an array of strings where each string contains a capitalized named.
//
// capitalizeAllNames(['ron weasley', 'harry potter', 'hermione granger'])
// // ['Ron Weasley', 'Harry Potter', 'Hermione Granger']

function capitalizeAllNames(array) {
    var capName = [];

    array.forEach(function(name) {
       capName.push(capitalizeName(name));
    });
    return capName;
}