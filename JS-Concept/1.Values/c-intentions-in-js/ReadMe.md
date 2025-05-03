UNDEFINED VS NOT-DEFINED: 
Undefined is used for unintentionally missing values. Whenever you assign 'undefined' to a value in Javascript, the engine assumes that you 'forgot' to put a value there or can't instantly remember what value you intend to put there, so you want Javascript to help you hold that thought. Meaning that you have the intention to change it later it later on or you simlply forgot.

let lastName;
console.log(typeof lastName); //undefined.

NOT DEFINED: is not even the oppposite of undefined. it is just an error, when you try to call o a number you haven't yet declared.

`
"use strict";

console.log(book); //ERROR: Cannot reference a value you haven't declared.
let book;
`

INTENTIONALLY MISSING VALUES: This is when you intentionally do not want your variable to have a value. In that case, JS can help, it advises, that you set the value as null;

NULL IS NOT AN OBJECT.