//iterative method
function fibonac(val) {
  var fibo = [0, 1];
  for (var i = 2; i <= val; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    // console.log(fibo[i]);
  }
  console.log(fibo);
}
// fibonac(10);

//recursive method

function fiboRecur(val) {
  if (val == 0) {
    return 0;
  } else if (val == 1) {
    return 1;
  } else {
    return fiboRecur(val - 1) + fiboRecur(val - 2);
  }
}
// console.log(fiboRecur(10));

// recrusive fibonacci full series
function fiboRecurFull(val) {
  if (val == 1) {
    return [0, 1];
  } else {
    var fibo = fiboRecurFull(val - 1);
    var fiboNext = fibo[val - 1] + fibo[val - 2];
    fibo.push(fiboNext);
    return fibo;
  }
}
console.log(fiboRecurFull(10));
