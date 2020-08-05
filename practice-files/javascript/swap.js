var a = 5;
var b = 7;
console.log("before swap: a =", a, " b=", b);
var temp = a;
a = b;
b = temp;
console.log("after swap: a =", a, " b=", b);

//swap with destructing
var p = 5,
  q = 7;
console.log("before swap: p =", q, " b=", q);
[p, q] = [q, p];
console.log("after swap: p =", q, " b=", q);
