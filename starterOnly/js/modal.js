// DOM Elements

// Nav declaration elements
const changNav = document.querySelector("#myTopnav");
const navBar = document.querySelector(".main-navbar");
const navBtnClos = document.querySelectorAll(".close-nav");
const navIcon = document.querySelectorAll(".icon");
const bgNav = document.querySelector(".bground-nav");
// *************** nav menu responsive  event ***************//
let editNav = () => {
	if (changNav.className === "topnav") {
		// verification class name
		launcNav();
	} else {
		stopNav();
	}
};

let launcNav = () => {
	navBar.style.display = "flex";
	changNav.className += " responsive"; // add class name  ".topnav.responsive"
};
let stopNav = () => {
	navBar.style.display = "none";
	changNav.className = "topnav";
};
// launch Nav event
navIcon.forEach((btn) => btn.addEventListener("click", editNav));

// close Nav event
navBtnClos.forEach((btn) => btn.addEventListener("click", stopNav));

// Modal declaration elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalIcon = document.querySelector(".close-modal");
let modalContent = document.querySelector(".content");
let modalBody = document.querySelector(".modal-body");

// *************** modal event ***************//
// function launch modal form
let launchModal = () => {
	modalbg.style.display = "block";
	modalBody.style.display = "block";
};

// function close  modal form
let stopModal = () => {
	modalbg.style.display = "none";
};
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalIcon.addEventListener("click", stopModal);

// *************** submit form ***************//
const emailRe = /^[a-z0-9._-]+@[a-z0-9]{2,}\.[a-z]{2,6}$/;
const dateRe = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
let errorsLimit;

//////////////////////////////////////////////////////////////////////   Submit form    //////////////////////////////////////////////////////////////////////
document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
  errorsLimit = document.querySelectorAll('.formData').length; // parce que prenom et lastname est verifier en meme temps
  document.querySelectorAll('.error').forEach(input => console.log(input.name))
	checkInput();
	const checkedRadioButton = document.querySelector("input[name='location']:checked");
	checkedRadioButton ? result(checkedRadioButton) : result(checkedRadioButton, "Vous devez choisir une ville.");
	const condition = document.querySelector("#checkbox1:checked");
	condition ? result(condition) : result(condition, "Vous devez vérifier que vous acceptez les termes et conditions.", 'checkbox1');
	if (errorsLimit === 0) formulaireValide();
  console.log("🚀 ~ document.querySelector ~ errorsLimit: fin", errorsLimit)
});

let result = (element, messageError, typeCheckbox) => {
	if (!element) {
    element = typeCheckbox === 'checkbox1' ? document.getElementById('checkbox1') : document.querySelector("input[name='location'");
  }
		const inputControl = element.parentElement;
		const errorDisplay = inputControl.querySelector(".error");
		errorDisplay.innerText = messageError || "";
		if (messageError) {
			inputControl.classList.add("error");
			inputControl.classList.remove("success");
			errorsLimit = errorsLimit + 0;
		} else {
			inputControl.classList.add("success");
			inputControl.classList.remove("error");
			errorsLimit = errorsLimit - 1;
    }
};

//////////////////////////////////////////////////////////////////////   Check  Input  //////////////////////////////////////////////////////////////////////
// ******* function check Input  *****//
let checkInput = () => {
	document.querySelectorAll("input").forEach((input) => {
		if (input.name === "first") {
			if (input.value.trim() && input.value.length >= 2) return result(input);
			else return result(input, "Veuillez entrer 2 caractères ou plus ");
		}
		if (input.name === "last") {
			if (input.value.trim() && input.value.length >= 2) return result(input);
			else return result(input, "Veuillez entrer 2 caractères ou plus ");
		}

		if (input.name === "email") {
			if (input.value.trim().match(emailRe)) return result(input);
			else return result(input, "Veuillez entrer un email valide");
		}

		if (input.name === "birthdate") {
			if (input.value.match(dateRe)) return result(input);
			else return result(input, "Veuillez entrer une date de naissance valide");
		}

		if (input.name === "quantity") {
			if (input.value != "" && input.value < 100) return result(input);
			else {
				if (input.value === "") return result(input, "Veuillez saisir un nombre ");
				if (input.value > 99) return result(input, " le nombre doit etre inferieure à 99  ");
			}
		}
	});
};

// tout est ok donc  je valid

function formulaireValide() {
  document.querySelector("form").reset();
	let displayConfirm = modalBody.cloneNode();
	modalBody.after(displayConfirm);
	displayConfirm.style.display = "flex";
	modalBody.style.display = "none";
	displayConfirm.classList.add("display-confirm"); // add a new class

	// creation a new elements  in body
	let btnConfirm = document.createElement("button");
	let textBtn = document.createTextNode("Fermer");
	let textConfirm = document.createTextNode("Merci pour votre inscription");
	btnConfirm.appendChild(textBtn);
	displayConfirm.appendChild(textConfirm);
	displayConfirm.appendChild(btnConfirm);
	btnConfirm.classList.add("btn-signup");
	modalIcon.classList.add("iconConfirmClose");
	modalIcon.addEventListener("click", () => {
		displayConfirm.remove();
		stopModal();
	});
	btnConfirm.addEventListener("click", () => {
		displayConfirm.remove();
		stopModal();
	});
}
