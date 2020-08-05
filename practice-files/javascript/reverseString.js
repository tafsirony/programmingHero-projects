const revString = (str) => {
  var reverse = "";
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    reverse = char + reverse;
  }
  return reverse;
};
var statement = "hello alien, vai ki obostha?";
var forAlien = revString(statement);
console.log(forAlien);
