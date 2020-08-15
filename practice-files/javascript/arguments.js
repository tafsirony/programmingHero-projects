// with arguments we can access unlimited parameter

function addNum() {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    var num = arguments[i];
    sum = sum + num;
  }
  return sum;
}
var result = addNum(3, 5, 2, 6);
console.log(result);
