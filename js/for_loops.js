"use strict";

//Q.2
function showMultiplicationTable(num) {
    for (i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}

showMultiplicationTable(7);

//Q.3
function tenRandomNumbers() {
    let randomNumber = Math.floor(Math.random() * 180) + 20;

    for (i = 1; i <= 10; i++) {
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is even.");
            randomNumber = Math.floor(Math.random() * 180) + 20
        } else {
            console.log(randomNumber + " is odd.");
            randomNumber = Math.floor(Math.random() * 180) + 20
        }
    }
}

tenRandomNumbers();

//Q.4
function numberPyramid() {
    let j = "";

    for (i = 1; i <= 9; i++) {
        for (j = 1; j <= i; j++) {
            console.log(i);
        }
    }
}
numberPyramid();

//Q.5
function subtract5() {
    for (i = 100; i >= 5; i -= 5) {
        console.log(i);
    }
}
subtract5();
