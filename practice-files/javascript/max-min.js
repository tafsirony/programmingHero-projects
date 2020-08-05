var business = 450;
var minister = 350;
var sochib = 250;

// var max = Math.max(business, minister, sochib);
// console.log(max);

var list = [3, 5, 1, 6, 8, 12, 34, 2, 65, 2, 64, 7, 8, 31];
var max = list[0];
var min = list[0];
var sum = 0;
for (i in list) {
  if (list[i] > max) {
    max = list[i];
  }
  if (list[i] < min) {
    min = list[i];
  }
  sum += list[i];
}
console.log(max);
console.log(min);
console.log(sum);
