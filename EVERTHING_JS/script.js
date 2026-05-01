
/* -------- Chapter - 01 ----------- */


// Words Vs Keywords

// 1.Variables - var let const - line by line comparison

// var a; - Declaration
// a = 12; - Initialization

let name = "John"; // Block-scoped variable
const age = 30; // Block-scoped constant
var city = "New York"; // Function-scoped variable


var a;
var a = 12; // Declaration and Initialization
let d;
let e = 13;
const c = 14;


/* var -    
    add to window object
    ES5 Old JS
    function scoped 
    again declaration and no error with same name 

    */

/* Scope - Global, Block, Functional */

/* Reassignment and Redeclaration */

/* Temporal Dead Zone and Hoisting

console.log(a);
let a = 12;

console.log(b);
var b = 14; 

 */

// Hoisting - Hoisting Impact per Type 
// var - hoisted , 
// let & const - hoisted in TDZ X - Reference Error 

console.log(b);
var b = 14; 
// b goes to above and in Execution Context



/* -------- Chapter - 02 ----------- */

// DataTypes + Type System

// 1. Primitives - Real values copy

let str = "Hello, World!"; // String
let num = 42; // Number
let isTrue = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
let uniqueSymbol = Symbol("unique"); // Symbol - immutable
let bigIntValue = BigInt(12345678901234567890); // BigInt

// 2. Reference Types - {} [] () - Reference of Parent

let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array

// function
let func = function () {
  return "Hello";
}; 

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

// 0 false undefined null NaN "" (empty string) - these are considered falsy values in JavaScript.
// All other values are considered truthy.

let a = true;
let b = false;
let andResult = a && b; // Logical AND
let orResult = a || b; // Logical OR

console.log(12 || false); // Outputs: 12
console.log(0 && true); // Outputs: 0

// 4.Loops - for,forEach, for in, while, do-while, for of

// For loop
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration:", i);
}
console.log("----------------------------");

// forEach loop
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num, index) {
  console.log("forEach number:", num + 2, index);
});

console.log("----------------------------");

// for in loop
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

// 0 false undefined null NaN "" (empty string) - these are considered falsy values in JavaScript.
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
