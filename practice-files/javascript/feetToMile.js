function feetToMile(feet) {
  if (feet < 0) {
    return "distance can't be negetive";
  } else {
    var mile = feet * 0.000189394;
    return mile;
  }
}
var convert = feetToMile(50000);
console.log(convert);
