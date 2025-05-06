1. MAP: this is a method that produces a new array from a former array with modifications to the new array. But keep in mind that the old array still exists. Whatever we can achieve with the map method can also be done, with the for loop. The map mathod will have a return keyword keyword.
Sample Question 1: 
//return an array of double each element of the nums array.

let nums = [1,2,3,4,5];
//FOR LOOP:
let newDoubleElArray = [];

for(let i = 0; i < nums.length; i++){
  newDoubleElArray[i] = nums[i] *2;
}

// console.log(newDoubleElArray);

//USING MAP():
let mappedFromNum = nums.map(function(num){
  return num * 2;
})
console.log(mappedFromNum);

Sample Question 2: 
let persons = [
  {firstName: "John", lastName: "Smith"},
  {firstName: "Fred", lastName: "Mike"}
]

let lastNames = persons.map(function(person){
  return person.lastName;
});

console.log(lastNames);

//USING ARROW FUNCTION: 
let firstName = persons.map((person)=>{
  return person.firstName.firstName;
})

Sample Question 3: 
let persons = [
  {firstName: "John", lastName: "Smith"},
  {firstName: "Fred", lastName: "Mike"}
]

let lastNames = persons.map(function(currentValue,indexOfCurrentVal,array){
  return `I am ${currentValue.firstName} at position ${indexOfCurrentVal} in ${array}`;
});
console.log(lastNames);

2. FILTER METHOD: returns an array that passes a certain condition. Again, whatever we can do with filter can be done with the for loop:

//return male items of the array below:

let persons = [
  {name: "John", gender: "male"},
  {name: "Abigail", gender: "female"},
  {name: "Alexia", gender: "female"},
  {name: "Fred", gender: "male"},
  {name: "Cynthia", gender: "female"},
]

persons.push({name: "Tolu", gender: "female"}); //used to add items to the end of an array. So this new object will be added to the end of the persons array as a new item.

let males = [];
for(let i = 0; i <persons.length; i++){
  if(persons[i].gender.toLocaleLowerCase() === "male"){
    males.push(persons[i]);
  }
}
console.log(males);
USING THE FILTER METHOD: 
let newMales = persons.filter(function(person){
  return person.gender === "male";
})

console.log(newMales);

3. FIND: This does the same thing as the filter method, only that it returns a new item immediately after it finds an element in the old array that obeys the condition, and terminates itself.
**NOTE THAT THE FIND METHOD RETURNS THE ITEM WITHOUT PUTTING IT INSIDE OF AN ARRAY. 
FROM LAST EXAMPLE: 
let firstFoundMale = persons.find(function(person){
  return person.gender === "male";
});

console.log(typeof(firstFoundMale));
USING A FOR LOOP (AND NOTE THIS PUTS IT INSIDE OF AN ARRAY):
let males = [];
for(let i = 0; i <persons.length; i++){
  if(persons[i].gender.toLocaleLowerCase() === "male"){
    males.push(persons[i]);
    break;
  }
}

console.log(males);