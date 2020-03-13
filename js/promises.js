"use strict";

//Old Way
// function wait(delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, delay);
//     });
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// //ES6 Way
// const wait2 = delay => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, delay);
//     });
// }
//
// wait2(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait2(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
// //Instructor solution
// const wait = num => {
//     return new Promise((res) => {
//         setTimeout(res, num);
//     });
// };

const lastUserCommitTime = (userName) => {
    const gitHubAPI = `https://api.github.com/users/${userName}/events`;

    fetch(gitHubAPI, {headers: {'Authorization': gitHubKey}})
        .then((response) => {
            return response.json();
        })
        .then((userArray) => {
            return fetch(userArray[0].payload.commits[0].url)
        })
        .then((commitData) => {
            return commitData.json();
        })
        .then((commitJSON) => {
            console.log(new Date(commitJSON.commit.author.date));
        });
}
lastUserCommitTime("KalebDD");

// =================== Fetch Bonuses

// Add an input field and submit button (you will need to prevent the default behaviour if inside a form element) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.

const userBackground = userInput => {
    fetch("data/profiles.json")
        .then((profiles) => {
            return profiles.json();
        })
        .then((profile) => {
            if (profile[userInput] !== undefined) {
                document.getElementsByTagName("body")[0].style['background-color'] = profile[userInput];
            }
            else {
                alert("Please enter a valid username");
            }
        });
};

document.getElementById('submitButton').addEventListener("click", function () {
    let userInput = document.getElementById('userInput').value;
    userBackground(userInput);
    document.getElementById('userInput').value = "";
}, false);

// -- Ex. 2
//
// Using the Star Wars API, log the first film a given Star Wars character's homeworld appeared in


const getHomeWorld = (character) => {
const starWarsAPI = `https://swapi.co/api/people/?search=${character}`;
let homeWorld = "";

//Search SWAPI for user-inputted character
fetch(starWarsAPI)
    .then((character) => {  //convert character data to JSON
        return character.json();
    })
    .then((characterJSON) => {  //find character homeworld
        const world = characterJSON.results[0].homeworld;
        return fetch(world);
    })
    .then((world) => {  //convert world data to JSON
        return world.json();
    })
    .then((worldJSON) => {  //find world's first appearance on film
        homeWorld = worldJSON.name;
        const firstMovie = worldJSON.films[worldJSON.films.length-1];
        return fetch(firstMovie);
    })
    .then((movie) => {  //convert film data to JSON
        return movie.json();
    })
    .then((movieJSON) => {  //output final message
        let episodeTitle = movieJSON.title;
        let episodeID = movieJSON.episode_id;
        console.log(`${character}'s homeworld, ${homeWorld}, first appeared onscreen in Star Wars Episode ${episodeID}: ${episodeTitle}.`);
    })
};
getHomeWorld("Luke");







// -- Ex. 3
//
// Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.
//
//
//
// -- Ex. 4
//
// Create star-chars.json file in your data folder and paste in the following...
//
// [
//     {
//         "name": "Rey",
//         "coolness": 9
//     },
//     {
//         "name": "Luke Skywalker",
//         "coolness": 9
//     },
//     {
//         "name": "Darth Vadar",
//         "coolness": 10
//     }
// ]
//
// Create a function that fetches this array and returns an array of homeworlds for the characters.
//     It will look something like the following...
//
// ['Jakku', 'Tatooine', 'Tatooine']