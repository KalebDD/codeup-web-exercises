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
        //OBJECT LITERAL
    var person = {
            firstName: "Kaleb",
            lastName: "Dworsky",
        }
    console.log(person.firstName);
    console.log(person.lastName);

    //OBJECT WITH IN-BUILT OBJECT CONSTRUCTOR FUNCTION - not recommended due to scope res. and way more lines of code
    var person2 = new Object();
    person2.firstName = "Rando";
    person2.lastName = "Pearson";
    console.log(person2.firstName);
    console.log(person2.lastName);

    //OBJECT WITH USER-DEFINED CONSTRUCTOR FUNCTION
    function Person(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    var person3 = new Person('Gale', 'Dworsky');
    console.log(person3.firstName);
    console.log(person3.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        console.log("Hello from " + this.firstName + " " + this.lastName + "!");
    }
    person.sayHello();

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

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.totalAndDiscount = function () {
        var discount = .12;
        var totalWithDiscount = "";

        for (var i = 0; i < this.length; i++) {
            if (this[i].amount > 200) {
                totalWithDiscount = this[i].amount - (this[i].amount * discount);
            } else {
                totalWithDiscount = this[i].amount;
            }
            console.log("Hello " + this[i].name + "!\n" + "Your total today is: $" + this[i].amount + "\nToday's discount for orders over $200 is: " + (discount * 100) + "%\nYour new total is: $" + totalWithDiscount);
        }
    };
    shoppers.totalAndDiscount();

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
    var books = [
        {
            title: "The Salmon of Doubt",
            author:
                {
                    firstName: "Douglas",
                    lastName: "Adams"
                }
        },
        {
            title: "Oathbringer",
            author:
                {
                    firstName: "Brandon",
                    lastName: "Sanderson"
                },
        },
        {
            title: "Name of the Wind",
            author:
                {
                    firstName: "Slow",
                    lastName: "Writer"
                }
        },
        {
            title: "Hatchet",
            author:
                {
                    firstName: "Gary",
                    lastName: "Paulsen"
                }
        },
        {
            title: "American Gods",
            author:
                {
                    firstName: "Neill",
                    lastName: "Gaiman"
                }
        }
    ];
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
    books.forEach(function (book, i) {

        console.log("Book # " + (i + 1) + "\nTitle: " + book.title + "\nAuthor: " + book.author.firstName + " " + book.author.lastName + "\n---");
    });


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

    books.createBook = function (title, authorName) {
        var authorFirstName = authorName.split(" ")[0];
        var authorLastName = authorName.split(" ")[1];

        this.push({
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        });
    }

})();
