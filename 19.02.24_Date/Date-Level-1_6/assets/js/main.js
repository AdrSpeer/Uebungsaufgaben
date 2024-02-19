function newDate(date) {
  return date.getHours() < 12 ? "AM" : "PM";
}

const date1 = new Date(1999, 10, 5, 15);
const date2 = new Date();
const date3 = new Date(2019, 12, 3, 12);
const date4 = new Date(2000, 1, 1, 11);

console.log(newDate(date1));

console.log(newDate(date2));

console.log(newDate(date3));

console.log(newDate(date4));
