// ---showMenu---

const barsBtn = document.querySelector('.nav-container__bars-btn');
const menu = document.querySelector('.nav-container__links');

const showMenu = () => {
	menu.classList.toggle('show-menu');
	console.log('dziala');
};

barsBtn.addEventListener('click', showMenu);

