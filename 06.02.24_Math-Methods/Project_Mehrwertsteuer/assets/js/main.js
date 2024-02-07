// ! Textänderung HTML
const changeText = () => {
  // Value u Output HTML
  const label = document.querySelector(".betrag label");
  const bruttoNetto = document.querySelector("#endbetrag");
  const radioBerechnung = document.querySelector(
    "input[name=satz]:checked"
  ).value;

  // Abfrage
  if (radioBerechnung === "brutto") {
    label.innerHTML = "Bruttobetrag (Preis inkl Mehrwertsteuer) in Euro";
    bruttoNetto.innerHTML = "Nettobetrag";
  } else if (radioBerechnung === "netto") {
    label.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
    bruttoNetto.innerHTML = "Bruttobetrag";
  }
};

// ! Berechnug
const rechner = () => {
  // Value HTML
  const radioBerechnung = document.querySelector(
    "input[name=satz]:checked"
  ).value;
  const radioSteuersatz = document.querySelector(
    "input[name=prozent]:checked"
  ).value;
  const inputBetrag = document.querySelector("#betrag").value;

  // Output HTML
  const outputSteuer = document.querySelector(".steuerbetrag p");
  const outputNetto = document.querySelector(".nettobetrag p");

  // Abfrage
  // - Brutto 19%
  if (radioBerechnung === "brutto" && radioSteuersatz === "neunzehn") {
    // Berechnung
    let steuerRechnerBrutto = inputBetrag / 1.19;
    let bruttoRechner = Number(inputBetrag) - Number(steuerRechnerBrutto);
    // Output HTML
    outputSteuer.innerHTML = bruttoRechner.toFixed(2) + "€";
    outputNetto.innerHTML = steuerRechnerBrutto.toFixed(2) + "€";

    // - Netto 19%
  } else if (radioBerechnung === "netto" && radioSteuersatz === "neunzehn") {
    // Berechnung
    let steuerRechnerNetto = inputBetrag * 0.19;
    let nettoRechner = Number(inputBetrag) + Number(steuerRechnerNetto);
    // Output HTML
    outputSteuer.innerHTML = steuerRechnerNetto.toFixed(2) + "€";
    outputNetto.innerHTML = nettoRechner.toFixed(2) + "€";

    // - Brutto 7%
  } else if (radioBerechnung === "brutto" && radioSteuersatz === "sieben") {
    // Berechnung
    let steuerRechnerBrutto = inputBetrag / 1.07;
    let bruttoRechner = Number(inputBetrag) - Number(steuerRechnerBrutto);
    // Output HTML
    outputSteuer.innerHTML = bruttoRechner.toFixed(2) + "€";
    outputNetto.innerHTML = steuerRechnerBrutto.toFixed(2) + "€";

    // - Netto 7%
  } else if (radioBerechnung === "netto" && radioSteuersatz === "sieben") {
    // Berechnung
    let steuerRechnerNetto = inputBetrag * 0.07;
    let nettoRechner = Number(inputBetrag) + Number(steuerRechnerNetto);
    // Output HTML
    outputSteuer.innerHTML = steuerRechnerNetto.toFixed(2) + "€";
    outputNetto.innerHTML = nettoRechner.toFixed(2) + "€";
  }
};
