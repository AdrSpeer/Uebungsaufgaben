const imageArray = () => {
  let returnArray = [];

  for (let i = 1; i <= 100; i++) {
    if (i < 10) {
      let newName = "image_00" + i + ".jpg";
      returnArray.push(newName);
    } else {
      let newName = "image_0" + i + ".jpg";
      returnArray.push(newName);
    }
  }
  console.log(returnArray);
};

imageArray();
