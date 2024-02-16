let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

// {
//   artist: "The Beatles",
//   title: "Abbey Road",
//   release_year: 1969,
//   medium: ["LP", "CD", "MC", "Download"],
//   gold: true,
// },
const output = document.querySelector("section");

myMusic.forEach((allItems) => {
  if (allItems.release_year < 1975) {
    output.innerHTML += `
    <div>
    <p> ${allItems.artist} </p>
    <p> ${allItems.title} </p>
    ${allItems.medium.map((allMedium) => `<p> ${allMedium} </p>`).join("")}
    <p> ${allItems.release_year} </p>
    </div>
    `;
  } else {
    output.innerHTML += `
    <div>
    <p> ${allItems.artist} </p>
    <p> ${allItems.title} </p>
    ${allItems.medium.map((allMedium) => `<p> ${allMedium} </p>`).join("")}
    </div>
    `;
  }
});
