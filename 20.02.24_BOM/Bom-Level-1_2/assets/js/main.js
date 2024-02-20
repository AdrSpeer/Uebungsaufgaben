const getNumber = document.querySelector(".zeit");

const btn = document.querySelector("#btn").addEventListener("click", () => {
  let number = 100;

  const countDown = setInterval(() => {
    number--;
    getNumber.innerHTML = `${number}%`;

    if (number <= 0) {
      clearInterval(countDown);
      getNumber.innerHTML = `0%`;
    }
  }, 50);
});
