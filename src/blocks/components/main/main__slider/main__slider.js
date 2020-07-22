
/* nee to use vendor - tiny-slider.js */

if(document.getElementsByClassName("main-slider__block") !== null)
{
        var slider = tns({
            container: '.main-slider__block',
            items: 1,
            nav: true,
            navPosition: 'bottom',
            controls: false,
            gutter: 0,
            loop: true,
            responsive: {
                750: {
                    controls: true,
                },
            }
        });
    }
