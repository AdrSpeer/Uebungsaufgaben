function passwordCheck() {
  let password = document.querySelector("#password").value;
  const output = document.querySelector("p");
  const check =
    password.length >= 8
      ? (output.innerHTML =
          "<p style='color:green'>Welcome to your account</p>")
      : (output.innerHTML = "<p style='color:red'> ThePassword to short</p>");
}
