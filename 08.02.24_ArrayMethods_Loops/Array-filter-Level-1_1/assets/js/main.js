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
const namen = ["Adrian", "Cecile", "Claudius", "Konstantin", "StasiKlaus"];

const filterIt = (array) => {
  const filterShort = [...array].filter((alleWoerter) => {
    return alleWoerter.length <= 6;
  });
  return filterShort;
};

// const sortIt = (array) => {
//   const sortedArray = array.sort();
//   return sortedArray;
// };

const sortIt = (array) => {
  const sortedArray = [...array].sort();
  return sortedArray;
};

console.log(filterIt(woerter));
console.log(filterIt(namen));

console.log(sortIt(woerter));
console.log(sortIt(namen));
