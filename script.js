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

const hiddenMenu = () => {
	if (menu.classList.contains('show-menu')) {
		menu.classList.remove('show-menu');
		barsBtn.style.borderColor = '#b95cdd';
		barsBtn.innerHTML =
			' <div class="first-bar bar"></div><div class="second-bar bar"></div><div class="third-bar bar"></div>';
	}
};

barsBtn.addEventListener('click', showMenu);
navLinks.forEach((link) => {
	link.addEventListener('click', hiddenMenu);
});

// ----animation-time-line----

const timeLine = document.querySelectorAll('.time-line-section__element');

const animationTimeLine = () => {
	const scrollY = window.scrollY;

	if (scrollY >= 1000) {
		timeLine[0].style.transform = 'translateX(-220px)';
	}
	if (scrollY >= 1150) {
		timeLine[1].style.transform = 'translateX(220px)';
	}
	if (scrollY >= 1250) {
		timeLine[2].style.transform = 'translateX(-220px)';
	}
	if (scrollY >= 1400) {
		timeLine[3].style.transform = 'translateX(220px)';
	}
	if (scrollY >= 1550) {
		timeLine[4].style.transform = 'translateX(-220px)';
	}
	if (scrollY >= 1700) {
		timeLine[5].style.transform = 'translateX(220px)';
	}
	if (scrollY >= 1850) {
		timeLine[6].style.transform = 'translateX(-220px)';
	}
	if (scrollY >= 1900) {
		timeLine[7].style.transform = 'translateX(220px)';
	}
	if (scrollY >= 2000) {
		timeLine[8].style.transform = 'translateX(-220px)';
	}
	if (scrollY >= 2100) {
		timeLine[9].style.transform = 'translateX(220px)';
	}
	if (scrollY >= 21000) {
		timeLine[10].style.transform = 'translateX(-220px)';
	}
};

window.addEventListener('scroll', animationTimeLine);

// ----scroll-to-top----
const scrollBtn = document.querySelector('.scroll-up-button');

const showScrollBtn = () => {
	const scrollY = window.scrollY;
	if (scrollY > 1000) {
		scrollBtn.classList.add('show');
	} else {
		scrollBtn.classList.remove('show');
	}
};
window.addEventListener('scroll', showScrollBtn);

const scrolToTop = (event) => {
	event.stopPropagation();

	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};
scrollBtn.addEventListener('click', scrolToTop);

// ----show-more-projects---
const hiddenProjects = document.querySelectorAll('.disabled-project');
const showMoreProjectsBtn = document.querySelector('.show-more-projects');
const loader = document.querySelector('.loader');
let btnStatus = false;

const showLoader = () => {
	return new Promise((resolve) => {
		showMoreProjectsBtn.textContent = 'Loading...';
		setTimeout(() => {
			resolve();
		}, 2000);
	});
};

const showMoreProjects = async () => {
	await showLoader();

	if (btnStatus === false) {
		showMoreProjectsBtn.textContent = 'Hide projects';
		hiddenProjects.forEach((project) => {
			project.classList.remove('disabled-project');
		});
		btnStatus = true;
	} else {
		showMoreProjectsBtn.textContent = 'Show more ...';
		btnStatus = false;
		hiddenProjects.forEach((project) => {
			project.classList.add('disabled-project');
		});
	}
};
showMoreProjectsBtn.addEventListener('click', showMoreProjects);

// ----vaildate-form----

const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const inputText = document.querySelector('.input-text');
const submit = document.querySelector('.submit-btn');

const validate = () => {
	console.log(inputName.value, 'text');

	if (
		inputName.value === '' ||
		inputEmail.value === '' ||
		inputText.value === ''
	) {
		submit.classList.add('disabled-submit');
		if (submit.hasAttribute('disabled')) {
			return;
		}
	} else {
		submit.classList.remove('disabled-submit');
		submit.removeAttribute('disabled');
	}
};

inputEmail.addEventListener('input', validate);
inputName.addEventListener('input', validate);
inputText.addEventListener('input', validate);
