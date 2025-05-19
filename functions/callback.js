// const calculator = (a,b,callback) => {
//     return callback(a,b);
// }

// const add = (a,b) =>{
//     return a + b;
// }

// const sub = (a,b) => a - b;

// const multi = (a,b) => a*b;

// const res = calculator(5,4, multi);
// or 
// const res = calculator(5,4,(a,b) =>a*b);
// console.log(res);


// piza -> dough -> cheese 

// function getCheese(callback){
//     setTimeout(() =>{
//         const cheese = "🧀";
//         console.log("This is the Cheese", cheese);
//         callback(cheese);
//     },3000);
// }

// function makedough(cheese,callback){
//     setTimeout(() =>{
//         const dough = cheese + "🍩"
//         console.log("This is the dough ",dough);
//         callback(dough);
//     },3000)
// }

// function backpizza(dough,callback){
//     setTimeout(()=>{
//         const pizaa = dough + "🍕"
//         console.log("This is the pizza ",pizaa);
//         callback(pizaa);
//     },3000)
// }

// getCheese((cheese) => {
//     makedough(cheese,(dough)=>{
//         backpizza(dough,(pizza)=>{
//             console.log("got my pizaa",pizza);
//         });
//     });
// });



// callback 
function getcheess(callback){
    const ch = "🧀";
    callback(ch);
}
function callme(ch){
    console.log("This is called and chees is ",ch);
}
getcheess(callme);