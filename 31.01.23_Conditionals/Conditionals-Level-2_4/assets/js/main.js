function summe(numberOne, numberTwo) {
  let totalNumbers = numberOne + numberTwo;
  if (numberOne === numberTwo) {
    console.log(totalNumbers * 5);
  } else {
    console.log(totalNumbers);
  }
}

summe(10, 5);
summe(5, 5);
