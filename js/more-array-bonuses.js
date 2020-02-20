// #Loops, Arrays, & Objects
//
// ##Basic Review
//
// 1. What is an array in Javascript?
//
//     2. What is an object in Javascript?
//
//     3. What is the difference between an array and an object?
//
//     4. What is a property? A method?
//
//     5. Why are loops useful when dealing with arrays?
//
//     6. What is an index?
//
//     7. What is the difference between dot and bracket notation?
//
//
//     ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//
//         filterNumbers(["fred", true, 5, 3]) //[3, 5]
//
function filterNumbers(array) {
    var filteredArray = [];
    var compareNumbers = function compare(a, b) {
        return a - b;
    };
    var sortedArray = filteredArray.sort(compareNumbers);

    array.forEach(function (item) {
        if (!isNaN(parseFloat(item))) {
            filteredArray.push(item);
        }
    });
    return sortedArray;
}

// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.

//Example Input:
var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

function getOlder(object) {
    object.forEach(function (dog) {
        dog.age += 1;
    });
    return object;
}

// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false

// Example input
var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];

function washCars(object) {
    object.forEach(function (car) {
        car.isDirty = false;
    });
    return object;
}

// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

//Example Input:
var users = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];

//1ST PART - COUNT USERS
function adminList(object) {
    var counter = 0;

    object.forEach(function (user) {
        if (user.isAdmin === true) {
            counter++;
        }
    });
    return counter;
}

//2ND PART - ADMIN EMAILS ARRAY
function adminList1(object) {
    var adminEmails = [];

    object.forEach(function (user) {
        if (user.isAdmin === true) {
            adminEmails.push(user.email);
        }
    });
    return adminEmails;
}

//3RD PART - ADMIN ARRAY OF OBJECTS
function adminList2(object) {
    var adminInfo = [];

    object.forEach(function (user) {
        if (user.isAdmin === true) {
            adminInfo.push(user);
        }
    });
    return adminInfo;
}

// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

//Example Input:
var breads = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

function makeSandwichObjects(object1, object2) {
    var sandwichArray = [];

    object1.forEach(function(bread, i) {
        var object = {};
        object.bread = bread;
        object.filling = object2[i];
        sandwichArray.push(object);
    });
    return sandwichArray;
}