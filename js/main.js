'use strict';
// ハンバーガーメニュー
{
    const nav = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

// Swiper
{
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 80,
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            601: {
                slidesPerView: 2.5,
            }
        }
    });
}

// トップページに戻るボタン
{
    const gotop = document.querySelector('.gotop');
    window.addEventListener('scroll', () => {
        let scroll_Y = window.scrollY;
        if(scroll_Y > 150) {
            gotop.classList.add('active');
        }
        else {
            gotop.classList.remove('active');
        }
    });
}