"use strict";

// console.log("Hello from external JavaScript.");
//
// alert("Welcome to my Website!");
// var userFavoriteColor = prompt("What's your favorite color?");
// alert("Awesome, " + userFavoriteColor + " is my favorite color too!");




// //MOVIE RATES
// alert("Now begins our previous exercises, but updated!");
//
// var movieRate = Number(prompt("First question: How much does it cost to rent 1 movie for 1 day?"));
// var movieLittleMermaid = Number(prompt("How long have you rented The Little Mermaid for?"));
// var movieBrotherBear = Number(prompt("How long have you rented Brother Bear for?"));
// var movieHercules = Number(prompt("How long have you rented Hercules for?"));
//
// alert("Excellent! Your total sans sales tax comes out to: " + (movieLittleMermaid+movieBrotherBear+movieHercules)*movieRate + "!");
//


// //JOB RATES
// alert("Now, let's move on to your work hours and rates! We know you contract with Google, Amazon, and Facebook, so:");
// var googleRate = Number(prompt("What is your rate at Google?"));
// var amazonRate = Number(prompt("What is your rate at Amazon?"));
// var facebookRate = Number(prompt("What is your rate at Facebook?"));
// var googleHours = Number(prompt("How many hours this week did you work for Google?"));
// var amazonHours = Number(prompt("How many hours did you work for Amazon this week?"));
// var facebookHours = Number(prompt("This week, how many hours did you work for Facebook?"));
// alert("Excellent! Your total pay for this week is: $" + ((googleRate*googleHours)+(amazonRate+amazonHours)+(facebookRate*facebookHours)) + "!");




//CAN THE STUDENT ENROLL?
// alert("Let's check and see if you can enroll in this class.");
// var classFull = confirm("Is this class full?");
// var classSchedule = confirm("Does the class schedule interfere with your schedule?");
//
// if (classFull === false && classSchedule === false) {
//     alert("Success! You can enroll!");
// } else {
//     alert("Looks like you can't enroll.");
// }


//PRODUCT OFFER
var premiumMember = confirm("Are you a premium member?");
var numberOfItems = Number(prompt("How many items do you have?"));
var offerExpired = confirm("Has this offer expired?");

 if ((numberOfItems > 2 || premiumMember === true) && (offerExpired === false)) {
    alert("Hooray! You can use apply this offer!");
} else {
    alert("Sorry, looks like you cannot use this offer.");
}