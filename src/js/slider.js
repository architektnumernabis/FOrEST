const slider = document.querySelector('.header__slider')

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