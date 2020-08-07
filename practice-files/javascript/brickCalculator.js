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
