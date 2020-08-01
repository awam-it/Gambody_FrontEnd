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
});