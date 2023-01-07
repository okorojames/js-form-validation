document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const user = document.querySelector(".user");
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");
  const confirmPass = document.querySelector(".confirmPass");
  const mobile = document.querySelector(".mobile");
  const errorMsg = document.querySelector(".error");
  const emailRegex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]{1,5})$/;
  const passRegex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
  //
  //
  // function validatEmptyFields(userName, email, password) {}
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    validatFields(user.value, email.value, password.value, confirmPass.value, mobile.value);
  });

  // validatEmptyFields(userName, email);
  function validatFields(user, email, password, confirmPass, mobile) {
    if ( !user || !email || !password || !confirmPass || !mobile ) {
      errorMsg.textContent = "Not Valid details";
      setTimeout(() => { errorMsg.textContent = "" }, 3000)
      form.reset()
      return;
    }
    if (!passRegex.test(password)) {
      errorMsg.textContent = "werey password no match ooo";
      setTimeout(()=>{errorMsg.textContent = ""}, 3000)
      return;
    }
    if (password !== confirmPass) {
      errorMsg.textContent = "Password do not match";
      setTimeout(()=>{errorMsg.textContent = ""}, 3000)
      return;
    }
    if (!emailRegex.test(email)) {
      errorMsg.textContent = "Email not valid";
      setTimeout(()=>{errorMsg.textContent = ""}, 3000)
      return;
    }
  }
  document.querySelector(".checkPass").addEventListener("change", function () {
    if (this.checked) {
      password.type = 'text'
    } else {
      password.type = 'password'
    }
  })
  form.reset()
});



