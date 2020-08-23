function stopWatch() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
for (let i = 0; i < 10; i++) {
  console.log(clock2());
}
