const ausgabe = () => {
  console.log("Start: Warten für 3 Sekunden...");
};
const ausgabe1 = () => {
  console.log("Erledigt, du hast 3 Sekunden verschwendet");
};

setTimeout(ausgabe, 0);
setTimeout(ausgabe1, 3000);

let zahl = 11;

const ausgabeInterval = setInterval(() => {
  zahl--;
  console.log(zahl);
  if (zahl <= 0) {
    clearInterval(ausgabeInterval);
    console.log("Endlichfeierabend");
  }
}, 1000);
