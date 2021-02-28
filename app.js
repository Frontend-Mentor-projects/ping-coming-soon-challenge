const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const error = document.querySelector(".error");

form.addEventListener('submit', (e) => {

      e.preventDefault();

      email();
});

// test if email is correct
function validateEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
}

// check if the input value is not empty and valid
function email() {
      let mail = emailInput.value;
      if (!mail) {
            emailIsEmpty();
            error.classList.add("slideInLeft");
      } else {
            if (!validateEmail(mail)) {
                  emailIsFalse();
                  error.classList.add("slideInLeft");
            }
            else {
                  successfulEmail(mail);
            }
      }
}

function successfulEmail() {
      let mail = emailInput.value;
      form.style.display = "none";
      const subscribe = document.getElementById("subscribe");

      subscribe.innerHTML = mail + " has been registered! <br><br> We Will keep You updated.";

}

function emailIsFalse() {
      error.style.cssText = "opacity: 1; height: 100%; margin-top: 10px";
      error.innerText = 'Please provide a valid email address';
      emailInput.style.borderColor = "hsl(354, 100%, 66%)";
}

function emailIsEmpty() {
      error.style.cssText = "opacity: 1; height: 100%; margin-top: 10px";
      error.innerText = 'Whoops! It looks like you forgot to add your email';
      emailInput.style.borderColor = "hsl(354, 100%, 66%)";
}
