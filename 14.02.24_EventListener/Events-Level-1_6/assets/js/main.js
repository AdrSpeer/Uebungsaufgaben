const selectIt = document.querySelector("#select");
const optionChange = document.querySelector(".option");
const output = document.querySelector("p");

selectIt.addEventListener("change", () => {
  if (selectIt.value === "select1") {
    output.innerHTML = `Sie haben ausgwählt select1`;
  } else if (selectIt.value === "select2") {
    output.innerHTML = `Sie haben ausgwählt select2`;
  } else if (selectIt.value === "select3") {
    output.innerHTML = `Sie haben ausgwählt select3`;
  } else if (selectIt.value === "select4") {
    output.innerHTML = `Sie haben ausgwählt select4`;
  } else if (selectIt.value === "select5") {
    output.innerHTML = `Sie haben ausgwählt select5`;
  }
});
