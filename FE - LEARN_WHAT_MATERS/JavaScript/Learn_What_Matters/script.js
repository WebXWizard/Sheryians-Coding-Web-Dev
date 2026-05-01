/* Learn What Matters 01 (Basics) - Topics - Fundamentals */

/* Word vs Keywords */

/* Variables and Constants */ 

// var let const

var x = 10; // Variable declaration using var
let y = 20; // Variable declaration using let
const z = 30; // Constant declaration using const
console.log(x, y, z); // Output: 10 20 30



/* Hoisting */

var a; // Declaration - Undefined

console.log(a);
// var a = 12;

a = 12; // Initialization



/* Types in JS

1 - Primitives = Real value copy
2 - Reference = {} [] () = Reference copy

*/


/* Conditionals - if else else-if */

if(""){
    console.log("Yay !!!")
}
else{
    console.log("Hey !!")
}


if(-1){
    console.log("Yay !!!")
}
else{
    console.log("Hey !!")
}



/* Loops - for and while */

/* for(var i = 0; i<10; i++){
    console.log("Hello", i)
}
 */


/* Functions - 
    Further use for future, Reuse, Use with diff data 
    Params(Variables) and args(Real values)
    
*/

function abcd(a){
    console.log("Hello", a)
}
abcd(12)


/* Arrays - [] - Collection of  diff data
indexing push pop shift unshift splice */

var arr =["Hello", 2, true, 12.5 ]
console.log(arr)
console.log(arr[0])
console.log(arr[-1])
console.log(arr[6])

arr.push(8)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(5)
console.log(arr)

arr.shift()
console.log(arr)

arr.splice(2,1)
console.log(arr)


/* Objects - {} -
    Individual's all details in key value pair
    props vs methods
*/


// var a = {} - blank object 

// Filled object
var obj= {
    name:"Harsh",
    age:25,
    isMarried:false,
    email:"xyz123@gmail.com",
    phone:7583871837, 
    

}

console.log(obj)
console.log(obj.name)


// Updating object properties
obj.name = "Alan"
console.log(obj)

// ---------------------------------------------














