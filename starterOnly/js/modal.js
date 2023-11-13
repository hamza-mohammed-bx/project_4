
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

// *************** nav menu responsive ***************//

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

