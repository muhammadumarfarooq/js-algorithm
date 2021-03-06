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

// const address = {
//   street: "Azam abad",
//   city: "Faisalabad",
//   zipCode: 38000
// };

// showAddress(address);
// function showAddress(address) {
//   for (let key in address) console.log(`${key}: ${address[key]}`);
// }

// Exercise # 2
// addresss object using factory and constructor function

// Factory
// function address(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode
//   };
// }

// const umarAddress = address("a", "b", "c");

// Constructor
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = new Address("a", "b", "c");
const address2 = new Address("a", "b", "c");
const address3 = address2;
// function areEqual(address1, address2) {
//   let isEqual = true;
//   for (let key in address1) {
//     if (address1[key] !== address2[key]) {
//       isEqual = false;
//       return isEqual;
//     }
//   }

//   return isEqual;
// }

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }

// function areSame(address1, address2) {
//   return address1 === address2;
// }

// console.log("Equal:", areEqual(address1, address2));
// console.log("Same:", areSame(address1, address2));

// Blog Post Objects

// const cook = {
//   title: "How to Cook",
//   body:
//     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis temporibus vitae veniam nobis enim? Sequi reprehenderit facere dignissimos deserunt atque.",
//   author: "Umar Farooq",
//   views: 956,
//   comments: [
//     { body: "This is one comment", author: "Zain" },
//     { body: "This is two comment", author: "Haji Nawab" }
//   ],
//   isLive: true
// };

// console.log(cook);

// Blog Post Constructor Function

// function Post(title, body, author, views, comments, isLive) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = views;
//   this.comments = comments;
//   this.isLive = isLive;
// }

// const post1 = new Post(
//   "umar",
//   "body some",
//   "um",
//   7895,
//   [{ name: "a" }, { name: "b" }],
//   "dfgb dfjkla",
//   false
// );

// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.views = 0;
//   this.comments = [];
//   this.isLive = false;
// }

// const post1 = new Post("umar", "body some", "um");

// console.log(post1);

// Price Range
const priveRanges = [
  { label: "$", toolTip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", toolTip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", toolTip: "Expensive", minPerPerson: 21, maxPerPerson: 50 }
];
