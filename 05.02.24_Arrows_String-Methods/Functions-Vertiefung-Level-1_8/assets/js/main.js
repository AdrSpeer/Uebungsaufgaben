const whatsMyAge = (geburtsjahr) => {
  let yearBorn = 2024 - geburtsjahr;
  return yearBorn;
};

let myAge = whatsMyAge(1992);
console.log(myAge);

const ageDiff = (meinGeburtsjahr, deinGeburtsjahr) => {
  let diff = meinGeburtsjahr - deinGeburtsjahr;
  return diff;
};

let alterDiff = ageDiff(myAge, 25);
console.log(alterDiff);
