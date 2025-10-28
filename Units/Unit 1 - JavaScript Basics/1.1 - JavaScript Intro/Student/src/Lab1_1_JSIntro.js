/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()

console.log("Pakela Otalvaro");

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"

let favoriteFood = "Steak";
console.log(favoriteFood);
favoriteFood = "Pizza";
console.log(favoriteFood);

// TODO 3: Create variable mystery, assign a string, then a number, print type each time

let mystery = "Hello";
console.log("Value: " + mystery + "Data Type; " + typeof mystery);
mystery = 41;
console.log("Value " + mystery + " Data Type; " + typeof mystery);


// TODO 4: Declare const schoolName, try to reassign

const schoolName = "Christopher Columbus Highschool";
console.log(schoolName);


// TODO 5: Create three valid camelCase variables and print them

let firstName = "Pakela";
let lastName = "Otalvaro";
let dogName = "Chewy";

console.log(firstName)
console.log(lastName)
console.log(birthYear)
console.log(dogName)



// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals

let age = 17;
console.log(`I am ${age} years old.`)
/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   
   Let, Const, and how to use console.log to print values and data types.

   2. What challenges did you encounter, and how did you solve them?

The challenge I encountered was the code not appearing onto the console. I solved it by making sure I saved the file and ran the code properly.

   3. Where else could this programming concept be useful?

These programmibg concepts can be useful anywhere in coding since the things I learned are universal to all programming languages.

   =========================================================== */

   let width = 8;
let height = 5;

let area = width * height;
let perimeter = 2 * (width + height);

console.log("Area:", area);
console.log("Perimeter:", perimeter);

console.log(`The rectangle is ${width} units wide and ${height} units tall, 
with an area of ${area} square units and a perimeter of ${perimeter} units.`);