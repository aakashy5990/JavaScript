// class hello{
//     constructor(){
//         console.log("THis is the constructor");
//     }
//     message(){
//         console.log("This is message");
//     }
//     sorry(){
//         console.log("This is sorry message");
//     }
// }

// let obj = new hello();
// obj.message();
// obj.sorry();



// Type of methods;
// 1) constructor;
// 2) prototype;
// 3) StaticRange;

// class student{
//     constructor(){
//         let name;
//         console.log("This is constructor")
//     }
//     hello(){
//         console.log("Hello " + this.name);
//     }
// }

// let obj = new student();
// obj.name = "Yahoo baba"
// obj.hello();

// ---------------OR----------------

// class student{
//     constructor(name,age){
//         this.fname = name;
//         this.fage = age;
//         console.log("This is constructor")
//     }
//     hello(){
//         console.log(`Hello ${this.fname} and age is ${this.fage}`);
//     }
//     static staticmethod(){
//         console.log("This is Static");
//     }
// }

// let obj = new student("Yahoo baba",23);
// obj.hello();
// no need of object for calling static method 
// student.staticmethod();
