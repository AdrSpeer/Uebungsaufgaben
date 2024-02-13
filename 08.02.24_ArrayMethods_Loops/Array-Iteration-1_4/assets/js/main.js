let fahrenheit1 = [0, 32, 45, 50, 75, 80, 99, 120];
let fahrenheit2 = [10, 2, 50, 4];

const toCelsius = (array) => {
  const fahrenheitToCel = array.map((allNumbers) => {
    const clearNumber = Math.round((allNumbers - 32) / 1.8);
    return clearNumber;
  });
  return fahrenheitToCel;
};

console.log(toCelsius(fahrenheit1));
console.log(toCelsius(fahrenheit2));
