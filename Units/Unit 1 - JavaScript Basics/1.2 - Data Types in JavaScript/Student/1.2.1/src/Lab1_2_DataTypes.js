/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)

let age = 34;
let price = 12.99;
2
console.log(`Age: ${age}`);
console.log(`Price: ${price}`);

let result = "Sandra" / 2;
console.log(`"Sandra" divided by 2 = ${result}`);

// TODO 2: Print basic math ops: + - * /
// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

console.log("Exponentiation (2 ** 3):", 2 ** 3);
console.log("Modulo (7 % 2):", 7 % 2)

// TODO 3: Assignment operators with score variable

let score = 10;
score += 5;  // score = 15
score -= 3;  // score = 12
score *= 2;  // score = 24
score /= 4;  // score = 6
console.log("Final score:", score);

// TODO 4: Expressions with operator precedence

let result2 = 10 + 5 * 2;
let result3 = (10 + 5) * 2;
console.log("Without parentheses:", result2);
console.log("With parentheses:", result3);

// TODO 5: Strings (single, double, backticks)

let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `${singleQuote}, ${doubleQuote}!`;
console.log(singleQuote);
console.log(doubleQuote);
console.log(templateLiteral);

// TODO 6: String properties and methods
// - greeting.length
// - charAt(0), charAt(5), [3]
// - indexOf("sad")
// - repeat()
// - substring, substr, slice examples

let greeting = "I am not sad today.";
console.log("Length:", greeting.length);
console.log("charAt(0):", greeting.charAt(0));
console.log("charAt(5):", greeting.charAt(5));
console.log("Index 3:", greeting[3]);
console.log('Index of "sad":', greeting.indexOf("sad"));
console.log("Repeated:", greeting.repeat(2));
console.log("substring(5, 9):", greeting.substring(5, 9));
console.log("substr(5, 3):", greeting.substr(5, 3));
console.log("slice(5, 9):", greeting.slice(5, 9));

// 🚀 Stretch Goals
// - Even number check using %
// - localeCompare() example
