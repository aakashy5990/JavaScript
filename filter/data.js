const numbers = [1, 2, 3, 4, 5];
const oldeven = [6, 8];
const even = numbers.filter(num=>num%2===0);
// const newarr = [...oldeven,even];
const newarr = [...oldeven,...even];
console.log(even);
console.log(newarr);

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const newdata = users.filter(user => user.age <= 25);
// console.log(newdata);
// console.log(newdata[0].name);