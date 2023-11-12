function editNav() {
  let changNav = document.getElementById("myTopnav");
  if (changNav.className === "topnav") {
    changNav.className += " responsive";
  } else {
    changNav.className = "topnav";
    
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalIcon = document.querySelector(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalIcon.addEventListener("click", stopModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// stop  modal form
function stopModal() {
  modalbg.style.display = "none";
}


