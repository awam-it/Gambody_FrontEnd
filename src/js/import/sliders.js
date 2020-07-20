/* sliders.js */

/* index */

/* two rows */

$(document).ready(function() {

    /* slider */
    if ($(".main-slider__block")[0]){
        var slider = tns({
            container: '.main-slider__block',
            items:1,
            nav: true,
            navPosition: 'bottom',
            controls: false,
            gutter:0,
            loop:true,
            responsive:{
                750:{
                    controls: true,
                },
            }
        });
    }

    /* two rows */
    if ($(".slider-two-rows")[0]){
    var slider = tns({
        container: '.slider-two-rows',
        items:3,
        nav: true,
        navPosition: 'bottom',
        controls: true,
        gutter:0,
        loop:false,
        rewind: true,
        responsive:{
            320:{
                items:2,
                controls:false,
            },
            750:{
                items:2
            },
            1024:{
                items:2,
                controls: true,
            },
            1420:{
                items:3
            }
        }
    });
    }

 /* Discover Gambody */
    if ($(".main-discover__slider")[0]){
    var slider = tns({
        container: '.main-discover__slider',
        items:6,
        nav: false,
        navPosition: 'bottom',
        controls: true,
        gutter:16,
        loop:false,
        rewind: true,
        responsive: {
            320: {
                items: 2,
                gutter:10,
            },
            750: {
                items: 3
            },
            769: {
                items: 3
            },
            1024: {
                items: 6
            },
            1420: {
                items: 6
            }
        }
    });
    }
/* Trending */
        if ($(".slider-cards__slider")[0]){
const tnsCarousel = document.querySelectorAll('.slider-cards__slider');
tnsCarousel.forEach(slider => {
        const tnsSlider = tns({
            container: slider,
            items:6,
            nav: false,
            navPosition: 'bottom',
            controls: true,
            gutter:16,
            onInit: true,
            loop:false,
            responsive:{
                320:{
                    items:1,
                    loop:false,
                    controls: false,
                    nav: true,
                    edgePadding: 0,
                    swipeAngle: 8,
                    gutter:8,
                    mouseDrag: true,
                    slideBy: "page",
                },
                375: {
                    edgePadding: 16,
                },
                400: {
                    edgePadding: 20,
                },
                500: {
                    edgePadding: 70,
                },
                750:{
                    items:2,
                    edgePadding: 0,
                },
                769:{
                    items:3,
                },
                1024:{
                    items:4,
                    loop:false,
                    edgePadding: 0,
                    swipeAngle: true,
                    gutter:16,
                },
                1200:{
                    items:4,
                    loop:true,
                    nav: false,
                    controls: true,
                    mouseDrag: false,
                    touch: false,
                },
                1420:{
                    items:6,
                },
                1540:{


                },
            }
        });
});

        }

/* cards */
/* Line layout */
if ($(".slider-cards__slider-new")[0]){
var slider = tns({
    container: '.slider-cards__slider-new',
    items:6,
    nav: false,
    navPosition: 'bottom',
    controls: true,
    gutter:16,
    loop:false,
    rewind: true,
    responsive:{
        320:{
            items:1,
            loop:false,
            controls: false,
            nav: true,
            edgePadding: 0,
            swipeAngle: 8,
            gutter:8,
        },
        375: {
            edgePadding: 16,
        },
        400: {
            edgePadding: 20,
        },
        500: {
            edgePadding: 70,
        },
        750:{
            items:2,
            edgePadding: 0,
        },
        769:{
            items:3,
        },
        1024:{
            items:4,
            loop:false,
            edgePadding: 0,
            swipeAngle: true,
            gutter:16,
        },
        1200:{
            items:4,
            loop:true,
            nav: false,
            controls: true,
            mouseDrag: false,
            touch: false,
        },
        1420:{
            items:6,
        },
        1540:{

        },
    }
});
}
    /* Categories tranding */
    if ($(".trending-slider")[0]){
        var slider = tns({
            container: '.trending-slider',
            items:1,
            nav: true,
            navPosition: 'bottom',
            controls: false,
            gutter:0,
            loop:true,
            responsive:{
                750:{

                },
            }
        });
    }

    /* Promo */
    if ($(".categories-promo")[0]){
        const tnsCarousel = document.querySelectorAll('.categories-promo');
        tnsCarousel.forEach(slider => {
            const tnsSlider = tns({
                container: slider,
                items:4,
                navPosition: 'bottom',
                gutter:16,
                onInit: true,
                loop:false,
                controls: false,
                nav: true,
                responsive:{
                    320:{
                        items:1,
                        loop:false,
                    },
                    750:{
                        items:3,
                        loop:false,
                    },
                    1024:{
                        items:4,
                        loop:true,
                    },
                    1200:{
                        items:4,
                    },
                    1420:{
                        items:6,
                    },
                    1540:{

                    },
                }
            });
        });
    }



});
