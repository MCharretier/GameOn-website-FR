function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal
modalClose.addEventListener("click", function(){
  modalbg.style.display = "none";
})

// onSubmit modal form
function validate(event) {

  // Cancels page reload when submit
  event.preventDefault();

  // Form fields
  const first = document.querySelector("#first") ? document.querySelector("#first").value : "";
  const last = document.querySelector("#last") ? document.querySelector("#last").value : "";
  const email = document.querySelector("#email") ? document.querySelector("#email").value : "";
  const birthdate = document.querySelector("#birthdate") ? document.querySelector("#birthdate").value : "";
  const quantity = document.querySelector("#quantity") ? document.querySelector("#quantity").value : "";
  const location = document.querySelector("[name=location]:checked") ? document.querySelector("[name=location]:checked").value : "";
  const checkbox1 = document.querySelector("#checkbox1:checked") ? true : false;
  const checkbox2 = document.querySelector("#checkbox2:checked") ? true : false;

  // Init error state
  var error = false;

  // Check First field
  if (first.length < 2) {
    error = true;
  }

  // Check First field
  if (last.length < 2) {
    error = true;
  }

  // Check Email field
  var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!email.match(mailformat)) {
    error = true;
  }
  
  // Check Quantity field
  if (isNaN(quantity)) {
    error = true;
  }
  else if (quantity < 0 || quantity > 99) {
    error = true;
  }

  // Check Location field
  if (location.length <= 0) {
    error = true;
  }

  // Check Checkbox1 field
  if (!checkbox1) {
    error = true;
  }

  // If there are no errors
  if (!error) {
    modalbg.style.display = "none";
  }
  // Else errors are displayed
  else {
    console.log("Formulaire invalide !");
  }
}