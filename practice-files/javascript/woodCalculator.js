/*
1 ta chair = 1 cube wood;
1 table = 3 cube;
1 ta khat = 5 cube;
how much wood is needed for user input chair,table,bed?
*/
function woodCalculator(chair, table, bed) {
  var total = chair + table * 3 + bed * 5;
  return total;
}
var totalWood = woodCalculator(12, 4, 2);
console.log(totalWood + " Cubic Feet Wood Needed");
