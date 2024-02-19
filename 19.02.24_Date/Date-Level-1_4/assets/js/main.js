function amountDays(month, year) {
  if (month == 2 && year % 4 == 0) {
    return 29;
  } else if (month == 2) {
    return 28;
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    return 30;
  } else {
    return 31;
  }
}

console.log(amountDays(1, 2016));
console.log(amountDays(2, 2016));
console.log(amountDays(2, 2017));
console.log(amountDays(12, 2017));
