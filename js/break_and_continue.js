//// first question
// create js/break_and_continue.js

//// second question

do {
    var oddNumber = +prompt("What is a number between 1 and 50.");
    if(oddNumber % 2 === 1) {
        console.log("This is your current odd number: " + oddNumber);
    }else {
        console.log("This isn't an odd number.");
    }
} while (oddNumber <= 50);



//// third question
//
// for (var i = 1; i <= 50; i++) {
//     if (i === 27) {
//         console.log("Yikes! Skipping number: " + i);
//         continue;
//     }
//     if (i % 2 === 1) {
//         console.log("Here is an odd number: " + i)
//
//     }
// }