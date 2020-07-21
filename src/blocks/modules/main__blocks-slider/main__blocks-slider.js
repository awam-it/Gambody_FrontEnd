
/* nee to use vendor - tiny-slider.js */

if(document.getElementsByClassName("main-slider__block") !== null)
{
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
