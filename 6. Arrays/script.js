// Topics: adding, removing, finding, emptying, combining , slicing, iteration, Joining an array

//Adding Elements

const colors = ["red", "green", "blue"];

colors.push("orange"); //add item at the end
colors.unshift("voilet"); //add item at the beginning

colors.splice(2, 1, "dil"); //add item at any location

// console.log(colors);

// Finding Elements (Primitives)

const numbers = [1, 2, 3, 4, 5, 1, 1, 5, 6, 1];
// console.log(numbers.indexOf(2));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(2) !== -1);
// console.log(numbers.includes(2));

// Finding Elements (Reference Type)

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" }
];

const found = courses.find(course => course.name === "a");

// console.log(found);

// Combining Arrays:

const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const newArr = arr1.concat(arr2);
console.log(newArr);

// Slicing Array

let slicedArr = newArr.slice(1, 3);
slicedArr = newArr.slice(3); //start from index 3 and slice till end
slicedArr = newArr.slice(); //copy whole array

console.log(slicedArr);

// Spread operator  (another easy and flexible way of copy and concating an array)
const combine = [...arr1, ...arr2];
const copy = [...combine, "dsfads"];

// console.log(copy);

// Iterating over an array => use for-of loop

const names = ["Umar", "Hassan", "Umair"];

// for (let name of names) {
//   console.log(item);
// }

// names.forEach((name, index) => console.log(index, name));

// Joining an Array

const name = "Muhammad Umar Farooq";
const splitArr = name.split(" ");
const joinStr = splitArr.join("-");

// const info = ["Umar", "malik", 21, 91];

// const joined = info.join(" - ");

// console.log(info);
// console.log(joined);

// console.log(joinStr);
