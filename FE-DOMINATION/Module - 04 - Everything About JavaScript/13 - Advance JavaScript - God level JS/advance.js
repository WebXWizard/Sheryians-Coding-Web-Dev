/* this call apply bind */


/* this */


/* Global Scope - window */

console.log(this);

console.log("--------------------");

/* Function Scope - window */

function abcd() {
  console.log(this);
}
abcd();

console.log("--------------------");

/* Method - object */

var obj = {
  name: "Alan",
  age : 25, 
  meth: function () {
    console.log(this);
    console.log(this.name);
    console.log(this.age);

  },
};

obj.meth();

console.log("--------------------");
 
/* Function Inside Method - ES5 - window */

 var obj2 = {
    sayName : function (){
        console.log(this);
        // console.log(this.age); - object
        function  childFunc(){
            console.log(this);
            // console.log(this.age); - undefined
        }

        childFunc();
    },
    age:25
 }

obj2.sayName();

console.log("--------------------");

/* Function Inside Method - ES6 - Object */

 var obj3 = {
    sayName : function (){
        
        const child = () => {
            console.log(this);
        }
        child();
    }
    
}

obj3.sayName();
console.log("--------------------");


var obj4 = {
    sayName : ()=>{
         console.log(this);

    }
    
}

obj4.sayName();

console.log("--------------------");



/* Constructor Function - Blank Object */

function add(){
    console.log(this);
}

const ans =  new add();

console.log("--------------------");


/* Event Listener  */

document.querySelector("button")
.addEventListener("click", function(){
    console.log(this);
})
 
     
/*

Call Apply Bind  - These are the methods which are used to call function by let object to this

*/



const obj5 = {name: "Alan Hasting"}


function xyz(a,b,c){
    console.log(this);
    console.log(this,a,b,c);
}

xyz.call(obj5); 

xyz.apply(obj5,[1,"Aa",2]);


const later = xyz.bind(obj5)

later(1,2,3) ;


