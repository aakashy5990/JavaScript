// performing some methods of array show in below 
// find()
// findIndex()
// forEach()
// map()
// filter()
// every()
// some()

// find and findIndex 

const a = [4,1,6,-5,3,2,-8,6,7];

const fun = (num) =>{
    return num < 0;
}

// const res = a.find(fun);
const res = a.findIndex(fun);
// console.log(res);


// foreach 
a.forEach((item,i) =>{
    console.log(`value is :${item} and index is ${i}`);
})