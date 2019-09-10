// "use strict";
//
// function wait (ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (ms) {
//                 resolve('passed')
//             } else {
//                 reject('you failed issue')
//             }
//         }, ms);
//
//     });
// };
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




///////////////// Star Wars API    swapi ////////////////
// fetch('https://swapi.co/api/people/1/').then(function (res) {
//     return res.json();
// }).then(function (data) {
//     console.log(data);
// });
//



///////////////// Token Exercise ///////////////

let grab = fetch('https://api.github.com/users', {headers: {'Authorization': 'token baac39ff807f94f9e39561059f882787a70d452f'}}).then(function (resolve) {
    return resolve.json();
}).then(function (data) {
    console.log(data);
});




// / function wait (ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (ms) {
//                 resolve('passed')
//             } else {
//                 reject('you failed issue')
//             }
//         }, ms);
//
//     });
// };
//


// condition check for push date on repo


function getGithubUsernames(username) {
    return new Promise(((resolve, reject) => {
        if(username) {
            resolve(grab


               'Your username: ' + username
            )
        }else {
            reject('Please enter a username')
        }
    }));
};

console.log(getGithubUsernames('mitchell'));


// later on...

// getGithubUsernames().then((usernames) => {
//     usernames.forEach((username) => {
//         // do something with each username
//
//     });
// }).catch(error => console.error(error));
