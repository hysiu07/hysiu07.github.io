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

const timeLine = document.querySelectorAll('.time-line-section__element');
const test = () => {
	
	const scrollY = window.scrollY;
	
	if (scrollY >= 950) {
		timeLine[0].style.transform = 'translateX(-220px)';
	} else if (scrollY >= 1000) {
		timeLine[1].style.transform = 'translateX(220px)';
	} else if (scrollY >= 1100) {
		timeLine[2].style.transform = 'translateX(-220px)'
	}
};
console.log(timeLine[0]);
console.log(timeLine[1]);
window.addEventListener('scroll', test);
