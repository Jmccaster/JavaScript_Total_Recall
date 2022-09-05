// I.Variables & Datatypes:

/* A. Q + A
1. How do we assign a value to a variable?
Answer: You assign a value to a variable using var, let, or const. (Preferably let or const)

2. How do we change the value of a variable?
Answer: After declaring the variable using var, let, or const, you would then use the = operator to assign the value to the variable you want.

3. How do we assign an existing variable to a new variable?
Answer: You can change the value of a variable by referencing your existing variable in a function, then console logging what you would like to change it to. For example; if you declare a variable to = 20, after reference the 20 in a function, you can console.log(+30) in order to change you value to 50. 

4. Remind me, what are declare, assign, and define?
Declare- When you create a variable or assign a value to a variable, you are "declaring" it within your code.

Assign- Changing one variable/value into another that you "assigned it to." A good example is when you turn a variable into a value. (x=20)

Define- When you give something in your code meaning, you are "defining" it. 

5.What is pseudocoding and why should you do it?
Answer: Pseudocode is when you use plain language to describe steps in your coding process. I feel it is good to use to simplify your thinking and execution process, it also helps with structuring your code as well. Overall, it is good to using for planning. 


6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
Answer: I would say a good 60/40 for me. It is definitely good to organize and plan out your thought process before you start code, but eventually getting started with your coding can help get the creative juices flowing as well. (At least for me). It can definitely be situational though.
*/

// B. Strings
// let firstVariable = "Hello World";

let firstVariable = 5;
let secondVariable = firstVariable + 10;

console.log(secondVariable);

const yourName = "Jibril";

console.log(`Hello, my name is ${yourName}`);

// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

// D. The Farm

const animal = "cat";
if (animal === "cow") {
  console.log("moooooooo");
} else {
  console.log("Hey! You are not a cow");
}

// E. Driver's Ed

const personAge = 28;
if (personAge >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young");
}

// II. Loops:

// A. The Basics
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 2. Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }

// 3.Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12; i <= 4000; i += 3) {
//   console.log(i);
// }

// B. Get Even (GET HELP!)
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for (let i = 2; i < 100; i++)
//   if (i % 2 === 0) {
//     console.log(`${i}<-- is an even number`);
//   } else {
//     console.log(i);
//   }

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// For numbers divisible by both three and five, be sure your code prints both messages

// for (let i = 0; i <= 100; i++)
//   if (i % 15 === 0) {
//     console.log("Three is a crowd/High five!");
//   } else if (i % 5 === 0) {
//     console.log("High five!");
//   } else if (i % 3 === 0) {
//     console.log("Three is a crowd.");
//   } else {
//     console.log(i);
//   }

// D. Savings Account
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let totalVal = 0;
arr.forEach((num) => {
  totalVal += num;
});
console.log(totalVal);

// let bankAccount = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
// console.log(bankAccount);

// function bankAccount(x, y) {
//   let bankAccount = 0;
//   for (let i = x; i <= y; i++) {
//     bankAccount = bankAccount + i;
//   }
//   {
//     console.log(bankAccount);
//   }
// }

// bankAccount(1, 10);

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

// const arr = [];
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   arr.push(i * 2);
// }

// for (let i = 0; i < arr.length; i++) {
//   // sum += arr[i];
//   sum = sum + arr[i];
// }
// console.log(sum);

let bankAccount = 0;
for (let i = 1; i <= 100; i++) {
  bankAccount += i * 2;
}
console.log(bankAccount);

// III Arrays & Control Flow:

// A. Talk about it:
// 1. What are the things in an array called?
// The variables or objects in an array are called elements. The elements can consist of various data types (strings, numbers, objects, etc.)

// 2. Do Arrays guarantee those things will be in order?
// Yes. Unless we change it ourselves, or write a syntax that changes the order, the order will stay the same.

// 3. What real-life thing could you model with an array?
// Pages in a book.

// B. Easy Does It

// 1. Create an array that contains three quotes and store it in a variable called quotes.
const quotes = [
  "the bigger they are, the harder they fall.",
  "be yourself, everyone else is already taken.",
  "That's the bottom line, because Stone Cold said so!",
];

// C. Accessing Element
// Given the following array

const randomThings = [1, 10, "Hello", true];

// 1.How do you access the 1st element in the array?
console.log(randomThings[0]);

// 2. Change the value of "Hello"to "World"
randomThings[2] = "World";

// 3.Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

// D. Change Values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

// E. Mix it up

const myArray = [5, 10, 500, 20];

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Bagon");

// Remove the 5from the beginning of the array.
myArray.shift();
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");

// Remove the string of your choice from the end of the array.
myArray.pop();

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
const reversed = myArray.reverse();
// Array.prototype.reverse();
console.log(reversed);

// F. Biggie Smalls
// Create a variable that contains an integer.
let num = 90;

// Write an if ... elsestatement that:

// 1. console.log()s "little number" if the number is entered is less than 100
if (num < 100) {
  console.log("little number");
}
// 2. console.log()s big numberif the number is greater than or equal to 100.
else {
  console.log("big number");
}

// G. Monkey in the Middle
// Write an if ... else if ... else statement:

// 1. console.log()little number if the number entered is less than 5.

// 2. If the number entered is more than 10, log big number.

// 3. Otherwise, log "monkey".

// H. What's in Your Closet?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

console.log(`Kristyn is rocking that  ${kristynsCloset[2]} today`);

kristynsCloset.splice(6, 0, "RayBans");
console.log(kristynsCloset);
