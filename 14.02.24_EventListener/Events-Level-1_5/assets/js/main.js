const clickBtn = document.querySelector("button");
let anzahl = 0;
clickBtn.addEventListener("click", () => {
  anzahl++;
  clickBtn.innerHTML = ` Click Me: <span> ${anzahl} </span>`;
});
