// pure function 

// function callyou(a,b){
//     return a + b;
// }

// let res = callyou(6,4);
// console.log(res);

// impure function 

let cnt = 1;
function callyou(){
    cnt++;
}

console.log(cnt);
callyou();
console.log(cnt);
