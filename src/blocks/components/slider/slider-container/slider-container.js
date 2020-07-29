
/* card slider */

var swiper = new Swiper('.slider-cards__swiper', {
    slidesPerView: 6,
    spaceBetween: 16,
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    breakpoints: {
        320:{
            slidesPerView: 1,
            spaceBetween: 0,
        },
        750:{
            slidesPerView: 2,
            spaceBetween: 8,
        },
        769:{
            slidesPerView: 3,
            spaceBetween: 8,
        },
        1024:{
            slidesPerView: 4,
            spaceBetween: 16,
        },
        1200:{
        },
        1420:{
            slidesPerView: 6,
        },
    }
});

/* discover slider */

var swiper2 = new Swiper('.main-discover__slider_swiper', {
    slidesPerView: 6,
    spaceBetween: 16,
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    breakpoints: {
        320:{
            slidesPerView: 2,
            spaceBetween: 16,
        },
        750:{
            slidesPerView: 3,
        },
        1024:{
            slidesPerView: 6,
        },
        1420:{
            slidesPerView: 6,
        },
    }
});

/* slider on preview */

var swiper3 = new Swiper('.hidden-slider-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
});

