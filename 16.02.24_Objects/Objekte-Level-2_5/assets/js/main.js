const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

const tableOutput = document.querySelector("table");
const inputSearch = document.querySelector("input");

singers.forEach((allSingers) => {
  tableOutput.innerHTML += `
    <tr> 
    <td> ${allSingers.name} </td>
    <td> ${allSingers.country} </td>
    <td> ${allSingers.period_active.start} - ${allSingers.period_active.end} </td>
    <td> ${allSingers.genre} </td>
    </tr>
    `;
});

const handleSearchClicked = () => {
  let searchSinger = singers.filter((allSingers) => {
    return allSingers.name
      .toLowerCase()
      .includes(inputSearch.value.toLowerCase());
  });
  tableOutput.innerHTML = "";
  searchSinger.forEach((filteredSinger) => {
    tableOutput.innerHTML += `
    <tr> 
    <td> ${filteredSinger.name} </td>
    <td> ${filteredSinger.country} </td>
    <td> ${filteredSinger.period_active.start} - ${filteredSinger.period_active.end} </td>
    <td> ${filteredSinger.genre} </td>
    </tr>
    `;
  });
  // Errorhandling
  if (searchSinger == 0) {
    tableOutput.innerHTML = `
    <h2> 
    Leider gibt es diesen Interpreten nicht
    </h2>
    `;
  }
};
