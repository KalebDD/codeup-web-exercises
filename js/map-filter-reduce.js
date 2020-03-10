const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Q.2
let threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

//Q.3
let filterAddress = users.map(user => user.email);
console.log(filterAddress);

//Q.4
let totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
console.log(totalYears);
let averageYears = totalYears / users.length;
console.log(averageYears);

//Q.5
let test = filterAddress.reduce(function (longestSoFar, email) {
    //Checking if current email is longer than stored longest
    return email.length > longestSoFar.length ? email : longestSoFar;
    // if (email.length > longestSoFar.length) {
    //     return email;
    // }
    // else {
    //     return longestSoFar;
    // }
}, "@");
console.log(test);

let longestEmail = filterAddress.reduce((longest, email) =>  email.length > longest.length ?  email : longest, "@");
console.log(longestEmail);

//Q.6
let stringUserNames = users.reduce((string, user) =>
    users.length === user.id ? string + `${user.name}.` : string + `${user.name}, `, "Your instructors are: ");
    //Below doesn't have period at end
    // string + `${user.name}, `, "Your instructors are: ");
console.log(stringUserNames);


let stringUserNames2 = users.reduce((string, user, i) => users.length - 1 === i ? string + `${user.name}.` : string + `${user.name}, `, "Your instructors are: ");
console.log(stringUserNames2);
