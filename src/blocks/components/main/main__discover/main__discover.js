
/* nee to use vendor - tiny-slider.js */
var element_found = document.getElementsByClassName("main-discover__slider").length;
if(element_found != '0')
{
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
