const heros = [
  "Superman",
  "Batman",
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  null,
];

let herosFilter = heros.filter((singleHeros) => {
  return singleHeros;
});

console.log(herosFilter);
