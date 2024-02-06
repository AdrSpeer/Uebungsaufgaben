// ! If/Else
// const guess = () => {
//   let num = Math.ceil(Math.random() * 10);
//   let guessIt = prompt("Schätze eine Zahl zwischen 1 und 10");

//   if (guessIt == num) {
//     console.log(`Du hast gewonnen! Die Zahl lautet: ${num}`);
//   } else {
//     console.log(`Du hast verloren! Die Zahl lautet: ${num}`);
//   }
// };

// guess();

// ! Ternary
const guess = () => {
  let num = Math.ceil(Math.random() * 10);
  let guessIt = prompt("Schätze eine Zahl zwischen 1 und 10");

  const trueONot =
    guessIt == num
      ? console.log(`Du hast gewonnen! Die Zahl lautet: ${num}`)
      : console.log(`Du hast verloren! Die Zahl lautet: ${num}`);
};

guess();
