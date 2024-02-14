const removeBtn = document.querySelector("#button");
const selectElement = document.querySelector("#farbeAuswahlen");

removeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const index = selectElement.selectedIndex;
  selectElement.remove(index);
});
