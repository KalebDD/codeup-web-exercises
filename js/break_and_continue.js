"use strict";

var userNumber = prompt("Please enter an odd number between 1 and 50.");

while (isNaN(parseFloat(userNumber)) || userNumber % 2 === 0) {
    userNumber = prompt("Please enter an odd number between 1 and 50.");
    if (!isNaN(parseFloat(userNumber)) && userNumber % 2 === 1) {
        break;
    }
}

console.log("Number to skip is: " + userNumber + "\n\n");

for (i = 1; i < 50; i += 2) {
    if (parseFloat(userNumber) === i) {
        console.log("Yikes! Skipping number " + i);
        continue;
    }
    console.log("Here is an odd number: " + i);
}