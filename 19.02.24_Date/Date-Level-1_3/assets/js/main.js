let date = new Date();
document.write(date);

let changeDate = new Date();
changeDate.setFullYear(2123, 1, 24);

document.write(`<br>${changeDate}`);

let changeDate1 = new Date();
changeDate1.setFullYear(2123, 2, 24);

document.write(`<br>${changeDate1}`);

let changeDate2 = new Date();
changeDate2.setFullYear(2123, 2, 3);

document.write(`<br>${changeDate2}`);

let changeDate3 = new Date();
let changeDate4 = new Date(changeDate3);
changeDate4.setDate(changeDate4.getDate() + 30);

document.write(`<br>${changeDate4}`);
