var list = [3, 5, 21, 2, 5, 3, 2, 5, 6, 1, 2, 3, 21, 5, 7, 8, 9, 45, 34];

var uniqe = [];

for (var i in list) {
  var index = uniqe.indexOf(list[i]);
  if (index == -1) {
    uniqe.push(list[i]);
  }
}
console.log(uniqe);
