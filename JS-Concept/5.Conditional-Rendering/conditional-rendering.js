
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


