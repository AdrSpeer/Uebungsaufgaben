const contentDiv = document.querySelector(".message");
const count = document.querySelector("#count");

const startCountdown = () => {
  let zahl = 10;
  count.innerHTML = zahl;
  const countdown = setInterval(() => {
    zahl--;
    count.innerHTML = zahl;
    if (zahl <= -1) {
      clearInterval(countdown);
      contentDiv.innerHTML = "";
    }
  }, 1000);
};

startCountdown();
