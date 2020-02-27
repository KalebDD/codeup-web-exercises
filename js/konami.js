"use strict";

var userInput = [];

$(document).keyup(function (event) {
    userInput.push(event.keyCode);

    for (var i = 0; i < userInput.length; i++) {
        if (userInput.length === 11 && userInput[i] === cheatCodes.konami[i]) {
            alert("You gained 30 lives!");
            break;
        }
    }
});


var cheatCodes = {
    // /\/\ \/\/ <> <> b a enter
    konami: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
//     doomGodMode: [I D D Q D],
//     metroid: [JustinBailey],
//     theSims: [rosebud],
//     goldenEye: [L, R + /\, C+>, R+<, R+/\,
// /\, R+>, /\,
// LandR + C\/, LandR+\/, LandR+C<]
}