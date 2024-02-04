function slice() {
  const A = "Susi is going to codingschool";
  const susi = A.slice(0, 4);
  const output = document.querySelector("p");
  const output1 = document.querySelector(".output1");
  const output2 = document.querySelector(".output2");
  const output3 = document.querySelector(".output3");
  const output4 = document.querySelector(".output4");
  output.innerHTML = susi;
  const is = A.slice(5, 7);
  output1.innerHTML = is;
  const isGoing = A.slice(5, 17) + A.slice(23);
  output2.innerHTML = isGoing;
  const school = A.slice(23);
  output3.innerHTML = school;
  const susiIs = A.slice(0, 7) + " " + A.slice(23);
  output4.innerHTML = susiIs;
}

slice();
