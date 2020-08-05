const dice = () => {
  for (var i = 0; i < 6; i++) {
    var result = 1 + Math.random() * 5;
    var output = Math.round(result);
    console.log(output);
  }
};
dice();
