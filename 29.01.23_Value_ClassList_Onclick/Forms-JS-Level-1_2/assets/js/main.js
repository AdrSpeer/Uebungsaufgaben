function age(event) {
  event.preventDefault();
  const birth = document.querySelector("#birth").value;
  const ergebnis = 2024 - birth;
  const output = document.querySelector(".ergebnis");
  output.innerHTML = ergebnis;
}
