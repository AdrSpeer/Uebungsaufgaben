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

console.table(heros);

const myHeros = () => {
  const filteredHeros = heros.filter((singleHeros) => {
    return singleHeros;
  });
  return filteredHeros;
};

console.table(myHeros());
