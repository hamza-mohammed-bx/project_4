
// DOM Elements

// Modal declaration elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalIcon = document.querySelector(".close-modal");

// Nav declaration elements
let changNav = document.querySelector("#myTopnav");
const navBar = document.querySelector(".main-navbar");
const navBtnClos = document.querySelectorAll(".close-nav");
const navIcon = document.querySelectorAll(".icon")

// *************** modal event ***************//

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Stop modal event
modalIcon.addEventListener("click", stopModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close  modal form
function stopModal() {
  modalbg.style.display = "none";
}

// *************** nav menu responsive  event ***************//

// launch Nav event
navIcon.forEach((btn) => btn.addEventListener("click", editNav)) ;

// close Nav event
navBtnClos.forEach((btn)  =>btn.addEventListener("click", stopNav)) ;

function editNav() {
  if (changNav.className === "topnav") { // verification class name 
    launcNav();
  } else {
    stopNav()
  }
}

function launcNav() { 
  navBar.style.display = "flex";
  changNav.className += " responsive"; // add class name  ".topnav.responsive"
}

function stopNav() {
  navBar.style.display = "none";
  changNav.className = "topnav";
}


// *******verification a valid input in form  modal *****//
// **** form declaration elements ***//
let formModal = document.querySelector ("[name ='reserve']");
let btnValidate = document.querySelector('.btn-submit');
let firstNameValid = false;
let lastNameValid = false ;
let emailValid = false ;
let birthDateValid = false ;

formModal.addEventListener('submit' , function(e){
  if(firstNameValid === false || lastNameValid === false || emailValid === false || birthDateValid === false ){
        e.preventDefault(); // ignor a default validate submit
        checkFirstName();
        checkLastName();
        checkEmail();
        checkBirthDate();
      }
      else{
        console.log('ok')
      }
    
})
// function display style errors messages  
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

// function display style success messages  
const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

// function first  name errors prevent and messages

let checkFirstName = function(){
  let firstName = document.querySelector("[name = 'first']");
  if(firstName.value.trim() != "" && firstName.value.length >= 2 ){
     firstNameValid === true;
     setSuccess (firstName)
  }
  else{
    setError(firstName,"Veuillez entrer 2 caractères ou plus pour le champ du du prenom")
     firstNameValid === false;
  }
}
// function last name errors prevent and messages
let checkLastName = function(){
  let lastName = document.querySelector("[name = 'last']");
  if(lastName.value.trim() != "" && lastName.value.length >= 2 ){
     lastNameValid === true;
     setSuccess (lastName);
  }
  else{
     lastNameValid === false;
     setError(lastName,"Veuillez entrer 2 caractères ou plus pour le champ du nom");
  }
}
// function email errors prevent and messages
const checkEmail = function(){
    let email = document.querySelector("[name = 'email']");
    let  emailRe =/^[a-z0-9._-]+@[a-z0-9]{2,}\.[a-z]{2,6}$/;  
    if(email.value != "" && email.value.match(emailRe)){
      emailValid === true;
      setSuccess (email);
    }
    else{
       emailValid === false;
       setError(email,"Veuillez entrer un email valide");
    }
  }

// function birth date  errors prevent and messages
  let checkBirthDate = function(){
    let  age = document.querySelector("[name = 'birthdate']");
    let  dateRe =/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if(age.value != "" && age.value.match(dateRe)){
       birthDateValid === true;
       setSuccess (age);
    }
    else{
      birthDateValid === false;
      setError(age,"Veuillez entrer une date de naissance  valide");
    }
  }

  // function first  name errors prevent and messages





  // const form = document.getElementById('form');
  // const username = document.getElementById('username');
  // const email = document.getElementById('email');
  // const password = document.getElementById('password');
  // const password2 = document.getElementById('password2');
  
  // form.addEventListener('submit', e => {
  //     e.preventDefault();
  
  //     validateInputs();
  // });
  
  // const setError = (element, message) => {
  //     const inputControl = element.parentElement;
  //     const errorDisplay = inputControl.querySelector('.error');
  
  //     errorDisplay.innerText = message;
  //     inputControl.classList.add('error');
  //     inputControl.classList.remove('success')
  // }
  
  // const setSuccess = element => {
  //     const inputControl = element.parentElement;
  //     const errorDisplay = inputControl.querySelector('.error');
  
  //     errorDisplay.innerText = '';
  //     inputControl.classList.add('success');
  //     inputControl.classList.remove('error');
  // };
  
  // const isValidEmail = email => {
  //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(String(email).toLowerCase());
  // }
  
  // const validateInputs = () => {
  //     const usernameValue = username.value.trim();
  //     const emailValue = email.value.trim();
  //     const passwordValue = password.value.trim();
  //     const password2Value = password2.value.trim();
  
  //     if(usernameValue === '') {
  //         setError(username, 'Username is required');
  //     } else {
  //         setSuccess(username);
  //     }
  
  //     if(emailValue === '') {
  //         setError(email, 'Email is required');
  //     } else if (!isValidEmail(emailValue)) {
  //         setError(email, 'Provide a valid email address');
  //     } else {
  //         setSuccess(email);
  //     }
  
  //     if(passwordValue === '') {
  //         setError(password, 'Password is required');
  //     } else if (passwordValue.length < 8 ) {
  //         setError(password, 'Password must be at least 8 character.')
  //     } else {
  //         setSuccess(password);
  //     }
  
  //     if(password2Value === '') {
  //         setError(password2, 'Please confirm your password');
  //     } else if (password2Value !== passwordValue) {
  //         setError(password2, "Passwords doesn't match");
  //     } else {
  //         setSuccess(password2);
  //     }
  
  // };
  