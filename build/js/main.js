"use strict";

//*** Открытие нивигации на бургере и скрытие меню***

document.querySelector('.js-btn').onclick = function () {
    document.querySelector('.js-btn').classList.toggle('is-active');
    document.querySelector('.js-drop').classList.toggle('is-open');
};

//*** Аккордеон на навигации footer-nav***//

let navTitle = document.getElementsByClassName('js-nav-title');

for (let i = 0; i < navTitle.length; i++) {
    navTitle[i].addEventListener('click', function() {
        if (!(this.classList.contains('is-active'))) {
            for(let i = 0; i < navTitle.length; i++) {
                navTitle[i].classList.remove('is-active');
            }
            this.classList.add('is-active');
        } else if (this.classList.contains('is-active')){
          this.classList.remove('is-active');
        }
    })
}

//*** Настройка слайдера ***//

let swiper = new Swiper('.swiper-container', {
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.promo-slider__btn--prev',
        prevEl: '.promo-slider__btn--next'
    },
    breakpoints: {
        521: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1021: {
          slidesPerView: 4,
        },
    }
});

//*** анимация появления формы при скролле ***//

window.addEventListener('scroll', function(){
  let formObserver = document.querySelector('.js-form-observer');
  let posTop = formObserver.getBoundingClientRect().top;
  let cliHeight = document.documentElement.clientHeight;
  let check = cliHeight * 0.75;

  if (check >= posTop) {
    formObserver.classList.add('is-active');
  }
})

