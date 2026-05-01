// -----------------------------------

console.log("Hello, World!");
document.write("<h2>Welcome to JavaScript programming!</h2>");

// document.write(3+4)

// --------------------------

alert("This is an alert box!");

// window.alert("This is another alert box!");

// --------------------------

/*

var name = prompt("Please enter your name: ");
document.write(name)
window.prompt("Please enter your name: ");

*/


document.write(prompt("Please enter your name: "));

document.write("<br>");

// ------------------------------------------

// confirm("Do you want to continue?")


document.write(confirm("Do you want to continue?"));
document.write("<br>");

//  ------------------------------------------

document.getElementById("content").innerHTML =
  "This is a dynamic content update!";

document.write("<br>");

// ---------------------------------------

// Variables - var let const

var x = 10; // Global variable
let y = 20; // Block-scoped variable
const z = 30; // Constant variable

/*

document.write("x + y = ", x + y, " ", typeof x, "<br>");
document.write("x - y = ", x - y, " ", typeof y, "<br>");
document.write("x * y = ", x * y, " ", "<br>");
document.write("x / y = ", x / y, " ", "<br>");
document.write("x % y = ", x % y, " ", "<br>");
document.write("<br>");

let name = "John Doe"; // String variable
document.write("Name: " + name, " " + "<br>");
document.write("Type of name is", " ", typeof name, "<br>") 

*/

// ---------------------------------------------

// Keywords, Literals and Identifiers - 

/* 

Keywords are reserved words in JavaScript
Identifiers are names given to variables, functions, etc.
Literals are fixed values in the code. 

*/

let myVariable = 100; // Valid identifier
let _myVariable = 200; // Valid identifier
let $myVariable = 300; // Valid identifier
// let 1myVariable = 400; // Invalid identifier (starts with a number)

// ------------------------------------------------------------------------------------

// Data Types in JavaScript -

// 1. Primitive types -

// Numbers are numeric values

let number = 42; // Number
document.write( number, " ", typeof number + "<br>");

// Strings are sequences of characters

/*

let name = "Hello"; // String
document.write("name : ", name, " ", "<br>");
document.write(  "Type of name is :  ", typeof name + "<br>");
document.write("Length of String is : " , name.length, " " + "<br>");
document.write(name.toUpperCase(), " " + "<br>");
document.write(name.toLowerCase(), " " + "<br>");
document.write( name.charAt((4)), " " + "<br>"); 

*/

// Booleans represent true or false values

let boolean = true; // Boolean
document.write( boolean, " ", typeof boolean + "<br>");

// Null represents an intentional absence of value

let nullValue = null; // Null
document.write( nullValue, " ", typeof nullValue + "<br>");

// Undefined represents a variable that has not been assigned a value

let undefinedValue; // Undefined
document.write( undefinedValue, " ", typeof undefinedValue + "<br>");

// Symbols are unique and immutable values, often used as object property keys

let symbolValue = Symbol(""); // Symbol
document.write( symbolValue, " ", typeof symbolValue + "<br>");

// BigInt represents integers with arbitrary precision, useful for large numbers

let bigIntValue = BigInt(1234563589); // BigInt
document.write( bigIntValue, " ", typeof bigIntValue + "<br>");

document.write("<br>");

// -----------------------------------------------------

// 2. Reference types

// Objects are collections of key-value pairs

/* 

let student = { name: "John", age: 25, isActive: true }; // Object
document.write("", JSON.stringify(student), "<br>"); 

*/

// Arrays are ordered collections of values

/*

let array = [1, 2, 3, 4, 5, 6]; // Array
document.write("Type of Array is : ", " ", typeof array, "<br>");
document.write(array.length, "<br>");
document.write(array[0], "<br>");
document.write(array.length, "<br>");

*/

// ----------------------------------------------------

// Type Conversion in JavaScript

/* 

let num = 10; // Number
let str = "20"; // String
let bool = true; // Boolean
let convertedNum = Number(str); // Convert string to number
document.write("Converted Number: ", convertedNum, "<br>");
let convertedStr = String(num); // Convert number to string
document.write("Converted String: ", convertedStr, "<br>");
let convertedBool = Boolean(num); // Convert number to boolean
document.write("Converted Boolean: ", convertedBool, "<br>"); 

*/

// -----------------------------------------

// Operators in JavaScript

// Arithmetic Operators

/* 

let a = 10;
let b = 20;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
document.write("Sum: ", sum, "<br>");
document.write("Difference: ", difference, "<br>");
document.write("Product: ", product, "<br>");
document.write("Quotient: ", quotient, "<br>");
document.write("Remainder: ", remainder, "<br>"); 

*/


// Comparison Operators

/* 

let isEqual = (a == b); // Equal to
let isNotEqual = (a != b); // Not equal to
let isStrictEqual = (a === b); // Strict equal to
let isStrictNotEqual = (a !== b); // Strict not equal to
let isGreater = (a > b); // Greater than
let isLess = (a < b); // Less than
let isGreaterOrEqual = (a >= b); // Greater than or equal to
let isLessOrEqual = (a <= b); // Less than or equal to
document.write("Is Equal: ", isEqual, "<br>");
document.write("Is Not Equal: ", isNotEqual, "<br>");
document.write("Is Strict Equal: ", isStrictEqual, "<br>");
document.write("Is Strict Not Equal: ", isStrictNotEqual, "<br>");
document.write("Is Greater: ", isGreater, "<br>");
document.write("Is Less: ", isLess, "<br>");
document.write("Is Greater or Equal: ", isGreaterOrEqual, "<br>");
document.write("Is Less or Equal: ", isLessOrEqual, "<br>");

 */

