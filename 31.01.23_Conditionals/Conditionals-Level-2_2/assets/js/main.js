function checkAirQuality() {
  const range = document.querySelector("input").value;
  const firstHeadline = document.querySelector(".first-headline");
  const secondHeadline = document.querySelector(".second-headline");
  const background = document.querySelector("div");
  const quality = document.querySelector("p");
  if (range <= 50) {
    firstHeadline.innerHTML = "Level of health concern: Good";
    secondHeadline.innerHTML = "Level of health effect: Little or no risk";
    quality.innerHTML = "Luftqualität: " + range;
    background.style.backgroundColor = "green";
  } else if (range > 50 && range <= 100) {
    firstHeadline.innerHTML = "Level of health concern: Moderate";
    secondHeadline.innerHTML = "Level of health effect: Acceptable quality";
    quality.innerHTML = "Luftqualität: " + range;
    background.style.backgroundColor = "yellow";
  } else {
    firstHeadline.innerHTML =
      "Level of health concern: Unhealthy for sensitive groups";
    secondHeadline.innerHTML =
      "Level of health effect: Generable publics not likely affected";
    quality.innerHTML = "Luftqualität: " + range;
    background.style.backgroundColor = "orange";
  }
}
