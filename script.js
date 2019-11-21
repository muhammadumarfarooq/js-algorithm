//===== 1. swapping variables =====
console.log("========== Swapping Variables ==========");

let a = "red";
let b = "green";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//===== 2. Printing Message based on time =====

//PROBLEM
//if hour is between 6am and 12pm: Good Morning!
//if hour is between 12pm and 6pm: Good Afternoon
//Otherwise: Good Evening

// 24 hour clock
console.log("========== Printing Message based on time ==========");

let hour = 7;

if (hour >= 6 && hour < 12) console.log("Good Morning");
else if (hour >= 12 && hour < 18) console.log("Good Afternoon");
else console.log("Good Evening");

//===== 3. Show 5 odd number using for loops =====
console.log("========== Odd Numbers Using For Loop ==========");

for (let i = 1; i <= 10; i++) if (i % 2 !== 0) console.log(i);

//===== 4. Show 5 even numbers in reverse order using for loop =====
console.log("========== Even Numbers in Reverse Order ==========");
for (let i = 10; i >= 1; i--) if (i % 2 === 0) console.log(i);

//===== 5. Write a function that takes two numbers and return maximum of the two

const maxNum = calcMaxNum(4, 3);
console.log(maxNum);

function calcMaxNum(a, b) {
  // if (a > b) return a;
  // return b;

  return a > b ? a : b;
}

// ===== 6. Is LandScape width > height=====
console.log("========== Is LandScape width > height ==========");
const isLandScape = calcLandScape(500, 200);
console.log(isLandScape);

function calcLandScape(width, height) {
  // return width > height ? true : false; //pour way of writing code
  return width > height;
}

// ===== 7. FizzBuzz Exercise =====
console.log("========== FizzBuzz ==========");

// Instructions:
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not Divisible by 3 and 5 => input
// Not a number => NaN

//Solution:
const outPut = fizzBuzz(30);
console.log(outPut);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  return input;
}

// ===== Demerits Point =====

console.log("========== Demerits Point ==========");

checkSpeed(90);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  points >= 12
    ? console.log("Licence Suspended")
    : console.log("Point: " + points);
}

// ===== Even and Odd Numbers =====
console.log("=========== Even and Odd Numbers ==========");

showNumbers(10);

function showNumbers(numLimit) {
  for (let i = 0; i <= numLimit; i++) {
    // if (i % 2 === 0) console.log(i, "Even");
    // else console.log(i, "Odd");

    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}

// ===== Count Truthy and Falsy Values (for of loop used) =====
console.log("=========== Count Truthy and Falsy Values ==========");

countTruthy([1, 2, 3, "Umar", "", null, NaN, 0, 44, 0]);

function countTruthy(array) {
  let count = 0;
  for (let item of array) {
    if (item) count++;
  }

  // for (let i = 0; i <= array.length; i++) {
  //   if (array[i]) count++;89
  // }
  console.log(count);
}

// ===== Show string properities in object (for in loop used) =====
console.log("=========== Show string properities in object ==========");

const user = {
  name: "Umar",
  date: 2018,
  calc: "data"
};

checkProperty(user);

function checkProperty(object) {
  for (let property in object)
    if (typeof object[property] === "string")
      console.log(property + ": " + object[property]);
}

// ===== Sum of Multiples of 3 and 5 =====
console.log("=========== Sum of Multiples of 3 and 5 ==========");

sum(19);

function sum(limit) {
  let totalSum = 0;

  for (let i = 0; i <= limit; i++) {
    // if (i % 3 === 0 && i % 5 === 0) totalSum += i;
    // else if (i % 3 === 0) totalSum += i;
    // else if (i % 5 === 0) totalSum += i;

    if (i % 3 === 0 || i % 5 === 0) totalSum += i;
  }

  console.log(totalSum);
}

// ===== Grade =====
console.log("=========== Grade ==========");

const marks = [90, 80, 100, 100];
console.log(calculateGrades(marks));

function calculateGrades(marks) {
  const average = calcAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calcAverage(array) {
  let sumOfGrades = 0;
  for (let value of array) sumOfGrades += value;
  return sumOfGrades / marks.length;
}
