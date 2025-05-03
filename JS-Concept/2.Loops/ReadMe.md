LOOPING: is just you going over a certain parameter, and expecting some repetitions or changes after the parameter has been looped.

WHILE LOOP: this is a loop used to iterate over arrays and other iteratable items.

let currentIndex = 0;

while(currentIndex < 5){
   console.log("I am human");
   currentIndex = currentIndex + 1;
}

"I am human", currentIndex = 1;
"I am human", currentIndex = 2;
"I am human", currentIndex = 3;
"I am human", currentIndex = 4;
"I am human", currentIndex = 5;

// MAKE while loop DYNAMIC:

let currentAge = 1;

while(currentAge < 10){
  console.log("I am " + currentAge + " years old");
  currentAge = currentAge + 1;
}

I am 1 years old
I am 2 years old
I am 3 years old
I am 4 years old
I am 5 years old
I am 6 years old
I am 7 years old
I am 8 years old
I am 9 years old

// USING template string:

while(currentAge < 10){
  console.log(`I am ${currentAge} years old`);
  currentAge = currentAge + 1;
}

// LOOPING THROUGH ARRAYS: 

let books = ['Rich Dad Poor Dad', 'Think and Grow Rich', 'Outliers'];

let currentBookIndex = 0;

while(currentBookIndex < books.length){
  console.log(`I have read ${books[currentBookIndex]}`);
  // currentBookIndex = currentBookIndex + 1;
  currentBookIndex++;
};

2. THE FOR LOOP: the for loop is a more concise way of writing the while:
for(let currentBookIndex = 0; currentBookIndex < books.length; currentBookIndex++){
  console.log(`I have read ${books[currentBookIndex]}`);
}

3. forEach(): this is a very simple straightwforward approach to a while/for loop specifically for looping through arrays. This means that the forEach loop is limited to arrays or similar iteratables. This helps us to avoid writing conditionals like 'let i = 0, while(i<length);

let fruits = ['orange', 'apples', 'gauva','pineapples'];

fruits.forEach(function(fruit){
  console.log(`I love ${fruit}`);
});
