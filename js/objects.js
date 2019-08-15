(function () {
    "use strict";
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    //
    // var person = {
    //         firstName: "Mitchell",
    //         lastName: "Arnold",
    //
    //     };
    //
    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // var salutation =
    //
    // person.sayHello = function () {
    //     return "Hello " + this.firstName + " " + this.lastName;
    // };
    // console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        // shoppers must buy products that amount to more than $200.
        // if (shopper_spending > 200) { discount * .12 }

    var shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];

    // var offer = {};
    // offer.checkDeal = function (product) {
    //     var discount = .12;
    //     if (product > 200) {
    //         return "$" + discount * product
    //     } else {
    //         return "no discount"
    //     }
    // };

    shoppers.forEach(function (shopper) {
        var discount = .12;
        if (shopper.amount > 200) {
            console.log("Howdy, " + shopper.name + "!" + " Your discount today was $" + ((shopper.amount) * discount).toFixed(2) + " off the original total of $" + (shopper.amount).toFixed(2));
        } else {
            console.log("Sorry " + shopper.name + "." + "You didn't receive a discount.");
        }
    });


    // ));

// // // take shopper 1 and send amount to the first .log()    ...and so on.
// //
// // //
//     console.log(shoppers[0].name + " received " + offer.checkDeal(shoppers[0].amount) + " off the total of $" + shoppers[0].amount);
//     console.log(shoppers[1].name + " received " + offer.checkDeal(shoppers[1].amount) + " off the total of $" + shoppers[1].amount);
//     console.log(shoppers[2].name + " received " + offer.checkDeal(shoppers[2].amount) + " off the total of $" + shoppers[2].amount);


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    //
    // var books = [
    //     {
    //
    //         title: "The Great Unknown",
    //         author: {
    //             firstName: "George",
    //             lastName: "McArthurston"
    //         }
    //     },
    //     {
    //         title: "Shimmery Crickets",
    //         author: {
    //             firstName: "Flyon",
    //             lastName: "Cicaditas"
    //         }
    //     },
    //     {
    //         title: "Grays the Bay",
    //         author: {
    //             firstName: "Pop I.",
    //             lastName: "Shipprekd"
    //         }
    //     },
    //     {
    //         title: "Goodness Gravy Ms. Avery!",
    //         author: {
    //             firstName: "Tyler",
    //             lastName: "Knowles"
    //         }
    //     },
    //     {
    //         title: "Ain't Never Been The Same Since",
    //         author: {
    //             firstName: "Tyson",
    //             lastName: "Blackstone"
    //         }
    //     }
    // ];

    // console.log(books[3].author.firstName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    //
    // books.forEach(function (book, index) {
    //     console.log("Book # " + (parseFloat(index) + 1));
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("---")
    // });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createAuthor(title, author) {
        firstName:
            lastName:
                }

    function createBook(title, author) {
        {
            title:
                author:
                    }


                    function showBookInfo(book){
                        console.log(("Title: " + book.title));
                        "Author: " + book.author.firstName + " " +
                    }
    }

//
})();


