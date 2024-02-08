let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

languages.sort();
console.log(languages);

let numbers = [1, 4, 8, 12, 16, 2, 40, 3];

numbers.sort((a, b) => {
  return a - b;
});

console.log(numbers);
