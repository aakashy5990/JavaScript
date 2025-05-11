const calculator = (a,b,addition) => {
    return addition(a,b);
}

const add = (a,b) =>{
    return a + b;
}

const sub = (a,b) => a - b;

const multi = (a,b) => a*b;

const res = calculator(5,4, multi);
console.log(res);