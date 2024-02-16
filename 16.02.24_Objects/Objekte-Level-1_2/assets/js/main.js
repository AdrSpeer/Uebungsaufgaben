// ! Funktion alte Schreibweise
// const person = {
//   name: "Adrian Speer",
//   age: 31,
//   sagNameAlter: function () {
//     alert(
//       `${`Hallo mein Name ist ${person.name} und ich bin ${person.age} Jahre alt`}`
//     );
//     console.log(person.name);
//     console.log(person.age);
//   },
// };
// person.sagNameAlter();

// ! Fat Arrow Function
const person = {
  name: "Adrian Speer",
  age: 31,
  sagNameAlter: () => {
    alert(
      `${`Hallo mein Name ist ${person.name} und ich bin ${person.age} Jahre alt`}`
    );
    console.log(person.name);
    console.log(person.age);
  },
};
person.sagNameAlter();
