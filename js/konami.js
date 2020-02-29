"use strict";

// var inputKeysToWords = [
//     {
//         code: 38,
//         word: "Up"
//     }
//     {
//         code: 40,
//         word: "Down"
//     }
//     {
//         code: 37,
//         word: "Left"
//     }
//     {
//         code: 39,
//         word: "Right"
//     }
//     {
//         code: 66,
//         word: "B"
//     }
//     {
//         code: 65,
//         word: "A"
//     }
//     {
//         code: 13,
//         word: "Start"
//     }
//     {
//         code:,
//         word: ""
//     }
// ];

var cheatCodes = [
    {
        // ^ ^ \/ \/ < > < > b a enter
        name: 'konami',
        code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
    },
    // {
    //     // i d d q d
    //     name: 'doom',
    //     code: [73, 68, 68, 81, 68]
    // },
    // {
    //     // j u s t i n b a i l e y
    //     name: 'metroid',
    //     code: [74, 85, 83, 84, 73, 78, 66, 65, 73, 76, 69, 89]
    // },
    // {
    //     // r o s e b u d
    //     name: 'sims',
    //     code: [82, 79, 83, 69, 66, 85, 68]
    // }
];


var userInput = [];
var counter = 0;
var enterCode = $('#enter-code').keydown(function () {
    enterCode = true;
});

$(document).keyup(function (event) {
    userInput.push(event.keyCode);
    console.log(userInput);

    //WORKING WAY - DO NOT DELETE
    // var test = event.keyCode;
    // if (test === cheatCodes[counter]) {
    //     counter++;
    //     if (counter === 11) {
    //         alert("You gained 30 lives!");
    //         counter = 0;
    //     }
    // } else {
    //     alert('sad msg');
    //     counter = 0;
    // }


    if (userInput.length === 11) {
        for (var i = 0; i < userInput.length; i++) {
            if (i === userInput.length - 1 && userInput[i] === cheatCodes[counter].code[i]) {
                alert("You gained 30 lives!");
                break;
            } else if (userInput[i] === cheatCodes[counter].code[i]) {
                continue;
            } else {
                counter++;
            }
        }
    }


});


