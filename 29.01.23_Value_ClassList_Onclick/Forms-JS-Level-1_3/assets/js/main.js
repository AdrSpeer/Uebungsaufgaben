function berechnung(event) {
  event.preventDefault();
  const alter1 = document.querySelector("#alter1").value;
  const alter2 = document.querySelector("#alter2").value;
  const ergebnis = alter1 - alter2;
  const output = document.querySelector(".ergebnis");
  output.innerHTML += " " + ergebnis;
}
