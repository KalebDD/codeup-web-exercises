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
            console.log(commitJSON.commit.author.date);
        });
}
lastUserCommitTime("KalebDD");
// console.log(data);
// const userRepo = data[0].repo.url;
// const userCommitDetails = data[0].payload.commits[0].message;
