//factorial with for loop
function factorial(val) {
  var fact = 1;
  for (var i = 1; i <= val; i++) {
    fact = fact * i;
    // console.log(i, fact);
  }
  console.log(fact);
  return val;
}
// factorial(5);

//factorial with for negetive loop
function forloopNegative(val) {
  // if (val === 0 || val === 1) return 1;
  for (var i = val - 1; i >= 1; i--) {
    val = val * i;
  }
  console.log(val);
  return val;
}
// forloopNegative(5);

// factorial with while loop

const factorialWhile = (val) => {
  let fact = 1;
  let i = 1;
  while (i <= val) {
    fact = fact * i;
    // console.log(i, fact);
    i++;
  }
  console.log(fact);
};
// factorialWhile(5);

// factorial with recursion
function recursiveFactorial(val) {
  if (val == 0) {
    return 1;
  } else {
    return val * recursiveFactorial(val - 1);
  }
}
console.log(recursiveFactorial(5));
