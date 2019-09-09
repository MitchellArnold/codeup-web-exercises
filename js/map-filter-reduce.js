"use strict";




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


/// Filter
const languages = users.filter(function (n) {
    return n.languages.length >= 3;
});
console.log(languages);

// let language = users[n].language    </// unnecessary when you iterate through with n. With arrays, think taking out from array, checking it, and putting it back if it passes ( .filter ), like a bookshelf.

// console.log(users[0].languages);



/// Map
const email = users.map(function (n) {
   return n.email;
});

console.log(email);



/// Reduce
let userCount = users.length;
console.log(userCount);

const experience = users.reduce((total, person) => {
    let totalXP = total + person.yearsOfExperience;
        return totalXP;
}, 0) / userCount;

console.log(experience);



const longestEmail = users.reduce((total, account) => {
    let longest;
    if(longest > account) {
        longest = account.email.length;
        return longest;
    }
}, 0);

console.log(longestEmail);