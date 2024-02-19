let monate = [
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

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const date = new Date();
console.log(date);

const dateYear = new Date().getFullYear();
console.log(dateYear);

const dateMonth = new Date().getMonth();
console.log(`${dateMonth} Monat`);

const dateDay = new Date().getDate();
console.log(`${dateDay} Tag`);

const dateMinute = new Date().getMinutes();
console.log(`${dateMinute} Minute`);

console.log(wochenTag[1]);
console.log(monate[1]);
