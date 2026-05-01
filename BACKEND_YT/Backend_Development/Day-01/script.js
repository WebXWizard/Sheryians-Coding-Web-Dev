// Fundamentals of JavaScript -

// Arrays and Objects

// 1. Arrays -  forEach map filter find indexOf

var arr = [1, 2, 3, 4, 5];

// forEach - do operation on every value of array

arr.forEach(function (val) {
  console.log(val + " Hello");
});

console.log("-----------------------------");

// map - transform new array from old array

var arr = [1, 2, 3, 4, 5];
var ans = arr.map(function (val) {
  return val + 12;
});
console.log(ans);

console.log("-----------------------------");

// filter - transform array with doing operation

var newArr = arr.filter(function (val) {
  if (val % 2 == 0) {
  }
  return val;
});
console.log(newArr);
console.log("-----------------------------");

var newAns = arr.filter(function (num) {
  if (num >= 2) {
    return true;
  } else {
  }
});
console.log(newAns);
console.log("-----------------------------");

// find -
var newFind = arr.find(function (val) {
  if (val == 2) {
    return val;
  } else return false;
});

console.log("-----------------------------");

// forEach - do operation on every value of array

const numbers = [1, 2, 3, 4];
numbers.forEach((num) => {
  console.log(num * 2);
});

console.log("-----------------------------");

// map - transform new array

const number = [1, 2, 3, 4];
const doubled = number.map((num) => {
  return num * 2;
}); // doubled: [2, 4, 6, 8]
console.log(doubled);

console.log("-----------------------------");

// filter

const arr1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = arr1.filter((num) => {
  return num % 2 === 0;
}); // evenNumbers: [2, 4, 6]
console.log(evenNumbers);

console.log("-----------------------------");

// find

const arr2 = [1, 2, 3, 4, 5];
const firstGreaterThanThree = arr2.find((num) => {
  return num > 3;
}); // firstGreaterThanThree: 4
console.log(firstGreaterThanThree);

console.log("-----------------------------");

// indexOf
const fruits = ["apple", "banana", "orange", 12];
const index = fruits.indexOf("banana"); // index: 1
console.log(index);
console.log("-----------------------------");

console.log(arr.indexOf(13));
console.log("-----------------------------");

// Objects are collections of key-value pairs, where keys are strings (or Symbols) and values.

const user = {
  name: "John ",
  age: 99,
  city: "Bangalore",
};

// Accessing the data

console.log(user.name);
console.log(user["name"]);

/**
  Adding data to the object
 */

user.country = "India";
user["continent"] = "Asia";

console.log(user);

//  Deleting object keys and object itself

delete user.country;
console.log(user);

delete user["continent"];
console.log(user);
console.log("-------------------------------------------");

// Iterate over a objects -

let person = {
  name: "John",
  age: 99,
  address: {
    city: "Bangalore",
    state: "Kerala",
    country: "India",
  },
};

// console.log(key) - name age address

for (let key in person) {
  console.log(key, " => ", person[key]);
}

console.log(Object.keys(person)); // keys
console.log("-------------------------------------------");

console.log(Object.values(person)); // values
console.log("-------------------------------------------");

//  both keys and the values
console.log(Object.entries(person)); // key:value
console.log("-------------------------------------------");

console.log();

//   Cloning an object using assign


const new_person = Object.assign({}, person);
console.log(new_person); // clone person object
console.log("-------------------------------------------");

const new_person_1 = Object.assign({}, person, { role: "Developer" });
console.log(new_person_1);
console.log("-------------------------------------------");



/* Functions and return
No of parameters = length of function 
typeOf function = functions of objects */


// Asynchronous JS - Send to side stack after main stack completed then use this 

/* async function abcd(){
    var blob = await fetch (``);
    var ans = await blob.json();
    console.log(ans.results[0]);
}
abcd() */