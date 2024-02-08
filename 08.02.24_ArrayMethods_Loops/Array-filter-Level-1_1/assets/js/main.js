const woerter = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];

console.log(woerter);
// ! Lange Schreibweise
// const woerterFilter = woerter.filter((alleWoerter) => {
//   return alleWoerter.length <= 6;
// });

// ! Kurze Schreibweise
const woerterFilter = woerter.filter((alleWoerter) => alleWoerter.length <= 6);

console.log(woerterFilter);
