let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

const myDrinks = (array) => {
  const sortedArray = array.sort();
  sortedArray.forEach((data) => {
    return document.write(data, " ", "<br>");
  });
};

myDrinks(getraenke);
