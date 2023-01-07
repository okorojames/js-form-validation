document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const user = document.querySelector(".user").value;
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".passord").value;
  const confirmPass = document.querySelector(".confirmPass").value;
  const mobile = document.querySelector(".mobile").value;
  const signIn = document.querySelector(".sign-in-btn").value;
  //
  //
  // function validatEmptyFields(userName, email, password) {}
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  // validatEmptyFields(userName, email);
});
