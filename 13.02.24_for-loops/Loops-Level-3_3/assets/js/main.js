const loopMe = () => {
  const numberInput = Number(document.querySelector("#number-input").value);
  const output = document.querySelector("p");
  let loop = ["l", "p"];
  if (numberInput <= 0) {
    output.innerHTML = "Bitte eine Zahl größer als 0 eingeben";
    return;
  } else {
    output.innerHTML = "";
    for (let i = 1; i <= numberInput; i++) {
      if (numberInput % 2 === 0) {
        loop.splice(1, 0, "o");
      } else {
        if (i % 2 === 0) {
          loop.splice(1, 0, "o");
        } else {
          loop.splice(1, 0, "0");
        }
      }
    }
  }
  output.innerHTML = loop.join("");
};
