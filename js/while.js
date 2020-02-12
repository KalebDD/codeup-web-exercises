"use strict";

//Q.2
let i = 2;

while (i <= 65536) {
    console.log(i);
    i *= 2;
}

//Q.3
let allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have " + allCones + " cones to sell today. Let's start!");

do {
    let soldCones = Math.floor(Math.random() * 5) + 1;

    if (allCones >= soldCones) {
        if (soldCones > 1) {
            allCones -= soldCones;
            var soldMessage1 = "I sold " + soldCones + " cones. Only " + allCones + " cones left to sell!";
            console.log(soldMessage1);
        } else {
            allCones -= soldCones;
            var soldMessage2 = "Yay! I sold " + soldCones + " cone. Only " + allCones + " left to sell!";
            console.log(soldMessage2);
        }
    } else {
        var sorryMessage = "I'm sorry, I can't sell you " + soldCones + ", I only have " + allCones + " left!";
        console.log(sorryMessage);
    }
} while (allCones > 0);
console.log("Hooray! I've sold all my cones!");
