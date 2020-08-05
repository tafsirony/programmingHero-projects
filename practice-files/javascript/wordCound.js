var speech = " I am  a good  boy, I am learning JS";
// console.log(speech);
var count = 0;
for (var i = 0; i < speech.length; i++) {
  var char = speech[i];

  if (char == " " && speech[i - 1] != " ") {
    //speech[i - 1] != " " is removing double space
    count++;
  }
}
console.log(count);
