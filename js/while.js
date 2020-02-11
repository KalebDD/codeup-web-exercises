"use strict";

//Q.2
let i = 2;

while (i <= 65536) {
    console.log(i);
    i *= 2;
}

//Q.3
let allCones = Math.floor(Math.random() * 50) + 50;

do {
    let soldCones = Math.floor(Math.random() * 5) + 1;

    if (allCones >= soldCones) {
        console.log("I have " + allCones + " cones left to sell.");
        console.log(soldCones + " cones have been sold!");
        allCones -= soldCones;
    } else {
        console.log("I'm sorry, I can't sell you " + soldCones + ", I only have " + allCones + " left!");
    }

} while (allCones > 0);
console.log("Hooray! I've sold all my cones!");