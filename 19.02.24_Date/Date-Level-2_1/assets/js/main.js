const output = document.querySelector(".output");

const getDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  return (output.innerHTML = `${day}/${month}/${year}`);
};

getDate();
