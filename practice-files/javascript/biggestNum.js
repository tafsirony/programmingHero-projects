// fing largest number from array
function biggestNumber(number) {
  var largest = number[0];
  for (var i = 0; i < number.length; i++) {
    var current = number[i];
    if (current > largest) {
      largest = current;
    }
  }
  return largest;
}
var list = [4, 6, 2, 7, 23, 6, 1, 7];
var big = biggestNumber(list);
console.log(big);
