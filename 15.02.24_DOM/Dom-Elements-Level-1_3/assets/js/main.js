const superMario = document.querySelector("li:nth-of-type(1)");
const zelda = document.querySelector("li:nth-of-type(2)");
const redDead = document.querySelector("li:nth-of-type(6)");
const grandTheft = document.querySelector("li:nth-of-type(7)");
const outputTag = document.querySelector("output");

const buttonOne = document.querySelector("button:nth-of-type(1)");
const buttonTwo = document.querySelector("button:nth-of-type(2)");
const buttonThree = document.querySelector("button:nth-of-type(3)");
const buttonFour = document.querySelector("button:nth-of-type(4)");

buttonOne.addEventListener("click", () => {
  output("firstChild");
});
buttonTwo.addEventListener("click", () => {
  output("lastChild");
});
buttonThree.addEventListener("click", () => {
  output("lastElementChNe");
});
buttonFour.addEventListener("click", () => {
  output("lastElementChPre");
});

const output = (button) => {
  if (button == "firstChild") {
    outputTag.innerHTML = superMario.textContent;
  } else if (button == "lastChild") {
    outputTag.innerHTML = grandTheft.textContent;
  } else if (button == "lastElementChNe") {
    outputTag.innerHTML = zelda.textContent;
  } else if (button == "lastElementChPre") {
    outputTag.innerHTML = redDead.textContent;
  }
};
