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
// Not a number => "not a number"

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
