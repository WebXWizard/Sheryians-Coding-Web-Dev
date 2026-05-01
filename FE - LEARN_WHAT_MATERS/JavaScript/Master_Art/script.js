/* Master The Art ()  -- Topics - Advanced Concepts */

// var let const - the difference

// var - ES5, function scope and add itself to window object.

var x = 10; // Global variable
function example() {
  var y = 20; // Local variable
  console.log(x); // Accessing global variable
  console.log(y); // Accessing local variable
}
console.log(x); // Accessing global variable
// console.log(y); // This will throw an error because y is not defined in this scope

example(); // Calling the function to see the output

// let const - ES6, braces scope and not add itself to window object

let m = 10; // Block-scoped variable
const d = 20; // Block-scoped constant
function example2() {
  let c = 30; // Block-scoped variable
  console.log(a); // Accessing block-scoped variable
  console.log(d); // Accessing block-scoped constant
  console.log(c); // Accessing block-scoped variable
}
example2(); // Calling the function to see the output

/* window object - box

  box of features provided by browser which is not part of JS
  window - global object in browser, represents the browser window
  It provides access to the browser's features and functions, such as the DOM, console, etc
  example - alert prompt console

 */

console.log(window); // Accessing the window object

console.log(window.document); // Accessing the document object within the window

/* Browser Context API - window, stack, heap memory */

/* Stack

  Stack is a data structure that follows the Last In First Out (LIFO) principle.
  It is used to manage function calls and execution contexts in JavaScript.
  Stack - LIFO (Last In First Out) structure
  Function calls are stored in the stack, and when a function is called, a new execution context is created and pushed onto the stack.

*/

/* Heap memory - for store data(intermediate)

  Heap memory is a region of memory used for dynamic memory allocation.
  It is used to store objects, arrays, and other complex data structures.
  +2+3+4+5+6
  1+2 = 3(store and further use) 
  
*/

/* Execution Context - 

  whenever function called - a new execution context is created
  Imaginary container - variables , functions inside it , lexical environment
  Execution Context is a concept in JavaScript that refers to the environment in which a piece of code is executed.
  It contains information about the variables, functions, and the scope in which the code is executed. 
  
*/


/* Lexical Environment -

  Chart in which, What can be access - Scope and scope chain
  Lexical Environment is a structure that holds the variables and functions defined in a specific scope. 
  
*/

function abcd() {
  var a = 12;
  function def() {
    var b = 14;
  }
}
abcd();

/* 

In the above code, when the function abcd() is called, an execution context is created.
This execution context contains the variable a and the function def().
Execution Context Created - a , def(), Lexical Environment(b is not used)

*/


/* How to copy reference values - using spread operator

Spread operator (...) is used to create a shallow copy of an array or object. 

*/

var a = [1, 2, 3, 4, 5];
var b = [...a];
b.pop();
console.log(b);

var obj = { name: "harsh", age: 23 };
var obj1 = { ...obj };
obj1.name = "john";
console.log(obj1);



/* Truthy and Falsy

Falsy Values - 0, "", false, null, undefined, NaN, document.all
Truthy Values - All other values 

*/

if (-1) {
  console.log("truthy"); // Answer
} else {
  console.log("falsy");
}

if (0) {
  console.log("truthy");
} else {
  console.log("falsy"); // Answer
}

// ------------------------------------------------------------

/* forEach, for of, for in */

// forEach - Array method, takes callback function, does not return anything

var arr = [1, 2, 3, 4, 5];
arr.forEach(function (val) {
  console.log(val + 2);
});

console.log(arr); // Original array remains unchanged

// for of - iterates over iterable objects like arrays, strings, etc.

var arr = [1, 2, 3, 4, 5];
for (var value of arr) {
  console.log(value + 2);
}

// for in - iterates over object properties, returns keys

var obj = { name: "harsh", age: 23, city: "Delhi" };
for (var key in obj) {
  console.log(key + ": " + obj[key]);
}

// do while - Executes the block of code at least once, then checks the condition

do {
  console.log("This will run at least once");
} while (false); // This will run only once, even though the condition is false

// ------------------------------------------------------------

// Arrow Functions - Shorter syntax for writing functions

const add = (a, b) => a + b; // Single line function
console.log(add(5, 3)); // Output: 8

// ------------------------------------------------------------


/* Callback Functions - 

  Callback functions are functions that are passed as arguments to other functions and are executed after the completion of the parent function. 

*/

function callbackExample(callback) {
  console.log("This is a callback example.");
  callback();
}

// Parent function that takes a callback
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

setTimeout(() => {
  console.log("This is a callback function executed after 2 seconds.");
}, 2000); // Using setTimeout to execute a callback after 2 seconds


// First class functions - Functions that can be assigned to variables, passed as arguments, or returned from other functions

var func = function(){}


function xyz(z) {
  z();
}
xyz(function () {
  console.log("I am a first class function");
});


// -------------------------------------------------

/* How arrays are made behind the scenes - */

var arr = [1, 2, 3, 4, 5]; // typeof Array = Object

arr = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, length: 5 }; // Array-like object

arr[-1] = 2; // Accessing the last element using negative indexing (not supported in JavaScript)

Array.isArray([]); // Returns true if arr is an array, false otherwise

// ----------------------------------------

/*
 Why we can make negative indexing in arrays
Negative indexing is not supported in JavaScript arrays, but we can simulate it using custom logic 

*/

// Example:

var arr = [1, 2, 3, 4, 5];
function getNegativeIndex(arr, index) {
  if (index < 0) {
    index = arr.length + index; // Convert negative index to positive
  }
  return arr[index]; // Return the value at the specified index
}

// -------------------------------------------------

// How to delete properties from objects

var obj = { name: "harsh", age: 23, city: "Delhi" };
delete obj.age; // Deletes the 'age' property
console.log(obj); // Output: { name: 'harsh', city: 'Delhi' }
