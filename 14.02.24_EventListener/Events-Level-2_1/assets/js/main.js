const getLiGr = document.querySelector("#grauTaste");
const getLiWh = document.querySelector("#weissTaste");
const getLiBl = document.querySelector("#blauTaste");
const getLiGe = document.querySelector("#gelbTaste");
const changer = document.querySelector("#umschalter");
const bgr = document.querySelector("body");

const changeColor = (color) => {
  bgr.style.backgroundColor = color;
};

getLiGr.addEventListener("click", () => {
  changeColor("grey");
});
getLiWh.addEventListener("click", () => {
  changeColor("white");
});
getLiBl.addEventListener("click", () => {
  changeColor("blue");
});
getLiGe.addEventListener("click", () => {
  changeColor("yellow");
});
