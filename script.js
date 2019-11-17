// 1. swapping variables
let a = "red";
let b = "green";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// 2. Printing Message based on time
//PROBLEM
//if hour is between 6am and 12pm: Good Morning!
//if hour is between 12pm and 6pm: Good Afternoon
//Otherwise: Good Evening

// 24 hour clock

let hour = 7;

if (hour >= 6 && hour < 12) console.log("Good Morning");
else if (hour >= 12 && hour < 18) console.log("Good Afternoon");
else console.log("Good Evening");

// 3. Show 5 odd number using for loops

for (let i = 1; i <= 10; i++) if (i % 2 !== 0) console.log(i);
