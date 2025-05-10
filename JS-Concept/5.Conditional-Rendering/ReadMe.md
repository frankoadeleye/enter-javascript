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

3. NESTED IF STATEMENTS: These are if statements nested inside one another.
let person = {
  name: "Ephraim",
  sibling: true,
  age: 18,
  favoriteFood: "Egg sauce & yam"
}

if(person.name === "Ephraim"){
  if(person.favoriteFood === "Egg sauce & yam"){
    if(person.age === 18){
      console.log("A")
    }else{
      console.log("B");
    }
  }else{
    console.log("C")
  }
}else{
  console.log("D");
}

4. SWITCH STATEMENT: This is a cleaner way of presenting multiple if..else statements:


let crayonColor = "red";

switch (crayonColor){
  case "red":
    console.log("Using the red Crayon");
    break;
  case "blue":
    console.log("Using the blue crayon");
    break;
  case "green":
    console.log("Using the green crayon");
    break;
  default:
    console.log("I don't know which crayon to use");
}

