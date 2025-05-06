STRING: any javascript value surrounded by quotes is a string. can be single, can double, can be backticks.
1. charAt(): this method is used to return the character at a certain index or position.
let greeting = "Hello";
let firstChar = greeting.charAt(0);//H
2. concat(): used to join two or more strings together.
let str1 = "Hello";
let str2 = " ";
let str3 = "World";
let str4 = "!";

let result = str1.concat(str2,str3,str4);
console.log(result); //Hello World!
let result2 = str1 + str2 + str3 + str4;
console.log(result2); //Hello World!
3. indexOf(): this method is used to return the index or position of a certain character:
let text = "Hellow, how are you?";
let firstOccurence = text.indexOf('e');
console.log(firstOccurence);//1
let anotherOccurence = text.indexOf('e',5);
console.log(anotherOccurence);//14
4. lastIndexOf(): this method is used to return the last index or occurence or position of a certain character:
let text = "Hellow, how are you?";
let firstOccurence = text.lastIndexOf('e');
console.log(firstOccurence);//14
5. replace(): it is when you replace a string with another:
let string = "programming is fun, programming is easy";
let newStr = string.replace("programming",'coding');
console.log(newStr);
let newerStr = string.replaceAll('programming','coding');
console.log(newerStr)
let newerStr = string.replace(/programming/g, 'coding');
console.log(newerStr)
6. search(): searches for a match in a string using regular expessions, and returns the index:
let text = "visit college";
let index = text.search(/college/);//6
console.log(index);
let notExist = text.search(/Erivona/);
console.log(notExist);//-1
7. slice(): it extracts a section of a string and returns a new string:
let fruitText = "Apple, Banana, Kiwi";
let part1 = fruitText.slice(7,13); //starts from index 7 and end before 13, prints "Banana"
let part2 = fruitText.slice(7); //starts from 7 and prints to the end
let part2a = fruitText.slice(-4); //starts 4 from the end, prints: "Kiwi"
let part3 = fruitText.slice(-13); //starts 13 from the end, prints " Banana Kiwi"
let part4 = fruitText.slice(-12,-6);//starts 12 from the end, and ends before 6 from the end: prints "Banana"
console.log(part1);//
8. Split(): this is a way to divide a string into an array of substring, using a seperator:
let text = "How are you ? Are you good";
let words = text.split("?");//['How are you ', ' Are you good']
words.split(" ");//['How',  'are','you',  '?',  'Are',  'you','good'];
words.split("");//["H","o","w",.......];

