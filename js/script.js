const emailInput = document.getElementById("in_email");
const formBtn = document.querySelector("form button");
const dismissBtn = document.getElementById("dismiss-btn");
const successMobile = document.querySelector(".success-mobile");
const signUpForm = document.querySelector(".sign-up-form");
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

formBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (emailInput.value != "") {
    if (!emailInput.value.match(re)) {
      document.querySelector(".error").style = "display: block";
      emailInput.classList.add("error-style");
    } else {
      successMobile.classList.remove("hidden");
      signUpForm.classList.add("hidden");
    }
  } else {
    document.querySelector(".error").style = "display: block";
    emailInput.classList.add("error-style");
  }
});

dismissBtn.addEventListener("click", (event) => {
  event.preventDefault();
  successMobile.classList.add("hidden");
  signUpForm.classList.remove("hidden");
});
