const addBtn = document.querySelector("#button");
const element = document.querySelector("#farbeAuswahlen");
const bgr = document.querySelector("body");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const selectElement = element.selectedIndex;
  if (selectElement == 0) {
    bgr.style.backgroundColor = "mediumorchid";
  } else if (selectElement == 1) {
    bgr.style.backgroundColor = "mintcream";
  } else if (selectElement == 2) {
    bgr.style.backgroundColor = "dodgerblue";
  } else if (selectElement == 3) {
    bgr.style.backgroundColor = "goldenrod";
  } else if (selectElement == 4) {
    bgr.style.backgroundColor = "wheat";
  } else if (selectElement == 5) {
    bgr.style.backgroundColor = "mediumturquoise";
  } else if (selectElement == 6) {
    bgr.style.backgroundColor = "moccasin";
  } else if (selectElement == 7) {
    bgr.style.backgroundColor = "firebrick";
  } else if (selectElement == 8) {
    bgr.style.backgroundColor = "limegreen";
  } else if (selectElement == 9) {
    bgr.style.backgroundColor = "slategray";
  }
});
