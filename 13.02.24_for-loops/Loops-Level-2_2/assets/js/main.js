const loopMe = () => {
  const numberInput = Number(document.querySelector("#number-input").value);
  const output = document.querySelector("p");
  output.innerHTML = "L";
  for (let i = 1; i <= numberInput; i++) {
    output.innerHTML += "o";
  }
  output.innerHTML += "p";
};
