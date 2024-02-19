const output = document.querySelector("#output");

let date1 = new Date();
let newDate1 = new Date("September 2, 2019 09:00:00");
output.innerHTML += `${newDate1}=("September 2, 2019 09:00:00")`;

let date2 = new Date(0);
output.innerHTML += `<br>${date2}=New Date(0)`;

let date3 = new Date(31556908800);
output.innerHTML += `<br>${date3}=New Date(31556908800)`;

let date4 = new Date(86400000);
output.innerHTML += `<br>${date4}=New Date(86400000)`;
