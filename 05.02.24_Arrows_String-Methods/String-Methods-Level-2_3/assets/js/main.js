const searchWord = () => {
  const searchInput = document.body.querySelector("#search-input").value;
  const text = document.body.querySelector("article").innerText;

  const found = "<span>" + searchInput + "</span>";

  let replace = text.replaceAll(searchInput, found);
  document.querySelector("article").innerHTML = replace;
};
