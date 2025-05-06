CONDITIONAL RENDERING: 

1. IF STATEMENTS: Checks if something is true... 
let iAmHungry = true;

if(iAmHungry){
  console.log("Give me food");
}
-------------------------------------------------------------
let iAmHungry = false;

if(!iAmHungry){
  console.log("Give me food");
}

IF...ELSE STATEMENT: This is an instruction to do this if it is true, do something else if it is not true.

let iAmHungry = false;

if(iAmHungry){
  console.log("Give me food");// this doesn't run
}else{
  console.log("I am sated"); //this runs
}

-------------------------------------------------------------

2. IF...ELSE..IF..ELSE STATEMENT: 

let favouriteFruit = "Mangoes";

let age = 20;
let siblings = 5;
let result;

if(favouriteFruit === "blackberry"){
  result = age * siblings;
  console.log(result);
}else if(favouriteFruit === "Gauva"){
  result = age - siblings;
  console.log(result);
}else if(favouriteFruit === "Apple"){
  result = age + siblings;
  console.log(result);
}else if(favouriteFruit === "Mangoes"){
  result = age / siblings;
  console.log(result);
}else{
  console.log("I don't know my favorite fruit");
}

