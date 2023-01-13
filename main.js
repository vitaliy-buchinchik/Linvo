// const hamburger = document.getElementById("hamburger");
// const popup = document.getElementById("popup");
// const menu = document.getElementById("menu");
// const body = document.querySelector("body");

// function hamburgerHandler() {
//   popup.classList.toggle("popup_open");
//   hamburger.classList.toggle("hamburger_open");
//   body.classList.toggle("mobile_body");
//   popup.appendChild(menu);
// }

// hamburger.addEventListener("click", hamburgerHandler);

const menu = document.querySelector('.mobile_nav');
const menuBtn = document.querySelector('.menu_icon');

const body = document.body;

menuBtn.addEventListener('click', e => {
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');
	body.classList.toggle('lock');
})
