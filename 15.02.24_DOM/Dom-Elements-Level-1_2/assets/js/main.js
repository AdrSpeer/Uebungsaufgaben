let isBlack = false;

const myFunction = () => {
  const elements = document.getElementsByClassName("example");

  if (!isBlack) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "black";
    }
    isBlack = true;
  } else {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#666";
    }
    isBlack = false;
  }
};
