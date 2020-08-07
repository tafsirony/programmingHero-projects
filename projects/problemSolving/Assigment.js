// feet to mile conversion
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

/**
 every feet we need 1000 brick
 1-10 floor = 15 feet height
 1-20 floor = 12 feet
 Greater then 20 = 10 feet
 
 */
function brickCalculator(floor) {
  var feet = 0,
    brick = 1000;
  for (var i = 1; i <= floor; i++) {
    if (i > 0 && i <= 10) {
      feet += 15;
    } else if (i > 10 && i <= 20) {
      feet += 12;
    } else if (i > 20) {
      feet += 10;
    }
  }
  return feet * brick;
}
var totalBrick = brickCalculator(15);
console.log(totalBrick + " Bricks needed");

/**
 find smallest name from array
 bonus: check if empty element
 */
var friend = [
  "tamim",
  "ruhul",
  "aawlad",
  "asif",
  "ony",
  "Hossain",
  "Roshny",
  "Jo",
  "Sadiaaaaaa",
  "Shovon",
];
function tinyFriend(friend) {
  var smallestLen = friend[0].length;
  for (var i = 0; i < friend.length; i++) {
    if (friend[i].length < smallestLen) {
      var smallestLen = friend[i].length;
      var smallest = friend[i];
    }
  }
  return smallest;
}
var name = tinyFriend(friend);
console.log(name);
