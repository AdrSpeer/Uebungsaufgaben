const userInput = document.querySelector("#userinput");
const userOutput = document.querySelector("ul");
const btn = document.querySelector("#enter");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  userOutput.innerHTML += `<li> ${userInput.value} </li>`;
});

// const addIt = (event) => {
//   event.preventDefault();

//   if (userInput.length > 0) {
//     console.log(userInput.length);
//     userOutput.innerHTML += `<li> ${userInput.value} </li>`;
//   } else {
//     btn.innerHTML = `<input id="enter" style="color: red;" type="submit" value="Text eingeben" />`;
//   }
// };


