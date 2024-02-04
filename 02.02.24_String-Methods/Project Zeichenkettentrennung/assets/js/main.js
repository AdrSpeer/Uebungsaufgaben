function cutIt() {
  // HTML Value
  const input = document.body.querySelector("#input").value;
  const cut = document.body.querySelector("#cut").value;
  // HTML
  const radioDavor = document.body.querySelector("#radioDavor");
  const radioDanach = document.body.querySelector("#radioDanach");
  const davor = document.body.querySelector("#davor");
  const danach = document.body.querySelector("#danach");
  const error = document.body.querySelector("#error");
  // Cut
  let cutInput = input.indexOf(cut);

  // Abfrage
  if (input.length === 0 || cut.length === 0) {
    error.innerHTML = "Bitte in beide Felder einen Text eingeben";
    return;
  } else if (!input.includes(cut)) {
    error.innerHTML = "Zeichen im Input nicht gefunden";
  } else if (radioDavor.checked) {
    davor.innerHTML = input.slice(0, cutInput);
    danach.innerHTML = input.slice(cutInput);
  } else if (radioDanach.checked) {
    davor.innerHTML = input.slice(0, cutInput + 1);
    danach.innerHTML = input.slice(cutInput + 1);
  } else {
    error.innerHTML = "Es ist ein Fehler aufgetreten";
  }
}
