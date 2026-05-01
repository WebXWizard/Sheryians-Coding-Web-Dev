// JavaScript Fundamentals
// This script covers the basics of JavaScript including variables, data types, and functions.

// 1.Variables - let, const, var

let name = "John"; // Block-scoped variable
const age = 30; // Block-scoped constant
var city = "New York"; // Function-scoped variable

// 2.Data Types -

// Primitives Types - All other Reference

let str = "Hello, World!"; // String
let num = 42; // Number
let isTrue = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
let uniqueSymbol = Symbol("unique"); // Symbol
let bigIntValue = BigInt(12345678901234567890); // BigInt

// Reference Types - {} [] ()

let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let func = function () {
  return "Hello";
}; // Function

let obj1 = { ...obj }; // Object spread operator
obj1.age = 26; // Modifying the copied object
console.log(obj); // Original object remains unchanged
console.log(obj1);

let arr1 = [...arr]; // Array spread operator
arr1.push(6); // Modifying the copied array
console.log(arr); // Original array remains unchanged
console.log(arr1);

// 3.Operators - Arithmetic, Assignment, Comparison, Logical

// Logical Operators

// 0 false undefined null NaN "" (empty string) document.all  - these are considered falsy values in JavaScript.
// All other values are considered truthy.

let a = true;
let b = false;
let andResult = a && b; // Logical AND
let orResult = a || b; // Logical OR

console.log(12 || false); // Outputs: 12
console.log(0 && true); // Outputs: 0

// 4.Loops - for, forEach, for in, while, do-while, for of

// For loop (starting; ending; update)
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration:", i);
}
console.log("----------------------------");

// forEach loop - for array
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num, index) {
  console.log("forEach number:", num + 2, index);
});

console.log("----------------------------");

// for in loop - for objects
let person = { name: "Bob", age: 35 };
for (let key in person) {
  console.log(key);
  console.log(person[key]);
  console.log(key, person[key]);
}

// 5.Operators - Ternary, Spread, Destructuring

// Ternary Operator
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Outputs: Adult

// Spread Operator
let newArr = [...arr, 6, 7, 8]; // Spreading
console.log(newArr); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]

// Destructuring
let { name: personName, age: personAge } = obj; // Object destructuring
console.log(personName, personAge); // Outputs: Alice 25

console.log("----------------------------");

// 6.Conditional Statements - if, else if, else, switch

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// 0 false undefined null NaN "" (empty string with no space) document.all - these are considered falsy values in JavaScript.
// All other values are considered truthy.

if ("") {
  console.log("This is true");
} else {
  console.log("This is false"); // Answer
}
if (12) {
  console.log("This is true"); // Answer
} else {
  console.log("This is false");
}

console.log("----------------------------");

// 7. Functions -

// Function Statements -

function abcd() {}

// Anonymous Functions - IIFE

(function () {})();

// Fat Arrow Functions -

() => {};

// Fat Arrow Function Variant - with one parameter

(a) => {};

// Fat Arrow Func with implicit return

() => 12;
