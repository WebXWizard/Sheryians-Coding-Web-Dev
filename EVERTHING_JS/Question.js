// Hoisting
console.log(nm);
var nm = "Harsh";

/* console.log(age); // Temporal Dead Zone 
let age = 23; */

var x = 1;
{
  var x = 2;
}
console.log(x);


let a = 10;
{
  let a = 20;
  console.log("Inside", a);
}
console.log("Outside", a);

/* Confusions - */

if (true){
    var x = 1;
    let b = 2;

}
/* 
console.log(a) - 1 
console.log(b) - Reference Error

*/

const person = {
    name : "Harsh",
    age :24
}

person.name = "Shark" // allowed
// person = {} - not allowed 
