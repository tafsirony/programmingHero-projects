var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allNames = "";
for (var i = 0; i < friends.length; i++) {
  var name = friends[i];
  allNames = allNames + name;
}
// console.log(allNames);

function add(a, b) {
  return a + b;
}
// console.log(add("adam" + "eve"));
var sentence = "I am hardworking. I am serious. I am sure I will do it";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
  var letter = sentence[i];
  if ((letter = "a")) {
    count++;
  }
}
// console.log(count);
// if({}){
//   console.log("I am not false")
// }
// else{
//   console.log("I am false")
// }
if('false'){
  console.log("I am not false")
}
else{
  console.log("I am false")
}