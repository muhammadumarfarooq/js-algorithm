// Objects Literals

// Object oriented style of programming

// const circle = {
//   radius: 1,
//   location: {
//     x: 12,
//     y: 14
//   },
//   isVisible: true,
//   draw: function() {
//     console.log("CIRCLE");
//   }
// };

// circle.draw(); //Method

// Not a right way of doing things use Factory Function instead
// const circle2 = {
//   radius: 1,
//   location: {
//     x: 12,
//     y: 14
//   },
//   isVisible: true,
//   draw: function() {
//     console.log("CIRCLE2");
//   }
// };

// circle2.draw(); //Method

// Factory Function

// function calcCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("radius");
//     }
//   };
// }

// const circle1 = calcCircle(1);
// console.log(circle1);

// const circle55 = calcCircle(55);
// console.log(circle55);

// Constructor Function

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log("Hello World!");
//   };
// }

// const circle1 = new Circle(1);
// console.log(circle1);

// const circle77 = new Circle(77);

// console.log(circle77);

// constructor Function

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log("hello world");
//   };
// }

// const circle1 = new Circle(12);
// console.log(circle1);

// const circle2 = new Circle(2);
// console.log(circle2);

// Primitives VS Data Types

// Primitives are copied by value.
// Objects are copied by reference.

// Primitives
// let x = 5;
// let y = x;
// x = 15;

// Objects => Reference Type
// let x = { value: 5 };
// let y = x;

// y.value = 1000;
// x.value = 99;

// console.log("x", x);
// console.log("y", y);

// Cloning an object

const student1 = {
  name: "Umar",
  location: "pakistan"
};

// console.log("Student1:", student1);

// const student2 = { address: "Mohallah Azam abad street # 2" };

// 1

// for (let key in student1) {
//   student2[key] = student1[key];
// }

// 2
// Object.assign(student2, student1);

// 3 Spread Operator
// const student2 = { address: "Mohallah Azam abad street # 2", ...student1 };

// console.log("student2:", student2);

// Object Exercises:

// Exercise # 1

const address = {
  street: "Azam abad",
  city: "Faisalabad",
  zipCode: 38000
};

showAddress(address);

function showAddress(address) {
  for (let key in address) console.log(`${key}: ${address[key]}`);
}
