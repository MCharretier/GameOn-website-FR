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
});

// onSubmit modal form
function validate(event) {

  // Cancels page reload when submit
  event.preventDefault();

  // Form fields
  const first = document.querySelector("#first");
  const last = document.querySelector("#last");
  const email = document.querySelector("#email");
  const birthdate = document.querySelector("#birthdate");
  const quantity = document.querySelector("#quantity");
  const locations = document.querySelectorAll("[name=location]");
  const checkbox1 = document.querySelector("#checkbox1");
  const checkbox2 = document.querySelector("#checkbox2");

  // Init error state
  var error = false;

  // Check First field
  if (first && first.value.length < 2) {
    first.parentElement.setAttribute('data-error-visible', 'true');
    first.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    error = true;
  }

  // Check First field
  if (last && last.value.length < 2) {
    last.parentElement.setAttribute('data-error-visible', 'true');
    last.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champs du nom.');
    error = true;
  }

  // Check Email field
  var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email && !email.value.match(mailformat)) {
    email.parentElement.setAttribute('data-error-visible', 'true');
    email.parentElement.setAttribute('data-error', 'Veuillez entrer un adresse email valide.');
    error = true;
  }

  // Check Birthdate
  if (birthdate && birthdate.value.length < 10) {
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    birthdate.parentElement.setAttribute('data-error', 'Vous devez entrer votre date de naissance.');
    error = true;
  }
  
  // Check Quantity field
  if (quantity && (isNaN(quantity.value) || quantity.value.length < 1)) {
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    quantity.parentElement.setAttribute('data-error', 'Veuillez entrer un nombre.');
    error = true;
  }
  else if (quantity && (quantity.value < 0 || quantity.value > 99)) {
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    quantity.parentElement.setAttribute('data-error', 'Veuillez entrer un nombre compris entre 0 et 99.');
    error = true;
  }

  // Check Location field
  var checked = false;
  locations.forEach((location)=>{
    if (location.checked) {
      checked = true;
    }
  })
  if (!checked) {
    locations[0].parentElement.setAttribute('data-error-visible', 'true');
    locations[0].parentElement.setAttribute('data-error', 'Veuillez sélectionner le tournoi auquel vous souhaitez participer.');
    error = true;
  }
  

  // Check Checkbox1 field
  if (checkbox1 && !checkbox1.checked) {
    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    checkbox1.parentElement.setAttribute('data-error', 'Vous devez vérifier que vous acceptez les termes et conditions.');
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