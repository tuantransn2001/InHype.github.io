var headerSearchBtn = document.querySelector('.header__search__button'),
    haederInput = document.querySelector('.header__search__input'),
    headerBtn = document.querySelector('.header__button')
// ================================= Hàm xử lý effect search button =================================
headerSearchBtn.addEventListener('click', function () {
    headerBtn.style = `display: none;`
    haederInput.style = `display: block;`
})
// ================================= Xử lí Slider =================================
var slideWidth = document.querySelector('.slide__background').offsetWidth,
    SlideWrapper = document.querySelector('.slides__wrapper'),
    Dot__1 = document.querySelector('.slide__dot__1st'),
    Dot__2 = document.querySelector('.slide__dot__2nd'),
    Dot__3 = document.querySelector('.slide__dot__3rd')
slide__dot__text__1 = document.querySelector('.slide__dot__text__1st'),
    slide__dot__text__2 = document.querySelector('.slide__dot__text__2nd'),
    slide__dot__text__3 = document.querySelector('.slide__dot__text__3rd'),
    slides = document.querySelectorAll('.slide__background')

var MovePer = slideWidth,
    index = 1,
    Move = 0,
    NextBtn = document.querySelector('.slides__button__next'),
    PrevBtn = document.querySelector('.slides__button__prev')
// AutoSldier()
DotClickSliderHandle()
NextBtn.addEventListener('click', function () {
    SlideHanle(1)
})
PrevBtn.addEventListener('click', function () {
    SlideHanle(-1)
})
// ================================= Hàm xử lí Slider khi với Btns =================================
function SlideHanle(direction) {
    if (direction == 1) {
        if (index == 3) { // Khi slide tới index cuối thì clone slide 1 rồi thêm vào sau
            index = 0
        }
        Move = index * MovePer
        SlideWrapper.style = `transform: translateX(${-Move}px)`
        index++
        DotEffectHandle()
    }
    else if (direction == -1) {

        if (index == 1) {
            SlideWrapper.style = `transform: translateX(${-MovePer * 2}px)`
            index = 3
            Move = MovePer * 2;
        }
        else {
            Move = Move - MovePer
            SlideWrapper.style = `transform: translateX(${-Move}px)`
            index--
        }
        DotEffectHandle()
    }
}
// ================================= Hàm xử lí hiệu ứng Dots khi chuyển Slide =================================
function DotEffectHandle() {
    document.querySelector('.slide__dot__text.slide__dot__text__active').classList.remove('slide__dot__text__active')
    document.querySelector('.slide__dot.slide__dot__active').classList.remove('slide__dot__active')
    switch (index) {
        case 1:
            Dot__1.classList.add('slide__dot__active')
            slide__dot__text__1.classList.add('slide__dot__text__active')
            break
        case 2:
            Dot__2.classList.add('slide__dot__active')
            slide__dot__text__2.classList.add('slide__dot__text__active')
            break
        case 3:
            Dot__3.classList.add('slide__dot__active')
            slide__dot__text__3.classList.add('slide__dot__text__active')
            break
    }
}
// ================================= Hàm xử lí Slider khi với Dots =================================
function DotClickSliderHandle() {
    slide__dot__text__1.addEventListener('click', function () {
        SlideWrapper.style = `transform: translateX(${0}px)`
        index = 1
        DotEffectHandle()
    })
    slide__dot__text__2.addEventListener('click', function () {
        SlideWrapper.style = `transform: translateX(${-MovePer}px)`
        index = 2
        DotEffectHandle()
    })
    slide__dot__text__3.addEventListener('click', function () {
        SlideWrapper.style = `transform: translateX(${-MovePer * 2}px)`
        index = 3
        DotEffectHandle()
    })
}
// ================================= Hàm xử lí Slider Auto =================================
var randomNumber
function AutoSldier() {
    setInterval(function () {
        randomNumber = Math.ceil(Math.random() * 3)
        switch (randomNumber) {
            case 1:
                SlideWrapper.style = `transform: translateX(${0}px)`
                index = 1
                DotEffectHandle()
                break
            case 2:
                SlideWrapper.style = `transform: translateX(${-MovePer}px)`
                index = 2
                DotEffectHandle()
                break
            case 3:
                SlideWrapper.style = `transform: translateX(${-MovePer * 2}px)`
                index = 3
                DotEffectHandle()
                break
        }
    }, 5000)
}





// ================================= Hàm xử lí Slide 2nd =================================
var SecondSlides = document.querySelector('.second__slides'),
    SecondSlidesWrapper = document.querySelector('.second__slides__wrapper'),
    SecondSlideBtnNext = document.querySelector('.second__slides__btn__next'),
    SecondSlideBtnPrev = document.querySelector('.second__slides__btn__prev'),
    SecondSlide = document.querySelector('.second__slide')