// Logical Operators

/*

let andOperator = (a > 5 && b < 30); // Logical AND
let orOperator = (a < 5 || b > 15); // Logical OR
let notOperator = !(a < b); // Logical NOT
document.write("Logical AND: ", andOperator, "<br>");
document.write("Logical OR: ", orOperator, "<br>");
document.write("Logical NOT: ", notOperator, "<br>"); 

*/



// Assignment Operators

/* 

let c = 5; // Assignment
c += 2; // Add and assign
c -= 1; // Subtract and assign
c *= 3; // Multiply and assign
c /= 2; // Divide and assign

c %= 2; // Modulus and assign
document.write("Value of c after operations: ", c, "<br>");

 */


// Unary Operators

/*

let d = 10; // Unary operator
let incrementedValue = ++d; // Increment
let decrementedValue = --d; // Decrement
document.write("Incremented Value: ", incrementedValue, "<br>");
document.write("Decremented Value: ", decrementedValue, "<br>");

*/

// Ternary Operator

let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
document.write("Can Vote: ", canVote, "<br>");

// Bitwise Operators

/*

let bitwiseAnd = a & b; // Bitwise AND
let bitwiseOr = a | b; // Bitwise OR
let bitwiseXor = a ^ b; // Bitwise XOR
let bitwiseNot = ~a; // Bitwise NOT
let leftShift = a << 2; // Left shift
let rightShift = a >> 2; // Right shift
document.write("Bitwise AND: ", bitwiseAnd, "<br>");
document.write("Bitwise OR: ", bitwiseOr, "<br>");
document.write("Bitwise XOR: ", bitwiseXor, "<br>");
document.write("Bitwise NOT: ", bitwiseNot, "<br>");
document.write("Left Shift: ", leftShift, "<br>");
document.write("Right Shift: ", rightShift, "<br>");

*/

// ------------------------------------------------

// Control Structures in JavaScript :

// Conditional Statements

let score = 85;
if (score >= 90) {
    document.write("Grade: A", "<br>");
}

else if (score >= 80) {
    document.write("Grade: B", "<br>");
} else if (score >= 70) {
    document.write("Grade: C", "<br>");
} else {
    document.write("Grade: D", "<br>");
}

/*

var n = prompt("Enter a number: ");
var a = parseInt(n);
if (a % 2 === 0) {
    document.write("The number is even.", "<br>");
}
else if (a % 2 !== 0) {
    document.write("The number is odd.", "<br>");
}
else {
    document.write("Invalid input.", "<br>");
}

*/


// Switch Statement

/*
let day = 3;
switch (day) {
    case 1:
        document.write("Monday", "<br>");
        break;
    case 2:
        document.write("Tuesday", "<br>");
        break;
    case 3:
        document.write("Wednesday", "<br>");
        break;
    case 4:
        document.write("Thursday", "<br>");
        break;
    case 5:
        document.write("Friday", "<br>");
        break;
    case 6:
        document.write("Saturday", "<br>");
        break;
    case 7:
        document.write("Sunday", "<br>");
        break;
    default:
        document.write("Invalid day", "<br>");
}
*/

// -------------------------------------------

// Loops - Repeat a block of code multiple times

// For Loop -

// Start Point - Initialization
// End Point - Condition
// Increment/Decrement - Update

// for (let i = 1; i <= 5; i++) {
//     document.write("Hello guy : ", i, "<br>");
// }

// var s = 0; // Variable to store the sum
// for (var i = 0; i <=10; i++) {
//     s = s + i;
// }
// document.write("Sum of numbers from 0 to 10: ", s, "<br>");

// let m = prompt("Enter a number : ");
// n = parseInt(m);
// let s = 0;
// for (let i = 0; i <= n; i++) {
//   s = s + i;
// }
// document.write("Sum of numbers from 0 to 10: ", s, "<br>");

// While Loop

// let j = 0;
// while (j <= 5) {
//     document.write("While Loop Iteration: ", j, "<br>");
//     j++;
// }

// Do-While Loop

// let k = 0;
// do {
//   document.write("Do-While Loop Iteration: ", k, "<br>");
//   k++;
// } while (k < 5);

// ----------------------------------------------

// For...in Loop

// let person = { name: "Alice", age: 30, city: "New York" };
// for (let key in person) {
//     document.write("Key: ", key, ", Value: ", person[key], "<br>");
// }

// For...of Loop

// let numbers = [1, 2, 3, 4, 5];
// for (let number of numbers) {
//     document.write("Number: ", number, "<br>");
// }

// -------------------------------------------------------------------

// Functions in JavaScript -

// Functions are reusable blocks of code that perform a specific task.

// 1. Function Declaration

function greet() {
  document.write("Hello, World!", "<br>");
}

greet(); // Call the function

// 2. Function Expression

const sayHello = function () {
  document.write("Hello from a function expression!", "<br>");
};
sayHello(); // Call the function expression

// Function with parameters

function add(a, b) {
  return a + b;
}
var result = add(5, 10); // Call the function with arguments
document.write("Sum: ", result, "<br>");

function multiply(a, b) {
  return a * b;
}

document.write(greet("John"), "<br>");
document.write("Sum: ", add(5, 10), "<br>");
document.write("Product: ", multiply(3, 4), "<br>");

function changeContent() {
  alert("Content changed!");

  var ele = document.getElementById("changeContentHeading");

  ele.innerHTML = "Modified Content";

  ele.style.display = "block";
  ele.style.color = "blue";
  ele.style.fontSize = "24px";

  document.body.style.backgroundColor = "lightgray";
  document.body.style.fontFamily = "Arial, sans-serif";
}
