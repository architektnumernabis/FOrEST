const slider = document.querySelector('.header__slider')
const nav = document.querySelector('.navigation__items')
const navBtn = document.querySelector('.navigation__btn')
const navBars = document.querySelector('.navigation__bars')
const allNavItems = document.querySelectorAll('.navigation__item')


//FUNCTION FOR SLIDER IN HEADER
let sectionIndex = 0

function reset() {
    for (let i = 0; i < slider.children.length; i++) {
        slider.children[i].style.opacity = 0
        slider.children[i].style.zIndex = 0
    }
}

function startShow() {
    setInterval(function () {
        reset()
        sectionIndex = sectionIndex < 1 ? sectionIndex + 1 : 0
        slider.children[sectionIndex].style.opacity = 1
        slider.children[sectionIndex].style.zIndex = 1

    }, 2000)
}

startShow()

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

navBtn.addEventListener('click', handleNav)