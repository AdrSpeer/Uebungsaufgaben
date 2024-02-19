const checkDay = (date) => {
  const Newdate = new Date(date);
  const day = Newdate.getDay();

  if (day === 6 || day === 0) {
    return "Weekend";
  } else {
    return "Arbeitstag";
  }
};

console.log(checkDay("12.15.2019"));
console.log(checkDay("2.16.2001"));
console.log(checkDay("2.1.2020"));
console.log(checkDay("2.29.2020"));
