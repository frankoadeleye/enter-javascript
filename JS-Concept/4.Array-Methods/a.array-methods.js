//return male items of the array below:

let persons = [
  {name: "John", gender: "male"},
  {name: "Abigail", gender: "female"},
  {name: "Alexia", gender: "female"},
  {name: "Fred", gender: "male"},
  {name: "Cynthia", gender: "female"},
]

persons.push({name: "Tolu", gender: "female"});

let firstFoundMale = persons.find(function(person){
  return person.gender === "male";
});

console.log(firstFoundMale);

// USING FOR LOOP:
let males = [];
for(let i = 0; i <persons.length; i++){
  if(persons[i].gender.toLocaleLowerCase() === "male"){
    males.push(persons[i]);
    break;
  }
}

console.log(males);