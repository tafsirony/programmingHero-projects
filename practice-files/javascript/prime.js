function prime(val) {
  for (let i = 2; i < val; i++) {
    // if (val % i == 0) {
    //   console.log("not prime");
    //   return false;
    // } else {
    //   console.log("prime");
    //   return true;
    // }
    return val % i == 0 ? "not prime" : "prime"; // using shorthand
  }
}
console.log(prime(11));
