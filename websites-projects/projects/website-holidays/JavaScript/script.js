const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelectorAll('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')
 

const handleNav = () => {
	nav.classList.toggle('nav--active')
    allNavItems.forEach(item =>{
        item.addEventListener('click',() =>{
            nav.classList.remove('nav--active')
        })
    })
    handleNavItemAnimation();
}
const handleNavItemAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item =>{
        item.classList.toggle('nav-item-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

navBtn.addEventListener('click', handleNav);



const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerHTML = year;
}
handleCurrentYear()

// const handleObserver = () => {
//  const currentSection = window.scrollY;

//      allSections.forEach (section => {
 
//         if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
//         navBtnBars.classList.add('black-bars-color')
//         } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
//             navBtnBars.classList.remove('black-bars-color')
//         }
//      } )
// }


// window.addEventListener('scroll',handleObserver);