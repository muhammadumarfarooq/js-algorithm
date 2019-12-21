/*
Function declarations and function expressions

Function declaration has function keywork and function name () {} and not end with semicolon; due to convention.
Function expression is stored into a variable either let or const.
and it ends with a semicolon as a variable ends.
if it has a name then we will call it a named function expression 
but if it do not have a name we call it annonumous function expression.

The main difference between a function expression and function declaration if that a function expresssion can naver be accessed before its definition similar as we access variable before its declations. it will give us an error.
and thats not true with function declaration we can access it even before its definition.its because of the hoisting.
Hoisting ==> Hoisting is a process of moving all the function declarations to the top of the file. it is done by the js engine automatically.

We know that js is a dynamic language. So we if we define a number to a variable name and on another line we change its value to another data type it will not cause any error. That the feature of a dynamic language Thats only true with variables but also with the arguments of the function if we receive two parameters inside of the function then its not necessary that we difine two arguments we can define only one. First will be assigned value and the second will be undefined similarly if we define more than two then first two will get the value and will do nothing. 
but if we want to get the sum of all the arguments that we pass we can use argument object to access all the aruguments passed to a function. its not array but its look like its an object which is iterable so we can iterate over it to get the expected result. 
*/

// Using argument object in js

function sum(xon, sd, ...args) {
  return args.reduce((accumulator, current) => accumulator + current);
}

console.log(sum(225, 123, 1, 2, 3, 22));

// Getters and Setters

const person = {
  firstName: "Umar",
  lastName: "Farooq",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(name) {
    const nameArr = name.split(" ");
    this.firstName = nameArr[0];
    this.lastName = nameArr[nameArr.length - 1];
  }
};

person.fullName = "Muhammad Umar Farooq";
console.log(person.fullName);
