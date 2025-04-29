There are three ways to check/express the equality of a value:

==> SAME VALUE EQUALITY: this is used to check if two variable values are equal.
WE use the Object.is(a,b) to check the same value equality. It returns a boolean, true or false.
let RukevweNum = 2;
let JamesNum = 2;
console.log(Object.is(RukevweNum,JamesNum)); //true

let RukevweObj = {};
let JamesObj = {};
console.log(Object.is(RukevweObj,JamesObj)); //false

note this: 
let RukevweObj = {};
let JamesObj = RukevweObj;
console.log(Object.is(RukevweObj,JamesObj)); //true, because in this case they are pointing to the same value.

==> STRICT: 
==> LOOSE EQUALITY: