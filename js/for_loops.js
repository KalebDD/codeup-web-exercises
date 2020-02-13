"use strict";

//Q.2
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}

showMultiplicationTable(7);

//Q.3
function tenRandomNumbers() {
    for (var i = 1; i <= 10; i++) {
        var randomNumber = Math.floor(Math.random() * 181) + 20;

        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is even.");
        } else {
            console.log(randomNumber + " is odd.");
        }
    }
}

tenRandomNumbers();

//Q.4
function numberPyramid() {

    for (var i = 1; i <= 9; i++) {
        var newLine = "";
        for (var j = 1; j <= i; j++) {
            newLine += i;
        }
        console.log(newLine);
    }
}

numberPyramid();

//Q.5
function subtract5() {
    for (var i = 100; i >= 5; i -= 5) {
        console.log(i);
    }
}

subtract5();

