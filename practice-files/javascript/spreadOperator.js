const age = [23, 32, 12, 24];
const age2 = [56, 45, 34, 31];

const allAge = [...age, ...age2];
// console.log(allAge);

const max = Math.max(...allAge);
console.log((max));