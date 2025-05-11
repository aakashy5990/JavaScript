{
    let a = 10;
}

// let b = 20;
var b = "first";
var b = "Second";

// console.log(b);

(function (){
    var mes = "Aakash Yadav";
    console.log(mes);
})();

// function (){
//     var mes = "Aakash Yadav";
//     console.log(mes);
// }();  // function require a fuction name

(function name(){
    console.log("Hello World");
}
)();

const myfun = function(){
    console.log("heelo world");
}

myfun();

// ✅ Using parentheses (most common)
(function() {
    console.log("IIFE with ()");
})();
  
// ✅ Using unary plus
+function() {
    console.log("IIFE with +");
}();
  
// ✅ Using logical NOT
!function() {
    console.log("IIFE with !");
}();
  
// ✅ Using bitwise NOT
~function() {
    console.log("IIFE with ~");
}();
  
// ✅ Using void
void function() {
    console.log("IIFE with void");
}();
  
// ✅ Using minus
-function() {
    console.log("IIFE with -");
}();
  