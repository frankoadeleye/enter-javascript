"use strict";

"name", 40, true, [], {}, function(){},null,undefined,false

//PRIMITIVE VALUE
//Forms of values: 
//string: "name", "60", "function(){}", "true", 'false', `null`
//numbers: 60, 3.5, -56, 0, -0,
//null: null,
//undefined: undefined
//boolean: true, false
//SYMBOLS:
//BIG INTS:


//NON-PRIMITIVE
//function: a block of code that returns a value
//object: a block of code that contains a description
//array: a block of code that lists items

function Add30(){
    let myName = "Richard";
    return myName;
}

let relative = {
  //(key): (value)
    name: "Thompson",
    age: 35,
    isLively: true,
    isTooOldToMarry: null,
}

let myBooks = ['Book1', 'Book2', 'Book3', 60, {}, ["value", 300, ['']], ];

//TESTING THE VALUE OF AN ELEMENT IS CALLED typeof():

let val = null;
// console.log(typeof(val));

//PRIMITIVE: 
let myName = "Frederick";
    myName = "Fiona";
    console.log(myName);

//NON-PRIMITIVE:
// let library = ["Book1", "Book2", "Book3"];
// console.log(library);
// library[1] = "Rich Dad Poor Dad";
// console.log(library);

/*
Declare a variable isActive and assign it the boolean false. On the next line, reassign isActive to true. Print the value of isActive after the reassignmnent. *
*/

let isActive = false;
    isActive = true;
    // console.log(isActive);//true.

/*
Write JavaScript code that declares a boolean variable isLoggedIn and sets it to false. Declare another variable userStatus and assign the value of isLoggedIn to it. Then, change userStatus to true. Print both variables. Do they have the same value at the end? Explain why.
*/

let isLoggedIn = false;
let userStatus = isLoggedIn;
    userStatus = true;

    //L64: isLoggedIn = false
    //l66: userStatus = true;

    // console.log(isLoggedIn); //false
    // console.log(userStatus); //true

    //NO, because userStatus now points to a different value;

