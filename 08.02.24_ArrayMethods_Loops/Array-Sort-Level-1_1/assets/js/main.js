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

const sortierung = () => {
  return languages.sort();
};

// ! Mit reverse von Z-A
// const sortierung = () => {
//   return languages.sort().reverse();
// };

console.log(sortierung());
