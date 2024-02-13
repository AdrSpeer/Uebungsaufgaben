const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

// const names = ["Adrian", "Cecile", "Fia", "Claudius"];

// const Drinks = (array) => {
//   const upperDrinks = array.map((allDrinks) => {
//     return allDrinks.toUpperCase();
//   });
//   return upperDrinks;
// };

// console.log(Drinks(drinks));
// console.log(Drinks(names));

const upperDrinks = drinks.map((drinks) => {
  return drinks.toUpperCase();
});

console.log(upperDrinks);

const newDrinks = upperDrinks;

console.log(newDrinks);
