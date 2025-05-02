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

==> STRICT: this performs the same function as the Same Value equality, except in two cases. Those two cases are:
a.) NaN
//NAN
console.log(NaN === NaN); //false (talks about a number on the spectrum of complex numbers, and since we cannot be sure that the first NaN is a number same as the other NaN,then we say false to be on the safer side).
console.log(Object.is(NaN,NaN)); //true (talks about the representation)
this is because of the nature NaN. NaN stands for Not a Number, but surprisingly this doesn't techinically mean that it is not a number.
console.log(typeof NaN);// number
So what does it mean? Well, it a list of all the numbers that are in the category of complex numbers, meaning they are not integers. 
b.) -0 and 0
The symbol for strict equality is '==='
==> LOOSE EQUALITY: