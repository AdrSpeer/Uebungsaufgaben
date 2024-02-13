let numArr = [5, 22, 15, 100, 55];
const ergebnisse = document.querySelector(".ergebnisse");

for (let i = 0; i < numArr.length; i++) {
  for (let j = 2; j < numArr[i]; j++) {
    if (numArr[i] % j === 0) {
      ergebnisse.innerHTML += `<p>${
        numArr[i]
      } is devidable by ${j}. The result is ${numArr[i] / j} </p>`;
    }
  }
}
