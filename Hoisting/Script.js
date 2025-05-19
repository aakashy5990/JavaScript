// Hoising are read the code bottom to up and variable declaration is hoisting and variable initilization is ot a hoising 
// in below showing the example of the hosing

// for example of hoisting :- 
// x = 20;
// console.log(x);
// var x;

// hoising function
// callme();

// function callme(){
//   console.log("THis is the Hoisting function ");
// }


// in below showing the example of the unhosing  its is also throw the undefine error

// let x;
// console.log(x)
// x = 20;

// to avoid the hoisting we can use the use strict 

"use strict";
x = 20;
console.log(x);
var x;