const menu = document.querySelector('.mobile_nav');
const menuBtn = document.querySelector('.menu_icon');

const body = document.body;

menuBtn.addEventListener('click', e => {
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');
	body.classList.toggle('lock');
})
