// DATA TYPES---
// There are Two types of js-
//1- Primitive :

                //a- Number
                //b- String
                //c-Undefined
                //d-Boolean
                //e-Null
                //f-Symbol
                //g-BigInt

// 2- Non Primitive Datatypes:

            //a-Object'
            //b-Arrays

//  Primitive--
let a=34;
console.log(a,typeof a)

let b="Hello";
console.log(b,typeof b)

isFollow=true;
console.log(isFollow,typeof isFollow)

   console.log("")         
   x=null;
   console.log(x,typeof x);
   
   
   y=undefined;
   console.log(y,typeof y);

   let z=BigInt("123");
   console.log(z,typeof z)

   let r=Symbol("HELLO")
   console.log(r,typeof r)

   console.log()
//QUICK POINTS---

console.log(1=="1")//true

console.log(1==="1")//false

console.log()


console.log()


// Non-Primitive-
// Objects---Collection of Values

console.log("Object DataType--Key value ")
console.log()

// Objects---
let student={fullName:"Shahe Alam",
age:21,gpa:8,
city:"Barabanki"};
console.log()

console.log(typeof student,student)

console.log()
console.log(student.fullName)
console.log(student.age)
console.log(student["city"])

student.age=22;
console.log(student.age)

//const objects key are Changeble--


//Array--
