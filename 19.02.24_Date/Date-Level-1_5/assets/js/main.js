let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

function checkMonth(singleMonth) {
  const date = new Date(singleMonth);

  const indexMonth = date.getMonth();

  return list[indexMonth];
}

console.log(checkMonth("2001-3-4"));
console.log(checkMonth("2019-12-24"));
console.log(checkMonth("1410-07-15"));
