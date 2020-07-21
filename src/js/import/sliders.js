/* sliders.js */

/* index */

/* two rows */

$(document).ready(function() {

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
