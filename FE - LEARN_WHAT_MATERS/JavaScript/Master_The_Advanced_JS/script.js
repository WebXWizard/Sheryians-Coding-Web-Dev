/* Master Advanced Concepts 04 (Advanced) */

/* Higher Order Functions - Accept func in parameter and return another func */

function abcd(val) {}

abcd(function () {});

function xyz() {
  return function () {};
}

xyz();

/* Constructor Functions */

function sanOfBiscuit(taste) {
  this.width = 12;
  this.height = 12;
  this.color = "brown";
  this.taste = taste;
}

var bis1 = new sanOfBiscuit("Sugary");
var bis2 = new sanOfBiscuit("Salty");
var bis3 = new sanOfBiscuit("Sweet");

console.log(bis1);
console.log("------------------------");

console.log(bis2);
console.log("------------------------");

console.log(bis3);
console.log("------------------------");

/*  First Class Function */

var fcf = function () {};

setTimeout(function () {});

/* New Keyword - Blank Object */

function newKey() {
  this.age = 12;
}

new newKey(); // { age ; 12}

/* IIFE - Immediately Invokes Function Expression */

/* 
var ans = (function (){
    var a = 12;

    return {
        getter : function(){
            console.log(a)
        },
        setter: function(val){
            a = val;
        }
    }

})();

 */

/* Prototype */

var obj = {
  name: "John",
};

console.log(obj.hasOwnProperty("name"));

console.log("------------------------");

/* Prototypal Inheritance */

var human = {
  canFly: false,
  canTalk: true,
  canWalk: true,
  haveEmotions: true,
  hasFourLegs: false,
};

var sherStudent = {
  createWeb: true,
  canMakeAnimations: true,
};

sherStudent._proto_ = human; // Prototypal Inheritance

console.log(sherStudent);
console.log("------------------------");

/* this call apply bind */

console.log(this); // window
console.log("------------------------");

function mca() {
  console.log(this); // window
}

mca();

console.log("------------------------");

var human1 = {
  canFly: false,
  canTalk: true,
  canWalk: true,
  haveEmotions: true,
  hasFourLegs: false,
  someMethod: function () {
    console.log(this); // object
  },
};

human1.someMethod();
console.log("------------------------");

var button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log((this.style.color = "red"));
});

console.log("------------------------");

/* call apply bind */


// call 
function mdh(val1, val2, val3) {
  console.log(this, val1, val2, val3); 
  console.log(this.age); 
}

var obj2 = { age: 12 };

mdh.call(obj2, 12, "alan", 134);

console.log("------------------------");


// apply

mdh.apply(obj2, [12, "alan", 134 ])


// bind

function lkj(){
    console.log(this);
}


var obj3 = {age:24}

var bindFunc = lkj.bind(obj3);

console.log(bindFunc);

bindFunc();

console.log("------------------------");



/* Pure and Impure Functions */


// Pure Functions-  same output for same input and not change global value


function calc(val){
    return val*2
}

var ans1 = calc(2);
var ans2 = calc(2);

console.log(ans1);
console.log(ans2);