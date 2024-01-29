function changeBackground() {
  const red = document.querySelector("#red").value;
  const green = document.querySelector("#green").value;
  const blue = document.querySelector("#blue").value;

  const wrapper = document.querySelector(".wrapper");

  wrapper.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}
