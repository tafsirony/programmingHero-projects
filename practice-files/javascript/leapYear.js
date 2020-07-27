function leapYear(year) {
  // let reminder = year % 4;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year + " is leap year");
  } else {
    console.log(year + " is Not leap year");
  }
}
leapYear(2021);
