// // Topics: adding, removing, finding, emptying, combining , slicing, iteration, Joining, sorting, Testing an elements of array, filter, mapping over an array

// //Adding Elements

// const colors = ["red", "green", "blue"];

// colors.push("orange"); //add item at the end
// colors.unshift("voilet"); //add item at the beginning

// colors.splice(2, 1, "dil"); //add item at any location

// // console.log(colors);

// // Finding Elements (Primitives)

// const numbers = [1, 2, 3, 4, 5, 1, 1, 5, 6, 1];
// // console.log(numbers.indexOf(2));
// // console.log(numbers.lastIndexOf(1));

// // console.log(numbers.indexOf(2) !== -1);
// // console.log(numbers.includes(2));

// // Finding Elements (Reference Type)

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" }
// ];

// const found = courses.find(course => course.name === "a");

// // console.log(found);

// // Combining Arrays:

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];

// const newArr = arr1.concat(arr2);
// // console.log(newArr);

// // Slicing Array

// let slicedArr = newArr.slice(1, 3);
// slicedArr = newArr.slice(3); //start from index 3 and slice till end
// slicedArr = newArr.slice(); //copy whole array

// // console.log(slicedArr);

// // Spread operator  (another easy and flexible way of copy and concating an array)
// const combine = [...arr1, ...arr2];
// const copy = [...combine, "dsfads"];

// // console.log(copy);

// // Iterating over an array => use for-of loop

// const names = ["Umar", "Hassan", "Umair"];

// // for (let name of names) {
// //   console.log(item);
// // }

// // names.forEach((name, index) => console.log(index, name));

// // Joining an Array

// const name = "Muhammad Umar Farooq";
// const splitArr = name.split(" ");
// const joinStr = splitArr.join("-");

// // const info = ["Umar", "malik", 21, 91];

// // const joined = info.join(" - ");

// // console.log(info);
// // console.log(joined);

// // console.log(joinStr);

// // Sorting Array
// const myNum = [2, 3, 1];

// myNum.sort();
// myNum.reverse();

// // console.log(myNum);

// const persons = [
//   { id: 1, name: "zinger" },
//   { id: 2, name: "pista" },
//   { id: 2, name: "aista" }
// ];

// persons.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });

// // console.log(persons);

// // Testing the elements of an array

// // .every ==> all have to fullfill condition
// // .some ==> find atleast one

// const numbersA = [-1, 1, -2, -3, -4, -5];

// const atLeastOnePositive = numbersA.every(function(value) {
//   return value >= 0;
// });

// // console.log(atLeastOnePositive);

// // Mapping over an array

// const numbersB = [-1, 1, -2, -3, -4, -5];

// const items = numbersB
//   .filter(value => value <= 0)
//   .map(value => ({
//     number: value
//   }));

// // const items = filtered.map(value => "<li>" + value + "</li>");
// // const html = "<ul>" + items.join("") + "</ul>";

// // console.log(filtered);
// // console.log(items);
// // console.log(html);

// Reducing an Array

// const numbers = [1, 2, -1, 3, 5];
// const initialValue = 100;

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, initialValue);

// Exercises
//========== Array From Range ==========

// const numbers = arrayFromRange(-10, -40);

// console.log(numbers);

// function arrayFromRange(min, max) {
//   const numberArray = [];
//   for (let i = min; i <= max; i++) numberArray.push(i);
//   return numberArray;
// }

//========= Includes method on myself ==========

// const numbers = [1, 2, 3, 4, 0];

// console.log(includes(numbers, 30));

// function includes(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//   return false;
// }

// ========= Execpt ========

// const numbers = [1, 2, 3, 4, 1, 7, 87];

// const output = except(numbers, [1, 87]);
// console.log(output);

// function except(numbers, exceptArray) {
//   const output = [];
//   for (let number of numbers)
//     if (!includes(exceptArray, number)) output.push(number);

//   return output;
// }

// ======== Moving an Element ========

// const numbers = [1, 2, 3, 4, 5];

// const output = move(numbers, 1, -1);

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position < 0 || position > array.length) {
//     console.error("Invalid Offset");
//     return;
//   }

//   const output = [...array];
//   const deletedItem = output.splice(index, 1)[0];
//   output.splice(index + offset, 0, deletedItem);
//   console.log(output);
// }

//========= Count Occurances =========

// const numbers = [1, 2, 1, 1, 3, 4, 5, 2];

// const count = countOccurances(numbers, 15);
// console.log(count);

// function countOccurances(array, number) {
//   let counter = 0;
//   for (let element of array) if (element === number) counter++;
//   return counter;
// }

// with for of loop

// const numbers = [1, 2, 1, 3, 4, 5, 2];
// const count = countOccurances(numbers, 1);
// console.log(count);

// function countOccurances(array, number) {
//   let counter = 0;
//   // with for-of loop
//   // for (let element of array) if (element === number) counter++;
//   // with reduce method
//   return array.reduce((accumulator, currentValue) => {
//     if (currentValue === number) return accumulator + 1;
//     return accumulator + 0;
//   }, 0);
// }

//========= Array sum =========
// const numbers = [1, 2, -1, 3, 5];
// const initialValue = 100;

// with reduce method
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, initialValue);

// with for-of loop
// let sum = 0;
// for (let number of numbers) sum += number;

// console.log(sum);

// ========== Get Max Number =========

// const numbers = [0.01, 0.02];

// const maxNumber = getMax(numbers);

// console.log(maxNumber);

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   let maxNum = array[0];
//   for (let i = 1; i < array.length; i++)
//     if (array[i] > maxNum) maxNum = array[i];

//   return maxNum;
// }

// Get max using reduce method

const numbers = [1, 2, 12, 26, 1, 2, 88];

const maxNumber = getMax(numbers);

console.log(maxNumber);

function getMax(array) {
  if ((array.length = 0)) return undefined;
  return array.reduce((a, c) => (a > c ? a : c));
}
