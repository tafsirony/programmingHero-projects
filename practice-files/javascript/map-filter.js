const numbers = [3, 4, 5, 6, 7, 2, 22, 11, 18, 15];

const result = numbers.map((n) => {
  return n * n;
});
// console.log(result);

const result2 = numbers.filter((n) => {
  return n > 15;
});
// console.log(result2);

const result3 = numbers.find((x) => x > 5);
// find gives first matched output
// console.log(result3);

const students = [
  { id: 21, name: "Omar Sunny" },
  { id: 31, name: "Manna" },
  { id: 41, name: "MOyuri" },
  { id: 71, name: "Dipjol" },
];
const names = students.map((s) => s.name);
console.log(names);
