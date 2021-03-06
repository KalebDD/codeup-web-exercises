"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
//FUNCTIONS
function userNumberAlerts(num) {

    var numberMessages;

    numberMessages = (num % 2 === 0 ? "Your number is even.\n" : "Your number is odd.\n");
    numberMessages += "Your number plus 100 is: " + (num + 100) + "\n";
    //line below just to understand theory of nesting ternary
    numberMessages += (num >= 1 ? "Your number is positive." : (num <= -1 ? "Your number is negative." : "Your number is 0, neither positive nor negative."));

    return numberMessages;

}

var confirm = confirm("Would you like to enter a number?");

if (confirm) {
    var userNumber = prompt("Please enter a number.");
    //if (!isNaN(userNumber) <-----better way to do comparison
    if (Number(userNumber) == userNumber) {
        alert(userNumberAlerts(Number(userNumber)));
    } else {
        alert("You have not entered a valid number. Please refresh the page to try again.");
    }
} else {
    alert("Ok. If you change your mind, please refresh the page and try again.");
}

//NO FUNCTIONS
// var confirm = confirm("Would you like to enter a number?");
// if (confirm) {
//     var userNumber = prompt("Please enter your number.");
//
//     if (Number(userNumber) == userNumber) {
//         switch (true) {
//             //check if even
//             case (userNumber % 2 === 0):
//                 alert("Your number is even.");
//                 break;
//             //check if odd
//             default:
//                 alert("Your number is odd.");
//                 break;
//         }
//         alert("Your number plus 100 is: " + (Number(userNumber) + 100));
//         switch (true) {
//             // check if positive
//             case userNumber >= 1:
//                 alert("Your number is also positive.");
//                 break;
//             //check if negative
//             case userNumber <= -1:
//                 alert("Your number is also negative.");
//                 break;
//             // userNumber is 0
//             default:
//                 alert("Your number is 0 - neither positive nor negative.");
//                 break;
//         }
//     } else {
//         alert("You have not entered a number. Please refresh the page and try again.");
//     }
// } else {
//     alert("Ok. If you change your mind, please refresh the page and try again.");
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    var message;

    var colorCheck = color.toLowerCase();

    if (colorCheck === 'red') {
        message = "Red is the color for Valentine's Day.";
    } else if (colorCheck === 'orange') {
        message = "Orange is the color of sunsets.";
    } else if (colorCheck === 'yellow') {
        message = "Yellow is the color of sunflowers.";
    } else if (colorCheck === 'green') {
        message = "Green is the color of spring's leaves.";
    } else if (colorCheck === 'blue') {
        message = "Blue is the color of the ocean.";
    } else if (colorCheck === 'indigo') {
        message = "Indigo is the color of peonies.";
    } else if (colorCheck === 'violet') {
        message = "Violet is the color of royalty.";
    } else {
        message = color + " isn't a registered color!";
    }
    return message;
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorExample2(color) {
    var message;

    var colorCheck = color.toLowerCase();

    switch (colorCheck) {
        case 'red':
            message = "Red is the color for Valentine's Day.";
            break;
        case 'orange':
            message = "Orange is the color of sunsets.";
            break;
        case 'yellow':
            message = "Yellow is the color of sunflowers.";
            break;
        case 'green':
            message = "Green is the color of spring's leaves.";
            break;
        case 'blue':
            message = "Blue is the color of the ocean.";
            break;
        case 'indigo':
            message = "Indigo is the color of peonies.";
            break;
        case 'violet':
            message = "Violet is the color of royalty.";
            break;
        default:
            message = color + " isn't a registered color!";
            break;
    }
    return message;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userFavoriteColor = prompt("Hello! What is your favorite color?");
alert(analyzeColorExample2(userFavoriteColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(total) {
    var discountPercents = [.1, .25, .35, .50, 1];
    var luckyNum = Math.floor(Math.random() * 6);
    var discountMessageTemplate = "Your total is: $ " + total + "\nYour lucky number is: " + luckyNum;
    var discountMessage;

    switch (luckyNum) {
        case 0:
            discountMessage = discountMessageTemplate + "! \nI'm sorry, you have no discount today!";
            break;
        case 1:
            discountMessage = discountMessageTemplate + "\nCongratulations! You got a 10% discount! \nYour new total is: $" + (total - total * discountPercents[0]);
            break;
        case 2:
            discountMessage = discountMessageTemplate + "\nCongratulations! You got a 25% discount! \nYour new total is: $" + (total - total * discountPercents[1]);
            break;
        case 3:
            discountMessage = discountMessageTemplate + "\nCongratulations! You got a 35% discount! \nYour new total is: $" + (total - total * discountPercents[2]);
            break;
        case 4:
            discountMessage = discountMessageTemplate + "\nCongratulations! You got a 50% discount! \nYour new total is: $" + (total - total * discountPercents[3]);
            break;
        case 5:
            discountMessage = discountMessageTemplate + "\nAMAZING! You got a 100% discount! \nYour new total is: $" + (total - total * discountPercents[4]);
            break;
    }
    return discountMessage;
}

var userTotal = prompt("Enter your total amount today to receive your lucky number!");

if (Number(userTotal) == userTotal) {
    alert(calculateTotal(Number(userTotal)));
} else {
    alert("I'm sorry, you have not entered a number. Please refresh the page and try again.");
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
