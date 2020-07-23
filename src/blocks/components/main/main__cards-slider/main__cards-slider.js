
/* nee to use vendor - tiny-slider.js */

var element_found = document.getElementsByClassName("slider-cards__slider").length;
if(element_found != '0')
{
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
                    gutter:0,
                    mouseDrag: true,
                    slideBy: "page",
                },
                375: {
                    edgePadding: 16,
                    gutter:8,
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


/* difference in settings slider-cards__slider-new has "rewind: true," */

var element_found = document.getElementsByClassName("slider-cards__slider-new").length;
if(element_found != '0')
{
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
                gutter:0,
            },
            375: {
                edgePadding: 16,
                gutter:8,
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