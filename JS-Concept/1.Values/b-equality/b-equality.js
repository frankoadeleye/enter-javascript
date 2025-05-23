let RukevweNum = 2;
let JamesNum = 2;
// console.log(Object.is(RukevweNum,JamesNum)); //true

/*
  the RukevweNum and JamesNum points to the same 2 because there can only be one 2 in javascript
*/
let RukevweObj = {};
let JamesObj = {};
// console.log(Object.is(RukevweObj,JamesObj)); //false

/*
  the RukevweObj and JamesObj points to different objects because you can create multiple objects since objects are non-primitive values in javascript.

  That however doesn't mean you can make two variables point to the same value: 
  let RukevweObj = {};
  let JamesObj = RukevweObj;
  console.log(Object.is(RukevweObj,JamesObj)); //true, because in this case they are pointing to the same value.
*/


/*
TASK: 
*/
/*
let banana = {};
let cherry = banana;
let chocolate = cherry;
    cherry = {};

    //L25: banana = 1st empty object
    //L26: cherry = 2nd empty object
    //L27: chololate: = 1st empty object

console.log(Object.is(banana,cherry));//false
console.log(Object.is(cherry,chocolate));//false
console.log(Object.is(chocolate,banana));//true
*/

/*
//NAN
console.log(NaN === NaN); //false (talks about a number on the spectrum of complex numbers, and since we cannot be sure that the first NaN is a number same as the other NaN,then we say false to be on the safer side).
console.log(Object.is(NaN,NaN)); //true (talks about the representation)

console.log(typeof NaN);
*/

//-0 and 0:
console.log(-0 === 0);//true
console.log(Object.is(-0,0)); //false