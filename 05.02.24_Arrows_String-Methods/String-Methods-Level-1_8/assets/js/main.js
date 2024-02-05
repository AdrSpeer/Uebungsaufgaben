const text = "Sam is going to codingschool";
let sam = text.slice(0, 3).toUpperCase();
let isGoingTo = text.slice(4, 16);
let school = text.slice(22, 28).toUpperCase();
document.write(`${sam} ${isGoingTo} ${school}`);

let sam1 = text.slice(0, 3);
let isGoingTo1 = text.slice(4, 16).toUpperCase();
let school1 = text.slice(22, 28);
document.write(` ${sam1} ${isGoingTo1} ${school1}`);

let sam2 = text.slice(0, 1).toUpperCase() + text.slice(1, 3);
let is = text.slice(4, 5).toUpperCase() + text.slice(5, 6);
let going = text.slice(7, 8).toUpperCase() + text.slice(8, 12);
let to = text.slice(13, 14).toUpperCase() + text.slice(14, 16);
let school2 = text.slice(22, 23).toUpperCase() + text.slice(23, 28);

document.write(` ${sam2} ${is} ${going} ${to} ${school2}`);
