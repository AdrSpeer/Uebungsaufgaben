const rechner = (event) => {
  event.preventDefault();

  //   HTML Values
  const groesse = Number(document.querySelector("#groesse").value);
  const alter = Number(document.querySelector("#alter").value);
  const gewicht = Number(document.querySelector("#gewicht").value);
  const gender = document.querySelector('input[name="gender"]:checked');
  const pal = Number(document.querySelector("select").value);

  // Output HTML
  const grundumsatzKcal = document.querySelector("#grundumsatz-kcal");
  const grundumsatzKJ = document.querySelector("#grundumsatz-kJ");
  const gesamtumsatzKcal = document.querySelector("#gesamtumsatz-kcal");
  const gesamtumsatzKJ = document.querySelector("#gesamtumsatz-kJ");

  if (gender.value == "mann") {
    // kcal
    const grundumsatzMannKcal =
      66.47 + 13.7 * gewicht + 5 * groesse - 6.8 * alter;
    const gesamtumsatzMannKcal = pal * grundumsatzMannKcal;
    // kJ
    const grundumsatzMannKJ = grundumsatzMannKcal * 4.184;
    const gesamtumsatzMannKJ = gesamtumsatzMannKcal * 4.184;

    // Output
    grundumsatzKcal.innerHTML = grundumsatzMannKcal.toFixed(2);
    grundumsatzKJ.innerHTML = grundumsatzMannKJ.toFixed(2);

    gesamtumsatzKcal.innerHTML = gesamtumsatzMannKcal.toFixed(2);
    gesamtumsatzKJ.innerHTML = gesamtumsatzMannKJ.toFixed(2);
  } else {
    // kcal
    const grundumsatzFrauKcal =
      655.1 + 9.6 * gewicht + 1.8 * groesse - 4.7 * alter;
    const gesamtumsatzFrauKcal = pal * grundumsatzFrauKcal;
    // kJ
    const grundumsatzFrauKJ = grundumsatzFrauKcal * 4.184;
    const gesamtumsatzFrauKJ = gesamtumsatzFrauKcal * 4.184;

    // Output
    // Output
    grundumsatzKcal.innerHTML = grundumsatzFrauKcal.toFixed(2);
    grundumsatzKJ.innerHTML = grundumsatzFrauKJ.toFixed(2);

    gesamtumsatzKcal.innerHTML = gesamtumsatzFrauKcal.toFixed(2);
    gesamtumsatzKJ.innerHTML = gesamtumsatzFrauKJ.toFixed(2);
  }
};
