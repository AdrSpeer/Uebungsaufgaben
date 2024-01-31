function adult() {
  const userAge = document.querySelector("#age").value;
  const output = document.querySelector("p");
  if (userAge >= 18) {
    output.innerHTML = "Du bist volljährig: " + userAge;
  } else {
    output.innerHTML = "Du bist minderjährig: " + userAge;
  }
}
