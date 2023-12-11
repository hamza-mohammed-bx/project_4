
// DOM Elements

// Nav declaration elements
const changNav = document.querySelector("#myTopnav");
const navBar = document.querySelector(".main-navbar");
const navBtnClos = document.querySelectorAll(".close-nav");
const navIcon = document.querySelectorAll(".icon");
const bgNav = document.querySelector(".bground-nav")
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

// Modal declaration elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalIcon = document.querySelector(".close-modal");
let modalContent = document.querySelector(".content");
let modalBody = document.querySelector(".modal-body");
let dateRe =/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;

// *************** modal event ***************//
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalIcon.addEventListener("click", stopModal);

// function launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBody.style.display ="block";
}

// function close  modal form
function stopModal() {
  modalbg.style.display = "none";
  displayConfirm.remove();
}

// *************** submit form ***************//
let emailRe =/^[a-z0-9._-]+@[a-z0-9]{2,}\.[a-z]{2,6}$/;
let formValid = false;
document.querySelector("form").addEventListener('submit' , (e) => {
 e.preventDefault(); // ignor a default validate submit
  if(formValid === false){
    checkInput()
  } else {
    console.log("go");
    let displayConfirm = modalBody.cloneNode();
    modalBody.after(displayConfirm);
    displayConfirm.style.display = "flex";
    modalBody.style.display = "none"; 
    displayConfirm.classList.add('display-confirm') // add a new class 
    
    // creation a new elements  in body
    let btnConfirm = document.createElement("button");
    let textBtn = document.createTextNode("Fermer")
    let textConfirm = document.createTextNode("Merci pour votre inscription");
    btnConfirm.appendChild(textBtn);
    displayConfirm.appendChild(textConfirm);
    displayConfirm.appendChild(btnConfirm);
    btnConfirm.classList.add('btn-signup');
    modalIcon.classList.add('iconConfirmClose');
    modalIcon.addEventListener('click',function(){
    displayConfirm.remove();
      stopModal();
    });
    btnConfirm.addEventListener('click',function(){
      displayConfirm.remove();
      stopModal();
    });
  }    
})


// ******* function check errors  *****//
let checkInput = () => {
  let allInput = document.querySelectorAll ('input');
  // let radioChecked = false;
  let radioCheckedNumber = 0
  allInput.forEach (input => {
    if(input.name === 'first' || input.name === 'last'){ // conditions validate  first and last name 
        if(input.value != "" && input.value.length >= 2 ){
          result (input);
        } else {
          result (input,"Veuillez entrer 2 caractères ou plus ");
        }
    } 
    if (input.name === 'email') { // conditions validate  email 
        if(input.value != "" && input.value.match (emailRe)){
          result (input);
        } else {
          result (input,"Veuillez entrer un email valide");
        }
    } 
    if (input.name === 'birthdate'){ // conditions validate  birthdate 
        if(input.value != "" && input.value.match (dateRe)){
          result (input);
        } else {
          result (input ,"Veuillez entrer une date de naissance valide")
        }
    }
    if (input.name === 'quantity'){ // conditions validate  quantity games   
      if(input.value < 100 ){
          result (input);
      } else {
          result (input,"Le maximum de participation est de  99");
      }
    }
    if (input.name === 'location'){ // conditions validate  location city    
            console.log('ok ',input.value,' ', input.checked);
          if (input.checked) { // verify if is realy checked 
            radioCheckedNumber = radioCheckedNumber + 1
          }
          else{
            radioCheckedNumber = radioCheckedNumber + 0;
          }
          if(radioCheckedNumber !== 0){
              // radioChecked = true
              // formValid = true
              result (input)
          }
          else {
              // radioChecked = false
              // formValid = false
              result (input, "Veuillez choisir  une ville")
          }
          // console.log('result checkbox ',radioChecked);
    }
    if (input.id === 'checkbox1'){ // conditions validate  conditions use   
      if(input.checked ){
          result (input);
      } else {
          result (input,"Vous devez vérifier que vous acceptez les termes et conditions");
      }
    }

  })
}

let result = (element, messageError ) => { // function result message 
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector ('.error');
  errorDisplay.innerText = messageError || '';
  if(messageError){
     inputControl.classList.add ('error');
    inputControl.classList.remove ('success');
    formValid = false ;
  }
  else{
    inputControl.classList.add ('success');
    inputControl.classList.remove ('error');
    formValid = true ;
  }  
};
  

