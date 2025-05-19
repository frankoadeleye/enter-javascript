
FUNCTION: IS A BLOCK OF CODE THAT PERFORMS A SPECIFIC TASK.

1. STANDARD FUNCTION /REGULAR FUNCTION: THIS IS ANY FUNCTION DECLARED WITH THE 'FUNCTION' KEYWORD, and: 
a. IS NOT ASSIGNED TO A VARIABLE
b. MUST HAVE A NAME


function myFunc(){
  let name = "John";
  return name;
}
console.log(myFunc());


2. FUNCTION EXPRESSION: THIS IS SIMILAR TO A STANDARD FUNCTION,, BUT IS ASSIGNED TO A VARIABLE.


 let myFunc = function (){
     return "Hi";
 }
 console.log(myFunc());

NOTE: WE CAN CALL A FUNCTION STATEMENT BEFORE IT IS DECLARED, BUT NOT A FUNCTION EXPRESSION.

console.log(myWorld()); //throw error

let myWorld = function (){
    return "Hi";
}

////////////////////////////////////////////////////////

console.log(myFunc()); //no error even though the function is called before it is declared.

function myFunc(){
  let name = "John";
  return name;
}

3. ARROW FUNCTION: AN ARROW FUNCTION IS LIKE A FUNCTION EXPRESSION WITHOUT THE FUNCTION KEYWORD: 

let myFunc = () =>{
  return 'my arrow function';
}
console.log(myFunc());

**HOW TO SHORTEN ARROW FUNCTION: let myFunc = () => 'my arrow function';
(in the above, we no longer need the return keyword...)

NOTE THAT IT FUNCTIONS SIMILAR TO THE FUNCTION EXPRESSION.

4. FUNCTION PARAMETERS: 
function add(a,b){
   return (a+b);
}
console.log(add(5,6));

const AddSurname = (firstName) =>{
  return `${firstName} Adeleye`;
}

console.log(AddSurname("Frank"));

5. IMMEDIATELY INVOKED FUNCTION EXPRESSION: This is a function that is invoked immediately after it is declared. this means you don't get to seperately call the function.

To creat an IIFE, we must place the whole function in parenthesis add then another parenthesis just after the end of the function.

(function (){
  console.log("This is a func")
})();


*****DEFAULT PARAMETERS: They help prevent unwanted "errors" or undefined values when the fucntion is called and you forget to relace parameters with values.

function person(firstName,lastName = "Adeleye",profession = "Business Developer"){
  console.log(`I am ${firstName} ${lastName}, and I'm a ${profession}`);
}

person("John"); //I am John Adeleye, and I'm a Business Developer

person("John","Omamie","former Baker"); //I am John Omamie, and I'm a former Baker


*****THE SPREAD OPERATOR: this is used to spread values when they're needed.

a.)
const FirstSet = [1,2,3,4,5];

const secondSet = [6,7,8,9];

const FullSet = [...FirstSet, ...secondSet]; //[1,2,3,4,5,6,7,8,9]

console.log(FullSet);

b.) let numbers = [2,3,4];

function sum(x,y,z){
  console.log(x+y+z);
}

sum(...numbers); //sum(2,3,4) ===> 2+3+4 ==> 9

*****REST PARAMETER: This is a way to ignore writing multiple parameters when writing a function and yet set values for those parameters when the function is called.


function myValues(a,b, ...remainder){
  console.log(a + b + remainder[0] + remainder[1]+ remainder [2])
}

myValues(10,20,30,45,70); //10+20+30+45+70 ===> 175

