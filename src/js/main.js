const slider = document.querySelector('.header__slider')
const nav = document.querySelector('.navigation__items')
const navBtn = document.querySelector('.navigation__btn')
const navBars = document.querySelector('.navigation__bars')
const allNavItems = document.querySelectorAll('.navigation__item')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')



//FUNCTION FOR OPENING NAVIGATION
const handleNav = () => {
    nav.classList.toggle('navigation__items--active')
    //navBars.style.backgroundColor = 'white' //skończyć ten temat

    document.body.classList.toggle('prevent-scrolling')


    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('navigation__items--active')
            document.body.classList.remove('prevent-scrolling')
        })
    })

    if (nav.classList.contains('navigation__items--active')) {
        navBars.classList.remove('main-bars')
    }

    hanldeNavItemsAnimation();
}

//FUNCTION FOR ANIMATION IN NAVIGATION
const hanldeNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        {
            item.classList.toggle('nav-items-animation')
            item.style.animationDelay = '.' + delayTime + 's';
            delayTime++;
        }
    })
}

//FUNCTION FOR CHANGING BUTTON BARS COLOR
const sectionObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {
        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBars.classList.add('main-bars')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBars.classList.remove('main-bars')
        }
    })
}

//FUNCTION FOR HANDLING FOOTER YEAR
const handleFooterYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleFooterYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', sectionObserver);