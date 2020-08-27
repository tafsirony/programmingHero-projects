// with arguments we can access unlimited parameter
// arguments is not array but array like object
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

function getFullName(first, last) {
  // const fullName = first + " " + last;
  let fullName = "";
  for (let i = 0; i < arguments.length; i++) {
    const namePart = arguments[i];
    fullName = fullName + " " + namePart;
  }
  return fullName;
}
const name = getFullName("Hello", "I", "am", "Tafsir", "ony");
console.log(name);
