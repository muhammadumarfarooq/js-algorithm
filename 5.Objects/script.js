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

// Facroty Function

// function calcCircle(radius, location) {
//   return {
//     radius,
//     location,
//     draw() {
//       console.log("CIRCLE");
//     }
//   };
// }

// const circle1 = calcCircle(1, { x: 1, y: 2 });
// console.log(circle1);
// const circle2 = calcCircle(2, { x: 100, y: 102 });
// console.log(circle2);

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

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("Hello World!");
  };
}

const circle1 = new Circle(1);
console.log(circle1);

const circle77 = new Circle(77);

console.log(circle77);
