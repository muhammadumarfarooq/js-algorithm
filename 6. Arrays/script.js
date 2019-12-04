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

console.log(found);
