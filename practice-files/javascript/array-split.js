const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = nums.slice(4, 6);
const part = nums.splice(2, 5,88,98);
console.log(part);
console.log(nums);

const together = nums.join(",");
console.log(together);