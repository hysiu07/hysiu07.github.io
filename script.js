// ---showMenu---

const barsBtn = document.querySelector('.nav-container__bars-btn');
const menu = document.querySelector('.nav-container__links');
const navLinks = document.querySelectorAll('.nav-container__links li');

const showMenu = () => {
	const delay = 0.6;

	menu.classList.toggle('show-menu');
	if (menu.classList.contains('show-menu')) {
		barsBtn.style.borderColor = 'white';
		barsBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
		navLinks.forEach((el) => {
			el.style.animation = `moveLink ${delay}s ease-in 1 forwards`;
		});
	} else {
		barsBtn.style.borderColor = '#b95cdd';
		barsBtn.innerHTML =
			' <div class="first-bar bar"></div><div class="second-bar bar"></div><div class="third-bar bar"></div>';
		navLinks.forEach((el) => {
			el.style.animation = '';
		});
	}
};

barsBtn.addEventListener('click', showMenu);
