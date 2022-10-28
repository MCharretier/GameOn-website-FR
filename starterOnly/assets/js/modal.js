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
const validClose = document.querySelector(".btn-valid");
const formData = document.querySelectorAll(".formData");
const validForm = document.querySelector('.form-validation');
const form = document.querySelector('#reserve');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal
modalClose.addEventListener("click", function(){
  modalbg.style.display = "none";
  validForm.classList.remove('active');
});
validClose.addEventListener("click", function(){
  modalbg.style.display = "none";
  validForm.classList.remove('active');
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

  // Remove data-error attributes
  formData.forEach((e)=> {
    e.removeAttribute('data-error-visible');
    e.removeAttribute('data-error');
  });

  // Check First field
  if (first && first.value.length < 2) {
    first.parentElement.setAttribute('data-error-visible', 'true');
    first.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    error = true;
  }
  if (first && /[0-9]/.test(first.value)) {
    first.parentElement.setAttribute('data-error-visible', 'true');
    first.parentElement.setAttribute('data-error', 'Le prénom ne peut pas contenir des chiffres.');
    error = true;
  }

  // Check Last field
  if (last && last.value.length < 2) {
    last.parentElement.setAttribute('data-error-visible', 'true');
    last.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champs du nom.');
    error = true;
  }
  if (last && /[0-9]/.test(last.value)) {
    last.parentElement.setAttribute('data-error-visible', 'true');
    last.parentElement.setAttribute('data-error', 'Le nom ne peut pas contenir des chiffres.');
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
    validForm.classList.add('active');
    form.reset();
  }
}