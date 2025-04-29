VALUE IN JAVASCRIPT: A VALUE IN JAVASCRIPT is any element recognized in the Javascript universe. Values are in the form: 
PRIMITIVE
- string: any js value written quotation. e.g "", '', ``(called backticks)
- numbers: any digit not written inside of a quote.
- null: is a type of null, but prints object.
- boolean: examples are true and false
- undefined: one value, prints undefined

NON-PRIMITIVE
- function: a block of code that returns a value, it must contain a return keyword, the return keyword is immediately followed by the value. the return keyword comes at the end of the blocks of code in your function.
// standard:
function Add2(){
  let name = "Frank";
   return name
}

- object: 
let myschool = 'UI';
let person = {
  // (key): (value)
  name: "Frank",
  school: myschool,
  Age: 30,
};

//array

console.log(person.name);
console.log(person['name']);

- array: let myGrocery = ['tomato', 'pepper', 'onion', 2, -30, {}, function(){}, null, undefined];

- (Big Ints): very large numbers
- (Symbols): used to encode special function.

the elements in js are always at the right hand side of the equal sign.


STATEMENT IN JAVASCRIPT: any recognised instruction, it may or may not start with a declaration. A statement is also called an expression.

FOR EXAMPLE:
let johnErivona = "30";
/* (declaration keyword) (variable name) (assignment operation) (value) */
the equals sign is used to "point to" a value.

PRIMITIVE (immutable | unchangeable): these are values that already exists in the JS universe. This is not created by the developer. They exist in the js engine. These are strings, numbers, boolean, null, undefined, symbols, big ints. 

NON-PRIMITIVE (mutable | changeable | modifiable): These are values created by the developer. E.g array, object, function.

***NOTE***
Not Defined is not the same as undefined.