var SecondMovePer = SecondSlide.offsetWidth,
    Secondindex = 1,
    SecondMove = 0


SecondSlideBtnNext.addEventListener('click', function () {
    SecondSlideHanle(1)
    console.log('Secondindex:', Secondindex)
})
SecondSlideBtnPrev.addEventListener('click', function () {
    SecondSlideHanle(-1)
    console.log('Secondindex:', Secondindex)
})
SecondAutoSldier()
// ================================= Hàm xử lí Slider khi với Btns =================================
function SecondSlideHanle(number) {
    if (number == 1) {
        if (Secondindex == 3) {
            Secondindex = 0
        }
        SecondMove = Secondindex * SecondMovePer
        SecondSlidesWrapper.style = `transform: translateX(${-SecondMove}px)`
        Secondindex++
        DotEffectHandle()
    }
    else if (number == -1) {

        if (Secondindex == 1) {
            SecondSlidesWrapper.style = `transform: translateX(${-SecondMovePer * 2}px)`
            Secondindex = 3
            SecondMove = SecondMovePer * 2;
        }
        else {
            SecondMove = SecondMove - SecondMovePer
            SecondSlidesWrapper.style = `transform: translateX(${-SecondMove}px)`
            Secondindex--
        }
        DotEffectHandle()
    }
}
// ================================= Hàm xử lí Slider Auto =================================
var SecondrandomNumber
function SecondAutoSldier() {
    setInterval(function () {
        SecondrandomNumber = Math.ceil(Math.random() * 3)
        switch (SecondrandomNumber) {
            case 1:
                SecondSlidesWrapper.style = `transform: translateX(${0}px)`
                Secondindex = 1
                DotEffectHandle()
                break
            case 2:
                SecondSlidesWrapper.style = `transform: translateX(${-SecondMovePer}px)`
                Secondindex = 2
                DotEffectHandle()
                break
            case 3:
                SecondSlidesWrapper.style = `transform: translateX(${-SecondMovePer * 2}px)`
                Secondindex = 3
                DotEffectHandle()
                break
        }
    }, 5000)
}



// ================================= Xử lí Header onscroll =================================
var header = document.querySelector('.header__main__background')
var headerHeight = document.querySelector('.header__main__height')
window.addEventListener('scroll', function () {
    var a = window.scrollY
    var ScrollUnit = Math.floor(a)
    HeaderOnScrollHanlder(ScrollUnit)
})


function HeaderOnScrollHanlder(ScrollUnit) {
    if (ScrollUnit > 640) {
        header.classList.add('header__onscroll')
        headerHeight.style = `display: block;`
    }
    else {
        header.classList.remove('header__onscroll')
        headerHeight.style = `display: none;`
    }
}

// ================================= Xử lí Menu click tablet and mobile =================================
var menuBtn = document.querySelector('.tablet__header__menu'),
    MenuList = document.querySelector('.tablet__header__main__menu__list'),
    MenuItem = document.querySelectorAll('.tablet__header__main__menu__item'),
    MenuIcon = document.querySelectorAll('.tablet__header__main__menu__item i'),
    SubMenuIcon = document.querySelectorAll('.tablet__header__main__submenu__item i'),
    SubmenuList = document.querySelectorAll('.tablet__header__main__submenu__list'),
    SecondSubmenuList = document.querySelectorAll('.tablet__header__main__second__submenu__list'),
    SecondMenuItem = document.querySelectorAll('.tablet__header__main__submenu__item')

menuBtn.addEventListener('click', function () {
    console.log('2')
    MenuList.classList.toggle('menu--active')
})
MenuItem.forEach(function (item, index) {
    item.addEventListener('click', function () {
        console.log('index: ', index)
        SubmenuList[index].classList.toggle('menu--active')
        MenuIcon[index].classList.toggle('menu__icon--active')
    })
})
SecondMenuItem.forEach(function (item, index) {
    item.addEventListener('click', function () {
        SecondSubmenuList[index].classList.toggle('menu--active')
        SubMenuIcon[index].classList.toggle('menu__icon--active')
    })
})

// ================================= Xử lí Search Btn =================================
var TabletSearchBtn = document.querySelector('.search__button')
var TabletInput = document.querySelector('.tablet__header__main__right__input')

TabletSearchBtn.addEventListener('click', function () {
    console.log('2')
    TabletInput.classList.toggle('tablet__input--active')
})

var CookieWrapper = document.querySelector('.catapult__cookie__bar')
var CookieBtn = document.querySelector('.cookie__button')

CookieBtn.onclick = function () {
    CookieWrapper.style = `display: none;`
}