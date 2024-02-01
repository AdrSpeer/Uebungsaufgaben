function ageCheck() {
  let age = document.querySelector("#age").value;
  const output = document.querySelector("p");
  const checkAge =
    age >= 18
      ? (output.innerHTML = "over 18")
      : (output.innerHTML = "under 18");
}
