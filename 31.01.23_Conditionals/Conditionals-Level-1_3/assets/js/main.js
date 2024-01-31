function greaterThan() {
  const userAge = document.querySelector("#input").value;
  const text = document.querySelector("p");
  if (userAge >= 18) {
    text.innerHTML = "Ja, Du darfst Shisha rauchen";
  } else {
    text.innerHTML = "Nein, Du darfst keine Shisha rauchen";
  }
}
